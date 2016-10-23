$(function () {
    var input=$('input');
    var textarea=$('textarea');
    input.focus(function () {
        $(this).css({
            backgroundColor:"#444",
        });
        $(this).css({
            border:null
        });
    })
    input.blur(function () {
        $(this).css({
            background:"",
        });
        $(this).css({
            border:"",
            border:"1px solid #444"
        });
    })
    textarea.focus(function () {
        $(this).css({
            backgroundColor:"#444",
        });

    })
    textarea.blur(function () {
        $(this).css({
            backgroundColor:"",
        });
        $(this).css({
            border:"1px solid #444"
        });
    })

//   楼层跳转
    var textcenter=$('.text-center');
    // console.log(textcenter.length)
    var nav=$('.nav-right');
    var li=$('li',nav);
    var a=$('a',li);
    var ch=document.documentElement.clientHeight;
    var active=$('.active');
    var arr=[];
    var col=$('.col-1');
    var circle=$('.circle-1');
    var ab=$(".ab-1");
    var phoneL=$('.ab-3');
    var phoneR=$('.ab-4');
    $(window).on('resize',function(){
        $(window).scroll();
        console.log($(window).width())
    })

    $(window).on('scroll',function(){
        arr=[]
        for(var i=0;i<textcenter.length;i++){
            arr.push(textcenter.eq(i).offset().top)
        }
        var stop=$(window).scrollTop();
        $(arr).each(function(i,v){
            if(stop>=v-100){
                active.removeClass('active')
                li.css({background:""})
                li.find('a').css({color:""})
                li.eq(i).find('a').css({color:"#fff"})
                li.eq(i).css({background:"#ffa400"})
            }
            if(stop>=arr[2]-100){
                col.addClass("left")
                circle.addClass("opa")
            }
            if(stop>=arr[1]-100){
                // ab.addClass("cit")
                phoneL.addClass("abL")
                phoneR.addClass("abR")
            }else{
                // ab.removeClass("cit")
            }
        });

    })
    li.on('click',function(){
        $('body').animate({scrollTop:arr[$(this).index()]+60},500)
    })
    $(window).scroll();

//   回到顶部
    var top=$('.go-top');
    top.on("click",function () {
        $('body').animate({scrollTop:0,display:"none"},500)
    })

    var button=$('.nav-button');
    var Right=$('.nav-right');
    var nvli=$('li',Right);
    var bao=$('.bao');
    button.on("click",function () {
       nvli.toggleClass("kk");
        bao.css({
            borderBottom:"none",
        })
    })
})