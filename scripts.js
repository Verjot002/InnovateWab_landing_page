
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('#contact-form input[type="text"]').value.trim();
  const email = document.querySelector('#contact-form input[type="email"]').value.trim();
  const message = document.querySelector('#contact-form textarea').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill all fields');
  } else {
    alert('Thank you for reaching out! We will get back to you soon.');

    document.getElementById('contact-form').reset();
  }
});
