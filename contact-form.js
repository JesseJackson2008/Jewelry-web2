let num1, num2, captchaResult;

function generateCaptcha() {
  num1 = Math.floor(Math.random() * 9) + 1;
  num2 = Math.floor(Math.random() * 9) + 1;
  captchaResult = num1 + num2;

  document.getElementById('captchaLabel').innerHTML = `What is ${num1} + ${num2}? <span>*</span>`;

  document.getElementById('captchaAnswer').value = captchaResult;
}

document.addEventListener('DOMContentLoaded', function () {
  generateCaptcha();

  document.getElementById('jimain').addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    const showError = (input, message) => {
      input.nextElementSibling.innerText = message;
      valid = false;
    };

    const clearError = (input) => {
      input.nextElementSibling.innerText = '';
    };

    const name = document.getElementById('firstText');
    const email = document.getElementById('secondText');
    const company = document.getElementById('thirdText');
    const phone = document.getElementById('fourthText');
    const message = document.getElementById('fifthText');
    const captcha = document.getElementById('captcha');
    const captchaAnswer = document.getElementById('captchaAnswer');

    /* ---------- NAME ---------- */
    if (!name.value.trim()) {
      showError(name, 'Please enter your full name');
    } else if (!/^[a-zA-Z\s]{4,10}$/.test(name.value.trim())) {
      showError(name, 'Full name must be 4–10 letters only');
    } else {
      clearError(name);
    }

    /* ---------- EMAIL ---------- */
    if (!email.value.trim()) {
      showError(email, 'Please enter your email address');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) {
      showError(email, 'Enter a valid email address');
    } else {
      clearError(email);
    }

    /* ---------- COMPANY ---------- */
    if (!company.value.trim()) {
      showError(company, 'Please enter your company name');
    } else if (!/^[a-zA-Z\s]{4,10}$/.test(company.value.trim())) {
      showError(company, 'Company name must be 4-10 letters only');
    } else {
      clearError(company);
    }

    /* ---------- PHONE ---------- */
    if (!phone.value.trim()) {
      showError(phone, 'Please enter your phone number');
    } else if (!/^\d+$/.test(phone.value.trim())) {
      showError(phone, 'Only numbers are allowed');
    } else if (!/^[0-9]{9,11}$/.test(phone.value.trim())) {
      showError(phone, 'Phone must be 9–11 digits');
    } else {
      clearError(phone);
    }

    /* ---------- MESSAGE (OPTIONAL) ---------- */
    if (message.value.trim() && !/^[a-zA-Z\s]{10,30}$/.test(message.value.trim())) {
      showError(message, 'Message must be 10-30 letters only');
    } else {
      clearError(message);
    }

    /* ---------- CAPTCHA ---------- */
    const submitBtn = document.getElementById('submitBtn');
    const loader = document.getElementById('formLoader');
    if (!captcha.value.trim()) {
      showError(captcha, 'Mathematical answer is required');
    } else if (parseInt(captcha.value.trim(), 10) !== parseInt(captchaAnswer.value, 10)) {
      showError(captcha, 'Wrong answer');
    } else {
      clearError(captcha);
    }

    if (!valid) return;
    loader.style.display = 'inline-block';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';

    /* ---------- AJAX SUBMIT ---------- */
    const formData = new FormData(this);
    formData.append('action', 'tc_submit_contact_form');
    formData.append('nonce', tc_ajax.nonce);

    fetch(tc_ajax.ajax_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.text())
      .then((result) => {
        loader.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        const successBox = document.getElementById('formSuccess');
        if (result.trim() === 'success') {
          successBox.innerText = 'Your inquiry has been successfully received. We’ll contact you soon.';
          successBox.style.display = 'block';
          setTimeout(() => {
            successBox.innerText = '';
            successBox.style.display = 'none';
          }, 10000);
          this.reset();
          generateCaptcha();
        } else {
          console.log(result);
          //   alert(result);
        }
      })
      .catch(() => {
        loader.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        alert('Something went wrong. Please try again later.');
      });
  });
});
