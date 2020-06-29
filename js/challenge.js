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



// document.addEventListener("DOMContentLoaded", function (e) {

//    const counter = document.getElementById("counter")
//    let running = true
//    const likes = {}
//    const form = document.getElementById("comment-form")

//    let timer = setInterval(function () {
//       incrementCounter(1)
//    }, 1000);

//    function incrementCounter(number) {
//       currentSecond = parseInt(counter.textContent)
//       if (!(currentSecond < 1 && number < 0)) {
//          counter.textContent = currentSecond + number
//       }
//    }

//    function createLikeLi(second) {
//       const likeLi = document.createElement("li")
//       likeLi.dataset.number = second
//       likeLi.textContent = ` ${second} second(s) has 1 like`
//       return likeLi
//    }

//    function incrementSecondsLike(second) {
//       if ((likes[second])) {
//          const existingLi = document.querySelector(`[data-number="${second}"]`)
//          likes[second]++ //= parseInt(likes[second])++
//          existingLi.textContent = `${second} second(s) has ${likes[second]} likes`
//       } else {
//          likes[second] = 1
//          const likesUl = document.querySelector("ul.likes")
//          const li = createLikeLi(second)
//          likesUl.append(li)
//       }
//    }

//    document.addEventListener("click", function (e) {
//       e.preventDefault
//       if (e.target.textContent === " ➕ " && running === true) {
//          incrementCounter(1)
//       } else if (e.target.textContent === " ➖ " && running === true) {
//          incrementCounter(-1)
//       } else if (e.target.textContent === " ❤️ " && running === true) {
//          const second = counter.textContent
//          incrementSecondsLike(second)
//       } else if (e.target.textContent === " pause ") {
//          running = false
//          clearInterval(timer)
//          e.target.textContent = " resume "
//       } else if (e.target.textContent === " resume ") {
//          running = true
//          timer = setInterval(function () {
//             incrementCounter(1)
//          }, 1000);
//          e.target.textContent = " pause "
//       }
//    })

//    function renderCommentP(input) {
//       const commentP = document.createElement('p')
//       commentP.className = "comment"
//       commentP.textContent = input
//       form.append(commentP)
//    }

//    form.addEventListener("submit", function (e) {
//       e.preventDefault()
//       textField = form.querySelector("#comment-input")
//       if (textField.value !== "") {
//          renderCommentP(textField.value)
//          form.reset()
//       }

//    })

// })


