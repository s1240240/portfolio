$(document).ready(function(){
  // initialize variable
  const breakpointTab = 767;
  const slickerSetting = {
    autoplay: true,
    autoplaySpeed: 5000,
    speed:1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  };

  const cancelSlicker = {
    breakpoint: 767,
    settings: 'unslick'
  };

  const responsiveSlickerSetting ={
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 100,
        settings: slickerSetting
      },
        cancelSlicker
    ]
  };
  const sectionNameArray = ['concept','feature','work','voice','flow','event','news'];
  const PrefixTrigger = '.js-blur-';
  const suffixTrigger = '__trigger';
  const PrefixTarget = '.js-section-';
  const suffixTarget = '__title';
  // initialize function
  // slicker default function
  function default_slicker(slickerName){
    $(slickerName).slick(slickerSetting);
  };
  // slicker responsive function
  function responsive_slicker(slickerName){
    $(slickerName).slick(responsiveSlickerSetting);
  };
  // not calc scroll position & control timer
  function setFadeoutAnimation(trigger,target,event,animationfunc,animetionClassName){
    $(trigger).on(event,function(){
      animationfunc(target,animetionClassName);
    });
  };
  function setAnimation(target,animetionClassName){
    $(target).addClass(animetionClassName);
  };

  function calcScrollPosition(trigger,target,animetionfunc,animetionClassName,ctrlval){
    $(trigger).each(function(){
      const elementPositon = $(this).offset().top + ctrlval;
      const scrollPostion = $(window).scrollTop();
      const windowHeight = $(window).height();
      if(scrollPostion >= elementPositon - windowHeight){// 画面内に入ったら
        animetionfunc(target,animetionClassName);
      }
    });
  };
  function checkScrollEvent(trigger,target,func,animetionClassName,ctrlval){
    // フラグの処理はscrollイベント中に実行される関数処理の負荷軽減を目的とした条件分岐
    let flag = true;
    $(window).scroll(function(){
      if(flag){
        flag =false;
        setTimeout(function(){
          calcScrollPosition(trigger,target,func,animetionClassName,ctrlval);
          flag = true;
        },200);
      }
    });
  };
  function checkLoadEvent(trigger,target,func,animetionClassName,ctrlval){
    $(window).on('load',function(){
        calcScrollPosition(trigger,target,func,animetionClassName,ctrlval)
      });
  };

  function branchTargetBreakpointkpoint(trigger,target,func,animetionClassName,breakpointTab,ctrlval){
    const windowsize = window.innerWidth;
    if(target == '.js-spCtanav'){
      if(windowsize <= breakpointTab){
        checkScrollEvent(trigger,target,func,animetionClassName,ctrlval);
      };
    }else if(target == '.js-banner'){
      if(windowsize <= breakpointTab){
        checkScrollEvent(trigger,target,func,animetionClassName,300);
      }else{
        calcScrollPosition(trigger,target,func,animetionClassName,ctrlval)
      };
    };
  };

  function checkEvent(trigger,event,target,func,animetionClassName,breakpointTab,ctrlval){
    // フラグの処理はresizeイベント中に実行される関数処理の負荷軽減を目的とした条件分岐
    let flag = true;
    $(window).on(event,function(){
      if(flag){
        flag =false;
        setTimeout(function(){
          branchTargetBreakpointkpoint(trigger,target,func,animetionClassName,breakpointTab,ctrlval);
          flag = true;
        },200);
      }
    });
  };

  function openclose_hambergermenu(btn,gnav,gnav__link,cta){
    $(btn).on('click',function(){
      $(this).toggleClass('is-active');
      $(gnav).toggleClass('is-active');
      $(cta).toggleClass('hide');
    });
    $(gnav__link).on('click',function(){
      $(btn).removeClass('is-active');
      $(gnav).removeClass('is-active');
    });
  };

  /*==========================
    main
   ==========================*/
  // run slicker
  default_slicker('.js-slicker');
  responsive_slicker('.js-voices_lists');
  responsive_slicker('.js-event__lists');
  $(window).on("resize orientationchange", function () {
    $(".js-slicker").slick("resize");
  });

  // banner animation
  checkEvent('.js-fadein__trigger','load','.js-banner',setAnimation,'fadeIn',breakpointTab,-100);
  setFadeoutAnimation('.js-btn__trigger','.js-banner','click',setAnimation,'fadeOut');

  // mainvisual catchcopy animation
  checkLoadEvent('.js-blur__trigger','.js-lead-ttl',setAnimation,'blur',-100);
  checkLoadEvent('.js-blur__trigger','.js-lead-subttl',setAnimation,'blur',-100);
  checkLoadEvent('.js-rotate__trigger','.js-lead-subttl',setAnimation,'rotate',-100);

  // seciton title animation
  sectionNameArray.forEach( value => {
    checkScrollEvent(PrefixTrigger + value + suffixTrigger,PrefixTarget + value + suffixTarget,setAnimation,'blur',0);
  });

  //CTA SP ver animation
  checkEvent('.js-fadein__trigger','resize','.js-spCtanav',setAnimation,'fadeIn',breakpointTab,0);
  checkEvent('.js-fadein__trigger','load','.js-spCtanav',setAnimation,'fadeIn',breakpointTab,0);

  // run humbergermenu
  openclose_hambergermenu('.js-openbtn','.js-gnav','.js-gnav__link-sp','.js-spCtanav');
});