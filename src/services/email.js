//import React from 'react';
import emailjs from 'emailjs-com';
//import templateEmail from '../components/template'

const service_id = "default_service";//Gmail
const template_id = "template_Q8xb3sx7";//Formato de la api
const template_id_scio = "email_notification_scio";//Email de notificaciones
const user_id = 'user_miSxUoip92knRTffaAMa6';//Llave de mi correo personal {Se cambiara por otro despues}

export default function sendEmail(e) {//Funcion para mandar email
  e.preventDefault();

  const template_params = {
    "from_name": "Scio | End-to-end Software Engineering ",
    "name":e.target.user_name.value,
    "email":e.target.user_email.value, //Correo al que se mandara la info
    "message_html": "$"+e.target.total.value //La info de interes sobre el costo
   }

   
   emailjs.send(service_id, template_id, template_params, user_id )
   .then((result) => {
      console.log(result.text);
      sendEmailScio(e);
  }, (error) => {
      console.log(error.text);
  });
}

function sendEmailScio(e){
  e.preventDefault();

  var template_params = {
    "from_name": "Scio VMA Notification",
    "name":e.target.user_name.value,
    "email":e.target.user_email.value, //Correo al que se mandara la info
    "email_scio":"",
    "message_html": "$ "+e.target.total.value //La info de interes sobre el costo
   }

   emailjs.send(service_id, template_id_scio, template_params, user_id )
   .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}