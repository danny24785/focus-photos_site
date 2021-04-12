window.addEventListener('load', function () {
    const track = document.querySelector('.caroussel__track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.caroussel__button--right');
    const prevButton = document.querySelector('.caroussel__button--left');

    const dotsNav = document.querySelector('.caroussel__nav');
    const dots = Array.from(dotsNav.children);

    const slideWidth= slides[0].getBoundingClientRect().width;

    slides[0].style.left = 0;
    slides[1].style.left = 1000 + 'px';

    for (i = 0; i < slides.length; i++) {
        if (i == 0) {
            offset = 0;
        }
        else {
            offset += slides[i - 1].children[0].width;
        }
        slides[i].style.left = offset + 'px';
    }
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';

        var targetIndex = slides.findIndex(q => q == targetSlide);
        var targetDot = dots[targetIndex];
        var currentIndex = slides.findIndex(q => q == currentSlide);
        var currentDot = dots[currentIndex];

        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');


        console.log(targetDot);

    }

    prevButton.addEventListener('click', e =>{
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        
        moveToSlide(track, currentSlide,prevSlide);
    })

    nextButton.addEventListener('click', e =>{
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;

        moveToSlide(track, currentSlide,nextSlide);
    })

    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');
        if(!targetDot) return;

        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetIndex = dots.findIndex(dot => dot == targetDot)
        const targetSlide = slides[targetIndex];
        
        moveToSlide(track,currentSlide,targetSlide);
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    })
});

