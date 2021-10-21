
$.noConflict();



// Flash Sale Counter
jQuery( document ).ready(function() {
    setInterval(function time(){
    var d = new Date();
      var days = 365 - d.getDay();
    var hours = 24 - d.getHours();
    var min = 60 - d.getMinutes();
    if((min + '').length == 1){
      min = '0' + min;
    }
    var sec = 60 - d.getSeconds();
    if((sec + '').length == 1){
          sec = '0' + sec;
    }
    jQuery('.countdown .days').html(days+"<small>Days</small>");
    jQuery('.countdown .hours').html(hours+"<small>Hour</small>");
    jQuery('.countdown .mintues').html(min+"<small>Min</small>");
    jQuery('.countdown .seconds').html(sec+"<small>Sec</small>");
  }, 1000); });


// Mobile Menu

// const targetElement = document.getElementsByClassName("modal"); //only popup can scroll


jQuery(document).on('click', '.navigation-mobile-toggler',  function () {
    
    jQuery('#navigation-mobile').toggleClass('navigation-active');
    jQuery('.mobile-overlay').addClass('active');

    //put this when popup opens, to stop body scrolling
    //bodyScrollLock.disableBodyScroll(targetElement);

});

jQuery(document).on('click', '.mobile-overlay',  function () {
    jQuery('#navigation-mobile').removeClass('navigation-active');
    jQuery('.mobile-overlay').removeClass('active');

    //put this when close popup and show scrollbar in body
    //bodyScrollLock.enableBodyScroll(targetElement);

});



jQuery(window).on('load',function(){
  jQuery('#newsletterModal').modal('show');
});

//sticky header

window.onscroll = function() {
  myFunction()
  backToTop()
};


function myFunction() {
  if (window.pageYOffset > 100) {
      
    jQuery("#stickyHeader").addClass('sticky-header');

  } else {
    jQuery("#stickyHeader").removeClass('sticky-header');
  }
}
function backToTop() {

    var scrollTop = jQuery(window).scrollTop();
    if (scrollTop > 100) {
        jQuery('#back-to-top').addClass('show');
    } else {
        jQuery('#back-to-top').removeClass('show');
    }
};

jQuery(document).on("click","#back-to-top", function(){

    // e.preventDefault();
    console.log('3');
    jQuery('html,body').animate({

        scrollTop: 0
    }, 700);
});

jQuery(document).on("click",".alert .close", function(){
  jQuery(this).animate({opacity: 0}, 1000).hide('slow');
});




//Display grid/list 4 Column
jQuery(document).on('click', '#list_4column',  function(){	
  jQuery( '#swap .col-12' ).removeClass( 'griding' );
  jQuery( '#swap .col-12' ).removeClass( 'col-lg-3' );

  jQuery( '#swap .col-12' ).removeClass( 'col-sm-6' );
  jQuery( '#swap .col-12' ).addClass( 'listing' );
  jQuery( this ).addClass( 'active' );
  jQuery( '#grid_4column' ).removeClass( 'active' );
});
jQuery(document).on('click', '#grid_4column', function(){	
  jQuery( '#swap .col-12' ).removeClass( 'listing' );
  jQuery( '#swap .col-12' ).addClass( 'col-lg-3' );

  jQuery( '#swap .col-12' ).addClass( 'col-sm-6' );
  
  jQuery( '#swap .col-12' ).addClass( 'griding' );
  jQuery( this ).addClass( 'active' );
  jQuery( '#list_4column' ).removeClass( 'active' );
});
//Display grid/list 3 Column
jQuery(document).on('click', '#list_3column', function(){	
  jQuery( '#swap .col-12' ).removeClass( 'griding' );
  jQuery( '#swap .col-12' ).removeClass( 'col-lg-4' );
  jQuery( '#swap .col-12' ).removeClass( 'col-sm-6' );
  jQuery( '#swap .col-12' ).addClass( 'listing' );
  jQuery( this ).addClass( 'active' );
  jQuery( '#grid_3column' ).removeClass( 'active' );
});
jQuery(document).on('click', '#grid_3column', function(){	
  jQuery( '#swap .col-12' ).removeClass( 'listing' );
  jQuery( '#swap .col-12' ).addClass( 'col-lg-4' );
  jQuery( '#swap .col-12' ).addClass( 'col-sm-6' );
  
  jQuery( '#swap .col-12' ).addClass( 'griding' );
  jQuery( this ).addClass( 'active' );
  jQuery( '#list_3column' ).removeClass( 'active' );
});

// Swticher

jQuery(document).on('click', '.slide-toggle', function(event){
  jQuery('.switcher').toggleClass('active');
});

jQuery(document).on('click', '.swticher-rtl', function(event){
  jQuery("body").toggleClass("bodyrtl");
  jQuery(".swticher-rtl").toggleClass("active");
  return false;
});
jQuery(document).on('click', '.swticher-boxed', function(event){
  jQuery("html").toggleClass("boxed");
  jQuery(".swticher-boxed").toggleClass("active");
  return false;
});




//Color Scheme Change
jQuery(document).on("click", "#switchColor a", function(){
  var cssValue = jQuery(this).attr("id");
  jQuery("#switchColor li").removeClass('active');
  jQuery(this).parent().addClass('active');
  
  if(cssValue == "default"){
      jQuery('link[rel=stylesheet][href="assets/css/yellow.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/blue.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/green.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/navy-blue.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/red.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/pink.css"]').remove();
  }
  else if(cssValue == "yellow"){
      jQuery('head').append('<link type="text/css" rel="stylesheet" href="assets/css/yellow.css">');
      jQuery('link[rel=stylesheet][href="assets/css/default.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/blue.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/green.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/navy-blue.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/red.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/pink.css"]').remove();
  }
  else if(cssValue == "blue"){
      jQuery('head').append('<link type="text/css" rel="stylesheet" href="assets/css/blue.css">');
      jQuery('link[rel=stylesheet][href="assets/css/default.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/yellow.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/green.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/navy-blue.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/red.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/pink.css"]').remove();
  }
  else if(cssValue == "green"){
      jQuery('head').append('<link type="text/css" rel="stylesheet" href="assets/css/green.css">');
      jQuery('link[rel=stylesheet][href="assets/css/default.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/blue.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/yellow.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/navy-blue.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/red.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/pink.css"]').remove();
  }
  else if(cssValue == "navy-blue"){
      jQuery('head').append('<link type="text/css" rel="stylesheet" href="assets/css/navy-blue.css">');
      jQuery('link[rel=stylesheet][href="assets/css/default.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/blue.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/green.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/yellow.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/red.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/pink.css"]').remove();
  }
  else if(cssValue == "red"){
      jQuery('head').append('<link type="text/css" rel="stylesheet" href="assets/css/red.css">');
      jQuery('link[rel=stylesheet][href="assets/css/default.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/blue.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/green.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/navy-blue.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/yellow.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/pink.css"]').remove();
  }
  else if(cssValue == "pink"){
      jQuery('head').append('<link type="text/css" rel="stylesheet" href="assets/css/pink.css">');
      jQuery('link[rel=stylesheet][href="assets/css/default.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/blue.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/green.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/navy-blue.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/red.css"]').remove();
      jQuery('link[rel=stylesheet][href="assets/css/yellow.css"]').remove();
  }

return false;
});

jQuery(document).on("shown.bs.tab", "a[data-toggle='tab']", function(){
  jQuery('.slick-slider').each(function() {

      jQuery(this).slick("getSlick").refresh();
  });
});
