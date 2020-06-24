document.addEventListener('DOMContentLoaded', function(e){
  let counter = document.getElementById('counter');
  let seconds = parseInt(counter.innerText)
   
  function incrementSeconds() {
     counter.innerText = seconds += 1  }
 
     let cancel = setInterval(incrementSeconds, 1000);
 
     const plus = document.getElementById('plus')
     const minus = document.getElementById('minus')
     const likes = document.getElementById('heart')
     const pause = document.getElementById('pause')
     const commentForm = document.getElementById('comment-form')
 
     plus.addEventListener('click', function(e) {
         counter.innerText = seconds + 1
     })
 
     minus.addEventListener('click', function(e) {
         counter.innerText = seconds - 1
     })
     
     pause.addEventListener('click',function(e){
       if(pause.innerText === "pause"){
        pause.innerText = "Resume"
        clearInterval(cancel)
        plus.disabled = true
        minus.disabled = true
        likes.disabled = true
       }
       else if(pause.innerText === "Resume"){
         cancel = setInterval(incrementSeconds, 1000);
      // let resume = setInterval(incrementSeconds, 1000);
      pause.innerText = "pause" 
      plus.disabled = false
      minus.disabled =false
        likes.disabled = false
     }})
 
     likes.addEventListener('click', function(e) {
         const likesUl = (document.querySelector("body > ul"))
         let newLike = document.createElement('li')
         let likesCount = 0
         newLike.innerHTML = counter.innerText + " has been liked <span>"+(likesCount+1)+"</span> times"
         likesUl.append(newLike)
     })
 
     commentForm.addEventListener('submit', function(e){
         e.preventDefault()
             let formText = this.children[0]
             content = formText.value;
             formText.value = "";
             let commentList = document.querySelector(".comments")
             let comment = document.createElement("p");
             comment.innerText = content
             commentList.appendChild(comment)
         
     })
 
 })
 