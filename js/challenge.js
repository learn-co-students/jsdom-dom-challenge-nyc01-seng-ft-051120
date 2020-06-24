document.addEventListener("DOMContentLoaded", function(e){

  let clockTimer = window.setInterval(countUp, 1000)
   function countUp(){
    let counter = document.getElementById('counter')
    let myCounter = parseInt(counter.innerText)
      counter.innerText = myCounter + 1 
    }


document.addEventListener('click', function(e){
    
    if (e.target.id === "minus"){
        let myCounter = parseInt(counter.innerText)
        counter.innerText = myCounter - 1 }
    else if (e.target.id === "plus"){
        let myCounter = parseInt(counter.innerText)
        counter.innerText = myCounter + 1}
    else if (e.target.id === "heart"){
            let huh = document.createElement('li')
            huh.textContent = `${counter.innerText} has been liked `
            let lC = document.querySelector('.likes')
            lC.append(huh)
    }
  
})

    
    
 document.addEventListener('submit', function(e){
    e.preventDefault();
        // if (e.target.id === "Submit"){
        let list = document.getElementById('list')
        let p = document.createElement('p')
        let input = document.getElementById('comment-input')
        p.innerHTML = input.value 
        list.append(p)
        e.target.reset()
    })

    let pause = document.getElementById('pause')
    pause.addEventListener('click', function(e){
        if (pause.innerText === "pause"){
        window.clearInterval(clockTimer)
        pause.innerText = "resume"
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("submit").disabled = true;}
        else if (pause.innerText === "resume"){
            clockTimer = window.setInterval(countUp, 1000)
            function countUp(){
             let counter = document.getElementById('counter')
             let myCounter = parseInt(counter.innerText)
               counter.innerText = myCounter + 1 
             }
            pause.innerText = "pause"
            document.getElementById("minus").disabled = false;
            document.getElementById("plus").disabled = false;
            document.getElementById("heart").disabled = false;
            document.getElementById("submit").disabled = false;}
    })


   


})
    
