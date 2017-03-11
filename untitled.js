function listToArray(likeArray){
	var ary=[];
	try{
		ary=[].prototype.slice.call(likeArray,0)
	}catch(e){
		for (var i = 0; i < likeArray.length; i++) {
			ary[ary.length]=likeArray[i];
		};
	}
	return ary;
}
function getIndex(ele){//元素索引
	var index = 0;
	var p = ele.previousSibling;
	while(p){
		if(p.nodeType===1){
			index++;
		}
		p=p.previousSibling;
	}
	return index;
}
function offset(ele){
	var l=ele.offsetLeft;
	var t= ele.offsetTop;
	var p=ele.offsetParent;
	while(p){
		if(window.navigator.userAgent.indexOf("MSIE 8")>=0){
			l+=p.offsetLeft;
			t+=p.offsetTop;
		}else{
			l+=p.offsetLeft+p.clientLeft;
			t+=p.offsetTop+p.clientTop;
		}
		p=p.offsetParent;
	}
	return {left:l,top:t}
}
function getWin(attr,value){
	if(typeOf value === "undefined"){
		return document.documentElement[attr]||document.body[attr];
	}
	document.documentElement[attr]===value;
	document.body[attr]=value;

}
function getCss(curEle,attr){
	var val = null;
	try{
		val = window.getComputedStyle(curEle,null)[attr];
	}
}