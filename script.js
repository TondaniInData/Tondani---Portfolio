/* ========================================= */
/* HERO SLIDING TEXT */
/* ========================================= */

const roles = [
    "Data Science | Data Analyst",
    "Business Intelligence | Microsoft Certified "
    
];

let roleIndex = 0;

const roleElement = document.getElementById("sliding-role");

function changeRole(){

    roleElement.style.opacity = "0";
    roleElement.style.transform = "translateY(20px)";

    setTimeout(() => {

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        roleElement.textContent = roles[roleIndex];

        roleElement.style.opacity = "1";
        roleElement.style.transform = "translateY(0px)";

    },500);

}

setInterval(changeRole,2500);


/* ========================================= */
/* HERO TYPING EFFECT */
/* TWO-TONE BLUE */
/* ========================================= */

const firstPart = "Passionate about transforming data ";
const secondPart = "into meaningful insights and building analytical solutions that solve real-world problems.";

const darkText = document.getElementById("typing-dark");
const lightText = document.getElementById("typing-light");

let darkIndex = 0;
let lightIndex = 0;

function typeSentence(){

    if(darkIndex < firstPart.length){

        darkText.textContent += firstPart.charAt(darkIndex);
        darkIndex++;

        setTimeout(typeSentence,40);
        return;
    }

    if(lightIndex < secondPart.length){

        lightText.textContent += secondPart.charAt(lightIndex);
        lightIndex++;

        setTimeout(typeSentence,35);
        return;
    }


    /* restart after pause */

    setTimeout(() => {

        darkText.textContent = "";
        lightText.textContent = "";

        darkIndex = 0;
        lightIndex = 0;

        typeSentence();

    },2500);

}

typeSentence();



/* ========================================= */
/* SECTION FADE IN ANIMATION */
/* ========================================= */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});


const hiddenElements = document.querySelectorAll(
    "section"
);

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});



/* ========================================= */
/* OPTIONAL NAVBAR ACTIVE LINK */
/* ========================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach((section)=>{

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 150){

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach((link)=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active");

        }

    });

});
