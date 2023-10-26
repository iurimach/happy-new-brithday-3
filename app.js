
let countdown = 7;
let countdownInterval;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');

function updateTimerDisplay() {
    timerDisplay.textContent = countdown;
}

function startCountdown() {
  
    countdownInterval = setInterval(function () {
        countdown--;
        updateTimerDisplay();
        if (countdown === 6) {
            const audio = document.getElementById('myAudio');
            audio.play();
        }
        if (countdown === 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = ' გაიცინე :D';
            //ეს ქვედა გადალინკვაა თუ გინდა იუტუბზე გადაგაგდოს
            // window.location.href = 'https://www.youtube.com/watch?v=QaR31V5xBQ8';
            var milocvatext=document.querySelector(".color-changing-text")
            milocvatext.style.display = 'block'
            var gif1=document.querySelector("#gif1")
            gif1.style.display = 'block'
            const musik1 = document.getElementById('musik1');
            musik1.play();
        }
    }, 1000); // 1000 milliseconds = 1 second
}

startButton.addEventListener('click', startCountdown);
