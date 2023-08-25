let timer = 60;
let score = 0;
let hitNum = 0;

// Increase Score
function increaseScore() {
    score += 10;
    document.getElementById("scoreVal").textContent = score;
}

// Timer Function
function runTimer() {
    let timerStop = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById('timerId').textContent = timer;
        } else {
            clearInterval(timerStop)
            document.getElementById('pBottom').innerHTML = `<h1 class="headClass">Game Over</h1>`
        }
    }, 1000);
}

// New hit values genrator function
function getNewHit() {
    hitNum = Math.floor(Math.random() * 10);
    document.getElementById('hitVal').textContent = hitNum;
}

// Making bubbles
function makeBubble() {
    let clutter = " ";
    for (let i = 1; i <= 120; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble"  >${rn}</div>`;
    }

    document.getElementById('pBottom').innerHTML = clutter;

}

// Main game-logic function
document.getElementById("pBottom").addEventListener("click", (details) => {
    let clickedNum = Number(details.target.textContent);
    if (clickedNum === hitNum) {
        increaseScore();
        getNewHit();
        details.target.classList.add("blastBubbleClass");
        setTimeout(() => {
            details.target.remove();
            makeBubble();
        }, 300);
    }
})

runTimer();
getNewHit();
makeBubble();