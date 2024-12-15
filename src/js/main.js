const accordItems = document.querySelectorAll(".shAccordion");
const scrollers = document.querySelectorAll(".scroller");

// Accordion
accordItems.forEach((accordItem) => {
  const accordHead = accordItem.querySelector(".hAccHead");
  const accordCont = accordItem.querySelector(".hAccContent");

  accordHead.addEventListener("click", () => {
    const headSpans = accordHead.querySelectorAll("span");
    const headDiv = accordHead.querySelector(".dSpan");

    accordCont.classList.toggle("hAcContShow");
    headDiv.classList.toggle("dSpanShow");
    headSpans.forEach((headSpan) => {
      headSpan.classList.toggle("minusA");
    });
  });
});

// Scroll Animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller_inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// ********** Toggle navbar ************
const navTog = document.querySelector(".navTog");
const navTogBtn = document.querySelector(".navTogBtn");

navTogBtn.addEventListener("click", () => {
  navTog.classList.toggle("navTog-show");
  if (navTog.classList.contains("navTog-show")) {
    navbar.classList.add("shPStickyTest");
  } else {
    navbar.classList.remove("shPStickyTest");
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const scrollHeight = window.pageYOffset;
const navHeight = navbar.getBoundingClientRect().height;

// const topLink = document.querySelector(".top-link");
// navTog.style.top = `${navHeight}px`;

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  // const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("shPSticky");
  } else {
    navbar.classList.remove("shPSticky");
  }

  // Top Shift

  if (scrollHeight > navHeight) {
    navTog.style.top = `${scrollHeight + navHeight}px`;
  } else {
    navTog.style.top = `${navHeight}px`;
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    // const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("shPSticky");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    navTog.classList.remove("navTog-show");
  });
});

// ********** image sliding ************
const slides = document.querySelectorAll(".imgSlide");
const abtSlides = document.querySelectorAll(".aboutImgSlide");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
abtSlides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let currentIndex = 0;

function moveSlide() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
  abtSlides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
}
function autoPlay() {
  currentIndex++;
  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }
  moveSlide();
}

setInterval(autoPlay, 4000);

let showcaseImages = [
  "/src/assets/images/home-showcase1.jpg",
  "/src/assets/images/home-showcase13.jpg",
  "/src/assets/images/home-showcase14.jpg",
  "/src/assets/images/home-showcase15.jpg",
  "/src/assets/images/home-showcase16.jpg",
];
let aboutImages = [
  "/src/assets/images/home-showcase2.jpg",
  "/src/assets/images/home-showcase17.jpg",
  "/src/assets/images/home-showcase18.jpg",
  "/src/assets/images/home-showcase19.jpg",
  "/src/assets/images/home-showcase20.jpg",
];

// ********** Testimonnail sliding ************
const testimonyArrow = document.querySelector(".testimonyArrow");
const testimonyText = document.querySelector(".testimonyText");
const testimonyImgCont = document.querySelector(".testimonyImgCont");
const testimonyCustName = document.querySelector(".testiCustName");
const testimonyCustProfession = document.querySelector(".testiCustWork");

let testimonyTexth4 = [
  "“My experience with this service was exceptional from start to finish. They went above and beyond to make sure I was comfortable with my choice. The personalized property recommendations, clear lease terms, and support made everything easy. Even renewing my lease was simple and stress free. I feel truly at home here something I haven’t experienced with other rentals. Highly recommend”",
  "“My journey with this service has been nothing short of outstanding. From the moment I reached out, the team provided tailored recommendations that perfectly matched my needs. The process was transparent, with clear explanations every step of the way. Moving in was seamless, and the ongoing support has been phenomenal. They truly prioritize comfort and satisfaction, making me feel valued as a tenant.”",
];
let testimonyImages = [
  "/src/assets/images/person1.jpg",
  "/src/assets/images/person2.jpg",
];
let testimonyCustNameArr = ["David.R", "Allen.Jr"];
let testimonyCustWorkArr = ["Software Engineer", "Social Assistant"];
let testiCurrentIndex = 0;
testimonyArrow.addEventListener("click", () => {
  testiCurrentIndex++;
  if (testiCurrentIndex > testimonyImages.length - 1) {
    testiCurrentIndex = 0;
  }
  testimonyText.innerText = testimonyTexth4[testiCurrentIndex];
  testimonyCustName.innerText = testimonyCustNameArr[testiCurrentIndex];
  testimonyCustProfession.innerText = testimonyCustWorkArr[testiCurrentIndex];

  testimonyImgCont.innerHTML = `
  <img class="w-full h-full object-cover rounded-[15px]"
        src=${testimonyImages[testiCurrentIndex]}
        alt="person"
  />
  `;
});
