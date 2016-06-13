   /*淡入*/
   $(document).ready(function(){
		$('#teach').fadeIn(2000,function(){
			
		});
		$('#mm').fadeIn(7000,function(){
			
		});
        $('#later').fadeIn(3000,function(){
            
        });
        $('#latest').fadeIn(4000,function(){    
        });
 
	});

    /*下面的无缝滚动效果*/
  window.onload=function(){
    var content=document.getElementById('member-img');
    var i=-6;
    var j = 0;
    function abc(){
        if (parseInt(j)<-1000) {
                content.style['left']='0px';
                j=0;
            }
            else{
                var iCurrent = content.offsetLeft;
                j=content.style['left']=iCurrent+i+'px';
                }
    }
 
  /*setInterval(abc,30);*/
var MyMar=setInterval(abc,30);
content.onmouseover=function() {clearInterval(MyMar)};/*鼠标悬浮停止动画*/
content.onmouseout=function() {MyMar=setInterval(abc,30)};

}