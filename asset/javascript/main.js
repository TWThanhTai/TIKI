        const dangkys = document.querySelectorAll('.js-dang-ky')
        const modal = document.querySelector('.modal')
        const iconclose = document.querySelector('.js-icon-close')
        const modalbody = document.querySelector('.js-modal-body')
        
        // Hàm hiển thị modal đăng kí đăng nhập ( Thêm class open vào modal)
        function showBuyTickets() {
            modal.classList.add('open')
        }

        // Hàm ẩn modal đăng kí đăng nhập ( gỡ bỏ class open của modal)
        function shideBuyTickets() {
            modal.classList.remove('open')
        }

        // lặp qua từng thẻ và nghe hành vi click
        for (const dangky of dangkys) {
            dangky.addEventListener('click', showBuyTickets)
        }
         // Nghe hành vi click vào close
        iconclose.addEventListener('click', shideBuyTickets)

        modal.addEventListener('click', shideBuyTickets)

        modalbody.addEventListener('click', function (event) {
            event.stopImmediatePropagation()
        })

/*----------------------------------Slider - ảnh - chuyển 6/12------------------------------------------------------------ */
        $(function () {
            $('.gia-soc-da-dung').slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 6,
                speed: 1000,
                prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
                nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',
            });
        });

/*-----------------------------------Slider thương hiệu chính hãng-------------------------------------------------------------------------*/
        $(function () {
            $('.op-zet-full-wrap').slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 1000,
                prevArrow: '<span class="priv_arrow-1"><i class="fas fa-chevron-left"></i></span>',
                nextArrow: '<span class="next_arrow-1"><i class="fas fa-chevron-right"></i></span>',
            });
        });   

/*<!------------------------------------Slider - ảnh - chuyển - 6/18----------------------------------------------------------------------------->*/
        $(function () {
            $('.list-item-thuong-hieu').slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 6,
                speed: 1000,
                prevArrow: '<span class="priv_arrow-3"><i class="fas fa-chevron-left"></i></span>',
                nextArrow: '<span class="next_arrow-3"><i class="fas fa-chevron-right"></i></span>',
            });
        });
        
/*<!------------------------------------Slider - ảnh - chuyển - 8/16----------------------------------------------------------------------------->*/ 
        $(function () {
            $('.slider-style-all').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                speed: 1000,
                prevArrow: '<span class="priv_arrow-one"><i class="fas fa-chevron-left"></i></span>',
                nextArrow: '<span class="next_arrow-one"><i class="fas fa-chevron-right"></i></span>',
            });
        });
        
//----------------------- Chuyển Nội Dung ----------------------------------------------------------------------------------------------------------------->
        $(document).ready(function(){
            $('.style-gyhn-icon-one').click(function(){
                $('.style-gyhn-icon-one').removeClass('active');
                $(this).addClass('active');

                // Show tab-content
                var _id = $(this).children('a').attr('href');
                $('.tab-content-all').removeClass('on-off');
                $(_id).addClass('on-off');
            });
        });

//----------------------------- Hiệu ứng chuyển backgruond sáng tối cho Body ----------------------------------------------------------------------------------------------------------------->
        var checkbox_toggle = document.getElementById('light-dark');
        checkbox_toggle.addEventListener('change', function(){
            // Thêm class dark cho body
            document.body.classList.toggle('dark');
        })

//------------------------- Hiệu Ứng BackToTop ----------------------------------------------------------------------------------------------------------------------------------->
        $(document).ready(function(){
            $(window).scroll(function(){
                if($(this).scrollTop()){
                    $('#backtop').fadeIn();
                } else {
                    $('#backtop').fadeOut();
                }
            });
            $("#backtop").click(function(){
                $('html, body').animate({scrollTop:0
                }, 2000);
            })
        });