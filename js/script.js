$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider__post--row'
      });
      $('.slider__post--row').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
      $('.icon').click(function() {
          $(this).closest('.icon').toggleClass('active')
          $(this).next('.icon-selected').toggleClass('active')
      })
      $('.icon-selected').click(function() {
        $(this).closest('.icon-selected').toggleClass('active')
        $(this).prev('.icon').toggleClass('active')
    })
    $('.header__menu--span').click(function() {
      $('.header__menu--lang').toggleClass('active')
    })
    $('.header__info--msg').click(function() {
      $('.header__msg--block').toggleClass('active')
    })
    $('.header__info--dots').click(function() {
      $('.header__dots--block').toggleClass('active')
    })
    $('.header__info--fav').click(function() {
      $('.header__fav--block').toggleClass('active')
    })
    $('.header__burger').click(function() {
      $('.header__burger, .header__mobile--bg, .header__mobile').toggleClass('active')
      $('body').toggleClass('lock')
    })
})