$(function () {
	
	const duration = 100;
	
	$(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.fadein').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
	

	
	var startPos = 0,winScrollTop = 0;
	$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();//scrollの量を代入
	//scrollの量がスタート地点より大きい場合の処理
    if (winScrollTop >= startPos) { 
        $('#to_top').stop(true).animate({
			'bottom': '50px'
		},200)
	//scrollの量がスタート地点より小さい場合の処理
    } else {
        $('#to_top').stop(true).animate({
			'bottom': '30px'
		},200)
    }
	//スタート地点を現在のスクロール量で更新
    startPos = winScrollTop;
});
	
	
	
	
	var timeoutId ;

	window.addEventListener( "scroll", function () {
	clearTimeout( timeoutId ) ;

	timeoutId = setTimeout( function () {
		$('#to_top').stop(true).animate({
			'bottom': '40px'
		},300,"easeOutBounce")
	}, 200 );
		
		
		
 });
	
	
	$('#to_top').on('click', function(){
		$('body,html').animate({ scrollTop: 0 }, 500, 'easeInOutCirc');
		$(this).stop(true).animate({
				'width': '100px',
			},duration);
	})
	
	//header上では、Topに戻るアイコンを表示しない。
	$(window).on('scroll',function(){
		var location = $(this).scrollTop();
		if(location > $("#concept").offset().top){
			$("#to_top").css("display", "block");
		}else{
			$("#to_top").css("display", "none");
		}
	});
	
	//ヘッダーを追従するように変更。
	$(window).on('scroll',function(){
		var location = $(this).scrollTop();
		if(window.outerWidth >= 960){
			if(location > $("#concept").offset().top){
				$("#header-menues")
				.css({
					"position": "fixed",
					"top": "-100px",
					"width": "100%",
					"background-color": "#rgba(51, 51, 51, 0.5)",
					"z-index": 5
				})
				.stop(true).animate({
					'top': 0
				},800);

				$('.header-img').css("opacity", "0");
			}else{
				$("#header-menues").css({
					"position": "static",
					"background-color": "transparent",
				});
				$('.header-img').css("opacity", "1")
			}
		}else{
			$("#header-menues").css({
				"position": "static",
				"background-color": "transparent",
			});
			$('.header-img').css("opacity", "1")
		}
	});
	
	$('#hamburger').on('click', function(){

		$('#modal').fadeIn(500);
		setTimeout(function(){
			$('.ashiato').fadeIn();
		},700)
		setTimeout(function(){
			$('.ashiato2').fadeIn();
		},800)
		setTimeout(function(){
			$('.ashiato3').fadeIn()
		},900)
		setTimeout(function(){
			$('.ashiato4').fadeIn();
		},1000)
		setTimeout(function(){
			$('.ashiato5').fadeIn();
		},1100)
		setTimeout(function(){
			$('.ashiato6').fadeIn();
		},1200)
		
		setTimeout(function(){
			$('#modal-dog').animate({
				'right': "-40px",
				'bottom': "-40px"
			} ,1500, "easeInOutElastic")
		},1300)
	} );
	
	$('#batsu').on('click', function(){
		$('#modal').fadeOut(500);
		$('.ashi').fadeOut(500);
		$('#modal-dog').css({
			'right': "",
			'bottom': ""
		})
	} );
	
	
	//レトリバーの走るアニメーション
	$(window).on('scroll',function(){
		var num = $(this).scrollTop();
		var split_num = num.split('');	
		var split_target = split_num[1];
	
		if(split_target == 0 || split_target == 1 || split_target == 2){
			$(".koma_1").css('display', 'block');
			$(".koma_2").css('display', 'none');
			$(".koma_3").css('display', 'none');
			$(".koma_4").css('display', 'none');
		}else if(split_target == 3 || split_target == 4 || split_target == 5){
			$(".koma_2").css('display', 'block');
			$(".koma_1").css('display', 'none');
			$(".koma_3").css('display', 'none');
			$(".koma_4").css('display', 'none');
		}else if(split_target == 6 || split_target == 7){
			$(".koma_3").css('display', 'block');
			$(".koma_1").css('display', 'none');
			$(".koma_2").css('display', 'none');
			$(".koma_4").css('display', 'none');
		}else{
			$(".koma_4").css('display', 'block');
			$(".koma_1").css('display', 'none');
			$(".koma_2").css('display', 'none');
			$(".koma_3").css('display', 'none');
		}
	})
	
	//右に移動させたい。
	var current = $('.system-icon').offset().top;
	$(window).on('scroll',function(){
		if(window.outerWidth >= 960 ){
			var scroll = $(this).scrollTop();
			var num = (scroll - current);
			
			if(num > window.outerWidth-200){
					num = 0;
			}
			$('.koma').stop(true).animate({
				'left': num + 'px'
			})
		}
	});
	
		//headerのスライドショー
	$(window).load(function() {
	var imgs = $(".slideshow").children("div"),
		nums = imgs.length,
		count = 0,
		sec = 5000,
		slide_duration = 1500;
	$(".slideshow div").eq(count).fadeIn(1000);
	setInterval(slide, sec);

/*	function slide(){
		if(count >= (nums-1)){
			count = 0;
			$(".slideshow div").eq(count).hide().fadeIn(1000);
			$(".slideshow div").eq(nums-1).fadeOut(1000);
		}else{
			$(".slideshow div").eq(count).fadeOut(1000);
			$(".slideshow div").eq(count +1).hide().fadeIn(1000);
			count = count + 1;
			}
		}*/
		
	function slide(){
		if(count >= (nums-1)){
			count = 0;
			$(".slideshow div").eq(count).animate({
				'opacity': 1
			},slide_duration);
			$(".slideshow div").eq(nums-1).animate({
				'opacity': 0
			},slide_duration);
		}else{
			$(".slideshow div").eq(count).animate({
				'opacity': 0
			},slide_duration);
			$(".slideshow div").eq(count +1).animate({
				'opacity': 1
			},slide_duration);
			count = count + 1;
			}
		}
	});

	
	//レトリバーを落下させる。
	var current_2 = $('#news').offset().top;
	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop();
		var num = (scroll - current_2);
		if(num >= 0){
			$('#dive').css("display", "block");
			$('#dive').animate({
				"top": "1700px",
				"left": "750px"
			}, 3000, "easeOutSine")
		}

	});
	
	//もう一匹
	
	var baby_posi =	$('.baby').position();
	//詳細ボタンアニメーション
	$('.detail-button')
		.on('mouseover',function(){
			$(this).stop(true).animate({
				'background-color': '#faf0e3'
			},300)
			$('.baby').stop(true).animate({
				'top': baby_posi.top - 36 + 'px' 
			},800,"easeOutElastic")
			})
		.on('mouseout',function(){
			$(this).stop(true).animate({
				'background-color': '#fdf9f4'
			},300)
			$('.baby').stop(true).animate({
				'top': baby_posi.top,
			},200)
		})
	
		var baby_posi2 = $('.baby2').position();
		$('.detail-button')
		.on('mouseover',function(){
			$(this).stop(true).animate({
				'background-color': '#faf0e3'
			},300)
			$('.baby2').stop(true).animate({
				'top': baby_posi2.top - 32 + 'px'
			},800,"easeOutElastic")
			})
		.on('mouseout',function(){
			$(this).stop(true).animate({
				'background-color': '#fdf9f4'
			},300)
			$('.baby2').stop(true).animate({
				'top': baby_posi2.top,
			},200)
		})
	
	//スクリーンサイズが変わったとき、三匹の子犬(baby)の位置を調整する。
	$(window).on("resize", function() {
		var w = window.innerWidth;
		if(w >= 1846){
			baby_posi.top = 120;
			$('.baby').css("top", baby_posi.top)
		}else if(w >= 960){
			baby_posi.top = 160;
			$('.baby').css("top", baby_posi.top)
		}else{
			baby_posi.top = 120;
			$('.baby').css("top", baby_posi.top)
		}
	});
	
	$(window).on("resize", function() {
		var w = window.innerWidth;
		if(700 >= w){
			$('.baby').css("display", "none")
			$('.baby2').css("display", "none")
		}else{
			$('.baby').css("display", "block")
			$('.baby2').css("display", "block")
		}
	});
	
});
