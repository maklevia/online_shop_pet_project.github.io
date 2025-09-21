const links = document.querySelectorAll('.page-link');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});


const close = document.getElementById('close');
const open = document.getElementById('open');
const popup = document.getElementById('popup');

open.addEventListener('click', () => {
    popup.style.display = 'flex';
    setTimeout(() => {
        popup.classList.add('opened-popup');
    }, 10);
});
function closePopup() {
    popup.classList.remove('opened-popup');
    popup.addEventListener('transitionend', function handler() {
        popup.style.display = 'none';
        popup.removeEventListener('transitionend', handler);
    });
}
close.addEventListener('click', closePopup);
window.addEventListener('click', e => {
    if (e.target === popup) {
        closePopup();
    }
});


document.getElementById('Myform').addEventListener('submit', function(e) {
    const fields = this.querySelectorAll('input[required], textarea[required], input[pattern]');
    let formValid = true;
    fields.forEach(field => {
        const isPatternValid = field.pattern ? new RegExp(field.pattern).test(field.value) : true;
        const isRequiredValid = field.required ? field.value.trim() !== '' : true;
        if (!isPatternValid || !isRequiredValid) {
            formValid = false;
            field.classList.add('error');
            field.value = '';
            if (!isRequiredValid) field.placeholder = "Поле є обов'язковим для заповнення";
            else if (field.name === 'phone') field.placeholder = "Введіть телефон у форматі 0XXXXXXXXX";
            else if (field.name === 'email') field.placeholder = "Введіть електронну пошту";
        } else {
            field.classList.remove('error');
        }
    });
    if (!formValid) {
        e.preventDefault();
    }
});


let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[n].classList.add("active");
}
function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);
}
prevBtn.addEventListener("click", function() {
    plusSlides(-1);
});
nextBtn.addEventListener("click", function() {
    plusSlides(1);
});
window.onload = function() {
    showSlide(slideIndex);
    setInterval(() => plusSlides(1), 4000);
};