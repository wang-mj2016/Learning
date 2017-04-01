
$(function(){
//	滚动条发生滚动
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		var menu = $("#menu");
		var items = $("#content").find(".item");
		
		var currentId = "";//当前所在的楼层（item）id
		
		items.each(function(){
			var m = $(this);
			var itemTop = m.offset().top;
			if(top > itemTop - 400){
				currentId = "#" + m.attr("id"); 
			}else{
				return false;
			}
		});
//		给相应楼层的a设置current,取消其他链接的current
		var currentLink = menu.find(".current");
		if(currentId && currentLink.attr("href") != currentId){
			currentLink.removeClass("current");
			menu.find("[href='" + currentId + "']").addClass("current");
		}
//		console.log(top);
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})

window.onload=function(){
	
};























