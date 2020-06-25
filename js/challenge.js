// JS App 
    // Features         HTML Elements
    // Behaviors        JS Functions

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

document.addEventListener("DOMContentLoaded", () => {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// JS App               (access via terminal command: open index.html)
    // Features 
        // counter      timing event
        // plus/minus   button          increments/decrements counter      
        // heart        button          likes
        // comments     form            form box w/ submit  

    const counter = document.getElementById('counter')

    const plusButton = document.getElementById("plus")
    const minusButton = document.getElementById("minus")

    const likesUl = document.querySelector("body > ul")
    const likeButton = document.getElementById("heart")

    const commentsDiv = document.getElementById("list")
    commentFormContent = document.getElementById("comment-input")
    submitButton = document.getElementById("submit")


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Behaviors 
        // counter      As a user, I should see the timer increment every second once the page has loaded.
            // pause    As a user, I can pause the counter, which should:
                            // pause the counter
                            // disable all buttons except the pause button
                            // the pause button should then show the text "resume." 
                                // When 'resume' is clicked, it should restart the counter and re-enable the buttons.

        // plus/minus   As a user, I can manually increment and decrement the counter using the plus and minus buttons.
        
        // likes        As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
        
        // comments     As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






    // * A Counter that increases by 1 each second
// setinterval on counter (seconds)
// increment by one

    
    
    console.log(likesUl)
    
    // console.log(pageCounter)
    let timer = setInterval(incrementFunc, 1000)
    function incrementFunc () {
    pageCounter.innerText = parseInt(pageCounter.innerText) + 1 
    }
    incrementFunc()
    
    function decrementFunc () {
    pageCounter.innerText = parseInt(pageCounter.innerText) - 1 
    }
    
    plusButton.addEventListener("click", incrementFunc)
    minusButton.addEventListener("click", decrementFunc)
    
    
    // likeButton.addEventListener("click", addLikes)
    // function addLikes () {
    // likesLi = document.createElement("li")
    // // likes = parseInt(likesLI)
    // likesLi.dataset.likes = 1
    
    
    
    // // likesLi.innerText = parseInt(likesLi.innerText) + 1 
    // likesUl.append(likesLi)
    // }
    
    
    submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    newCommentDiv = document.createElement("div")
    newComment = commentFormContent.value
    newCommentDiv.innerText = newComment
    commentsDiv.append(newCommentDiv)
    
    
    })
    
    
    })
    
    
    
    
    
    /* <ul class='likes'></ul> */
    
    
    
    
    
    
    
    
    // * Plus and Minus buttons that increment or decrement the counter
    // click listener on the plus and minus buttons
    // increment or decrement counter
    
    
    // * A 'like' button (❤️) that adds a 'like' for the number that is currently displayed by the timer
    // find the like button
    // click listener 
    // increment likes
    
    // * A comment box that adds comments when submitted