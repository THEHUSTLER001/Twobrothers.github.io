const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".logo", {
  ...scrollRevealOption,
  origin: "top",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".banner__container", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about-us h1 ", {
  ...scrollRevealOption,
  interval:2000,
});
ScrollReveal().reveal(".about-story ", {
  ...scrollRevealOption,
  origin:"right",
  interval:2500,
});
ScrollReveal().reveal(".about-team ", {
  ...scrollRevealOption,
  origin:"left",
  interval:3000,
});
ScrollReveal().reveal(".about-ambiance ", {
  ...scrollRevealOption,
  origin:"right",
  interval:3500,
});
ScrollReveal().reveal(".ambiance-gallery img ", {
  ...scrollRevealOption,
  origin:"right",
});
ScrollReveal().reveal(".about-values ", {
  ...scrollRevealOption,
  origin:"left",
  interval:4000,
});
ScrollReveal().reveal(".about-testimonials", {
  ...scrollRevealOption,
  origin:"right",
  interval:4500,
});
ScrollReveal().reveal(".testimonial", {
  ...scrollRevealOption,
  origin:"top",
  interval:1000,
});
ScrollReveal().reveal(".about-cta", {
  ...scrollRevealOption,
  origin:"left",
  interval:5000,
});
ScrollReveal().reveal(".menu__item", {
  ...scrollRevealOption,
  origin: "right",
  interval:1500,
});
ScrollReveal().reveal("#Menu1", {
  ...scrollRevealOption,
  origin: "left",
  interval:1500,
});
ScrollReveal().reveal(".reservation-hero", {
  ...scrollRevealOption,
  origin: "top",
  interval:1500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});
ScrollReveal().reveal(".reservation-hero", {
  ...scrollRevealOption,
  origin: "top",
  interval:1500,
});
ScrollReveal().reveal(".event-description-REV", {
  ...scrollRevealOption,
  origin: "left",
  interval:1500,
  delay:2000,
});
ScrollReveal().reveal(".event-description", {
  ...scrollRevealOption,
  origin: "right",
  interval:1500,
  delay:2000,
});
ScrollReveal().reveal(".event-image", {
  ...scrollRevealOption,
  origin: "top",
  interval:1500,
  delay:1000,
});










emailjs.init("4DME2NKjsqB4yCeRG");

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const form = event.target;
  const button = form.querySelector('button[type="submit"]');
    
  // Disable the button to prevent multiple submissions
  button.disabled = true;
  
  emailjs.sendForm('service_x1aoe68', 'template_itgdixi', form)
    .then(function(response) {
      console.log('Success:', response);
      alert('Votre message a été envoyé avec succès!');
      form.reset();  // Reset form only after successful submission
      button.disabled = false;  // Re-enable the button
    }, function(error) {
      console.error('Error:', error);
      alert('Une erreur est survenue, veuillez réessayer.');
      button.disabled = false;  // Re-enable the button in case of an error
    });
});








    ScrollReveal().reveal('.article .details', {
      origin: 'right',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 1
    });
    
    ScrollReveal().reveal('.article .image', {
      origin: 'left',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 1
    });


    