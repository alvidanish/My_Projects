"strict";

const counterEl = document.querySelectorAll(".counter");

counterEl.forEach((mov) => {
  mov.innerText = "0";
  function increment() {
    let currentNum = +mov.innerText;
    const dataNum1 = mov.getAttribute("data-num1");
    // console.log(dataNum1);
    const increments = dataNum1 / 15;
    currentNum += Math.ceil(increments);
    if (currentNum < dataNum1) {
      mov.innerText = currentNum;
      setTimeout(increment, 100);
    } else {
      mov.innerText = dataNum1;
    }
  }
  increment();
});
