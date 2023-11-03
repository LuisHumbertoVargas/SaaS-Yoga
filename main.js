const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
};

// Header constainer
ScrollReveal().reveal('.headder_container h1', {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal('.header_container h2', {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal('.header_container .btn', {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal('.header_container img', {
    ...scrollRevealOption,
    origin: 'right',
});

// Why Container
ScrollReveal().reveal('.why_container .section_header', {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal('.why_container p', {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal('.why_container li', {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});

ScrollReveal().reveal('.why_container img', {
    ...scrollRevealOption,
    origin: 'left',
});

// Hero Container
ScrollReveal().reveal('.hero_card', {
    ...scrollRevealOption,
    interval: 500,
});

// Classes Container
ScrollReveal().reveal('.classes_image', {
    duration: 1000,
    interval: 500,
});

// Membership Container
ScrollReveal().reveal('.membership_card', {
    ...scrollRevealOption,
    interval: 500,
});

// Stories Container
ScrollReveal().reveal('.stories_card', {
    ...scrollRevealOption,
    interval: 500,
});

// Posts Container
ScrollReveal().reveal('.posts_card', {
    ...scrollRevealOption,
    interval: 500,
});

// Photos Container
ScrollReveal().reveal('.photos_card', {
    ...scrollRevealOption,
    duration: 1000,
    interval: 500,
});
