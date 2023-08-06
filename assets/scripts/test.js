const form1 = document.getElementById('form1');
const email1 = document.getElementById('email1');
const error1 = document.getElementById('error1');
const form2 = document.getElementById('form2');
const email2 = document.getElementById('email2');
const error2 = document.getElementById('error2');

form1.addEventListener('click', (e) => {
  if (email1.value == '') {
    e.preventDefault();
    email1.classList.add('active');
    error1.style.display = 'unset';
  } else {
    email1.classList.remove('active');
    error1.classList.remove('active');
  }
});

form2.addEventListener('submit', (e) => {
  if (email2.value == '') {
    email2.classList.add('active');
    error2.style.display = 'unset';
    e.preventDefault();
  } else {
    email2.classList.remove('active');
    error2.classList.remove('active');
  }
});
