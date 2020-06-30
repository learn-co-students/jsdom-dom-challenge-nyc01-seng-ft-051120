// JS App 
    // Features         HTML Elements
    // Behaviors        JS Functions

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


// Read entire README.md 

    // Enter into the terminal: 'open index.html'         =>          Opens up the web app in Google Chrome 
    // cmd+opt+i to show console (elements section)
    // List out these things from the README.md: (*see below)
        // Features 
            // Create features as variables.
        // Behaviors 
            // Create behaviors as functions. 

//  Write this on top of the .js file in order to indicate that this is an app with events. 
    
    document.addEventListener("DOMContentLoaded", () => {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 



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

// Building the 'like button': 
    
    // Create the following variable for the like button (named 'heart'): 
        // heartButton
            const heartButton = document.getElementById('heart')

    // Create the following function: 

heartButton.addEventListener('click', function(e)) 
    // 'heartButton' => tells us where the element is located
    // '.addEventListener' function, which has these two arguments:      
        // (1) type of event, and 
            // Link to all types of JS events: https://www.w3schools.com/js/js_events.asp
        // (2) callback action:
            // 'function(e) { }' 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Building the comment box with a submit button:

    // Create the following variable for the 'submit' button (named 'submit'):
            const submitButton = document.querySelector("#submit")

    // Create the following function/s: 

submitButton.addEventListener('click', function(e){
    // 'submitButton" => tells us where this element is located on the web page 
    e.preventDefault()
    // *Note: 'preventDefault' method is used only within forms. 
    // 'preventDefault' makes sure the web page does not refresh after user clicks on 'submmit'. 
    
    let commentDiv = document.createElement('div')
    // use 'let' (and not 'const') 
    // creates a new container 
    
    let comment = document.querySelector("#comment-input").value
    // fills that new container with the user's input ("#comment-input")
    // '.value' added to the comment field to indicate we're grabbing what user inputs 
    
    document.querySelector("#comment-input").value = ''
    // '.querySelector' can be added to either documents or elements.

    commentDiv.innerText = comment
    // '.innerText' refers to the plain text between the div tag
    // *innerText vs. innerHTML: 
        // innerText is used if only plain text - e.g. <div>Hello, World</div>

    commentsDiv.append(commentDiv)
    // 'commentsDiv' is a variable created to hold the list's location within index.html.     
    // '.append' adds the user's comment to the list 

})





// //increment the counter
// //find the counter element/node
// //increase that counter every second 

// const counter = document.getElementById('counter')
// const minusButton = document.getElementById('minus')
// const plusButton = document.getElementById('plus')
// const heartButton = document.getElementById('heart')
// const pauseButton  = document.getElementById('pause')
// const submitButton = document.querySelector("#submit")
// const likesUL = document.querySelector("body > ul")
// const commentsDiv = document.querySelector("#list")

// let isTimerRunning = true



// let timer = setInterval(incrementCounter, 1000);

function incrementCounter(){
    let number = parseInt(counter.innerText)
    number++
    counter.innerText = number
}

function decrementCounter(){
    let number = parseInt(counter.innerText)
    number--
    counter.innerText = number
}

plusButton.addEventListener('click', incrementCounter)
minusButton.addEventListener('click', decrementCounter)
heartButton.addEventListener('click', function(e){
    let liExist = document.getElementById(`${counter.innerText}Likes`)
    if (liExist){
        let likes = parseInt(liExist.dataset.likes)
        likes += 1
        liExist.dataset.likes = likes 
        liExist.innerText = `${counter.innerText} has been liked ${liExist.dataset.likes} times`
    }else {
        let likeLI = document.createElement('li')
        likeLI.dataset.likes = 1
        likeLI.id = `${counter.innerText}Likes`
        likeLI.innerText = `${counter.innerText} has been liked ${likeLI.dataset.likes} time`
        likesUL.append(likeLI)
    }
})
pauseButton.addEventListener('click', function(e){
    if (isTimerRunning === true) {
        clearInterval(timer)
        pauseButton.innerText = 'resume'
        minusButton.disabled = true
        plusButton.disabled = true
        heartButton.disabled = true
        submitButton.disabled = true
        isTimerRunning = false
    } else {
        timer = setInterval(incrementCounter, 1000);
        pauseButton.innerText = 'pause'
        minusButton.disabled = false
        plusButton.disabled = false
        heartButton.disabled = false
        submitButton.disabled = false
        isTimerRunning = true
    }
})

submitButton.addEventListener('click', function(e){
    e.preventDefault()
    let commentDiv = document.createElement('div')
    let comment = document.querySelector("#comment-input").value
    document.querySelector("#comment-input").value = ''
    commentDiv.innerText = comment
    commentsDiv.append(commentDiv)
})


// plusButton.addEventListener('click', function(e){
//     incrementCounter()
// })
// minusButton.addEventListener('click', function(e){
//     decrementCounter()
// })
