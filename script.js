'use strict';

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const emailContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
      // const messages = document.getElementById('messgaes').value ; 
      // Replace 'your-email@example.com' with your actual email address
      const mailtoLink = `mailto:gopalshelke200@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailContent)}`;

      window.location.href = mailtoLink;

      document.getElementById('status').innerText = 'Thank you for your message!';
  });
});

const submitButton = document.querySelector('.btn-submit');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('status').innerText = 'Thank you for your message!';
});

