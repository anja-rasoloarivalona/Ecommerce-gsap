$( document ).ready(function() {
  
  
  var $main = $('.bg--main');
  var $mid = $('.bg--mid');
  var $end = $('.bg--end');
  var $nav = $('.navbar');

  var t1 = new TimelineLite();
  var t2 = new TimelineLite();
  var t3 = new TimelineLite();

  
  
  t1
  .set($main, {scale: 3})
  .set($mid, {autoAlpha:0})
  .set($end, {autoAlpha:0})
  .to($main, 2.5, {scale: 1, height: '20rem', width: "20rem", objectFit:'cover', alignSelf: 'center', borderRadius: '500px'})
  .to($mid, 1, {autoAlpha: 1, x: '130%'})
  .to($end, 1, {autoAlpha: 1, x: '-130%'}, '-=1')



t2.set($nav, {y: '200%', autoAlpha: 0})
  .to($nav, 2, {display:'flex', y:'0%', autoAlpha: 1})
  .delay(2.5)
  
  
  
  /*  
    var $nav = $('.navbar');
    var $bg = $('.wrapper');

    var tl = new TimelineLite();
    var t2 = new TimelineLite();

     tl.set($bg, {scale:2.3})
       .to($bg,3, {scale: 1});
 
    t2.set($nav, {y: '300%' ,autoAlpha:0})
        .to($nav,3, {y: '0%', autoAlpha:1})
        .delay(2)*/
  
})


