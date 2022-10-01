---
title: scutracing_driverless_2021学习笔记
date: 2022-05-28 12:03:46
category: 车队
tags: 
    - fssim
index_img: ../image/SCUTRacing/SCUTRacing_A08.jpg
banner_img: ../image/SCUTRacing/SCUTRacing_A08.jpg
top_img: ../image/SCUTRacing/SCUTRacing_A08.jpg
cover: ../image/SCUTRacing/SCUTRacing_A08.jpg
mathjax: true
password: Scutracing
abstract: Scutracing_driverless_2021学习笔记
message: 请输入密码
---



# Scutracing_driverless_2021学习笔记

项目地址：https://gitlab.com/meTroyChan/scutaracing_driverless_2021

## 控制部分

### 文件笔记

#### main.cpp

主要作用：创建`controller`节点，`controllerHandle.run()`

定义ros节点`controller`,创建ros句柄，并用于`Controllerandle`类对象`controllerHandle`的初始化，用`controllerHandle`的`node_rate_`成员变量设置`ros::Rate`

进入while循环，一直`controllerHandle.run()`   详见[controller_handle.cpp](#controller_handle.cpp)  

    

#### controller_handle.cpp

主要作用：创造了`ns_controller`命名空间下的`ControllerHandle`类，主要面向外部和controller

构造函数：加载参数（加载话题名称，主要是接收的其他部分的还有发布到其他部分的）,订阅话题（主要订阅其他部分的话题发布的用于控制的数据）,创建发布话题

`ControllerHandle::run()`：执行`controller_.runAlgorithm();`详见[controller.cpp](#controller.cpp) ， 发布控制命令

其他回调函数：将订阅到参数传给`controller_`



#### controller.cpp

主要作用：创造了`ns_controller`命名空间下的`Controller`类，主要面向具体控制算法

构造函数：加载参数（加载控制算法需要的参数），初始化（将加载的参数传给控制算法_controller）

setXxx函数：设置参数

`Controller::runAlgorithm()`：根据订阅到的`run_mode_`选择对应的任务，再传特定参数`switch_cases()`

`Controller::createControlCommand()`：创建要发布的数据，只更改delta_和speed_

`Controller::switch_cases()`：根据任务需要和传入的参数得到delta_和speed_

直线加速任务`switch_cases()`

`Controller::createPreDist()`：预测下一时刻的车辆状态，得到下一时刻需要移动的距离(相对与下一时刻的最近轨迹点)`pre_dist`和`lateral_error_limit`(还不知道干啥的)

`Controller::geometric_road_constraints()`：根据预测的下一时刻车辆需移动的距离来调整角度

#### pure_pursuit_controller.cpp

主要作用：利用纯跟踪算法得到转角值

`Controller`初始化传递的参数有`path_resolution_ `,`lidar2rearwheel_`,`imu2rearwheel_`,`steering_change_rate_limit_`,`steering_limit_`,`wheel_base_`

利用visualization_msgs::MarkerArray在rviz中的指定位置显示信息并实时更新

[pure_pursuit算法](#pure_pursuit算法)

#### pure_pursuit_front_axis_controller.cpp

和[pure_pursuit_controller.cpp](#pure_pursuit_controller.cpp)的不同在于着眼于前轴

注意`look_ahead_d`,`alpha_`和`delta_`计算过程的不同

#### stanley_controller.cpp

`Controller`初始化传递的参数有`path_resolution_ `,`lidar2rearwheel_`,`imu2rearwheel_`,`steering_change_rate_limit_`,`steering_limit_`,`wheel_base_`

`local_trajectory_.poses[i].pose.orientation.z`是轨迹线的切线角(偏航角)
`local_trajectory_.poses[i].pose.orientation.w`
是轨迹线的曲率

[stanley算法](#stanley算法)

#### lqr_controller.cpp

matrix_state_(0, 0);//自车坐标系下的横向偏差
matrix_state_(1, 0);//世界坐标系横向偏差变化率
matrix_state_(2, 0);//自车与期望轨迹的角度偏差
matrix_state_(3, 0);//自车与期望轨迹的角度变化率的偏差 

等等，这个系数矩阵，是用，力，质量这些算的！？！

[lqr算法](#lqr算法)



### 算法笔记

#### pure_pursuit算法

![单车几何模型](../image/SCUTRacing/scutaracing_driverless_2021_img/单车几何模型.png)
单车几何模型$\delta=arctan(L/R​)$
其中，$ \delta$(`delta_`) 为前轮转角， L为轴距(`wheel_base` )， R为给定转向角运动时，无人车形成的轨迹圆的半径。

![纯跟踪几何关系](../image/SCUTRacing/scutaracing_driverless_2021_img/纯跟踪几何关系.png)
纯跟踪几何关系 $sin\alpha=\frac{l_d}{2R}\Rightarrow R=\frac{l_d}{2sin\alpha}\Rightarrow \delta=arctan(\frac{2Lsin\alpha}{l_d})$，其中， $\alpha$ (`alpha_ `)为路点与车后轴连成的向量的角度与车航向角的差值；$ l_d$​(`look_ahead_d`)为车后轴离路点的距离，又被称为前视距离。

$sin\alpha=\frac{e_y}{l_d}\Rightarrow \delta=arctan(\frac{2Le_y}{l_d^2})$，其中，$e_y$是横向误差(车队代码求$\alpha$和$l_d$使用的是横向误差和纵向误差)

前视距离也可以表示成无人车纵向线速度的形式，即 $l_d = \lambda v_x + c $, c为一常值


#### stanley算法

![Stanley几何关系](../image/SCUTRacing/scutaracing_driverless_2021_img/Stanley几何关系.jpg)

根据车辆位姿与给定路径的相对几何关系可以直观的获得控制车辆方向盘转角的控制变量，其中包含横向偏差e和航向偏差$\theta_e$,写为$\delta(t)=\delta_e(t)+\delta_{\theta_e}(t)$

在不考虑横向跟踪误差的情况下，前轮偏角和给定路径切线方向一致,其中$\theta_e$表示车辆航向与最近路径点切线方向之间的夹角，在没有任何横向误差的情况下，前轮方向与所在路径点的方向相同：$\delta_{\theta_e}(t)=\theta_e(t)$

在不考虑航向跟踪偏差的情况下，横向跟踪误差越大，前轮转向角越大，假设车辆预期轨迹在距离前轮$d(t)$处与给定路径上最近点切线相交，根据几何关系得出如下非线性比例函数：$\delta_e(t)=arctan\frac{e(t)}{d(t)}=arctan\frac{ke(t)}{v(t)}$

综合两方面控制因素，基本转向角控制率如下：$\delta(t)=\theta_e(t)+arctan\frac{ke(t)}{v(t)}$

#### lqr算法

自车状态矩阵$x = [e, d_e, th_e, d_{th_e}, \delta_v]$   
$e$:$e$是自车到轨迹的距离 
$d_e$:$d_e$是自车到轨迹的距离的变化率 
$th_e$:$th_e$是自车与期望轨迹的角度偏差 
$d_{th_e}$:$d_{th_e}$是自车与期望轨迹的角度变化率的偏差 
$\delta_v$:$\delta_v$是当前车速与期望车速的偏差 

输入矩阵$u = [\delta, \alpha]$ 
$\delta$: 前轮转角 
$\alpha$: 自车加速度 

系统方程 $x(k+1)=Ax(k)+Bu(k)$

性能指标$J(u)=\sum_{n=1}^{\infty}{(x^T(n)Qx(n)+u^T(n)Ru(n))}$

离散时间黎卡提方程
$$
迭代：P=A^TPA-A^TPB(R+B^TPB)^{-1}B^TPA+Q\\
K=(R+B^TPB)^{-1}B^TPA \\
u(n)=-Kx(n)
$$

实现思路：利用当前车辆的状态矩阵，经过离散时间黎卡提方程求出需要的输入矩阵。  
在实现细节上，Q可以初始化为5x5的单位矩阵，R可以初始化为2x2的单位矩阵，可以将P初始化为Q,再迭代到P基本无变化

#### MPC算法

##### 运动学模型

![](../image/SCUTRacing/scutaracing_driverless_2021_img/运动学模型.png)

$$
状态
\xi=
\left[
\begin{matrix}
X\\
Y\\
\varphi\\
\end{matrix}
\right]
\\
控制
u=
\left[
\begin{matrix}
V_r\\
\delta_f\\
\end{matrix}
\right]
\\
变换关系
\begin{cases}
\overset{.}{X}=V_rcos\varphi \\
\overset{.}{Y}=V_rsin\varphi \\
\overset{.}{\varphi}=\frac{V_rtan\delta_f}{l} \\
\end{cases}
$$

##### 线性化

$$
令\overset{.}{\xi}=f(\xi,u) \\
近似为\overset{.}{\xi}=f(\xi_r,u_r)+\frac{df}{d\xi}(\xi-\xi_r)+\frac{df}{du}(u-u_r) \\
取\overset{\sim}{\xi}=\xi-\xi_r=
\left[
\begin{matrix}
X-X_r\\
Y-Y_r\\
\varphi-\varphi_r\\
\end{matrix}
\right],
\overset{\sim}{u}
=u-u_r(一般取0)=
\left[
\begin{matrix}
V_r\\
\delta_f\\
\end{matrix}
\right]
\\
\overset{.}{\overset{\sim}{\xi}}=\overset{.}{\xi}-\overset{.}{\xi_r}=\frac{df}{d\xi}(\xi-\xi_r)+\frac{df}{du}(u-u_r)
\\
即\overset{.}{\overset{\sim}{\xi}}=A\overset{\sim}{\xi}+B\overset{\sim}{u} \\
A=\frac{df}{d\xi}=\left[\begin{matrix}
0&0&-V_rsin\varphi_r \\
0&0&V_rcos\varphi_r \\
0&0&0 \\
\end{matrix}
\right],
B=\frac{df}{d\xi}=\left[\begin{matrix}
cos\varphi_r&0 \\
sin\varphi_r&0 \\
\frac{tan\delta_f}{l}&\frac{V_r}{lcos^2\delta_f} \\
\end{matrix}
\right]
$$

##### 离散化

$$
\overset{.}{\overset{\sim}{\xi}}=\frac{\overset{\sim}{\xi}(k+1)-\overset{\sim}{\xi}(k)}{T}=A\overset{\sim}{\xi}(k)+B\overset{\sim}{u}(k) \\
\overset{\sim}{\xi}(k+1)=(I+YA)\overset{\sim}{\xi}(k)+(TB)\overset{\sim}{u}(k)=\overset{\sim}{A}\overset{\sim}{\xi}(k)+\overset{\sim}{B}\overset{\sim}{u}(k)\\
\overset{\sim}{A}=\left[\begin{matrix}
1&0&-TV_rsin\varphi_r \\
0&1&TV_rcos\varphi_r \\
0&0&1 \\
\end{matrix}\right],
\overset{\sim}{B}=\left[\begin{matrix}
Tcos\varphi_r&0 \\
Tsin\varphi_r&0 \\
\frac{Ttan\delta_f}{l}&\frac{TV_r}{lcos^2\delta_f}
\end{matrix}\right]
$$

##### 预测

$$
\begin{cases}
\overset{\sim}{\xi}(k+1)=\overset{\sim}{A}\overset{\sim}{\xi}(k)+\overset{\sim}{B}\overset{\sim}{u}(k) \\
\overset{\sim}{\xi}(k+2)=\overset{\sim}{A^2}\overset{\sim}{\xi}(k)+\overset{\sim}{AB}\overset{\sim}{u}(k)+\overset{\sim}{B}\overset{\sim}{u}(k+1) \\
...... \\
\overset{\sim}{\xi}(k+N_p)=\overset{\sim}{A^{N_p-1}}\overset{\sim}{\xi}(k)+\overset{\sim}{A^{N_p-2}B}\overset{\sim}{u}(k)+...+\overset{\sim}{A^{N_p-N_c-1}B}\overset{\sim}{u}(k+1)
\end{cases}\\
预测时域N_p,控制时域N_c。N_c\leq N_p-1 \\
写为矩阵形式Y=\Psi\xi(k)+\theta U(k)
$$

##### 控制律

$$
Y=\Psi\xi(k)+\theta U(k) \\
E=\Psi\xi(k)-\Psi\xi_r=\Psi\xi(k)-Y_{ref} \\
Y-Y_{ref}=E+\theta U \\
\begin{aligned}
代价函数J&=(Y-Y_{ref})^TQ(Y-Y_{ref})+U^TRU \\
&=E^TQE(与U无关,常数,不管)+(\theta U)^TQ(\theta U)+2E^TQ(\theta U)+U^TRU\\
&=U^T\theta^TQ\theta U+2E^TQ\theta U+U^TRU \\
&=U^T(\theta^TQ\theta+R)U+2E^TQ\theta U \\
&=\frac{1}{2}U^THU+f^TU
\end{aligned}
$$




#### Ribbon算法

##### 运动学模型

后轮到预瞄点
$$
\frac{l_d}{sin2\theta}=\frac{R}{sin(\pi/2-\theta)}\\
\frac{l_d}{2sin\theta}=R
$$

前轮到预瞄点
$$
\frac{l_d'}{sin[2(\theta'-\delta)]}=\frac{R'}{cos(\theta'-\delta)}\\
\frac{1}{R'}=\frac{2}{l_d'}(sin\theta'cos\delta-cos\theta'
sin\delta)
\\
cos\delta=\frac{R}{R'},sin\delta=\frac{L}{R'}
\\
R=\frac{l_d'/2+Lcos\theta'}{sin\theta'}
$$

##### Ribbon算法核心思想
根据路径上前一段的左右边界得到一个转角范围，再根据更远的一段路径得到另一个转角范围，和上一个取交集，再重复此操作直到无法取交集


### 疑问


[stanley_controller.cpp](#stanley_controller.cpp)中局部路径下面这部分是怎么求lateral error angle的,看上去是想在stanley的基础上考虑车身长度
```c++

    //1.calculate lateral error angle
    lateral_error_angle_ = steering_p_local_ * atan2(2 * wheel_base_ * std::sin(alpha), (length + 2 * wheel_base_ * std::cos(alpha)));

```

[controller.cpp](#controller.cpp)中`Controller::createPreDist()`返回的`lateral_error_limit`是什么，计算这个变量的过程也看不懂，还有这个函数中`theta2`的计算


### TIPS

`std::hypot()`返回两点欧式距离
`std::atan(y/x)`返回第一和第四象限的反正切
`std::atan2(y,x)`返回四象限的反正切
`ceil(x)`返回大于等于x的最小整数
ControlCommand.msg:
```c++
std_msgs/Header header

std_msgs/Float32 throttle        # Throttle value between [-1, 1]
std_msgs/Float32 steering_angle  # Steering angle value between [-1, 1], where left < 0, right > 0
```

### Reference linking

轨迹消息格式：http://docs.ros.org/en/api/nav_msgs/html/msg/Path.html
Pure_pursuit算法：https://blog.csdn.net/u013468614/article/details/103502743
Stanley算法：https://blog.csdn.net/renyushuai900/article/details/98460758
`visualization_msgs::Marker`格式：http://wiki.ros.org/rviz/DisplayTypes/Marker
LQR算法：https://blog.csdn.net/nn243823163/article/details/124456694
MPC算法：https://www.bilibili.com/video/BV1HQ4y1P7bJ





## CAN线部分

### 接收部分

节点名：`CANBus_receive`
发布话题名：
* 组合惯导:`asensing_data`
* res以及ami数据:`res_and_ami_data`
* 电机编码器:`steering_motor_receive_data`
* 转向传感器:`steering_sensor_receive_data`
* 四轮转速和主控差速算法给到驱动电机控制器的车速命令数值:`wheel_and_motor_data`
* ECU输出到转向电机的转角数值:`steering_ecu_command_receive_data`

CAN ID：
* 组合惯导:`0X500`
* res以及ami数据:`0X205`
* 电机编码器:`0x01`
* 转向传感器:`0X205`
* 四轮转速和主控差速算法给到驱动电机控制器的车速命令数值:`OX35A`
* ECU输出到转向电机的转角数值:`0X35`

### 发送部分

节点名：`CANBus_send`
接受话题名：
* 控制命令:`/control/pure_pursuit/control_command`
* 手柄控制命令:`/control/pure_pursuit/control_command/ps5`
* 信号标志:`asState`

CAN ID：`305#`
发送数据：`inputData`
具体变量：
* `steering_angle_low`:方向盘转角二进制高八位
* `steering_angle_mid`:方向盘转角二进制中间八位
* `steering_angle_high`:方向盘转角二进制低八位
* `throttle_low`:车速
* `ready`:准备标志
* `sensorState`:传感器状态
* `finished`:完成标志

## estimation部分

比较重要的变量
```c++
fsd_common_msgs::CarState state;//质心处状态
fsd_common_msgs::CarState front_axis_center_state;//前轴中心处状态
fsd_common_msgs::CarState rear_axis_center_state;//后轴中心处状态
nav_msgs::Path state_path;//质心处轨迹
nav_msgs::Path front_axis_center_state_path;//前轴中心处轨迹
nav_msgs::Path rear_axis_center_state_path;//后轴中心处轨迹

double wheel_base; //[m]，车身长度
double lr; //[m]，质心到后轴中心点的距离
const int filter_n; //10，用于平滑偏航率的过滤器长度

geometry_msgs::PoseStamped pose;//轨迹点

double vn;//[m/s],应该是世界坐标系下的x方向的速度
double ve;//[m/s],应该是世界坐标系下的y方向的速度
double Vx;//[m/s],车辆前进方向速度
double Vy;//[m/s],车辆侧向方向速度
double yaw_rate;//[rad/s],车辆偏航角
```
节点名：`estimation_asensing`
订阅话题名：`asensing_data`
发布话题名：
* state:`/estimation/slam/state`
* front_axis_center_state:`/estimation/slam/front_axis_center_state`
* rear_axis_center_state:`/estimation/slam/rear_axis_center_state`
* state_path:`/state_path`
* front_axis_center_state_path:`/front_axis_center_state_path`
* rear_axis_center_state_path:`/rear_axis_center_state_path`


### Reference linking

`geometry_msgs::PoseStamped`格式：http://docs.ros.org/en/api/geometry_msgs/html/msg/PoseStamped.html
`nav_msgs::Path`格式：http://docs.ros.org/en/api/nav_msgs/html/msg/Path.html




## Perception部分

### lidar
节点名：`sub`
订阅话题名：
* 雷达视锥:`/lidar/cones`
* 车辆状态(形心):`/estimation/slam/state`


重要变量：
* `pcl::PointCloud<pcl::PointXYZI>::Ptr curCloud_`
* `message_filters::Subscriber`大概用来时间同步？

### Reference linking
`sensor_msgs`格式：
http://docs.ros.org/en/api/sensor_msgs/html/namespacesensor__msgs.html
http://wiki.ros.org/sensor_msgs
`std_msgs/Header`：
http://docs.ros.org/en/api/std_msgs/html/msg/Header.html
各种ros消息格式：
http://docs.ros.org/en/api/




## Decision_and_Asstate部分

* `run()`
  * `runAlgorithm()`
    *  `runDecision()`
        根据mission创建线程打开脚本，赋值`Asstate_.mission`,`Asstate_.shichLap`,`Asstate_.end`,`Asstate_.finished`
    *  `runAsState()`
        判断传感器状态，赋值`Asstate_.cameraState`,`Asstate_.lidarState`,`Asstate_.insState_`,`Asstate_.ready`,`AsState_.sensorState`,`AsState_.header.stamp`
  *  `sendDecisionAndAsState()`：发布`AsState_`到`as_state_topic_name_`
  *  `sendComputeTime()`：计算并发布总时间到`compute_time_topic_name_`
  

###  TIPS

`void *`为不确定类型指针，不可以解引用。可以接受任何类型的赋值，无需强制转换。也可以赋值给任何类型的变量，需要强制转换
`pthread_create()`线程创建函数


读的还没师兄更的快:sob: