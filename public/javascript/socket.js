// module.exports = function() {
//   var someVal = $('#userEmail').html();
// };

      $(function () {

        var socket = io();
        var val=$('#userEmail').html();

        $('#signUp').on("click", function(event){
          event.preventDefault();
          socket.emit('chat message', $('#chatmessage').val() + "^" + val);
          $('#chatmessage').val('');
          return false;
        });

        $('#directsend').on("click", function(event){
          event.preventDefault();
          socket.emit('direct message', $('#directmessage').val() + "^" + $('#mssgsearch').val() + "^" + val);
          $('#directmessage').val('');
          return false;
        });


        // console.log('this is user email ' + $('#userEmail').contents());


        $(document).ready(function(){
          console.log(val);
          socket.emit('join', val);
          $('#email').val('');
          return false;
        });
   

        socket.on('chat message', function(msg){
          $('#chatlist').append($('<li>').text(msg));
          window.scrollTo(0, document.body.scrollHeight);
        });

        socket.on('direct message', function(msg){
          $('#mssgfield').append($('<li>').text(msg));
          window.scrollTo(0, document.body.scrollHeight);
        });

  });