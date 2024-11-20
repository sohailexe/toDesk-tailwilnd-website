const navDilag = document.getElementById("nav-dilag");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

const initialTranslate_LTR = -96 * 4;
const initialTranslate_RTL = 36 * 4;

function handleMenu() {
  navDilag.classList.toggle("hidden");
}

function setUpIntersectionObserver(element, isLTR, speed) {
  function intersectionCallBack(entries) {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  }
  const intersectionObserver = new IntersectionObserver(intersectionCallBack);
  intersectionObserver.observe(element);

  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = initialTranslate_LTR + translateX;
    } else {
      totalTranslate = -(initialTranslate_RTL + translateX);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

setUpIntersectionObserver(line1, true, 0.15);
setUpIntersectionObserver(line2, false, 0.15);
setUpIntersectionObserver(line3, true, 0.15);
