const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

images.forEach((img, index) => {

    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
    });

});

function showImage(){

    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex].src;

}

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage();

});

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage();

});