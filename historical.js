const quizData = [
  {
    question: "ತಾಜ್ ಮಹಲ್ ಯಾವ ನಗರದಲ್ಲಿದೆ?",
    options: ["ಜೈಪುರ", "ಆಗ್ರಾ", "ದೆಹಲಿ", "ವಾರಾಣಸಿ"],
    correctAnswer: "ಆಗ್ರಾ",
  },
  {
    question: "ಹಂಪಿಯ ಮಹತ್ವವೇನು?",
    options: [
      "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ರಾಜಧಾನಿ",
      "ಮುಘಲ್ ಕಾಲದ ಬೇಸಿಗೆ ನಿವಾಸ",
      "ಬ್ರಿಟಿಷರ ವ್ಯಾಪಾರ ಕೇಂದ್ರ",
      "ಪ್ರಾಚೀನ ಬೌದ್ಧ ಕೇಂದ್ರ",
    ],
    correctAnswer: "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ರಾಜಧಾನಿ",
  },
  {
    question: "ಗೇಟ್‌ವೇ ಆಫ್ ಇಂಡಿಯಾ ಯಾವ ಸ್ಥಳದಲ್ಲಿದೆ?",
    options: ["ಮುಂಬೈ", "ಕೋಲ್ಕತ್ತಾ", "ಚೆನ್ನೈ", "ದೆಹಲಿ"],
    correctAnswer: "ಮುಂಬೈ",
  },
  {
    question: "ಬ್ಲಾಕ್ ತಾಜ್ ಎಂದೂ ಕರೆಯಲ್ಪಡುವ ಸ್ಮಾರಕ ಯಾವುದು?",
    options: ["ಚಾರ್ಮಿನಾರ್", "ಮೆಹ್ತಾಬ್ ಬಾಗ್", "ಕುತುಬ್ ಮಿನಾರ್", "ಹೂಮಾಯೂನರ ಸಮಾಧಿ"],
    correctAnswer: "ಮೆಹ್ತಾಬ್ ಬಾಗ್",
  },
  {
    question: "ಅಜಂತಾ ಗುಹೆಗಳು ಯಾವ ರಾಜ್ಯದಲ್ಲಿವೆ?",
    options: ["ಮಹಾರಾಷ್ಟ್ರ", "ರಾಜಸ್ಥಾನ", "ಮಧ್ಯಪ್ರದೇಶ", "ಕೇರಳ"],
    correctAnswer: "ಮಹಾರಾಷ್ಟ್ರ",
  },
  {
    question: "ಕೂಟಬ್ ಮಿನಾರ್ ಯಾವ ಶತಮಾನದಲ್ಲಿ ನಿರ್ಮಿಸಲಾಯಿತು?",
    options: ["12ನೇ ಶತಮಾನ", "15ನೇ ಶತಮಾನ", "10ನೇ ಶತಮಾನ", "13ನೇ ಶತಮಾನ"],
    correctAnswer: "12ನೇ ಶತಮಾನ",
  },
  {
    question: "ಭಾರತದಲ್ಲಿ ಅಲ್‌ಲೌಡಿನ್ ಖಿಲ್ಜಿಯ ಕಾಲದ ಐತಿಹಾಸಿಕ ಸ್ಥಳ ಯಾವುದು?",
    options: ["ಐಹೊಳೆ", "ಅಲೈ ದರ್ವಾಜಾ", "ಇಂಡಿಯಾ ಗೇಟ್", "ರೆಡ್ ಫೋರ್ಟ್"],
    correctAnswer: "ಅಲೈ ದರ್ವಾಜಾ",
  },
  {
    question: "ಯಾವ ಸ್ಥಳವನ್ನು ‘ಪಿಂಕ್ ಸಿಟಿ’ ಎಂದು ಕರೆಯುತ್ತಾರೆ?",
    options: ["ಜೈಪುರ", "ಜೋಧ್‌ಪುರ್", "ಉದಯಪುರ", "ಅಮೃತಸರ್"],
    correctAnswer: "ಜೈಪುರ",
  },
  {
    question: "ಭಾರತದ ಮೊದಲ ಉಪಗ್ರಹ ಉಡಾವಣೆ ನೆನಪಿಗಾಗಿ ಯಾವುದೇ ಸ್ಮಾರಕವಿದೆಯೆ?",
    options: [
      "ಸೈಟನ್ ರಾಕೆಟ್ ಪಾರ್ಕ್",
      "ಸಂಕಲ್ಪ ಸ್ಮಾರಕ",
      "ತುಂಬಾ ರಾಕೆಟ್ ಲಾಂಚ್ ಪ್ಯಾಡ್",
      "ಐಎಸ್ರೋ ಸ್ಮಾರಕ",
    ],
    correctAnswer: "ತುಂಬಾ ರಾಕೆಟ್ ಲಾಂಚ್ ಪ್ಯಾಡ್",
  },
  {
    question: "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಭವನ ರಾಷ್ಟ್ರಪತಿ ಭವನ ಯಾವ ನಗರದಲ್ಲಿದೆ?",
    options: ["ದೆಹಲಿ", "ಮುಂಬೈ", "ಕೋಲ್ಕತ್ತಾ", "ಚೆನ್ನೈ"],
    correctAnswer: "ದೆಹಲಿ",
  },
  {
    question: "ಭಾರತದ ಯಾವ ಐತಿಹಾಸಿಕ ಸ್ಥಳದಲ್ಲಿ ಫಿರಂಗಿಗಳಿಂದ ರಕ್ಷಣಾ ವ್ಯವಸ್ಥೆ ಇದೆ?",
    options: ["ಮಹಿಮಹಲ್", "ಗೋಲ್‌ಕೊಂಡಾ ಕೋಟೆ", "ರೆಡ್ ಫೋರ್ಟ್", "ಜೋಧ್‌ಪುರ್ ಫೋರ್ಟ್"],
    correctAnswer: "ಗೋಲ್‌ಕೊಂಡಾ ಕೋಟೆ",
  },
  {
    question: "ಭಾರತದಲ್ಲಿರುವ ಪ್ರಾಚೀನ ಲೋಹದ ಸ್ತಂಭ ಯಾವ ಸ್ಥಳದಲ್ಲಿ ಇದೆ?",
    options: ["ಕುತುಬ್ ಮಿನಾರ್ ಬಳಿ", "ತಾಜ್ ಮಹಲ್", "ಬಿದರ್ ಕೋಟೆ", "ಬಾದಾಮಿ"],
    correctAnswer: "ಕುತುಬ್ ಮಿನಾರ್ ಬಳಿ",
  },
  {
    question: "ಆಗ್ರಾದ ಕಿಲೆಯ ನಿರ್ಮಾಪಕ ಯಾರು?",
    options: ["ಅಕ್ಬರ್", "ಶಹಜಹಾನ್", "ಹುಮಾಯೂನ್", "ಬಾಬರ್"],
    correctAnswer: "ಅಕ್ಬರ್",
  },
  {
    question: "ಯಾವ ನಗರವನ್ನು 'ಸಾಂಸ್ಕೃತಿಕ ರಾಜಧಾನಿ' ಎಂದು ಕರೆಯುತ್ತಾರೆ?",
    options: ["ಕೋಲ್ಕತ್ತಾ", "ಹೈದರಾಬಾದ್", "ಬಂಗಾಲೂರು", "ಮೈಸೂರು"],
    correctAnswer: "ಕೋಲ್ಕತ್ತಾ",
  },
  {
    question:
      "ಭಾರತದಲ್ಲಿ ಯುರೋಪಿಯನ್ ವಾಸ್ತುಕಲೆಯಿಂದ ನಿರ್ಮಿಸಲಾದ ಪ್ರಮುಖ ಸ್ಥಳ ಯಾವುದು?",
    options: [
      "ವಿಕ್ಟೋರಿಯಾ ಮೆಮೋರಿಯಲ್",
      "ಗೋಲ್ಡನ್ ಗೇಟ್",
      "ರೆಡ್ ಫೋರ್ಟ್",
      "ಮರೀನ್ ಡ್ರೈವ್",
    ],
    correctAnswer: "ವಿಕ್ಟೋರಿಯಾ ಮೆಮೋರಿಯಲ್",
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
