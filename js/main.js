var slideIndex = 0;

//ARROWS 
const right = document.querySelector('.next.arrow');
right.addEventListener('click', toRight);
const left = document.querySelector('.prev.arrow');
left.addEventListener('click', toLeft);

//DOTS
const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
    dot.addEventListener('click', function () {
        slideIndex = parseInt(dot.innerHTML) - 1;
        showImage();
    })
});

showImage(slideIndex);

function toRight() {
    slideIndex++;
    showImage();
}
function toLeft() {
    slideIndex--;
    showImage();
}
function showImage() {
    var slideArray = document.getElementsByClassName('slides');
    var dots = document.querySelectorAll('.dot');
    if (slideIndex > slideArray.length - 1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slideArray.length - 1;
    }

    for (let index = 0; index < slideArray.length; index++) {
        slideArray[index].style.display = 'none';
    }
    for (let index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active", "");

    }

    slideArray[slideIndex].style.display = 'block';
    dots[slideIndex].className += ' active';

    // setTimeout(() => {
    //     toRight()
    // }, 3000);
}

var fadeOn = true;

//FADE ANIMATION
const fadeAnimationButton = document.querySelector('div.fade-button');
fadeAnimationButton.addEventListener('click', switchToFade);

//ZOOM ANIMATION
const zoomAnimationButton = document.querySelector('div.zoom-button');
zoomAnimationButton.addEventListener('click', switchToZoom);

const imagesArray = document.querySelectorAll('img');
const slidesArray = document.querySelectorAll('div.slides');

function switchToFade() {
    if (!fadeOn) {
        for (let index = 0; index < imagesArray.length; index++) {
            imagesArray[index].className = imagesArray[index].className.replace(' move', '');
            slidesArray[index].className += ' fade';
        }
        zoomAnimationButton.className = zoomAnimationButton.className.replace(' active-button', '');
        fadeOn = true;
        fadeAnimationButton.className += ' active-button';
    }
}

function switchToZoom() {
    if (fadeOn) {
        for (let index = 0; index < imagesArray.length; index++) {
            slidesArray[index].className = slidesArray[index].className.replace(' fade', '');
            imagesArray[index].className += ' move';
        }
        fadeAnimationButton.className = fadeAnimationButton.className.replace(' active-button', '');
        fadeOn = false;
        zoomAnimationButton.className += ' active-button';
    }
}