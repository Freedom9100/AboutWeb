const burgerBtn = document.querySelector('.burger');
const burger = document.querySelector('.adaptive-nav');

burgerBtn.addEventListener("click", function () {
  if (burger.classList.contains('active')) {
      burger.classList.remove('active');
  }
   else {
      burger.classList.add('active');
  }
})