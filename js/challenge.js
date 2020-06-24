let count = 0

document.addEventListener("DOMContentLoaded", () => {

    let htmlCounter = document.getElementById("counter")

    let ourInterval = setInterval(function(){count++; htmlCounter.innerText = count;},1000)

    let minusButton = document.getElementById("minus")
    let plusButton = document.getElementById("plus")


    function handleClicks(){

        const body = document.getElementsByTagName("body")[0]

        body.addEventListener("click", function(e){

            
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
                    pauseButton.innerText = 'resume'
                }

                if (pauseButton.innerText === 'resume'){

                    clearInterval(ourInterval)
                    let minusButton = document.getElementById("minus")
                    minusButton.disabled = false
                    let plusButton = document.getElementById("plus")
                    plusButton.disabled = false
                    let heartButton = document.getElementById("heart")
                    heartButton.disabled = false
                    pauseButton.innerText = 'pause'
                }


            }

            if (e.target.id=="heart"){

                // const liAll = document.getElementsByTagName('li')
                // const liArray = Array.from(liAll)

                // const existingLiLike = document.querySelector(`li[data-number=${count}]`)

                if (document.querySelector(`li[data-number=${count}]`)) {
                    
                    let likeCount = existingLiLike.querySelector("span").innerText
                    existingLiLike.innerHTML = `${count} has been liked <span>${likeCount.parseInt++}</span> times`

                } else {

                    let  likeCount=1
                    let newLikeLi = document.createElement('li')
                    // newLikeLi.dataset.num = count
                    newLikeLi.innerHTML = `${count} has been liked <span>${likeCount}</span> time`
                    
                    let ul = document.getElementsByClassName("likes")[0]
                    ul.appendChild(newLikeLi)
            
                }

            }

        })



    }
    
    
    handleClicks()
    
    

});