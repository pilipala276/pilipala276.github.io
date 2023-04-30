---
title: Altium Designer PCB设计全套零基础入门教学27节
date: 2023-04-19 15:18:32
category: Read
tags: 
    - 信号/电源完整性
    - Altium Designer
index_img: ../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Altium-Designer-PCB设计全套零基础入门教学27节.png  
banner_img: ../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Altium-Designer-PCB设计全套零基础入门教学27节.png
top_img: ../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Altium-Designer-PCB设计全套零基础入门教学27节.png 
cover: ../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Altium-Designer-PCB设计全套零基础入门教学27节.png 
---

# Altium Designer PCB设计全套零基础入门教学27节

[Altium Designer PCB设计全套零基础入门教学27节|AD20教程|设计思路|元器件库创建管理|电源完整性|信号仿真信号完整性|直播回放_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1D7411T7Pr/)

虽然画过几次板子，但是可能连入门水平都没有，主要想看看高速PCB的设计，尤其是信号完整性与电源完整性这部分，

PCB设计标准IPC-2221

## P1 新手们怎么学习PCB设计-李崇伟

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled.png)

## P2 元器件库的创建-杨晓晨

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%201.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%202.png)

- 手动创建元件库
    
    ID，位号，重要参数，描述，类型（）
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%203.png)
    
    管脚封装，参数，链接（数据手册等），
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%204.png)
    
    批量管理管脚：选择管脚后在panels打开SCHLIB List，可以复制粘贴到excle操作也可以从excel导入
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%205.png)
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%206.png)
    
- 使用Symbol Wizard创建元件库
    
    Tools中的Symbol Wizard能够帮你自动完成元件库的创建
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%207.png)
    
    选择管脚布局样式
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%208.png)
    
    管脚数量
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%209.png)
    
    管脚参数，也支持从excel的智能粘贴
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2010.png)
    
    放置模型
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2011.png)
    
- 手动创建PCB封装
    
    网格设置
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2012.png)
    
    选择mm/mil
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2013.png)
    
    画封装
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2014.png)
    
    导入3D模型后的用Align Face With Board定向，再用Add Snap Points From Vertices添加定位点，添加定位点时有两种模式，一种是添加顶点，一种是选择两顶点的中点，可以用空格在这种种模式间切换
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2015.png)
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2016.png)
    
- 使用IPC Compliant Footprint Wizard创建PCB封装
    
    Tools中的IPC Compliant Footprint Wizard能够自动完成PCB封装的创建
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2017.png)
    
    选择封装类型
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2018.png)
    
    根据选择的参数生成pcb封装
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2019.png)
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2020.png)
    
    后面的大部分默认就可以了，他的参数是按照标准封装生成的
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2021.png)
    
- 使用IPC Compliant Footprint Batch generator批量创建PCB封装
    
    Tools中的IPC Compliant Footprint Batch generator能够批量创建PCB封装
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2022.png)
    
    打开对应封装的模板在excel填写参数后添加文件
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2023.png)
    

## P3 元器件库的管理及外部数据的连接-杨晓晨

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2024.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2025.png)

- 元器件集成库的建立
    
    元件库添加封装
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2026.png)
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2027.png)
    
    元件库添加链接
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2028.png)
    
- 元器件集成库的编译
    
    对元器件集成库进行编译
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2029.png)
    
    看一看编译的提示信息（比如这里就是重复定义了两个pin1）
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2030.png)
    
    编译成功会产生相应的文件夹
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2031.png)
    
- 元器件集成库的使用
    
    元器件集成库创建后即可在Components里面调用
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2032.png)
    
- 数据库管理(这部分音画不同步都挺严重的，先放着看看后面的)
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2033.png)
    

## P4 3小时学会Altium Designer（1）-梁文乐

## P6 两层板、四层板与多层板叠层设计的区别-李崇伟

正片与负片，正片走线，负片尽量不走线（一般是参考平面），参考平面一般是相邻层（多是GND层或电源层）

阻抗计算，压合结构图

BGA的pin间距是决定出层数的关键

过孔塞油与过孔盖油

添加层

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2034.png)

叠层设计，阻抗设计，过孔类型

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2035.png)

添加负片层

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2036.png)

添加正片层

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2037.png)

通孔，盲孔，埋孔

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2038.png)

20H规则

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2039.png)

叠层设计要点

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2040.png)

## P7-PCB设计规则及查询语句-游晋

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2041.png)

规则的导入导出

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2042.png)

规则的设置

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2043.png)

定义规则时可以选择某个网络或者某个网络类或者某个层的网络等，在Design下的Classes可以更改网络所属的类，第一对象和第二的对象即该规则作用的对象，比如第一对象设为铜皮，第二对象也设为铜皮，那么该规则就是作用于铜皮和铜皮之间

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2044.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2045.png)

使用Quary语句进行规则的语法设计

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2046.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2047.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2048.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2049.png)

利用查询创建Quary语句

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2050.png)

走线宽度与电流关系

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2051.png)

创建差分对并通过向导设置规则

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2052.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2053.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2054.png)

允许短路

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2055.png)

负片规则设计

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2056.png)

丝印规则设计

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2057.png)

设置长度规则后，蛇形线会自己匹配

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2058.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2059.png)

## P8 使用PDN进行电源完整性分析-游晋

PDN属于AD的扩展，需要购买，安装

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2060.png)

安装后可以在tools这里打开

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2061.png)

打开后先设置直流网络

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2062.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2063.png)

设置源端

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2064.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2065.png)

设置负载端

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2066.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2067.png)

开始仿真

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2068.png)

可视化过孔只有在3D模式下才能看

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2069.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2070.png)

管脚与过孔数据

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2071.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2072.png)

设置铜皮过孔铜皮等属性

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2073.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2074.png)

电流限制设置

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2075.png)

不满足设计要求时：

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2076.png)

## P9 AD与Creo&Solidworks的机电协同-张志俊

- 传统的机电协同
    
    封装设计时手动绘制3D模型
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2077.png)
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2078.png)
    
    执行更新操作
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2079.png)
    
    导入外部3D模型，可以参考P2的手动创建PCB封装这部分
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2080.png)
    
    PCB也支持上述操作，也可以导出3D模型
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2081.png)
    
- IDX变化增量协同设计
    
    大致是AD创建3D文件后能够实时更新到Solidworks,（暂时没有这方面的需求，以后再看吧
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2082.png)
    

## P10 如何判断高速PCB设计需要的层数-郑振宇

先布局再判断

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2083.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2084.png)

负片内缩设置

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2085.png)

在根据PCB板的布局走线密度判断时，将电源网络关掉判断，即只根据信号线网络判断

根据BGA深度判断需要的层数，有BGA封装元件的板子基本是通过BGA来判断需要的层数

对BGA元器件进行扇出操作

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2086.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2087.png)

## P11 系统级设计（多PCB的互连）-任光虎

创建多板工程

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2088.png)

创建多板原理图与装配体

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2089.png)

添加单元

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2090.png)

为单元添加PCB工程与相应的PCB

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2091.png)

放置entry

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2092.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2093.png)

在原理图对应的接口元件添加如下参数后同步到单元中同样可以添加entry

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2094.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2095.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2096.png)

四种线的区别，焊接，金手指，线缆（可以分线），线束（可以分线）

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2097.png)

对单元分线

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2098.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%2099.png)

进行总的链接管理

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20100.png)

装配时的定位与连接

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20101.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20102.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20103.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20104.png)

添加其他模型

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20105.png)

检查3D干涉

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20106.png)

生成多板BOM

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20107.png)

## P12 X-Signal功能在AD20等长中的使用-郑振宇

X-Signal主要解决长度匹配的问题，主要使用情况有：
信号路径种需要使用端接电阻，这会导致需要调制的现场包括端接电阻在内的不同网络
T点拓扑结构（星型结构）
菊花链（FLY-BY）拓扑结构

在引入xSignal之前，AD的线长规则（Net Length）及匹配线长规则（Matched Net Length）只能针对同一网络，无法对同一网络中某一段路径进行调制，也无法对端接电阻进行处理。

创建X-Signal

先新建一个X-Signal分类

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20108.png)

使用向导或手工创建X-Signal分类

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20109.png)

手动创建：选择器件，网络，要添加到的X-Signal分类

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20110.png)

对于两器件之间有端接电阻的需要将端接电阻的网络和器件添加到同一类，后在创建X-Signal时分类创建

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20111.png)

打开X-Signal

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20112.png)

高亮显示net

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20113.png)

根据分好的X-Signal类来创建高速规则

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20114.png)

不符合规则的长度会报错

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20115.png)

对不符合长度规则的线进行网络等长调节（调节后可以联合打散也就是变成普通的线），同时蛇形走线要满足3W原则

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20116.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20117.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20118.png)

## P13 需要特殊加工的PCB在AD当中的设置(刚柔板，拼板和背钻)-梁文乐

建立柔板叠层

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20119.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20120.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20121.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20122.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20123.png)

按数字键1切换到1维进行分割

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20124.png)

分割后选择软板还是硬板

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20125.png)

定义弯曲线

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20126.png)

设置Fold State进行弯曲

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20127.png)

刚柔板设计的注意事项

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20128.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20129.png)

PCB 3D Movie 可以制作3D视频（可以了解一下）

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20130.png)

拼版创建pcb后先该层叠

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20131.png)

背钻在层叠管理器这里设置

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20132.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20133.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20134.png)

## P16 使用AD20进行混合信号仿真(SPICE)-游晋

完成电路仿真的功能，作用类似于Multisim

## P17 使用AD20进行信号完整性仿真(SI)-游晋

[AD(altium designer)15原理图与PCB设计教程（十）——信号完整性分析_ad15层叠管理_奋斗的蜗牛543464的博客-CSDN博客](https://blog.csdn.net/qq_24213087/article/details/113126002)

原理图器件添加SI模型

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20135.png)

导入IBIS模型（IBIS模型主要就是对管脚信号特性进行定义）或者

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20136.png)

阻抗设置

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20137.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20138.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20139.png)

针对不同阻抗设置线宽

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20140.png)

## P18 PCB设计中要掌握的十大技能-李崇伟

手动制作和CAD文件导入制作板框,导入DXF文件需要合适的版本

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20141.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20142.png)

添加差分线并设置差分规则

先创建差分线类别

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20143.png)

再在PCB panel里添加差分对线

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20144.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20145.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20146.png)

原理图设置差分对

差分对的网络名称的前缀必须是相同的，后缀则分别为_P和_N。

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20147.png)

根据规则向导创建差分对规则

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20148.png)

3W间距设置

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20149.png)

元器件对齐排布

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20150.png)

同时进行多根布线操作

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20151.png)

更改网络颜色

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20152.png)

异形板铺铜

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20153.png)

输出PDF 3D

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20154.png)

PCB开窗的作用：散热，载流，传导（露铜+导电海绵+屏蔽罩）

在Solder层画即可实现开窗

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20155.png)

过孔盖油（这个油指阻焊油，相对的说法是过孔开窗。指PCB工艺里印阻焊油是否把过孔当焊盘一样处理。过孔开窗过孔会多一次表面处理，比方镀金或者喷锡；而过孔盖油不会。所以需要过孔过大电流或者强调可靠性，最好大过孔并开窗。）

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20156.png)

## P19 层次化原理图设计技巧

放置Sheet Symbol

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20157.png)

设置位号与对应的原理图文件名

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20158.png)

如果先创建了原理图，想把port复制过来，可以用smart paste

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20159.png)

根据Sheet Symbol创建原理图

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20160.png)

根据已有原理图创建Sheet Symbol

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20161.png)

用Harness来代替port，相当于总线的作用

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20162.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20163.png)

小技巧

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20164.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20165.png)

设计复用

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20166.png)

原理图复用

画好原理图后，设置Device Sheet的地址

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20167.png)

用Device Sheet没法编辑，可以重构到当前文件夹

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20168.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20169.png)

用Device Sheet没法编辑，更改只读，或者设置以解决位号命名问题

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20170.png)

先设置图纸页码，再更改命名方式后自动命名

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20171.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20172.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20173.png)

![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20174.png)

Snippet复用

## 四层STM32开发板PCB设计实战演示-李崇伟

## 零碎知识点

高速信号打孔走线的时候可以在旁边打一个地过孔，形成回流路径

- 添加缝合孔，使用tools
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20175.png)
    
    ![Untitled](../image/Read/Altium-Designer-PCB设计全套零基础入门教学27节/Untitled%20176.png)
    

PCB高速信号过孔背转的原因是解决stub线

snippets功能

## P24 四层STM32开发板PCB设计实战演示-李崇伟

看PCB小技巧：`alt+鼠标左键`，选定原理图某个网路

## **AD常用快捷键总结**

`shift+s`切换单层显示

`ctrl+h`选择网络，选择网络后按`RS`可以测量网络长度