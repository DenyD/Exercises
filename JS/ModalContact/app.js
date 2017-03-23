var contactMeBtn = document.querySelector(".contact-me-btn");
contactMeBtn.addEventListener("click", function() {
    document.body.classList.add("modal-opened");
}, false);

var closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function() {
    document.body.classList.remove("modal-opened");
}, false);

document.addEventListener("keyup" , function (esc) {
    if (esc.keyCode === 27) {
        document.body.classList.remove("modal-opened");
    }
}, false);

var contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("click", function() {
    document.body.classList.remove("modal-opened");
}, false);