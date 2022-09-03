// $("#signin").click(function () {
//   $("#second").fadeOut("fast", function () {
//     $("#first").fadeIn("fast");
//   });
// });


// FORM DE INICIO DE SESIÖN
$(function () {
  $("form[name='login']").validate({
    rules: {

      email: {
        required: true,
        email: true
      },
      password: {
        required: true,

      }
    },
    messages: {
      email: "Por favor ingresa un correo válido",

      password: {
        required: "Por favor ingresa tu contraseña",

      }

    },
    submitHandler: function (form) {
      form.submit();
    }
  });
});

// FORM DE REGISTRO
$(function () {

  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },

    messages: {
      firstname: "Por favor ingrese sus nombres",
      lastname: "Por favor ingrese sus apellidos",
      password: {
        required: "Por favor ingrese su contraseña",
        minlength: "Tu contraseña debe tener al menos 5 caracteres"
      },
      email: "Por favor, introduce una dirección de correo electrónico válida"
    },

    submitHandler: function (form) {
      form.submit();
    }
  });
});
