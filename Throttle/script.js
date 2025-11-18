let inp = document.querySelector(".input")
function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Example use:
function onScroll() {
  console.log("Scroll event running...");
}

const throttledScroll = throttle(onScroll, 500);

inp.addEventListener("keyup", throttledScroll);