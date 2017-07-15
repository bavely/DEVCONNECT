// Change style of navbar on scroll
window.onscroll = function() { myFunction() };

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-black";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-black", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}



// Get the modal
var modal = document.getElementById('id03');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// $("#modal_trigger").leanModal({
//     top: 100,
//     overlay: 0.6,
//     closeButton: ".modal_close"
// });

$(function() {
    // Calling Login Form
    $("#login_form").click(function() {
        $(".social_login").hide();
        $(".user_login").show();
        return false;
    });

    // Calling Register Form
    $("#register_form").click(function() {
        $(".social_login").hide();
        $(".user_register").show();
        $(".header_title").text('Register');
        return false;
    });

    // Going back to Social Forms
    $(".back_btn").click(function() {
        $(".user_login").hide();
        $(".user_register").hide();
        $(".social_login").show();
        $(".header_title").text('Login');
        return false;
    });
});




      // $(function () {

      //   var socket = io();

      //   $('#chatMessages').submit(function(){
      //     socket.emit('chat message', $('#m').val());
      //     $('#m').val('');
      //     return false;
      //   });

      //   $('#directMessages').submit(function(){
      //     socket.emit('direct message', $('#dm').val() + "^" + $('#email').val());
      //     $('#dm').val('');
      //     return false;
      //   });

      //   $('#emailId').submit(function(){
      //     socket.emit('join', $('#email').val());
      //     $('#email').val('');
      //     return false;
      //   });
   
      //   $('')

      //   socket.on('chat message', function(msg){
      //     $('#messages').append($('<li>').text(msg));
      //     window.scrollTo(0, document.body.scrollHeight);
      //   });

      //   socket.on('direct message', function(msg){
      //     $('#dmessages').append($('<li>').text(msg));
      //     window.scrollTo(0, document.body.scrollHeight);
      //   });

      // });


