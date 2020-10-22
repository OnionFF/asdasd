$( '.nav a' ).on("click", function(){
	$('div.collapse').removeClass('show');
});

$(document).ready(function(){
  $('.slider').slick({
    centerMode: true,
    dots: true,
    arrows: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
   
    ]
});
});