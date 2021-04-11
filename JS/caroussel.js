const track = document.querySelector('.caroussel__track');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.caroussel__button--right');
const prevButton = document.querySelector('.caroussel__button--left');

const dotsNav = document.querySelector('.caroussel__nav');
const dots = Array.from(dotsNav.children);

var slideWidth = slides[0].getBoundingClientRect().width;
console.log(slides[0].children[0].getBoundingClientRect());
// for (i = 0; i < slides.length; i++) {
//     if (i == 0) {
//         offset = 0;
//     }
//     else {
//         offset += slides[i - 1].width;
//         slides[i].style.left = offset;
//         console.log(slides[i - 1].width);
//     }
// }

