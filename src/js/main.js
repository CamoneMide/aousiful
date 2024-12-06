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
