const bar = document.getElementById("open-menu");
const close = document.getElementById("close-menu");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    bar.style.display = "none";
});
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
        bar.style.display = "block";
  });
}


const counters = document.querySelectorAll('.count');
const speed = 2;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 200);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});


// let counts=setInterval(updated);
// let upto=0;
// function updated(){
//     var count= document.querySelectorAll(".count");
//     count.innerHTML=++upto;
//     if(upto===100)
//     {
//         clearInterval(counts);
//     }
// }