$(document).ready(function($){
  $('.menu-toggle').click(function(){
$(this).toggleClass('is-active');
    $('.sub-menu').fadeToggle();
  });
  $('.sub-menu li a').click(function(){
    $('.sub-menu').hide();
  });
});

// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.wall-item',
  // percentPosition: true,
  layoutMode: 'masonry'  
});

$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
};
// bind filter button click
$('.filters-button-group').on( 'click', 'li', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'li', function() {
    $buttonGroup.find('.activeFilter').removeClass('activeFilter');
    $( this ).addClass('activeFilter');
  });
});

