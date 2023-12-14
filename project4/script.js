$(document).ready(function() {

    $(".poemannotation-reveal").click(function(){
        $(".unmarkedpoem").toggle();
        $(".markedpoem").toggle();
        $(this).hide();
        $(".poemannotation-hide").show();
    });

    $(".poemannotation-reveal").hover(function(){
        $(".poemannotation-reveal-explanation").toggle();
    });

    $(".poemannotation-hide").click(function(){
        $(".unmarkedpoem").toggle();
        $(".markedpoem").toggle();
        $(this).hide();
        $(".poemannotation-reveal").show();
    });

    $(".troubleshoot").hover(function(){
        $(".troubleshootexplanation").toggle();
    });
});