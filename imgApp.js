
const smallImg = document.querySelectorAll('.gallery img');
// console.log(smallImg)
const largeImg = document.querySelector('.large-img');
const modal = document.querySelector('.modal');

// display large image when click on small img

smallImg.forEach(function(img) {
    img.addEventListener('click', function() {
        modal.classList.add('popup');
        largeImg.classList.add('popup');
        const changeSize = img.getAttribute('alt');
        largeImg.src = `img/large/${changeSize}.jpg`;
    });
});

modal.addEventListener('click', function(e) {
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('popup');
        largeImg.classList.remove('popup');
    };
});

