const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// navigation bar
let navBar = document.querySelectorAll("nav");
navBar[0].children[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[0].children[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[0].children[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[0].children[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[0].children[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[0].children[5].textContent = siteContent["nav"]["nav-item-6"];

let green = navBar.forEach(item => item.style.color = "green");

// header
let title = document.querySelectorAll(".cta-text");
title[0].children[0].textContent = siteContent["cta"]["h1"]
title[0].children[1].textContent = siteContent["cta"]["button"]

// images
let headImg = document.querySelector("#cta-img");
headImg.setAttribute('src', siteContent["cta"]["img-src"]);

let centerImg = document.querySelector(".middle-img");
centerImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// body
let main = document.querySelectorAll(".text-content");

main[0].children[0].textContent = siteContent["main-content"]["features-h4"];
main[0].children[1].textContent = siteContent["main-content"]["features-content"];

main[1].children[0].textContent = siteContent["main-content"]["about-h4"];
main[1].children[1].textContent = siteContent["main-content"]["about-content"];

main[2].children[0].textContent = siteContent["main-content"]["services-h4"];
main[2].children[1].textContent = siteContent["main-content"]["services-content"];

main[3].children[0].textContent = siteContent["main-content"]["product-h4"];
main[3].children[1].textContent = siteContent["main-content"]["product-content"];

main[4].children[0].textContent = siteContent["main-content"]["vision-h4"];
main[4].children[1].textContent = siteContent["main-content"]["vision-content"];

// contact
let contact = document.querySelector(".contact");
contact.children[0].textContent = siteContent["contact"]["contact-h4"];
contact.children[1].textContent = siteContent["contact"]["address"];
contact.children[2].textContent = siteContent["contact"]["phone"];

// function for addresson two lines?
let split = () => contact.children[1].splice(19,30);
console.log(split);

// footer
let copyright = document.querySelector("footer");
copyright.children[0].textContent = siteContent["footer"]["copyright"];
