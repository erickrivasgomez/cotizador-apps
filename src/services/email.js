import React from 'react';
import emailjs from 'emailjs-com';
import templateEmail from '../components/template'

export default function sendEmail(e) {//Funcion para mandar email
  e.preventDefault();
  console.log(e.target);
  var template_params = {
    "from_name": "Scio | End-to-end Software Engineering ",
    "name":e.target.user_name.value,
    "email":e.target.user_email.value, //Correo al que se mandara la info
    "message_html": "Total development cost: $"+e.target.total.value //La info de interes sobre el costo
    //"message_html": <templateEmail></templateEmail>,
   }

   var service_id = "default_service";//Gmail
   var template_id = "template_Q8xb3sx7";//Formato de la api
   var user_id = 'user_miSxUoip92knRTffaAMa6';//Llave de mi correo personal {Se cambiara por otro despues}
   emailjs.send(service_id, template_id, template_params, user_id )
   .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}