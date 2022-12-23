let button = document.getElementById("to-top-button");
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.opacity = "1";
    button.style.transition = "0.3s ease-out";
    navbar.style.height = "60px";
    navbar_bg.style.height = "60px";
    navbar.style.transition = "0.5s ease-out";
    navbar_bg.style.transition = "0.5s ease-out";
  } else {
    button.style.opacity = "0";
    button.style.transition = "0.3s ease-out";
    navbar.style.height = "80px";
    navbar_bg.style.height = "80px";
    navbar.style.transition = "0.5s ease-out";
    navbar_bg.style.transition = "0.5s ease-out";
  }
}



function scrollToTop() {
  document.documentElement.scrollTop = 0;
}



const speed = 200;

document.querySelectorAll('#number').forEach(counter => {

  const counterNumber = +counter.getAttribute('countTo');

  const updateCount = setInterval(() => {

    const divContent = +counter.innerText;
    const increaseBy = counterNumber / speed;

    divContent < counterNumber ?
      counter.innerHTML = Math.ceil(divContent + increaseBy) :
      clearInterval(updateCount);

  }, 10);

});



