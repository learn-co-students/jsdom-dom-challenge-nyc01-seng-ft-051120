document.addEventListener('DOMContentLoaded', function(e){
  const count = document.getElementById("counter")
  console.log(count)
  //PLUS AND MINUS BUTTONS
  const buttonContainer = document.querySelector('.buttons')
  buttonContainer.addEventListener('click', function(e) {
    if (e.target.id === "minus") {
      count.innerText--
    }
    if (e.target.id === "plus") {
      count.innerText++
    }
  })
  //INCREMENT AND PAUSE
  const pause = document.getElementById("pause")
  let int = setInterval((() =>  count.innerText++), 1000)
     pause.addEventListener("click", function (e) {
        // pauseCounter();
        let status = e.target.textContent;
        if (status === " pause ") {
           clearInterval(int)
           e.target.textContent = " resume ";
           heart.disabled = true;
           plus.disabled = true;
           minus.disabled = true;
        }
        else {
          //  int = setInterval(secondsCount, 1000)
           int = setInterval((() =>  count.innerText++), 1000)
           e.target.textContent = " pause ";
           heart.disabled = false;
           plus.disabled = false;
           minus.disabled = false;
        }
     })
  })