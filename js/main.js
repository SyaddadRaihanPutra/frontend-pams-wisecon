'use strict';

const addEventOnElement = function(element, type, listener){
    if(element.length > 1){
        for(let i = 0; i < element.length; i++){            
        element[i].addEventListener(type, listener);
        }
    }
    else{
        element.addEventListener(type, listener)
    }
}

//============ NAVBAR ===============//
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelector("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);

const closeNav = function(){
    navbar.classList.remove("active");
    navToggler.classList.remove("active")
}

addEventOnElement(navLinks, "clicks", closeNav);

// Adding the active class to the header
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function(){
    if(this.window.scrollY >= 50){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active")
    }
});

// Tab Button
const tabBtns = document.querySelectorAll("[data-tab-btn]");

let lastClickedTabBtn = tabBtns[0];

const changeTab = function(){
    lastClickedTabBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedTabBtn = this;
}

addEventOnElement(tabBtns, "click", changeTab)

function toggleDropdown() {
    var profileDropdown = document.querySelector('.user-profile');
    profileDropdown.classList.toggle('active');
}

function logout() {
    // Proses logout, misalnya redirect ke halaman logout atau hapus session
    alert("Tombol logout ditekan");
}

// Tutup dropdown saat klik di luar dropdown
window.onclick = function (event) {
    if (!event.target.matches('.user-profile') && !event.target.closest('.user-profile')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }
        }
    }
}