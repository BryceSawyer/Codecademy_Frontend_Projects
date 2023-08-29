console.log('hello world')


const dayCounter = document.getElementById("day-counter");

const dateStarted = new Date("11-29-2022");

const oneDay = 24 * 60 * 60 * 1000;

const intlNumberFormatter = new Intl.NumberFormat();

setInterval(() => {
  const now = new Date();
  const difference = Math.round(Math.abs((dateStarted - now) / oneDay));
   
   dayCounter.innerText = intlNumberFormatter.format(difference);
}, 1000);


function myFunction() {
    const element = document.body;
    element.classList.toggle("dark-mode");
  }