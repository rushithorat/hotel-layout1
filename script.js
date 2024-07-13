
function handleIconClick(inputId) {
    document.getElementById(inputId).click();
}

function handleFileSelect(event, imageId, inputId) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imageElement = document.getElementById(imageId);
            imageElement.src = e.target.result;
            imageElement.style.display = 'block';
            // Hide the icon for home-image1 specifically
            if (inputId === 'fileInput1') {
                var iconElement = document.querySelector('#fileInput1').previousElementSibling;
                iconElement.style.display = 'none';
            }
            else  if (inputId === 'fileInput4') {
                var iconElement = document.querySelector('#fileInput4').previousElementSibling;
                iconElement.style.display = 'none';
            }
            else  if (inputId === 'fileInput5') {
                var iconElement = document.querySelector('#fileInput5').previousElementSibling;
                iconElement.style.display = 'none';
            }
        };
        reader.readAsDataURL(file);
    }
}

var bedroom = new Swiper(".mybedroom", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    // autoplay: {
    //     delay: 1100,
    // },
    // mousewheel: true,
    // keyboard: {
    //     enable: true,
    // },
    // loop: false,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        375: {
            slidesPerView: 1.1,
            spaceBetween: 20,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
    },
});


function addSpacesCard() {
   const swiperWrapper = document.querySelector('.swiper-wrapper');
    const existingSlide = swiperWrapper.querySelector('.swiper-slide.bed-slide');
    const newSlide = existingSlide.cloneNode(true);

    
    swiperWrapper.appendChild(newSlide);

   
    bedroom.destroy();
    bedroom = new Swiper(".mybedroom", {
        slidesPerView: 2,
        spaceBetween: 30,
        freeMode: true,
        // autoplay: {
        //     delay: 1100,
        // },
        // mousewheel: true,
        // keyboard: {
        //     enable: true,
        // },
        // loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            375: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },
            425: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
        },
    });
}  


function updateGuestCount() {
    var maxGuestInput = document.getElementById('max-guest');
    var minGuestInput = document.getElementById('min-guest');
    var guestStayInput = document.querySelector('.address-input3');

    var maxGuestValue = maxGuestInput.value.trim();
    var minGuestValue = minGuestInput.value.trim();

    guestStayInput.value = minGuestValue + ' - ' + maxGuestValue +' Guests ';
}

var click1 = document.querySelector('.guest');
var pop1 = document.querySelector('.guest-pop');


click1.addEventListener('click',function(){
    pop1.classList.toggle('gues-pop');
});