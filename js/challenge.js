// time function
// eventlisteners click for plus, minus, heart, pause
// eventListeners submit for comment button
// plus and minus need to incr and decr the timer
// setTimeout
// setInterval
// clearInterval
// set up timer to increase each second

document.addEventListener("DOMContentLoaded", function(){
let int = setInterval(secondsCount, 1000)

const liked = {}

const counter = document.getElementById('counter')

function secondsCount() {
   counter.textContent = parseInt(counter.textContent) + 1
}



const minus = document.getElementById("minus")
minus.addEventListener("click", function (e) {
   decreaseCounter()
})

const plus = document.getElementById("plus")
plus.addEventListener("click", function (e) {
   secondsCount()
})

function decreaseCounter() {
   counter.textContent = parseInt(counter.textContent) - 1
}

const likesUl = document.querySelector(".likes")

function numberLi(key, value) {
      const li = document.createElement('li')
      li.id = key
      li.textContent = `number: ${key} with ${value} likes`
      likesUl.append(li)
}

function updateNumberLi(key, value){
   let li = document.getElementById(key)
   li.textContent = `number: ${key} with ${value} likes`

}

const heart = document.getElementById("heart")
heart.addEventListener("click", function (e) {
   if (liked[counter.textContent] === undefined) {
      liked[counter.textContent] = 1;
         numberLi(`${counter.textContent}`, `${liked[counter.textContent]}`);
   }
   else {
      liked[counter.textContent]++;
      updateNumberLi(`${counter.textContent}`, `${liked[counter.textContent]}`);

   }
   console.log(liked)
})



const pause = document.getElementById("pause")
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
         int = setInterval(secondsCount, 1000)
         e.target.textContent = " pause ";
         heart.disabled = false;
         plus.disabled = false;
         minus.disabled = false;
      }
   })

   const comments = document.querySelector(".comments")


   const commentForm = document.getElementById("comment-form")
   commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      inputData = new FormData(commentForm);
      textInput = inputData.values().next()["value"];
      comments.insertAdjacentHTML(`afterbegin`, `<div>${textInput}</div>`);
      commentForm.reset();

   } 
   )


})



