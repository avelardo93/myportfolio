$(document).ready(function () {
    var to, name, phone, email, message;
    $("#send_email").click(function () {
        // enter your email account that you want to recieve emails at. 
        to = "avelardo93@gmail.com";
        name = $("#name").val().trim();
        phone = $("#phone").val().trim();
        email = $("#email").val().trim();
        message = $("#message").val().trim();
        // $("#message").text("Sending E-mail...Please wait");
        $.get("http://localhost:8000/send", {
            to: to,
            name: name,
            phone: phone,
            email: email,
            message: message           
        }, function (data) {
            if (data == "sent") {
                console.log("Email sent");
            }
        });
    });
});
