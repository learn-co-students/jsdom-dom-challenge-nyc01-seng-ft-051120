
document.addEventListener("DOMContentLoaded", function(e){

    const counter = document.querySelector("#counter");
const buttons = document.querySelector("#buttons");
const likesList = document.querySelector(".likes");
let likes = {};
buttons.addEventListener("click", e => {
  if (e.target.id == "plus") {
    incrementCounter();
  } else if(e.target.id == "minus") {
    decrementCounter();
  } else if(e.target.id == "heart") {
    likeCounter();
  }
})
setInterval(() => {
  incrementCounter()
}, 1000);
incrementCounter = () => {
  counter.textContent = parseInt(counter.textContent) + 1;
}
decrementCounter = () => {
  counter.textContent = parseInt(counter.textContent) - 1;
}
likeCounter = () => {
  let number = counter.innerText;
  if (!likes[number]) {
      likes[number] = 1
  } else {
      likes[number] +=  1
  }
  renderLikes();
}
renderLikes = () => {
    likesList.innerHTML = "";
    Object.entries(likes).forEach((entry) => {
      likesList.innerHTML += `<li>${entry[0]} has ${entry[1]} amount of likes</li>`
    })
}
   
})



/*
3. As a user, I can 'like' an individual number of the counter. 
I should see count of the number of 'likes' associated with that number.

4. As a user, I can pause the counter, which should
pause the counter
disable all buttons except the pause button
the pause button should then show the text "resume."
*/