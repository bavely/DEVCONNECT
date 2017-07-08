$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

/*

*************
30.10 ~ included vendor prefixes
28.10 ~ added code that closed the upload frame if we click outside of our avatar.

This is the jQuery solution to our animation. Out of performance reasons I would always advise the usage of CSS animations or some other GPU accelerated animations with the  use of TweenJS, GSAP or VelocityJS.

I hope you like the animation, thanks! :)

*************

var circle = $('#circle').get(0);
var cl = circle.getTotalLength();

var frame = $('#cameraFrame').get(0);
var fl = frame.getTotalLength();

var plusG = $('#plus')
var plusLine = $('#plusLine').get(0).getTotalLength();
$(plusG).css({
  'stroke-dasharray':plusLine,
  'stroke-dashoffset':plusLine
});
$(circle).css({
  'stroke-dasharray':cl,
  'stroke-dashoffset':cl
});
console.log(plusLine)
$(frame).css({
  'stroke-dasharray':fl,
  'stroke-dashoffset':fl-fl
});
/*
$('.avatar').hover(
  function(){
    $(circle).css({
      'stroke-dashoffset':0
    });
    $(frame).css({
      'stroke-dashoffset':0
    });
    $(plusG).css({
      'stroke-dashoffset':0
    });
},function(){
   $(circle).css({
      'stroke-dashoffset':cl});
    $(frame).css({
      'stroke-dashoffset':fl
    });
  $(plusG).css({
      'stroke-dashoffset':plusLine
    });
});*/
$('#fileUpload').on('change',function(){
  $('.avatar').removeClass('open');
});
$('.avatar').on('click',function(){
  $(this).addClass('open');
});
// added code to close the modal if you click outside
$('html').click(function() {
 $('.avatar').removeClass('open');
});

$('.avatar').click(function(event){
    event.stopPropagation();
});


