let inp = document.querySelector(".input");
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Example use:
function searchQuery() {
  console.log("Searching...");
}

const debouncedSearch = debounce(searchQuery, 500);

// Suppose this runs every time user types a key:
inp.addEventListener("keyup", debouncedSearch);