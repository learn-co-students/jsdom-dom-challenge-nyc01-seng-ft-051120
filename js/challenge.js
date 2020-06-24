

document.addEventListener("DOMContentLoaded", () => {
    let count = 0
    const likeCount = {}

    let htmlCounter = document.getElementById("counter")
    let ourInterval = setInterval(function(){count++; htmlCounter.innerText = count;},1000)
    
    document.addEventListener("submit", function(e){
        e.preventDefault()
        const form = e.target
        const comment = form.comment.value
        const p = document.createElement('p')
        p.textContent = comment
        document.querySelector('#list').append(p)
        form.reset()
    })

    // function handleClicks(){

    

    document.addEventListener("click", function(e){

        
        if (e.target.id==="minus"){
            count--
            htmlCounter.innerText = count
        }

        if (e.target.id==="plus"){
            count++
            htmlCounter.innerText = count
        }

        if (e.target.id==="pause"){

            let pauseButton = e.target

            if (pauseButton.innerText === 'pause'){
                
                clearInterval(ourInterval)
                let minusButton = document.getElementById("minus")
                minusButton.disabled = true
                let plusButton = document.getElementById("plus")
                plusButton.disabled = true
                let heartButton = document.getElementById("heart")
                heartButton.disabled = true
                let submitButton = document.getElementById("submit")
                submitButton.disabled = true
                pauseButton.innerText = 'resume'
                
            }

            else if (pauseButton.innerText === 'resume'){

                ourInterval = setInterval(function(){count++; htmlCounter.innerText = count;},1000)
                let minusButton = document.getElementById("minus")
                minusButton.disabled = false
                let plusButton = document.getElementById("plus")
                plusButton.disabled = false
                let heartButton = document.getElementById("heart")
                heartButton.disabled = false
                let submitButton = document.getElementById("submit")
                submitButton.disabled = false
                pauseButton.innerText = 'pause'
            }


        }


        if (e.target.id=="heart"){

        const counter = document.getElementById('counter')
        const currentNum = parseInt(counter.textContent)
        
            if(!likeCount[currentNum]){ // number is not in likeCount
            likeCount[currentNum] = 1
            const ul = document.querySelector('.likes')
            const li = document.createElement('li')
            li.dataset.number = currentNum
            li.textContent = `${currentNum} has been liked 1 time`
            ul.append(li)
            } else if(likeCount[currentNum]) { // number has been liked
            likeCount[currentNum] += 1
            const li = document.querySelector(`[data-number="${currentNum}"]`)
            li.textContent = `${currentNum} has been liked ${likeCount[currentNum]} times`
            }
        }

    })



    // }
    
    
    // handleClicks()
    
    

});