// Reference: https://www.emailjs.com/docs/rest-api/send-form/
// Reference: https://sir.kr/pg_tip/17469

const emailSender = document.getElementById('myForm');
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const emailInput = document.getElementById('emailInput');
const meassgeInput = document.getElementById('textInput');

emailSender.addEventListener('submit', function(event) {
  event.preventDefault();

  var formData = new FormData(this);

  formData.append('service_id', 'service_mdcf458');
  formData.append('template_id', 'template_c9wy92o');
  formData.append('user_id', 'N_28GUAtL6c6vCbER');


  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://api.emailjs.com/api/v1.0/email/send-form');

  xhr.onload = function() {
    if (xhr.status === 200) {
      alert("Message Sent To davemin7411@gmail.com");
      isSuccessful = true
      nameInput.value = "";
      phoneInput.value = "";
      emailInput.value = "";
      meassgeInput.value = "";
    } else {
      alert("Reqeust Failed! Status - " + xhr.status);
    }
  };

  xhr.send(formData)

});
