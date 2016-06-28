/*
$(document).ready(function(){
    var name,phone,email,message;
    $("#send-email").click(function(){      
        name=$("#name").val();
        phone=$("#phone").val();
        email=$("#email").val();
        message=$("#message").val();
        $.get("http://localhost:8000/send",{name:name,phone:phone,email:email,message:message},function(data){
        if(data=="sent")
        {
            $("#contactForm").empty().html("The message has been sent. Anthony Velardo will get back to you as soon as possible.");
        }

});
    });
});
