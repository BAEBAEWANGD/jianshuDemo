const select = document.getElementById('select');
const list = document.getElementById('list');

const click = document.getElementById('click');
const change = document.getElementById('change');

const info = document.getElementById('info');
const infomation = document.getElementById('information');

const downloadBox = document.getElementById('download-box');
const bigIcon = document.getElementById('big-icon');

const btnLeft = change.getElementsByClassName('btn-left');
const btnRight = change.getElementsByClassName('btn-right');

const extend = document.getElementById('extend');
const find = document.getElementById('find-something');
const logo = document.getElementById('search');

// 图标下拉列表
select.onmouseover = function(){
    list.style.display = 'block';
};
select.onmouseout = function(){
    list.style.display = 'none';
};
list.onmouseover = function(){
    list.style.display = 'block';
};
list.onmouseout = function(){
    list.style.display = 'none';
};

// 消息下拉列表
info.onmouseover = function(){
    infomation.style.display = 'block';
};
info.onmouseout = function(){
    infomation.style.display = 'none';
};
infomation.onmouseover = function(){
    infomation.style.display = 'block';
};
infomation.onmouseout = function(){
    infomation.style.display = 'none';
};

// 搜索框聚焦事件
click.onfocus　= function(){
    change.style.display = 'block';
};
click.onblur = function(){
    change.style.display = 'none';
};
change.onmouseover = function () {
    change.style.display = 'block';
};
find.onfocus　= function(){
    extend.style.display = 'block';
    logo.innerHTML = '<i class="fa fa-search-plus" aria-hidden="true"></i>';
    find.style.width = '220px';
    logo.style.left = '195px';
};
find.onblur = function(){
    extend.style.display = 'none';
    logo.innerHTML = '<i class="fa fa-search" aria-hidden="true"></i>';
    find.style.width = '160px';
    logo.style.left = '135px';
};
extend.onmouseover = function () {
    extend.style.display = 'block';
};

// 二维码放大图的切换
downloadBox.onmouseover = function(){
    bigIcon.style.display = 'block';
};
downloadBox.onmouseout = function(){
    bigIcon.style.display = 'none';
};



window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
    var uptop = document.getElementById( "uptop" ); //获取div元素
    if( t >= 300 ) {
        console.log(t);
        uptop.style.bottom=50+'px';
    } else {
        uptop.style.bottom=-100+'px';
    }
};
var top=document.getElementById("to-top");
top.onclick = function(){
    var timer;
    timer=setInterval(function(){
        var ct = document.documentElement.scrollTop || document.body.scrollTop; //获取距离顶部的距离
        ct-=50;
        if(ct>0){
            window.scrollTo(0,ct);
        }
        else{
            window.scrollTo(0,0);
            clearInterval(timer);
        }
    },10);
};