const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: "范进中举",
        artist: '卦者灵风',
        url: '../music/范进中举_卦者灵风.m4a',
        cover: '../img/范进中举_卦者灵风.jpg',	
    }, 
	]
});
