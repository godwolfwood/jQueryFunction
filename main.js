$(document).ready(function(){
    $( "#ClickHide" ).click(function() {
        $("#Text").hide(function(){
            console.log("Text hidden");
        });
    });
    $( "#ClickShow" ).click(function() {
        $("#Text").show(function(){
            console.log("Text revealed");
        });
    });
    $( "#ClickToggle" ).click(function() {
        $("#Text").toggle(function(){
            console.log("Text Toggled");
        });
    });
    $( "#ClickSlideDown" ).click(function() {
        $("#Text2").slideDown(function(){
            console.log("Text SlideDown");
        });
    });
    $( "#ClickSlideUp" ).click(function() {
        $("#Text2").slideUp(function(){
            console.log("Text SlideUp");
        });
    });
    $( "#ClickSlideToggle" ).click(function() {
        $("#Text2").slideToggle(function(){
            console.log("Text SlideToggle");
        });
    });
    $( "#ClickFadeIn" ).click(function() {
        $("#Text3").fadeIn(function(){
            console.log("Text FadeIn");
        });
    });
    $( "#ClickFadeOut" ).click(function() {
        $("#Text3").fadeOut(function(){
            console.log("Text FadeIn");
        });
    });
    $( "#ClickAddClass" ).click(function() {
        $("#Text4").addClass( "yellowText");
    });
    $( "#ClickAddTextBefore" ).click(function() {
        $("#Text5").before( "<p>New Text</p>");
    });
    $( "#ClickAddTextAfter" ).click(function() {
        $("#Text5").after( "<p>New Text</p>");
    });
    $( "#ClickAppendText" ).click(function() {
        $("p").append( "<p>Appended Text</p>");
    });
    var count = 1;
    $( "#ClickHTML" ).click(function() {
        $("#Text6").html( "<p>Changed Text " + count + " times</p>");
        count++;
    });
    $( "#ClickAttr" ).click(function() {
        $("#Text6").attr("class","yellowText");
    });
    $( "#ClickVal" ).click(function() {
        console.log($("#inputText").val());
    });
    $( "#ClickText" ).click(function() {
        console.log($("#RandomList").text());
    });
    $( "#ClickData" ).click(function() {
        $("#Text7").data("blah","Hello");
        console.log($("#Text7").val());
    });
});