
let heroSection = document.querySelector('.hero');


let leftItem = document.querySelector('.hero-item:first-child');


let rightItem = document.querySelector('.hero-item:last-child');


leftItem.addEventListener('mouseover', function() {
    leftItem.style.clipPath = 'polygon(0 0, 70% 0, 60% 100%, 0% 100%)';
});

rightItem.addEventListener('mouseover', function() {
    leftItem.style.clipPath = 'polygon(0 0, 40% 0, 30% 100%, 0% 100%)';
});


heroSection.addEventListener('mouseleave', function() {
    leftItem.style.clipPath = 'polygon(0 0, 55% 0, 45% 100%, 0% 100%)';
});