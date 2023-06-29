//Activate Menu Button//
let menubtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menubtn.onclick = () => {
    menubtn.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    menubtn.classList.remove('bx-x');
    navbar.classList.remove('active');
}

ScrollReveal({
    reset:true,
    distance:'100px',
    duration:2000,
    delay:200
});


ScrollReveal().reveal('.home-content h1, .about-resume', {origin: 'left'});
ScrollReveal().reveal('.home-content p', {origin: 'right'});
ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.pofile-pic, .about-items, .skills-items, .projects-items, .form', {origin: 'bottom'});


const animText = new Typed ('.animated-text', {
    strings: ['Web Developer','Student','Data Scientist'],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 600,
    loop: true
});

