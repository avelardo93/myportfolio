$('#contactform').on( 'click', '#sendEmail', function() {


    var contact = 
      {
        name: $("name").val(),
        telephone: $("#telephone").val(),
        email: $("#email").val(),
        message: $("#message").val(),   
      };

      var currentURL = window.location.origin;

      $.post( currentURL + "/", contact)
        .done(function(data){
          //console.log(data);
          alert("Preparing to send")
        })

      $('#name').val("");
      $('#telephone').val("");
      $('#email').val("");
      $('#message').val("");
    
    return false;

    });
