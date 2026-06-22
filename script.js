//////////////////////////////////////////////////////
// SMOOTH FADE-IN ANIMATION ON SCROLL
//////////////////////////////////////////////////////

const observer = new IntersectionObserver((entries) => {
    
    entries.forEach((entry) => {
        
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});



//////////////////////////////////////////////////////
// TARGET SECTIONS
//////////////////////////////////////////////////////

const hiddenElements = document.querySelectorAll(
    ".about, .skills, .projects, .education, .certifications, .contact"
);

hiddenElements.forEach((el) => observer.observe(el));



//////////////////////////////////////////////////////
// OPTIONAL ACTIVE NAVBAR HIGHLIGHT
//////////////////////////////////////////////////////

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});
