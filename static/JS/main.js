$(document).ready(function() {
    $("div.design").click(function() {
        $("img#design").toggle();
        $("p.text_design").toggle();
    });
    $("div.development").click(function() {
        $("img#development").toggle();
        $("p.dev_text").toggle();
    });

})