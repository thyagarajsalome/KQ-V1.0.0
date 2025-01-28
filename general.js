// index html Javascript - start

// index html Javascript - end

// General Javascript - start
const quizData = [
  // General Questions (25%)
  {
    question: "ಕರ್ನಾಟಕ ರಾಜ್ಯದ ರಾಜಧಾನಿ ಯಾವುದು?",
    options: ["ಮೈಸೂರು", "ಬೆಂಗಳೂರು", "ಹುಬ್ಬಳ್ಳಿ", "ಮಂಗಳೂರು"],
    correctAnswer: "ಬೆಂಗಳೂರು",
  },
  {
    question: "ಕರ್ನಾಟಕದ ಯಾವ ಊರನ್ನು 'ಸಾಂಸ್ಕೃತಿಕ ನಿಲಯ' ಎಂದು ಕರೆಯುತ್ತಾರೆ?",
    options: ["ಬೆಂಗಳೂರು", "ಮೈಸೂರು", "ಹಂಪಿ", "ಬಾದಾಮಿ"],
    correctAnswer: "ಮೈಸೂರು",
  },
  {
    question: "ಕನ್ನಡದ ಸಾಹಿತ್ಯದ 'ಅಡಿಗ' ಯಾರು?",
    options: ["ರಾಘವಾಂಕ", "ಕುವೆಂಪು", "ಎಮ್. ಎಸ್. ಸತ್ಯು", "ಗೋಪಾಲಕೃಷ್ಣ ಅಡಿಗ"],
    correctAnswer: "ಗೋಪಾಲಕೃಷ್ಣ ಅಡಿಗ",
  },
  {
    question: "ಕುವೆಂಪು ಅವರ ಸತ್ಯವನ ಸಾಹಸ ಪುಸ್ತಕ ಯಾವ ರೀತಿಯದು?",
    options: ["ಪ್ರಬಂಧ", "ಕಾವ್ಯ", "ಕಾದಂಬರಿ", "ನಾಟಕ"],
    correctAnswer: "ಕಾವ್ಯ",
  },
  {
    question: "ಗಣಿತಶಾಸ್ತ್ರದಲ್ಲಿ ಮೊದಲ ಭಾರತೀಯ ಯಾರು?",
    options: ["ಆರ್ಯಭಟ", "ಭಾಸ್ಕರಾಚಾರ್ಯ", "ವರಾಹಮಿಹಿರ", "ಚಾಣಕ್ಯ"],
    correctAnswer: "ಆರ್ಯಭಟ",
  },

  // Science Questions (25%)
  {
    question: "ಮಾನವ ದೇಹದಲ್ಲಿ ಎಷ್ಟು ಅಸ್ಥಿ ಇದ್ದವೆ?",
    options: ["200", "206", "208", "210"],
    correctAnswer: "206",
  },
  {
    question: "ಜಲದ ರಾಸಾಯನಿಕ ಸಂಯುಕ್ತ ಯಾವುದು?",
    options: ["H2O", "CO2", "O2", "HCl"],
    correctAnswer: "H2O",
  },
  {
    question: "ಗುರುತಿಕ್ಕುವಿಕೆಗೆ ಬಳಸುವ ಸಾಧನವೇನು?",
    options: ["ಎಲೆಕ್ಟ್ರೋಸ್ಕೋಪ್", "ಮೈಕ್ರೋಸ್ಕೋಪ್", "ಟೆಲಿಸ್ಕೋಪ್", "ಬಾರೋಮೀಟರ್"],
    correctAnswer: "ಎಲೆಕ್ಟ್ರೋಸ್ಕೋಪ್",
  },
  {
    question: "ಪದಾರ್ಥದ ಗುರಾಣು ಘಟಕವೆಂದು ಏನು ಕರೆಯುತ್ತಾರೆ?",
    options: ["ಮಾಲೆಕ್ಯೂಲ್", "ಅಣು", "ಐಯಾನ್", "ಎಲೆಕ್ಟ್ರಾನ್"],
    correctAnswer: "ಅಣು",
  },
  {
    question: "ಚಂದ್ರನ ಮೇಲ್ಮೈಯನ್ನು ಅಧ್ಯಯನ ಮಾಡಲಾಗುವ ಯಂತ್ರ ಏನು?",
    options: ["ರೋವರ್", "ಸ್ಯಾಟಲೈಟ್", "ಸ್ಪೇಕ್ಟ್ರೋಸ್ಕೋಪ್", "ರಾಕೆಟ್"],
    correctAnswer: "ರೋವರ್",
  },

  // Planet Questions (25%)
  {
    question: "ಸೌರಮಂಡಲದ ಸೂರ್ಯನ ಹತ್ತಿರದ ಗ್ರಹ ಯಾವುದು?",
    options: ["ಗುರು", "ಭೂಮಿ", "ಬುಧ", "ಶನಿ"],
    correctAnswer: "ಬುಧ",
  },
  {
    question: "ನಕ್ಷತ್ರಗಳಲ್ಲಿ ಅತಿ ಬೆಳಕಿನಂತಿರುವುದು ಯಾವುದು?",
    options: ["ಚಂದ್ರ", "ಸೂರ್ಯ", "ಸಿರಿಯಸ್", "ಪೋಲಾರಿಸ್"],
    correctAnswer: "ಸೂರ್ಯ",
  },
  {
    question: "ಮಂಗಳ ಗ್ರಹದಲ್ಲಿ ನೆಲದ ಬಣ್ಣ ಯಾವುದು?",
    options: ["ಕೆಂಪು", "ನೀಲಿ", "ಬಿಳಿ", "ಹಸಿರು"],
    correctAnswer: "ಕೆಂಪು",
  },
  {
    question: "ಭೂಮಿ ಸೂರ್ಯನ ಸುತ್ತ ಮಡಿವಕ್ಕೆ ತೆಗೆದುಕೊಳ್ಳುವ ಸಮಯ ಎಷ್ಟು?",
    options: ["365 ದಿನ", "366 ದಿನ", "370 ದಿನ", "360 ದಿನ"],
    correctAnswer: "365 ದಿನ",
  },
  {
    question: "ಭೂಮಿಯ ಗುರಾಣು ಆಕಾರವನ್ನು ಏನು ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ?",
    options: ["ಚಪ್ಪಟೆ ಗುರಾಣು", "ಸ್ಪೇರೋಯಿಡ್", "ಗುಂಪಾದ ಗುರಾಣು", "ಚಕ್ರಾಕಾರ"],
    correctAnswer: "ಸ್ಪೇರೋಯಿಡ್",
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerText = currentQuizData.question;

  optionsEl.innerHTML = "";
  currentQuizData.options.forEach((option) => {
    const button = document.createElement("div");
    button.innerText = option;
    button.classList.add("option");
    button.addEventListener("click", selectAnswer);
    optionsEl.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = quizData[currentQuestion].correctAnswer;

  Array.from(optionsEl.children).forEach((button) => {
    button.disabled = true;
    if (button.innerText === correct) {
      button.classList.add("correct");
    }
    if (button === selectedBtn && selectedBtn.innerText !== correct) {
      button.classList.add("incorrect");
    }
  });

  if (selectedBtn.innerText === correct) {
    score++;
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  resultEl.innerHTML = `ನೀವು ${quizData.length} ರಲ್ಲಿ ${score} ಅಂಕಗಳನ್ನು ಗಳಿಸಿದ್ದೀರಿ!`;
  restartBtn.style.display = "block";
  restartBtn.addEventListener("click", restartQuiz);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  questionEl.style.display = "block";
  optionsEl.style.display = "grid";
  resultEl.innerHTML = "";
  restartBtn.style.display = "none";
  loadQuestion();
}

// Question numbers
function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  // Add question number before the question text
  questionEl.innerText = `${currentQuestion + 1}. ${currentQuizData.question}`;

  optionsEl.innerHTML = "";
  currentQuizData.options.forEach((option) => {
    const button = document.createElement("div");
    button.innerText = option;
    button.classList.add("option");
    button.addEventListener("click", selectAnswer);
    optionsEl.appendChild(button);
  });
}

// Start the quiz
loadQuestion();
// Calculate the score
function showResults() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";

  // Celebration logic
  if (score >= 10) {
    // High score celebration
    resultEl.innerHTML = `
      <div class="celebration">
        <h2>🎉 ಅಭಿನಂದನೆಗಳು! 🏆</h2>
        <p>ನೀವು ${quizData.length} ರಲ್ಲಿ ${score} ಅಂಕಗಳನ್ನು ಗಳಿಸಿದ್ದೀರಿ!</p>
        <div class="confetti-container">
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
        </div>
      </div>
    `;
    // Add animation styles
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      .celebration {
        text-align: center;
        position: relative;
        overflow: hidden;
        padding: 20px;
      }
      .confetti-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
      .confetti {
        width: 15px;
        height: 15px;
        background-color: #f2d74e;
        position: absolute;
        left: 50%;
        animation: confetti 5s ease-in-out -2s infinite;
        transform-origin: left top;
      }
      .confetti:nth-child(2) {
        background-color: #95c3de;
        left: 30%;
        animation-delay: -4s;
      }
      .confetti:nth-child(3) {
        background-color: #ff9a91;
        left: 70%;
        animation-delay: -1s;
      }
      .confetti:nth-child(4) {
        background-color: #f2d74e;
        left: 20%;
        animation-delay: -2s;
      }
      .confetti:nth-child(5) {
        background-color: #95c3de;
        left: 80%;
        animation-delay: -3s;
      }
      .confetti:nth-child(6) {
        background-color: #ff9a91;
        left: 40%;
        animation-delay: -4s;
      }
      .confetti:nth-child(7) {
        background-color: #f2d74e;
        left: 60%;
        animation-delay: -1s;
      }
      .confetti:nth-child(8) {
        background-color: #95c3de;
        left: 10%;
        animation-delay: -2s;
      }
      .confetti:nth-child(9) {
        background-color: #ff9a91;
        left: 90%;
        animation-delay: -3s;
      }
      .confetti:nth-child(10) {
        background-color: #f2d74e;
        left: 50%;
        animation-delay: -4s;
      }
      @keyframes confetti {
        0% { transform: rotateZ(15deg) rotateY(0deg) translate(0,0); }
        25% { transform: rotateZ(5deg) rotateY(360deg) translate(-5vw,20vh); }
        50% { transform: rotateZ(15deg) rotateY(720deg) translate(5vw,60vh); }
        75% { transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw,80vh); }
        100% { transform: rotateZ(15deg) rotateY(1440deg) translate(10vw,110vh); }
      }
    `;
    document.head.appendChild(styleEl);
  } else {
    // Low score sad result
    resultEl.innerHTML = `
      <div class="low-score">
        <h2>😔 ಇನ್ನೂ ಪ್ರಯತ್ನಿಸಿ</h2>
        <p>ನೀವು ${quizData.length} ರಲ್ಲಿ ${score} ಅಂಕಗಳನ್ನು ಗಳಿಸಿದ್ದೀರಿ</p>
      </div>
    `;
  }

  restartBtn.style.display = "block";
  restartBtn.addEventListener("click", restartQuiz);
}
// General Javascript - end
