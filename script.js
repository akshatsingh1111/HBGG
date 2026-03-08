// Scroll to Gallery
function scrollToGallery() {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
}

// Main background music toggle
let mainTrack = document.getElementById("mainTrack");
function toggleMainMusic() {
    if (mainTrack.paused) mainTrack.play();
    else mainTrack.pause();
}

// Lightbox open & confetti
// Open Lightbox
function openLightbox(img, songFile) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const audio = document.getElementById("photoTrack");

    lightboxImg.src = img.src;
    audio.src = `./images/${songFile}`;
    audio.play();
    lightbox.style.display = "flex";
}

// Close Lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    const audio = document.getElementById("photoTrack");

    audio.pause();
    audio.currentTime = 0;

    lightbox.style.display = "none";
}

// Confetti effect
function playConfetti() {
    tsParticles.load("confettiCanvas", {
        particles: {
            number: { value: 0 },
        },
        emitters: [
            {
                life: { count: 1, duration: 0.5 },
                rate: { quantity: 150, delay: 0 },
                size: { width: 0, height: 0 },
                position: { x: 50, y: 50 },
                particles: {
                    shape: { type: "circle" },
                    color: { value: ["#ffdd59", "#ff6b6b", "#48dbfb", "#00d2d3"] },
                    life: { duration: { min: 1, max: 2 } },
                    move: { speed: { min: 6, max: 12 }, outModes: "destroy" }
                }
            }
        ]
    });
}
let touchStartX = 0;
let touchEndX = 0;

const lightbox = document.getElementById("lightbox");

lightbox.addEventListener("touchstart", function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener("touchend", function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 50) {
        // Swiped Right
        prevPhoto();
    } else if (swipeDistance < -50) {
        // Swiped Left
        nextPhoto();
    }
}
const beautyText=document.querySelector(".beauty-typing");

if(beautyText){
const text=beautyText.getAttribute("data-text");
let i=0;

function typeBeauty(){
if(i<text.length){
beautyText.textContent+=text.charAt(i);
i++;
setTimeout(typeBeauty,50);
}
}

typeBeauty();
}