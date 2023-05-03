let apps = document.getElementById("apps") ;
let showMenu = document.querySelector(".show-menu") ;
let navBar = document.querySelector("nav") ;
let cross = document.getElementById("cross") ;
let header = document.querySelector("header") ;

apps.addEventListener("click", showMenuBar) ;

function showMenuBar() {
    showMenu.classList.add("show") ;
}

cross.addEventListener("click", removeMenuBar) ;

function removeMenuBar() {
    showMenu.classList.remove("show") ;
}


// Typing Animation using Typed JS
var typed = new Typed(".type", {
    strings: ["a Web", "a MERN Stack"],
    smartBackspace: true,
    startDelay: 1000,
    typeSpeed: 130,
    backDelay: 1000,
    backSpeed: 60,
    loop: true,
});

// On scroll adding shadow on header
window.addEventListener("scroll", () => {
    let elementHeight = header.offsetHeight ;
    if(scrollY > elementHeight) {
        header.classList.add("scroll-header") ;
    } else {
        header.classList.remove("scroll-header") ;
    }
});

// showing scroll up btn
const scrollUpBtn = document.querySelector(".scroll-up-btn") ;

window.addEventListener("scroll", () => {
  const aboutSec = document.querySelector("#about-sub-section") ;
  if(scrollY >= aboutSec.offsetHeight) {
    scrollUpBtn.classList.add("show-scroll-up-btn") ;
  } else {
    scrollUpBtn.classList.remove("show-scroll-up-btn") ;
  }
})

// activating nav links
const navLinks = document.querySelectorAll(".list-items a") ; //for header nav links
const menuNavLinks = document.querySelectorAll(".menu-bar a") ; //for menu-bar nav links
const sections = document.querySelectorAll("section") ;

function activateLinks() { 
  sections.forEach((sec) => {
    let top = window.scrollY ;
    let offsetTop = sec.offsetTop - 250;
    let height = sec.offsetHeight ;
    let id = sec.getAttribute("id") ;

    // if(top >= offsetTop && top < offsetTop + height) {
    //   navLinks.forEach((link, index) => {
    //     link.classList.remove("active-link") ;
    //     document.querySelector('.list-items a[href*=' + id + ']').classList.add('active-link') ;
    //     console.log(index) ;
    //   })
      
    //   menuNavLinks.forEach(link => {
    //     link.querySelector('i').classList.remove('active-link');
    //     link.querySelector('p').classList.remove('active-link') ;
    //     document.querySelector('.menu-bar a[href*=' + id + '] i').classList.add('active-link') ;
    //     document.querySelector('.menu-bar a[href*=' + id + '] p').classList.add('active-link') ;
    //   })
    // }

    if(top >= offsetTop && top < offsetTop + height) {
      addActiveLink(id) ;
      sessionStorage.setItem("navId", id) ;
    } else {
      removeActiveLink(id) ;
    }
  })
}
window.addEventListener("scroll", activateLinks) ;

function addActiveLink(id) {
  // for navbar links
  document.querySelector('.list-items a[href*=' + id + ']').classList.add('active-link') ; 
  // for menubar links
  document.querySelector('.menu-bar a[href*=' + id + '] i').classList.add('active-link') ;
  document.querySelector('.menu-bar a[href*=' + id + '] p').classList.add('active-link') ;
}

function removeActiveLink(id) {
  // for navbar links
  document.querySelector('.list-items a[href*=' + id + ']').classList.remove('active-link') ;
  // for menubar links
  document.querySelector('.menu-bar a[href*=' + id + '] i').classList.remove('active-link') ;
  document.querySelector('.menu-bar a[href*=' + id + '] p').classList.remove('active-link') ;
}


// showing drop down skill list
const skillsHeader = document.querySelectorAll(".skills-header") ;
skillsHeader.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.querySelector("#down-arrow").classList.toggle("rotate-arrow") ;
    element.nextElementSibling.classList.toggle("skills-list-grid");
  })
})

// showing qualification and work 
const qualificationBtn = document.querySelectorAll(".qualification-btn") ;
let qualificationDetail = document.querySelectorAll(".qualification-detail") ;
let currentDetail = qualificationDetail[0] ;
let currentBtn = qualificationBtn[0] ;

qualificationBtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    if(currentDetail != qualificationDetail[index]) {
      // adding color to btn
      currentBtn.classList.remove("qualification-btn-color") ;
      currentBtn = qualificationBtn[index] ;
      currentBtn.classList.add("qualification-btn-color") ;
      
      // showing qualification and work
      currentDetail.classList.remove("qualification-show") ;
      currentDetail = qualificationDetail[index] ;
      currentDetail.classList.add("qualification-show") ; 
    }
  })
})


// Adding and removing borders on form fields
let formFields = document.querySelectorAll(".form-content") ;
let inputFields = document.querySelectorAll(".form-input") ;

inputFields.forEach((inputBox, index) => {
  inputBox.addEventListener("focus", () => {
   formFields[index].classList.add("invalid") ;

   inputBox.addEventListener("input", () => {
    if(inputBox.value.length > 0) {
      formFields[index].classList.remove("invalid") ;
      formFields[index].classList.add("valid") ;
    } else {
      formFields[index].classList.remove("valid") ;
      formFields[index].classList.add("invalid") ;
    }
   })
  })
})

inputFields.forEach((inputBox, index) => {
  inputBox.addEventListener("blur", () => {
    formFields[index].classList.remove("invalid") ;
    formFields[index].classList.remove("valid") ;
  })
})


// Swiper slide code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Formspree customised code
const form = document.getElementById("form") ;

form.addEventListener("submit", handleSubmitData) ;

async function handleSubmitData(event) {
  
  event.preventDefault() ;
  var status = document.getElementById("alert");
  var data = new FormData(event.target) ;

  // fetching link and sending data over it
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  }).then(() => {
    status.innerHTML = "Your message has been sent successfully." ;
    document.querySelector(".alert_style").style.display = "block" ;

    // hiding shown message after 5seconds
    setTimeout(() => {
      document.querySelector(".alert_style").style.display = "none" ;
    }, 5000);
    form.reset() ;
  }).catch(() => {
    status.innerHTML = "Oops! There was a problem delivering your message, please contact via other means.";
    document.querySelector(".alert_style").style.display = "block" ;

    // hidding error message 
    setTimeout(() => {
      document.querySelector(".alert_style").style.display = "none" ;
    }, 5000);
  })
}



// Activating dark and light theme
let darkModeTheme =  "false" ;
let darkModeBtn = document.getElementById("moon") ;
let lightModeBtn = document.getElementById("sun") ;

let themeModeBtns = document.querySelectorAll(".theme-mode-btn") ;

themeModeBtns.forEach((modeBtn, index) => {
  modeBtn.addEventListener("click", () => {
    if(darkModeTheme == "false") {
      darkModeProperties() ;
    } else {
      ligthModeProperties() ;
    }
  })
})


const root = document.documentElement.style;

function darkModeProperties() {
  darkModeBtn.style.display = "none" ;
  lightModeBtn.style.display = "block" ;
  darkModeTheme = "true" ;
  localStorage.setItem("darkModeTheme", "true") ;

  root.setProperty("--first-color-second", "hsl(var(--hue-color), 30%, 8%)") ;
  root.setProperty("--title-color", "hsl(var(--hue-color), 8%, 95%)") ;
  root.setProperty("--text-color", "hsl(var(--hue-color), 8%, 75%)") ;
  root.setProperty("--input-color", "hsl(var(--hue-color), 29%, 16%)") ;
  root.setProperty("--body-color", "hsl(var(--hue-color), 28%, 12%)") ;
  root.setProperty("--container-color", "hsl(var(--hue-color), 29%, 16%)") ;
  root.setProperty("--scroll-bar-color", "hsl(var(--hue-color), 12%, 48%)") ;
  root.setProperty("--scroll-thumb-color", "hsl(var(--hue-color), 12%, 36%)") ;
  root.setProperty("--pagination-bullet-bg-color", "rgba(255, 255, 255)") ;
}

function ligthModeProperties() {
  lightModeBtn.style.display = "none" ;
  darkModeBtn.style.display = "block" ;
  darkModeTheme = "false" ;
  localStorage.setItem("darkModeTheme", "false") ;

  root.setProperty("--first-color-second", "hsl(var(--hue-color), 69%, 61%)") ;
  root.setProperty("--title-color", "hsl(var(--hue-color), 8%, 15%)") ;
  root.setProperty("--text-color", "hsl(var(--hue-color), 8%, 45%)") ;
  root.setProperty("--input-color", "hsl(var(--hue-color), 70%, 96%)") ;
  root.setProperty("--body-color", "hsl(var(--hue-color), 60%, 99%)") ;
  root.setProperty("--container-color", "#fff") ;
  root.setProperty("--scroll-bar-color", "hsl(var(--hue-color), 12%, 90%)") ;
  root.setProperty("--scroll-thumb-color", "hsl(var(--hue-color), 12%, 80%)") ;
  root.setProperty("--pagination-bullet-bg-color", "rgba(0, 0, 0, 0.9)") ;
}

// this functions is called everytime when page is refreshed
initialize() ;

function initialize() {
  if(localStorage.getItem("darkModeTheme") == "true") {
    darkModeProperties() ;
  } else {
    ligthModeProperties() ;
  }

  let navLinkId = sessionStorage.getItem("navId") ;
 
  if(navLinkId === null) {
    sessionStorage.setItem("navId", "Home") ;
    addActiveLink("Home") ;
    // document.querySelector('.list-items a[href*=' + "Home" + ']').classList.add('active-link') ;
    // document.querySelector('.menu-bar a[href*=' + "Home" + '] i').classList.add('active-link') ;
    // document.querySelector('.menu-bar a[href*=' + "Home" + '] p').classList.add('active-link') ;
  } else {
    addActiveLink(navLinkId) ;
    // document.querySelector('.list-items a[href*=' + navLinkId + ']').classList.add('active-link') ;
    // document.querySelector('.menu-bar a[href*=' + navLinkId + '] i').classList.add('active-link') ;
    // document.querySelector('.menu-bar a[href*=' + navLinkId + '] p').classList.add('active-link') ;
  }
}



