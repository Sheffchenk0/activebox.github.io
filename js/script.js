$(function(){
    
    let header = $('#header');
    let introH = $('#intro').innerHeight();
    let scrollPos = $(window).scrollTop();
    $(window).on('scroll load resize' , function(){
        let scrollPos = $(this).scrollTop();
        let introH = $('#intro').innerHeight();
        if(scrollPos > introH){
            header.addClass('fixed');
        }else{
            header.removeClass('fixed');
            
        }
        
    }); 
    
    let item = document.querySelectorAll('.arrow__down');

    [].forEach.call(item,function(el){
        
        el.addEventListener('click', function (e){
            if(el.parentNode.clientHeight == '99'){
                $(el.parentNode).addClass('works__height');
                el.parentNode.childNodes[3].style.opacity = '1';
                $(el.parentNode.childNodes[5]).addClass('flip-vertical');        
            }
            else if(el.parentNode.clientHeight == '299'){
                $(el.parentNode).removeClass('works__height');
                el.parentNode.childNodes[3].style.opacity = '0';      
                $(el.parentNode.childNodes[5]).removeClass('flip-vertical');
            }
        });   
        
    });
    
    $( window ).resize(function() {
        [].forEach.call(item,function ff(el){
            $(el.parentNode).removeClass('works__height');
            el.parentNode.childNodes[3].style.opacity = '0';
            $(el.parentNode.childNodes[5]).removeClass('flip-vertical');
        });
        $('.nav').removeClass('nav-show');
        $('.nav-svg').removeClass('nav-show');
        document.body.style.overflowY = "scroll";
        document.getElementById('nav').style.height = `auto`;
    });
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);

        $('.nav').removeClass('nav-show');
        $('.nav-svg').removeClass('nav-show');
        document.body.style.overflowY = "scroll";
    });





    $('.burger').on('click' , function func(event){
        event.preventDefault();
        $('.nav').toggleClass('nav-show');
        $('.nav-svg').toggleClass('nav-show');

        let obj1 = document.querySelector('.nav');
        let dsp = window.getComputedStyle(obj1, null).getPropertyValue("display");
        if(dsp == 'flex'){
            document.body.style.overflowY = "hidden";
        }else{
            document.body.style.overflowY = "scroll";
        }
        let headerH = $('.header__inner').innerHeight();
        let count = window.innerHeight - headerH;        
        document.getElementById('nav').style.height = `${count}`;
    });

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});
