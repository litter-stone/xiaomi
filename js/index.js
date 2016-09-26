$(function(){
	//header and nav
	(function(){
		var $shop = $("#h_main .h_m_right .h_m_r_shop");
		var $s_hide = $("#h_main .h_m_right .h_m_r_shop .h_m_r_s_hide");
		var $search = $("#nav .n_search");
		var $input = $("#nav .n_search .n_s_input input");
		var $search_hide = $("#nav .n_search .n_s_input .n_s_hide");
		$shop.hover(function(){
			$s_hide.stop(true).slideDown();
		},function(){
			$s_hide.stop(true).slideUp();
		});
		//search input获取焦点
		$input.focus(function(){
			$search.addClass("focus");
			$search_hide.fadeIn();
		}).blur(function(){
			$search.removeClass("focus");
			$search_hide.fadeOut();
		});
		//鼠标滑动到n_m_one上，将n_w_product展示
		var $one = $("#nav .n_main .n_m_one");
		var $product = $("#n_w_product");
		var $p_ul = $("#n_w_product .n_w_p_main ul");
		$one.hover(function(){
			var _index = $(this).index();
			$product.stop(true).slideDown(300);
			$p_ul.eq(_index).show().siblings().hide();
		},function(){
			$product.stop(true).slideUp(300);
		});
		$product.hover(function(){
			$(this).stop(true).slideDown(300);
		},function(){
			$(this).stop(true).slideUp(300);
		});
	})();
	//header and nav
	(function(){
		var $shop = $("#h_main .h_m_right .h_m_r_shop");
		var $s_hide = $("#h_main .h_m_right .h_m_r_shop .h_m_r_s_hide");
		var $search = $("#nav .n_search");
		var $input = $("#nav .n_search .n_s_input input");
		var $search_hide = $("#nav .n_search .n_s_input .n_s_hide");
		$shop.hover(function(){
			$s_hide.stop(true).slideDown();
		},function(){
			$s_hide.stop(true).slideUp();
		});
		//search input获取焦点
		$input.focus(function(){
			$search.addClass("focus");
			$search_hide.fadeIn();
		}).blur(function(){
			$search.removeClass("focus");
			$search_hide.fadeOut();
		});
		//鼠标滑动到n_m_one上，将n_w_product展示
		var $one = $("#nav .n_main .n_m_one");
		var $product = $("#n_w_product");
		var $p_ul = $("#n_w_product .n_w_p_main ul");
		$one.hover(function(){
			var _index = $(this).index();
			$product.stop(true).slideDown(300);
			$p_ul.eq(_index).show().siblings().hide();
		},function(){
			$product.stop(true).slideUp(300);
		});
		$product.hover(function(){
			$(this).stop(true).slideDown(300);
		},function(){
			$(this).stop(true).slideUp(300);
		});
	})();
	//banner图的轮播切换
	(function(){
		var $tabLi = $("#b_main .b_m_tab li");
		var $picLi = $("#b_main .b_m_pic li");
		var $btn = $("#b_main .b_m_btn div");
		var $b_main = $("#b_main");
		var _index = 0;//全局索引
		var len = $tabLi.length;//5
		var timer = null;//定时器
		$tabLi.hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		}).click(function(){
			_index = $(this).index();
			plays();
		});
		//点击左右按钮
		$btn.click(function(){
			var index = $(this).index();
			if(index){//判断若点击的是右按钮
				_index++;//_index = _index+1;
				if(_index > len-1){
					_index = 0;
				}
				plays();
			}else{
				_index--;
				if(_index<0){
					_index = len-1;
				}
				plays();
			}
		});
		//统一功能函数封装
		function plays(){
			$tabLi.eq(_index).addClass("click").siblings().removeClass("click");
			$picLi.eq(_index).fadeIn().siblings().fadeOut();
		};
		//定时轮播
		function auto(){
			timer = setInterval(function(){
			_index++;//_index = _index+1;
			if(_index > len-1){
				_index = 0;
			}
			plays();
			},2000);
		}
		auto();//默认执行定时轮播
		//鼠标移入b_main停止定时，离开继续
		$b_main.hover(function(){
			clearInterval(timer);//清除定时器
		},function(){
			auto();//执行定时器轮播效果
		});
	})();
	//左侧nav的二级导航
	(function(){
		var $nav_li = $("#b_nav>ul>li");
		$nav_li.hover(function(){
			//将对应的hide部分显示
			$(this).find(".b_n_hide").show();
		},function(){
			//将对应的hide部分隐藏
			$(this).find(".b_n_hide").hide();
		});
	})();
	//starGoods
	(function(){
		var $data = miData.starGoods;
		var len = $data.imgSrc.length;
		var html = "";
		var $ul = $("#starGoods .s_goods ul");
		var $btn = $("#starGoods .s_title .s_t_btn div");
		var flag = true;
		var $left = $("#starGoods .s_title .s_t_btn .s_t_b_left");
		var $right = $("#starGoods .s_title .s_t_btn .s_t_b_right");
		var timer = null;
		for(var i=0;i<len;i++){
			html += "<li>"+
"					<a href='' class='s_g_img'><img src='"+$data.imgSrc[i]+"'/></a>"+
"					<a href='' class='s_g_title'>"+$data.title[i]+"</a>"+
"					<p class='s_g_detail'>"+$data.detail[i]+"</p>"+
"					<p class='s_g_price'>"+$data.price[i]+"</p>"+
"				</li>";
		}
		$ul.append(html);//appendChild
		var $li = $("#starGoods .s_goods li");
		var margin = $li.eq(5).position().left;
		$btn.click(function(){
			var index = $(this).index();
			if(index){//如果点击的是右边
				if(flag){
					flag = !flag;
					$ul.stop(true).animate({
						marginLeft:-margin
					},500);
					toggle();
					clearInterval(timer);
					auto();
				}
			}else{
				if(!flag){
					flag = !flag;
					$ul.stop(true).animate({
						marginLeft:0
					},500);
					toggle();
					clearInterval(timer);
					auto();
				}
			}
		});
		//实现click样式的轮播切换
		function toggle(){
			$left.toggleClass("click");
			$right.toggleClass("click")
		};
		//自动轮播
		function auto(){
			timer = setInterval(function(){
				if(flag){
					flag = !flag;
					$ul.stop(true).animate({
						marginLeft:-margin
					},500);
					toggle();
				}else{
					flag = !flag;
					$ul.stop(true).animate({
						marginLeft:0
					},500);
					toggle();
				}
			},6000);
		};
		auto();
	})();
	//match
	(function(){
		var $data = miData.match;
		var len = $data.length;
		var $right = $("#match .m_con .m_c_right");
		var $t_li = $("#match .m_title ul li");
		$t_li.eq(0).addClass("hover");
		for(var i=0;i<len;i++){
			var $ul = $("<ul></ul>");
			$right.append($ul);
		}
		var $ul = $("#match .m_con .m_c_right ul");
		//让第一个ul展现出来
		$ul.eq(0).css("display","block");
		$ul.each(function(index){
			// console.log(index);
			for(var i=0;i<9;i++){
				if(i<7){
					$li = $("<li class='m_c_bottom'>"+
"							<a href='' class='m_c_r_img'><img src='images/match/"+$data.attr[index]+"/"+(i+1)+".jpg'></a>"+
"							<a href='' class='m_c_r_title'> "+$data[$data.attr[index]].title[i]+" </a>"+
"							<p class='m_c_r_price'>"+$data[$data.attr[index]].price[i]+"</p>"+
"							<p class='m_c_r_comment'>"+$data[$data.attr[index]].comment[i]+"</p>"+
"						</li>");
					if(i==5 && index==0){
						var $div = $("<div class='m_c_hide'>"+
"								<span class='review'>小米的产品值得信赖，用了一段时间，无论是听歌，打电话...</span>"+
"								<span class='author'> 来自于 气功流 的评价 </span>"+
"							</div>");
						$li.append($div);
					}
				}else if(i==7){
					$li = $("<li class='m_c_eight'>"+
"							<a href='#' class='m_c_e_title'> "+$data[$data.attr[index]].title[i]+"</a>"+
"							<a href='#' class='m_c_e_img'><img src='images/match/"+$data.attr[index]+"/"+(i+1)+".jpg'></a>"+
"							<p class='m_c_e_price'>"+$data[$data.attr[index]].price[i]+"</p>"+
"						</li>");
				}else{
					$li = $("<li class='m_c_nine'>"+
"							<a href='#' class='m_c_n_more'>浏览更多</a>"+
"							<a href='#' class='m_c_n_ear'>耳机音箱</a>"+
"							<a href='#' class='iconfont'>&#xe605;</a>"+
"						</li>");
				}
				$(this).append($li);
			}
		});

		//当鼠标滑动li的时候
		var $li = $("#match .m_con .m_c_right ul li");
		$li.hover(function(){
			$(this).find(".m_c_hide").stop(true).animate({
				bottom:0,
				opacity:1
			},300);
		},function(){
			$(this).find(".m_c_hide").stop(true).animate({
				bottom:-74,
				opacity:0
			},300);
		});
		//鼠标移入title中的li元素
		$t_li.mouseover(function(){
			var _index = $(this).index();
			$(this).addClass("hover").siblings().removeClass("hover");
			$ul.eq(_index).show().siblings().hide();
		});
	})();
//content内容的实现
	(function(){
		var $tabLi = $("#content .c_con .c_c_li .tab li");
		var $box_wrap = $("#content .c_con .c_c_li .box_wrap");
		var $li = $("#content .c_con .c_c_li");
		var $btn = $("#content .c_con .c_c_li .btn div");
		var len = $box_wrap.length;//4

		//给$box_wrap附加一个属性a
		$box_wrap.each(function(){
			this.a = 0;
		});
		//给li上面的border-top更换颜色
		$li.each(function(i){
			var color = "#f60";
			switch(i){
				case 1:
					color = "#83c44e";
					break;
				case 2:
					color = "#e53935";
					break;
				case 3:
					color = "#2196f3";
					break;
			}
			$(this).css("border-color",color).find("h3").css("color",color);
		});
		//点击tabli的时候
		$tabLi.click(function(){
			//给当前所点击的li增加on样式
			$(this).addClass("on").siblings().removeClass("on");
			//获取当前点击的tabli的索引
			var index = $(this).index();
			var pIndex = $(this).parent().parent().parent().index();
			$box_wrap.eq(pIndex)[0].a = index;
			$box_wrap.eq(pIndex).stop(true).animate({
				marginLeft:-296*$box_wrap.eq(pIndex)[0].a
			},300);
		});
		//鼠标划入$li的时候，将btn出现
		$li.hover(function(){
			$(this).find(".btn").fadeIn(500);
		},function(){
			$(this).find(".btn").fadeOut(500);
		});
		//点击$btn触发事件
		$btn.click(function(){
			var index = $(this).index();
			var pIndex = $(this).parent().parent().index();
			if(index){//点击的为右按钮
				if($box_wrap.eq(pIndex)[0].a<len-1){
					$box_wrap.eq(pIndex)[0].a++;
				}
			}else{
				if($box_wrap.eq(pIndex)[0].a>0){
					$box_wrap.eq(pIndex)[0].a--;
				}
			}
			//控制ul滚动切换
			$box_wrap.eq(pIndex).stop(true).animate({
				marginLeft:-296*$box_wrap.eq(pIndex)[0].a
			},300);
			//控制li的颜色的切换
			$("#content .c_con .c_c_li .tab").eq(pIndex).find("li").eq($box_wrap.eq(pIndex).get(0).a).addClass("on").siblings().removeClass("on");
		});
	})();
});
//video
(function(){
	var $img = $("#video .v_con li img");
	var $icon = $("#video .v_con li span");
	var $hide = $("#video .v_hide");
	var $h_con = $("#video .v_hide .v_h_con");
	var $close = $("#video .v_hide .v_h_con .v_h_c_title .close");
	var $iframe = $("#video .v_hide .v_h_con .v_h_c_content iframe");
	$img.hover(function(){
		$(this).parent().find("span").addClass("hover");
	},function(){
		$(this).parent().find("span").removeClass("hover");
	});
	$icon.hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
	//追加样式，宽度与高度为当前window的宽度与高度
	function h_Size(){
		$hide.css({
			width:$(window).width(),
			height:$(window).height()
		});
	};
	h_Size();
	$(window).resize(h_Size);
	//点击img的时候，出现弹出层
	$img.click(function(){
		$hide.fadeIn(300).find(".v_h_con").show().stop(true).animate({
			top:"50%",
			opacity:1
		},500);
		//改变当前iframe视频的src播放地址
		var data = $(this).parent().attr("data");
		$iframe.attr("src",data);
		//改变当前title
		var html = $(this).parent().find("a").html();
		$h_con.find("h2").html(html);
	});
	//点击close按钮，盒子收上去并且弹出层消失
	$close.click(function(){
		$h_con.stop(true).animate({
			top:"-20%",
			opacity:0
		},600,function(){
			$hide.fadeOut(300);
		});
		//情况iframe的src
		$iframe.attr("src","");
	});
})();