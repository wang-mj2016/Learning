//	跨浏览器事件处理程序
	var eventUtil={
		//定义一个eventUtil对象,封装方法（给元素添加事件，删除元素的事件）
		//添加句柄,该方法接收3个参数（元素，事件，操作）
		addHandler:function(element,type,handler){
			if(element.addEventListener){
				element.addEventListener(type,handler,false);
			}else if(element.attachEvent){
				element.attachEvent('on'+type);
			}else{
				//所有用.的地方都可以用[]代替
				element['on'+type]=handle;
			}
		},
		//方法和方法之间用逗号,连接
		//删除句柄,该方法接收3个参数（元素，事件，操作）
		removeHandler:function(element,type,handler){
			if(element.removeEventListener){
				element.removeEventListener(type,handler,false);
			}else if(element.detachEvent){
				element.detachEvent('on'+type);
			}else{
				//所有用.的地方都可以用[]代替
				element['on'+type]=null;
			}
		},
		getEvent:function(event){
			return event?event:window.event;
		},
		getType:function(event){
			return event.type;
		},
		grtElement:function(event){
			return event.target || event.srcElement;
		},
		preventDefault:function(event){
			if(event.preventDefault){
				event.preventDefault();
			}else{
				event.returnValue=false;
			}
		},
		stopPropagation:function(event){
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble=true;
			}
		}
	}
	


























