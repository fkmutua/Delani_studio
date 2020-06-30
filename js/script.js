$(document).ready(function() {
    $(".design-1").click(function() {
        $("#design-1.click").toggle();
        $("#pop1").toggle();
    });
    $(".design-2").click(function() {
        $("#pop2").toggle();
        $("#design-2.click").toggle();
    });
    $(".design-3").click(function() {
        $("#pop3").toggle();
        $("#design-3.click").toggle();
    });
});

$(document).ready(function() {
    $("div.image-frame").hover(function() {
        $(".strong").addClass("mask flex-center rgba-red-strong");
    });
    $("div.image-frame").hover(function() {
        $(".light").addClass("mask flex-center rgba-blue-light");
    });
    $("div.image-frame").hover(function() {
        $(".super").addClass("mask flex-center rgba-green-slight");
    });
    $("div.image-frame").hover(function() {
        $(".zoom").addClass("mask flex-center");
    });
});

function myMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("comment").value;
    if (email !== "" && name !== "" && message !== "") {
        alert("Thanks " + " " + name + " we have received your message. Thank you for reaching out to us.");
    } else if (email == "" || name !== "" || message !== "") {
        alert("Please fill in all the details");
    }
}