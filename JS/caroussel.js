window.addEventListener('load', function () {
    const track = document.querySelector('.caroussel__track');
    const slides = Array.from(track.children);

    const nextButton = document.querySelector('.caroussel__button--right');
    const prevButton = document.querySelector('.caroussel__button--left');

    const dotsNav = document.querySelector('.caroussel__nav');
    const dots = Array.from(dotsNav.children);

   var styleLeftOffset = 0;
    console.log(slides[0].querySelector('.caroussel__image').width);
    console.log(slides.length)
    for (i = 0; i < slides.length; i++) {
        if (i == 0) {
            offset = 0;
        }
        else {
            offset += slides[i - 1].children[0].width;
        }
        slides[i].style.left = offset + 'px';
    }

    const moveToSlide = (track, currentSlide, targetSlide, direction, position) => {     
        console.log(position);
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
        
        if(direction == 'left'){
            position += targetSlide.children[0].width;
            track.style.left = position +'px';
            console.log(targetSlide.children[0].width);
        }
        else{
            position += -targetSlide.children[0].width;
            track.style.left -= -position +'px';
            console.log(targetSlide.children[0].width);
        }
    }

    nextButton.addEventListener('click', e => {
        
        const currentSlide = track.querySelector('.current-slide')
        const nextSlide = currentSlide.nextElementSibling;
        
        moveToSlide(track, currentSlide,nextSlide, 'right', track.style.left);
        
    })

    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide')
        const previousSlide = currentSlide.previousElementSibling;
        moveToSlide(track, currentSlide, previousSlide, 'left');
        
    })
    
});

