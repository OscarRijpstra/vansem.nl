const imageContainers = Array.from(document.getElementsByClassName('image__container'));

imageContainers.map(function(imageContainer) {
    imageContainer.getElementsByClassName('trigger-next-image')[0].addEventListener('click', function(){
        Array.from(document.getElementsByClassName('product__images')).map(function(productImages) {
            nextImage(imageContainer, productImages);
        })
    })

    imageContainer.getElementsByClassName('trigger-previous-image')[0].addEventListener('click', function() {
        Array.from(document.getElementsByClassName('product__images')).map(function(productImages) {
            previousImage(imageContainer, productImages);
        })
    })
})

function nextImage(imageContainer, productImages) {
    const currentImage = document.getElementsByClassName('product__images-item-current')[0];
    const currentImageIndex = Array.from(productImages.children).indexOf(currentImage);

    currentImage.classList.remove('product__images-item-current');
    currentImage.classList.add('product__images-item-left');

    toggleNextButton(imageContainer, true);
    togglePreviousButton(imageContainer, true);

    function isTransitioned() {
        if (currentImageIndex + 1 < productImages.children.length - 1) toggleNextButton(imageContainer);
        togglePreviousButton(imageContainer);
        
        currentImage.removeEventListener('transitionend', isTransitioned);
    }

    currentImage.addEventListener('transitionend', isTransitioned);

    productImages.children[currentImageIndex + 1].classList.remove('product__images-item-right');
    productImages.children[currentImageIndex + 1].classList.add('product__images-item-current');
}

function previousImage(imageContainer, productImages) {
    const currentImage = document.getElementsByClassName('product__images-item-current')[0];
    const currentImageIndex = Array.from(productImages.children).indexOf(currentImage);

    currentImage.classList.remove('product__images-item-current');
    currentImage.classList.add('product__images-item-right');

    toggleNextButton(imageContainer, true);
    togglePreviousButton(imageContainer, true);

    function isTransitioned() {
        if (currentImageIndex > 1) togglePreviousButton(imageContainer, false);
        toggleNextButton(imageContainer);
        
        currentImage.removeEventListener('transitionend', isTransitioned);
    }
    
    currentImage.addEventListener('transitionend', isTransitioned);

    productImages.children[currentImageIndex - 1].classList.add('product__images-item-current');
    productImages.children[currentImageIndex - 1].classList.remove('product__images-item-left');

    
}

function togglePreviousButton(imageContainer, boolean) {
    imageContainer.getElementsByClassName('trigger-previous-image')[0].disabled = boolean;
}

function toggleNextButton(imageContainer, boolean){
    imageContainer.getElementsByClassName('trigger-next-image')[0].disabled = boolean;
}