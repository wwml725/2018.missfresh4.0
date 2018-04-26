/*上拉加载*/
export function upLoadMore(dom,callback){
  let timer;
  dom.addEventListener('scroll',function(event){
    //取消执之前定时器
    if(timer)clearTimeout(timer);
    timer = setTimeout(function(){
      let height = dom.clientHeight;
      let scrollHeight = dom.scrollHeight;
      let scrollTop = dom.scrollTop;
      if(scrollTop+height+10>=scrollHeight){
        callback();
      }
    },100);
  });
}

//下拉刷新
export function downRefresh(dom,callback){
  let startY;
  let distance;//一共拉的距离
  let originTop = dom.offsetTop;//先记录最原始的top// 56px
  dom.addEventListener('touchstart',touchStart);
  function touchStart(event){
    startY = event.touches[0].pageY;
    if(dom.offsetTop==originTop && dom.scrollTop==0){
      dom.addEventListener('touchmove',touchMove);
      dom.addEventListener('touchend',touchEnd);
    }
    function touchMove(event){//鼠标移动事件
      let pageY = event.touches[0].pageY;
      if(pageY>startY){//如果新的纵坐标大于旧的坐标的话，则为下拉
        distance = pageY - startY;//计算总共移动的距离
        //新的top值等于最原始的top+触摸移动的距离
          if(distance>100){
            distance=100
          }
        dom.style.top = originTop+distance+'px';
      }else{
        dom.removeEventListener('touchmove',touchMove);
        dom.removeEventListener('touchend',touchEnd);
      }
    }
    function touchEnd(){//触摸结束事件
      dom.removeEventListener('touchmove',touchMove);
      dom.removeEventListener('touchend',touchEnd);

      let timer = setInterval(function(){
        distance-=5;
        dom.style.top = originTop+(distance)+'px';
        if(distance<1){
          dom.style.top = originTop+'px';
          clearInterval(timer);
        }
      },14);
      if(distance>50){
        callback();
      }
    }
  }
}