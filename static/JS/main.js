function validate() {
    var name = document.forms["myForm"]["inputName"].value;
    var email = document.forms["myForm"]["inputEmail"].value;
    var message = document.forms["myForm"]["inputMessage"].value;
    if (name == "") {
        alert("Name should be entered");
        return false;
    } else if (email = "") {
        alert("Kindly Enter your email address");
        return false;
    } else if (message == "") {
        alert("Ensure to provide your feedback response");
        return false;
    } else {
        alert(name + ", Thankyou for reaching out to us. Your response is highly appreciated");
        return true;
    }

};
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