import $ from "jquery";

let viewport = $("#viewport").width();
let slider = $("div.slider");
let viewSlide = 0;

$(".next").click(function () { 

    if (viewSlide < 3)
        viewSlide++;
    else
        viewSlide = 0;

    slider.animate({'left': -viewSlide * viewport + "px"}, {'duration': 500})  
});

$(".prev").click(function () { 

    if (viewSlide > 0)
        viewSlide--;
    else
        viewSlide = 3;

    slider.animate({'left': -viewSlide * viewport + "px"}, {'duration': 500})  
});