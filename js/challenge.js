

document.addEventListener('DOMContentLoaded', function(e){
    const likeCount = {}
  
    let timer = setInterval(function(){
      incrementCounter(1)
    }, 1000)
  
    document.addEventListener('submit', function(e){
      e.preventDefault()
      const form = e.target
      const comment = form.comment.value
      const p = document.createElement('p')
      p.textContent = comment
      document.querySelector('#list').append(p)
      form.reset()
    })
  
    document.addEventListener('click', function(e){
      if(e.target.id === "minus"){
        incrementCounter(-1)
      } else if (e.target.id === "plus"){
        incrementCounter(1)
      } else if (e.target.id === "heart"){
        // base case number is liked for the first time
        const counter = document.getElementById('counter')
        const currentNum = parseInt(counter.textContent)
        
        if(!likeCount[currentNum]){ // number is not in likeCount
          likeCount[currentNum] = 1
          const ul = document.querySelector('.likes')
          const li = document.createElement('li')
          li.dataset.number = currentNum
          li.textContent = `${currentNum} has been liked 1 time!! 🤡`
          ul.append(li)
        } else if(likeCount[currentNum]) { // number has been liked
          likeCount[currentNum] += 1
          const li = document.querySelector(`[data-number="${currentNum}"]`)
          li.textContent = `${currentNum} has been liked ${likeCount[currentNum]} times!! 👾`
        }
      } else if (e.target.id === "pause"){
        clearInterval(timer)
  
        document.querySelector('#minus').disabled = true
        document.querySelector('#plus').disabled = true
        document.querySelector('#heart').disabled = true
        document.querySelector('#submit').disabled = true
  
        e.target.textContent = 'resume'
        e.target.id = 'resume'
      } else if (e.target.id === 'resume'){
        timer = setInterval(function(){
          incrementCounter(1)
        }, 1000)
  
        document.querySelector('#minus').disabled = false
        document.querySelector('#plus').disabled = false
        document.querySelector('#heart').disabled = false
        document.querySelector('#submit').disabled = false
  
        e.target.textContent = 'pause'
        e.target.id = 'pause'
      }
    })
  
    function incrementCounter(n){
      const counter = document.getElementById('counter')
      const currentNum = parseInt(counter.textContent)
      const newNum = currentNum + n
      counter.textContent = newNum
    }
  
  
  
  })


// function incrementCounter(){
//     const appCounter = document.getElementById('counter')
//     appCounter.innerText++;
// }
  
// let setTime = setInterval( "incrementCounter()", 1000); 
// function decrementCounter(){
//     const appCounter = document.getElementById('counter')
//     appCounter.innerText--;
// }

// let plusCounter = document.getElementById('plus');
// plusCounter.addEventListener("click", incrementCounter);

// let minusCounter = document.getElementById('minus');
// minusCounter.addEventListener("click", decrementCounter);
  
// const heart = document.getElementById("heart")
// heart.addEventListener('click', function(e){
//     const button = e.target
//     let numHearts = button.count
//     let heartsLi = document.createElement('li')
//     heartsLi.className = "likes";
//     heartsLi.innerHTML = `${counter} has ${numHearts} likes`
// })
    
