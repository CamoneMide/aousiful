// ********** Loader ************
const loaderContainer = document.querySelector(".tLoaderCont");
const pageContent = document.querySelector(".tPageCont");

window.addEventListener("load", () => {
  loaderContainer.classList.add("tLhide");
  pageContent.classList.add("tPVisisble");
});

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
const rootElement = document.documentElement;

navTogBtn.addEventListener("click", () => {
  navTog.classList.toggle("navTog-show");
  rootElement.toggleAttribute("menu-open");
  if (navTog.classList.contains("navTog-show")) {
    navbar.classList.add("shPStickyTest");
  } else {
    navbar.classList.remove("shPStickyTest");
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const scrollHeight = window.pageYOffset;
const navHeight = navbar.getBoundingClientRect().height - 8;

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
    rootElement.toggleAttribute("menu-open");
    navbar.classList.remove("shPStickyTest");
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
const testimonyImg = document.querySelector(".testimonyImg");
const testimonyCustName = document.querySelector(".testiCustName");
const testimonyCustProfession = document.querySelector(".testiCustWork");

let testimonyTexth4 = [
  "“My experience with this service was exceptional from start to finish. They went above and beyond to make sure I was comfortable with my choice. The personalized property recommendations, clear lease terms, and support made everything easy. Even renewing my lease was simple and stress free. I feel truly at home here something I haven’t experienced with other rentals. Highly recommend”",
  "“My journey with this service has been nothing short of outstanding. From the moment I reached out, the team provided tailored recommendations that perfectly matched my needs. The process was transparent, with clear explanations every step of the way. Moving in was seamless, and the ongoing support has been phenomenal. They truly prioritize comfort and satisfaction, making me feel valued as a tenant.”",
];
let testimonyImages = [
  "https://s3-alpha-sig.figma.com/img/34c2/9fcc/13966598d6c681731ab4ae2fb73b6132?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQf6hncXceTllKEYU7poOujaJSu4cZtY6UWQ-U-Mx9pC6dnkB1qwe5j2VL7sBPA13tYIc1Up~WJd8trZjY5Xdk8h9Bvhan6gXio0FKmdUkpQJePVPv51jA6YwDPNJB~Qlkb6g9CyQGHeBQjlv4d-kYql5Zx4yBau88RR9LpQz7ITyE03g82ycu7fyl5xedx4L2~~k8d2NPqz28~crEEuTAyNWXomDo9vG7VvS5g~T~gQ6qrUQ0YcOtgNGMHrj~Trzixn7zxvfHNyAD2PKHzxsYQ9EtXeUA3QYQmmYTQNAT-aIfhf0SaRWQFykl20e50p7KRQ9Ng7CYRp~nupvBeQ5g__",
  "https://s3-alpha-sig.figma.com/img/9045/de15/c0ce5d605c4c7b9f3a28b9886ddd4b6f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~eygzxqN9mb-hogKTOYajOnhCupGgsqOkwlvQruXm9clgB8mMMioEDqpT02QWdPbBp8TLrYTWwr74-e8Ygk9UF2vaQKbPPvepLWzybb116a4joPq0FrCpYOacrTw-nRq7Ym6SyIX6lX~AqUzQtfA261hrraMhuDWC~hYmLpocYRJELovzerzsOAIgtyjvvLsSJqfrIgd9bdrC7PtBO946ITakSvJ14OKdWUWb1wIqvmOrE9Nm3BjAluQvvyMLs-lNUzT7U5ya5lNloDhPeJYGuyJGTDGc8SeKGlkt87zl1BvRA2yJcIQbAJ0ZIBUPiOxq-t03hIhGROZ867NaCiiA__",
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
  testimonyImg.src = testimonyImages[testiCurrentIndex];
});
