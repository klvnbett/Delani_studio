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
    // this will toggle between the description of the offers
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
    //the section that when hover it changes and shows some text
    $('.portf1').mouseover(function() {
        $('.port1').show();
    }).mouseout(function() {
        $('.port1').hide();
    });
    $('.portf2').mouseover(function() {
        $('.port2').show();
    }).mouseout(function() {
        $('.port2').hide();
    });
    $('.portf3').mouseover(function() {
        $('.port3').show();
    }).mouseout(function() {
        $('.port3').hide();
    });
    $('.portf4').mouseover(function() {
        $('.port4').show();
    }).mouseout(function() {
        $('.port4').hide();
    });
    $('.portf5').mouseover(function() {
        $('.port5').show();
    }).mouseout(function() {
        $('.port5').hide();
    });
    $('.portf6').mouseover(function() {
        $('.port6').show();
    }).mouseout(function() {
        $('.port6').hide();
    });
    $('.portf7').mouseover(function() {
        $('.port7').show();
    }).mouseout(function() {
        $('.port7').hide();
    });
    $('.portf8').mouseover(function() {
        $('.port8').show();
    }).mouseout(function() {
        $('.port8').hide();
    });
});
// $(document).ready(function() {
//     $(".port").mouseover(function() {
//         $("#work1").show();

//     }).mouseout(function() {
//         $("#work1").hide();
//     });
// });

// $("portf1").hover(function() {
//     $("text", this).slideToggle('slow');
// }, function() {
//     $("text", this).slideToggle('slow');
// });