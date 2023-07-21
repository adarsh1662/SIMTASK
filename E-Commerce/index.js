const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const addList = document.querySelector(".add");


if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

