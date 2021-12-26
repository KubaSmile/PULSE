$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></img></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  arrows: false
                }
            },
            
        ]
        
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__contant').removeClass('catalog__contant_active').eq($(this).index()).addClass('catalog__contant_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });

    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
    //modal
    $('[data-modal=consultation]').on('click', function(){
       $('.overlay, #consultation').fadeIn('slow'); 
    });
    $('.modal__close').on('click',function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    
    $('.button_mini').each(function(i){
        $(this).on('click', function(){
           $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
           $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name:{
                    required: true,
                    minlength: 2
                  },
                phone:"required",
                email: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    }
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});


