document.addEventListener("DOMContentLoaded", function(){

    const idCounter = document.getElementById("counter")
    const plusButton = document.getElementById("plus")
    const minusButton = document.getElementById("minus")
    const heartButton = document.getElementById("heart")
    const pauseButton = document.getElementById("pause")
    const commentButton = document.getElementById("submit")
    const commentList = document.getElementById("list")
    let paused = false

    plusButton.addEventListener("click", function(e){
        let numCount = parseInt(idCounter.innerText)
        idCounter.innerText = numCount += 1
     
    })

    minusButton.addEventListener("click", function(e){
        let numCount = parseInt(idCounter.innerText)
        idCounter.innerText = numCount -= 1
        

    })

    
    heartButton.addEventListener("click", function(e){
        let likesCount = document.getElementsByClassName("likes")[0]
        let allLikes = document.getElementsByClassName("likesLi")
       
        let newLike = document.createElement("li")
            newLike.innerHTML = `
            ${idCounter.innerText} has been liked 
            <span id="span-${idCounter.innerText}">1</span>
            time(s)
           
            `
            newLike.dataset.num = `${idCounter.innerText}`
            newLike.className = "likesLi"

        let likesArray = Array.from(allLikes).map(function(e){
            return e.dataset.num;
           
        })
 

        if (likesArray.includes(newLike.dataset.num)) {   
            let span = document.getElementById(`span-${idCounter.innerText}`)
            let numLikes = parseInt(span.innerText)
                numLikes += 1
            span.innerText = numLikes
        } 
        else {
            likesCount.append(newLike)
        }

    })
    
    
    setInterval(() => {
    if (!paused) 
    {let intCount = parseInt(idCounter.innerText)
            intCount += 1
            idCounter.innerText = intCount}
      
   }, 1000); 

    pauseButton.addEventListener("click", function(e){
        paused = !paused
        if (paused) {
            pauseButton.innerText = "resume"
        } else {
            pauseButton.innerText = "pause"
        }
    })

    commentButton.addEventListener("click", function(e){
        e.preventDefault();
        const commentForm = document.getElementById("comment-input")
        let commentText = commentForm.value
        let comment = document.createElement("li")
        comment.innerText = commentText
        commentList.append(comment)
     
    })

    

})