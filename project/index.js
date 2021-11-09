
let pageState = 0;
let pages = ['Summary','Why','How','Schedule','Challenge','Want-to','Say']
function start(){
    changePage(page='Summary');
}
function changePage(page) {
    $('.page').hide()
    switch (page){
        case 'Summary':$('.Summary').show();
        pageState = 0;
        break;
        case 'Why': $('.Why').show();
        pageState = 1;
        break;
        case 'How': $('.How').show();
        pageState = 2;
        break;
        case 'Schedule': $('.Schedule').show();
        pageState = 3;
        break;
        case 'Challenge': $('.Challenge').show();
        pageState = 4;
        break;
        case 'Want-to': $('.Want-to').show();
        pageState = 5;
        break;
        case 'Say': $('.Say').show();
        pageState = 6;
        break;
    }

    // 精華所在
    history.pushState(null,null, page)
  }

  function MouseWheel (e) {
    e = e || window.event;
    // alert(['scrolled ', (( e.wheelDelta <= 0 || e.detail > 0) ? 'down' : 'up')].join(''));
    (( e.wheelDelta <= 0 || e.detail > 0) ? pageState++ : pageState--);
    if (pageState >=6){
        pageState = 6;
    }
    else if (pageState<=0){
        pageState = 0;
    }
    changePage(pages[pageState]);

  }

  
  // hook event listener on window object
  if ('onmousewheel' in window) {
    window.onmousewheel = MouseWheel;
  } else if ('onmousewheel' in document) {
    document.onmousewheel = MouseWheel;
  } else if ('addEventListener' in window) {
    window.addEventListener("mousewheel", MouseWheel, false);
    window.addEventListener("DOMMouseScroll", MouseWheel, false);
  }

// fuction pageSelect(){

// }



