$('#contactform').on( 'click', '#sendEmail', function() {


    var contact = 
      {
        name: $("name").val(),
        phone: $("#phone").val(),
        email: $("#email").val(),
        mess: $("#message").val(),   
      };

      var currentURL = window.location.origin;

      $.post( currentURL + "/", contact)
        .done(function(data){
          //console.log(data);
          alert("Preparing to send")
        })

      $('#name').val("");
      $('#phone').val("");
      $('#email').val("");
      $('#message').val("");
    
    return false;

    });
