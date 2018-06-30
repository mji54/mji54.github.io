$(document).ready(function ($) {
    "use strict";
    console.log("hi");
    // if anything in menu gets clicked, title disappears
    $(".hidden").hide();
    $(".menu .one").click(function() {
        $(".title").css({'display': 'none'});
        $(".hidden").hide();
        $("#me").show();
    });
    $(".menu .two").click(function() {
        $(".title").css({'display': 'none'});
        $(".hidden").hide();
        $("#designs").show();
    });
    $(".menu .three").click(function() {
        $(".title").css({'display': 'none'});
        $(".hidden").hide();
        $("#projects").show();
    });
});