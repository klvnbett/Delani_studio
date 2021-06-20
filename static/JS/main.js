function validate() {
    var name = document.forms["myForm"]["inputName"].value;
    var email = document.forms["myForm"]["inputEmail"].value;
    var message = document.forms["myForm"]["inputMessage"].value;
}
$(document).ready(function() {
    $("div.design").click(function() {
        $("img#design").toggle();
        $("p.text_design").toggle();
    });
    $("div.development").click(function() {
        $("img#development").toggle();
        $("p.dev_text").toggle();
    });
    $("div.product").click(function() {
        $("img#product").toggle();
        $("p.product_manage").toggle();
    });


})