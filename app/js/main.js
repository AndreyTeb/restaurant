$(function() {
  $('.menu__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#D67E34"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#D67E34"/></svg ></svg></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 1151,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 731,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.comment__items').slick({
    arrows: false,
    dots: true
  });

  $('.cooks__items').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: true,
          dots: false,
          verticalSwiping: true
        }
      }
    ]
  });

  $(function () {
    $('.header__menu-btn').on('click', function(){
      $(this).toggleClass('header__menu-btn--active');
      $('.header__box').toggleClass('header__box--active');
    });

    $('.header__list-link, .header__logo, .header__bottom').on('click', function(){
      $('.header__menu-btn').removeClass('header__menu-btn--active');
      $('.header__box').removeClass('header__box--active');
    });
  });
});
