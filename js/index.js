  window.onload = function () {
            /*窗口加载时运行*/
            /*获取相应的id*/
            var container = document.getElementById('banner');
            var list = document.getElementById('imglist');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var len = 5;
            var animated = false;/*电脑卡顿时动画优化*/
            var interval = 3000;
 function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;/*切换时间*/
                var inteval = 10;/*每次位移的间隔*/
                var speed = offset/(time/inteval);/*每一次位移量*/
                var left = parseInt(list.style.left) + offset;

                var go = function (){/*内部函数*/
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        /*每次的位移*/
                        setTimeout(go, inteval);/*调用计时器*/
                    }
                    else {
                        /*当图片到最初，或者最后时,让图片归位*/
                        list.style.left = left + 'px';
                        /* if(left>-455.3)*/
                       if(left>-450){
                            list.style.left = -1350 * len + 'px';/*-600*len=3000*/
                        }
                        if(left<(-1350 * len)) {
                            list.style.left = '-1350px';
                        }
                        animated = false;/*判断是否在切换*/
                    }
                }
                go();
            }
             /*下面小圆点的处理*/
            function Button() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }


             /*自动切换函数 setinterval*/
            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1350);/*切换一个单位*/
                Button();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
               
                animate(1350);/*切换一个单位*/
                Button();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var   offset = -1350*(myIndex - index);

                    animate(offset);/*判断是否在切换*/
                    index = myIndex;
                    Button();
                }
            }

            container.onmouseover = stop;/*鼠标放上去，动画停止*/
            container.onmouseout = play;
            play();

        }
/*第二部分元素淡入*/
   $(document).ready(function(){
        $('.intro1').fadeIn(3200,function(){
            
        });
        $('.in-left').fadeIn(4000,function(){
            
        });
        $('.in-right').fadeIn(5000,function(){
            
        });
    });



