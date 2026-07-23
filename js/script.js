/*====================================================
    EDITKARO.IN
    Premium Portfolio Website
    script.js (Part 4A)
=====================================================*/

/*====================================================
                MOBILE MENU
=====================================================*/

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (hamburger.innerHTML.includes("bars")) {
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

navItems.forEach(link => {
    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        hamburger.innerHTML = '<i class="fas fa-bars"></i>';

    });
});

/*====================================================
                SMOOTH SCROLL
=====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        window.scrollTo({

            top: target.offsetTop - 70,

            behavior: "smooth"

        });

    });

});

/*====================================================
            ACTIVE NAVIGATION
=====================================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*====================================================
            BACK TO TOP BUTTON
=====================================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*====================================================
            SCROLL REVEAL
=====================================================*/

const revealElements = document.querySelectorAll(

    ".service-card,.counter-card,.video-card,.testimonial,.contact-info,form"

);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("active");

            el.classList.add("fade-up");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*====================================================
            ANIMATED COUNTERS
=====================================================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const about = document.querySelector("#about");

    const aboutTop = about.getBoundingClientRect().top;

    if (aboutTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();

/*====================================================
            NAVBAR SHADOW
=====================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(7,11,23,.92)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(7,11,23,.70)";
        header.style.boxShadow = "none";

    }

});

/*====================================================
            PREVENT EMPTY FORM
=====================================================*/

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {

            valid = false;

            input.style.border = "1px solid red";

        } else {

            input.style.border = "1px solid rgba(255,255,255,.08)";

        }

    });

    if (valid) {

        alert("Thank you! Your message has been sent.");

        form.reset();

    }

});

/*====================================================
            END OF PART 4A
=====================================================*/