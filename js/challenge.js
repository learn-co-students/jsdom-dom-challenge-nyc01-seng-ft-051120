let clockTimer = window.setInterval(countUp, 1000)
   function countUp(){
    let counter = document.getElementById('counter')
    let myCounter = parseInt(counter.innerText)
      counter.innerText = myCounter + 1 
    }

document.addEventListener('click', function(e){
    console.log(e.target)
    
    if (e.target.id === "minus"){
        let myCounter = parseInt(counter.innerText)
        counter.innerText = myCounter - 1 }
    else if (e.target.id === "plus"){
        let myCounter = parseInt(counter.innerText)
        counter.innerText = myCounter + 1}
    else if (e.target.id === "heart "){
        let likeContainer = document.getElementsByTagName('ul')
        let like = document.createElement('li')
        like.innerHTML = `${counter.innerText} has been liked `
        likeContainer.append(like)}
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


   



    
