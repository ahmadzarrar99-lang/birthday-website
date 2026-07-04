// =======================
// Birthday Website Script
// =======================

const loader = document.getElementById("loader");
const website = document.getElementById("website");
const openGift = document.getElementById("openGift");
const celebrate = document.getElementById("celebrate");
const music = document.getElementById("music");

// Gift Open
openGift.addEventListener("click", () => {

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

        website.style.display = "block";

        website.style.animation = "fadeIn 1.2s ease";

    }, 700);

    // Play Music
    music.play().catch(() => {
        console.log("Music autoplay blocked until user interaction.");
    });

    // Welcome Confetti
    startConfetti();

});

// Celebrate Button
celebrate.addEventListener("click", () => {

    startConfetti();

    setTimeout(() => {

        alert("🎉 Happy Birthday Hamid Nawaz!\n\nMay Allah Bless You Always ❤️\n\nFrom Zarrar");

    }, 500);

});

// Fireworks / Confetti
function startConfetti(){

    var duration = 3 * 1000;

    var animationEnd = Date.now() + duration;

    var defaults = {
        startVelocity:30,
        spread:360,
        ticks:60,
        zIndex:9999
    };

    function randomInRange(min,max){

        return Math.random() * (max-min) + min;

    }

    var interval = setInterval(function(){

        var timeLeft = animationEnd - Date.now();

        if(timeLeft <= 0){

            return clearInterval(interval);

        }

        var particleCount = 50 * (timeLeft / duration);

        confetti(Object.assign({}, defaults, {

            particleCount,

            origin:{

                x:randomInRange(0.1,0.3),

                y:Math.random()-0.2

            },

            colors:["#FFD700","#ffffff","#ffcc00"]

        }));

        confetti(Object.assign({}, defaults, {

            particleCount,

            origin:{

                x:randomInRange(0.7,0.9),

                y:Math.random()-0.2

            },

            colors:["#FFD700","#ffffff","#ffcc00"]

        }));

    },250);

}

// Fade Animation
const style = document.createElement("style");

style.innerHTML = `

@keyframes fadeIn{

from{

opacity:0;

transform:translateY(30px);

}

to{

opacity:1;

transform:translateY(0);

}

}

`;

document.head.appendChild(style);

// Smooth Scroll Animation
const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".wish,.gallery,.cake,footer").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});