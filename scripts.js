
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');
hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
document.addEventListener('click', (e) => {


  if (!hamburgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('#contact-form input[type="text"]').value.trim();
  const email = document.querySelector('#contact-form input[type="email"]').value.trim();
  const message = document.querySelector('#contact-form textarea').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (name === '' || email === '' || message === '') {
    alert('Please fill all fields');
  }else if(!emailRegex.test(email)){
    alert('Please enter a valid email address. ')
  } 
  else {
    try{
    alert('Thank you for reaching out! We will get back to you soon.');

    document.getElementById('contact-form').reset();
   } catch (error){
    console.error('From submission error:',error);
    alert('Something went wrong. Please try again later. ');
   }
  }
});

