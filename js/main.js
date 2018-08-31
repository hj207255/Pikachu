var $btns=$('.speed>button');
$('.speed>button:nth-child(2)').addClass('active');
var time=50;
for(var i=0;i<3;i++){
  $btns.eq(i).on('click',function(e){
    $(e.currentTarget).addClass('active')
    .siblings('.active').removeClass('active');
    var index=$(e.currentTarget).index();
    if(index===0){
      time=100;
    }else if(index===1){
      time=50;
    }else if(index===2){
      time=10;
    }
  })
}

var n=0;
var id=setTimeout(function run(){
	code.innerHTML=Prism.highlight(text.substring(0,n), Prism.languages.css);
	codewrite.innerHTML=text.substring(0,n);
	code.scrollTop=code.scrollHeight;
	n+=1;
	if(n<text.length){
		id=setTimeout(run,time);
	}
},time);

var text=`
/*
*您好，我是胡杰
*今天我给大家画一个皮卡丘
*首先准备一个背景
*/

.huaban{
  height: 100vh;
  width: 50%;
  background-color: #FFE600;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*接下来确定皮卡丘脸的位置*/
.face{
  width: 420px;
  height: 235px;
  position: relative;
  overflow: hidden;
}

/*接下来是鼻子*/
.nose{
  width: 0;
  height: 0;
  border: 16px solid #000;
  border-radius: 50%;
  border-color: #000 transparent transparent transparent;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 34px;
}

/*接下来，画眼睛*/
.eye{
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: #2E2E2E;
  border: 3px solid #000;
  position: absolute;
}
.eye.left{
  right: 50%;
  margin-right: 88px;
}
.eye.right{
  left: 50%;
  margin-left: 88px;
}
.eye.left::after{
  content: "";
  display: block;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: 3px solid #000;
  background-color: #fff;
  position: absolute;
  left: 5px;
}
.eye.right::after{
  content: "";
  display: block;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: 3px solid #000;
  background-color: #fff;
  position: absolute;
  left: 5px;
}

/*皮卡丘的脸颊*/
.cheek{
  width: 89px;
  height: 89px;
  background-color: #FF0000;
  border-radius: 50%;
  border: 3px solid #000;
  position: absolute;
  top: 112px;
}
.cheek.left{
  right: 50%;
  transform: translateX(-120px);
}
.cheek.right{
  left: 50%;
  transform: translateX(120px);
}

/*接下来是上嘴唇*/
.beard{
  width: 80px;
  height: 25px;
  border: 3px solid #000;
  background-color: #FFE600;
  position: absolute;
  top: 68px;
  z-index: 1;
}
.beard.left{
  border-color: #FFE600 #FFE600 #FFE600 #000;
  border-radius: 0 0 0 25px;
  transform: rotate(-25deg);
  right: 49%;
}
.beard.right{
  border-color: #FFE600 #000 #FFE600 #FFE600;
  border-radius: 0 0 25px 0;
  transform: rotate(25deg);
  left: 49%;
}
.beard.left::after,.beard.right::after{
  content: '';
  display: block;
  height: 20px;
  width: 73px;
  background-color: #FFE600;
  position: absolute;
  top: -5px;
}
.beard.left::after{
  right: -2px;
  border-radius: 0 0 0 20px;
}
.beard.right::after{
  left: -2px;
  border-radius: 0 0 20px 0;
}

/*最后，画皮卡丘的舌头部分*/
.tonguew{
  width: 114px;
  height: 158px;
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  overflow: hidden;
}
.tongue{
  width: 143px;
  height: 1000px;
  border: 3px solid #000;
  background-color: #FF485F;
  border-bottom-right-radius: 70px 340px;
  border-bottom-left-radius: 70px 340px;
  position: absolute;
  top: -844px;
  right: 50%;
  transform: translateX(50%);
  overflow: hidden;
}
.tonguey{
  width: 136px;
  height: 94px;
  box-shadow: 0 -37px 0 #9B000A;
  position: absolute;
  bottom: 22px;
  border-top-right-radius: 100%;
  border-top-left-radius: 100%;
}

/*大功告成，皮卡丘画完了。*/
/*感谢您的观赏。*/
`;





