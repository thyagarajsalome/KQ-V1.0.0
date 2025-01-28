const quizData = [
  {
    question: "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಪೋಷಕ ವೃಕ್ಷ ಯಾವುದು?",
    options: ["ತಳಸಿಗೆ", "ಬನಿಯಾನ್", "ಅಶ್ವತ್ಥ", "ನೆಮದಿ ಮರ"],
    correctAnswer: "ಬನಿಯಾನ್",
  },
  {
    question: "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಹೂವು ಯಾವದು?",
    options: ["ರೋಸ್", "ಚಮಪಾ", "ಕಮಲ", "ಮಲ್ಲಿಗೆ"],
    correctAnswer: "ಕಮಲ",
  },
  {
    question: "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಪಕ್ಷಿ ಯಾವದು?",
    options: ["ಕಾಗೆ", "ಮಯೂರ", "ಕೋಳಿ", "ಕಜ್ಜಾಯ"],
    correctAnswer: "ಮಯೂರ",
  },
  {
    question: "ಭಾರತದ ಅತ್ಯಂತ ಉದ್ದವಾದ ನದಿ ಯಾವುದು?",
    options: ["ಗಂಗಾ", "ನರ್ಮದಾ", "ಬ್ರಹ್ಮಪುತ್ರ", "ಗೋದಾವರಿ"],
    correctAnswer: "ಗಂಗಾ",
  },
  {
    question: "ಯಾವ ಪ್ರಾಣಿ ಭಾರತದಲ್ಲಿ 'ಜಲ ಜೀವ' ಎಂದು ಕರೆಯಲ್ಪಡುತ್ತದೆ?",
    options: ["ಹತ್ತಿರದ ನದಿ ಮೀನು", "ಗಂಗಾ ಡಾಲ್ಫಿನ್", "ಕುಂಭೀರ", "ಕಪ್ಪೆ"],
    correctAnswer: "ಗಂಗಾ ಡಾಲ್ಫಿನ್",
  },
  {
    question: "ಜೀವಶ್ರೇಣಿಯಲ್ಲಿಯೇ ದೊಡ್ಡ ಗಿಡ ಯಾವದು?",
    options: ["ಬನಿಯಾನ್", "ಸಿಕ್ವಾಯಾ", "ಮರಗಳ ಸೋಪು", "ನೀಲ್ ಗಿರಿ ಮರ"],
    correctAnswer: "ಸಿಕ್ವಾಯಾ",
  },
  {
    question: "ಅತಿ ಉದ್ದದ ಜೀವಿತ ಪ್ರಾಣಿ ಯಾವದು?",
    options: [
      "ನೀಲಿ ತಿಮಿಂಗಿಲ",
      "ಜಲ್ಲಿ ಮೀನು",
      "ಅಲ್ಬಟ್ರೋಸ್",
      "ಆರ್ಟಿಕ್ ಹೈಡ್ ಮಡ್ ಫಿಶ್",
    ],
    correctAnswer: "ನೀಲಿ ತಿಮಿಂಗಿಲ",
  },
  {
    question:
      "ನಿಸರ್ಗದ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಯಾವ ಶಿಖರ ಗಾತ್ರದ ಸಸ್ಯಗಳನ್ನು ಬಳಸಲಾಗುತ್ತದೆ?",
    options: ["ಲೈಕೆನ್", "ಮೋಸ್", "ಫರ್ನ್", "ನೀರು ಸಸ್ಯ"],
    correctAnswer: "ಲೈಕೆನ್",
  },
  {
    question: "ಭಾರತದ ಕಾವಲು ವೃಕ್ಷ ಯಾವುದು?",
    options: ["ತೇಜೋವೃಕ್ಷ", "ನೀಮ", "ಆಶ್ರಯ ವೃಕ್ಷ", "ಅರಸಿನ ಗಿಡ"],
    correctAnswer: "ನೀಮ",
  },
  {
    question:
      "ಭೂಮಿಯಲ್ಲಿನ ಪ್ರತಿಯೊಂದು ಜೀವ ಧರ್ಮಕ್ಕಾಗಿ ಪ್ರಮುಖವಾದ ಉಸಿರಾಟದ ಸೂತ್ರಧಾರ ಯಾವುದು?",
    options: ["ಮರಗಳು", "ನದಿಗಳು", "ಪರ್ವತಗಳು", "ತೋಟಗಳು"],
    correctAnswer: "ಮರಗಳು",
  },
  {
    question: "ವಿಶ್ವ ಪರಿಸರ ದಿನವನ್ನು ಯಾವ ದಿನಾಚರಣೆಯಲ್ಲಿ ಆಚರಿಸುತ್ತಾರೆ?",
    options: ["ಜೂನ್ 5", "ಜುಲೈ 15", "ಮಾರ್ಚ್ 22", "ಅಕ್ಟೋಬರ್ 2"],
    correctAnswer: "ಜೂನ್ 5",
  },
  {
    question: "ಯಾವ ನದಿ 'ಜೀವನದ ನದಿ' ಎಂದು ಕರೆಯಲ್ಪಡುತ್ತದೆ?",
    options: ["ಗಂಗಾ", "ಯಮುನಾ", "ಗೋದಾವರಿ", "ನರ್ಮದಾ"],
    correctAnswer: "ಗಂಗಾ",
  },
  {
    question: "ಅತಿಹೆಚ್ಚು ಆಮ್ಲಜನಕ ಉತ್ಪಾದಿಸುವ ಸಮುದ್ರ ಸಸ್ಯ ಯಾವುದು?",
    options: ["ಮೋಸ್", "ಕಲ್ಪ", "ಫಿಟೋಪ್ಲ್ಯಾಂಕ್ಟನ್", "ಸೀಗ್ರಾಸ್"],
    correctAnswer: "ಫಿಟೋಪ್ಲ್ಯಾಂಕ್ಟನ್",
  },
  {
    question: "ಜೀವ ವೈವಿಧ್ಯತೆಯ ಪ್ರಾಣ ಸಂಪತ್ತು ಯಾವದು?",
    options: ["ಅರಣ್ಯ", "ಪರ್ವತ", "ಮೀನುಗಾರಿಕೆ", "ಆಕಾಶ"],
    correctAnswer: "ಅರಣ್ಯ",
  },
  {
    question: "ಯಾವ ಪ್ರಾಣಿ 'ಅರಣ್ಯದ ರಾಜ' ಎಂದು ಕರೆಯಲ್ಪಡುತ್ತಾನೆ?",
    options: ["ಕೋಣ", "ಹುಲಿ", "ಸಿಂಹ", "ಕೋತಿ"],
    correctAnswer: "ಸಿಂಹ",
  },
];

//
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
// celebration code
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
