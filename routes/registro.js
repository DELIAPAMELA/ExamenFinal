exports.registroPost = function(req, res){ 

console.log("ingresa a registrar"); 

var registro = models.registro.build (req.body.registro);

    //a continuacion guardamos los campos que recibimos del formulario

    registro.save ({nombres="nombres",

                      post: 0,

      
     }).then(function(){

     console.log("ingresa a guardarPost");

     res.render('registroPost', {mensaje:'Se registro el contacto con 

exito'});

     });  

}