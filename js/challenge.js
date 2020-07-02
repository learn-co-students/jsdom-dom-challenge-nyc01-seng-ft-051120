
document.addEventListener("DOMContentLoaded", function (event) {
    let counterH1 = document.getElementById("counter");
    let counter = 0;
    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");
    const pause = document.getElementById("pause");
    const body = document.getElementsByTagName("body");
    let timerInterval = setInterval(function () {
    incrementCounter();
    }, 1000);
    let heart = document.getElementById("heart");
    let submit = document.getElementById("submit");
    let likes = document.querySelector(".likes");
    let input = document.getElementById("comment-input");
    let commentDiv = document.querySelector(".comments");

    function incrementCounter() {
        counter++;

        counterH1.innerText = `${counter}`;
        console.log(counter);
    }

    function pauseButton() {
        pause.addEventListener("click", function () {
            if (pause.innerText === "pause") {
                clearInterval(timerInterval);
                pause.innerText = "resume";
                plus.disabled = true;
                minus.disabled = true;
                heart.disabled = true;
                submit.disabled = true;
            } else if (pause.innerText === "resume") {
                timerInterval = setInterval(function () {
                incrementCounter();
                }, 1000);
                pause.innerText = "pause";
                plus.disabled = false;
                minus.disabled = false;
                heart.disabled = false;
                submit.disabled = false;
            }
        });
    }

    function plusCounter() {
        plus.addEventListener("click", function (event) {
        counter++;
        counterH1.innerText = `${counter}`;
        });
    }
    function minusCounter() {
        minus.addEventListener("click", function (event) {
        counter--;
        counterH1.innerText = `${counter}`;
        });
    }

    function like() {
        let likeCounter = 0;
        heart.addEventListener("click", function (event) {
        likeCounter++;
        setTimeout(function () {
            if (likeCounter > 1 && counter) {
            li = document.createElement("li");
            li.innerText = `${counter} has liked ${likeCounter} times`;
            } else if (likeCounter == 1) {
            li = document.createElement("li");
            li.innerText = `${counter} has liked ${likeCounter} time`;
            }

            likes.appendChild(li);
            likeCounter = 0;
        }, 1000);
        });
    }

    function comment() {
        submit.addEventListener("click", function (event) {
        event.preventDefault();
        p = document.createElement("p");
        p.innerText = input.value;
        console.log(input.value);
        commentDiv.appendChild(p);
        });
    }
    
    minusCounter();
    plusCounter();
    like();

    pauseButton();
    comment();
});