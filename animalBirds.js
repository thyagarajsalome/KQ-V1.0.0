const quizData = [
  {
    question: "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಪಕ್ಷಿ ಯಾವುದು?",
    options: ["ಮಯೂರ", "ಪವನ್ ಪಕ್ಷಿ", "ಮೋರ", "ಪೋಸ್ಟಮನ್ ಪಕ್ಷಿ"],
    correctAnswer: "ಮೋರ",
  },
  {
    question:
      "ಯಾವ ಪ್ರಾಣಿ ಗಿನ್ನೆಸ್ ಬುಕ್ ನಲ್ಲಿ ಅತಿ ವೇಗಿ ಪ್ರಾಣಿ ಎಂದು ಪರಿಗಣಿಸಲ್ಪಟ್ಟಿದೆ?",
    options: ["ಚೀಟಾ", "ಬ್ಲೂ ವ್ಹೇಲ್", "ಆಫ್ರಿಕನ್ ಎಲಿಫೆಂಟ್", "ಡಾಲ್ಫಿನ್"],
    correctAnswer: "ಚೀಟಾ",
  },
  {
    question: "ಯಾವ ಪ್ರಾಣಿ ಅತಿ ದೊಡ್ಡ ಸಮುದ್ರ ಪ್ರಾಣಿ?",
    options: ["ಆರ್ಕ್ಟಿಕ್ ವ್ಹೇಲ್", "ಬ್ಲೂ ವ್ಹೇಲ್", "ಶಾರ್ಕ್", "ಡಾಲ್ಫಿನ್"],
    correctAnswer: "ಬ್ಲೂ ವ್ಹೇಲ್",
  },
  {
    question: "ಯಾವ ಪಕ್ಷಿ ಹಾರಲಾಗದ ಪಕ್ಷಿ?",
    options: ["ಷ್ಟ್ರಚ್", "ಪೆಂಗ್ವಿನ್", "ಕಾಂಗೂರೂ", "ಕಾಳಿ ಕೋಳಿ"],
    correctAnswer: "ಪೆಂಗ್ವಿನ್",
  },
  {
    question: "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಪ್ರಾಣಿ ಯಾವುದು?",
    options: ["ಚೀಟಾ", "ಹುಲಿ", "ಆನೆ", "ಸಿಂಹ"],
    correctAnswer: "ಟೈಗರ್",
  },
  {
    question: "ಯಾವ ಪ್ರಾಣಿ ಅತಿ ಬುದ್ಧಿವಂತ ಪ್ರಾಣಿ?",
    options: ["ಹಂದಿ", "ಚಿಂಪಾಂಜಿ", "ಆನೆ", "ಡಾಲ್ಫಿನ್"],
    correctAnswer: "ಚಿಂಪಾಂಜಿ",
  },
  {
    question: "ಯಾವ ಪ್ರಾಣಿ ಅಮೇಝೋನ್ ನ ಪ್ರಮುಖ ಪ್ರಾಣಿ?",
    options: ["ಚಿಂಪಾಂಜಿ", "ಬಿಳಿ ಚಿಂಪಾಂಜಿ", "ಗೊರಿಲ್ಲಾ", "ಓರಂಗ್ ಉಟಾನ್"],
    correctAnswer: "ಗೊರಿಲ್ಲಾ",
  },
  {
    question: "ಯಾವ ಪಕ್ಷಿ ಅತಿ ಉದ್ದ ಕಾಲ ಬದುಕಬಲ್ಲ ಪಕ್ಷಿ?",
    options: ["ಮೋರ", "ಷ್ಟ್ರಚ್", "ಪೆಂಗ್ವಿನ್", "ಈಗಲ್"],
    correctAnswer: "ಷ್ಟ್ರಚ್",
  },
  {
    question: "ಯಾವ ಪ್ರಾಣಿ ಅತಿ ವೇಗವಾಗಿ ನಡೆಯಬಲ್ಲ ಪ್ರಾಣಿ?",
    options: ["ಚೀಟಾ", "ಆನೆ", "ಹುಲಿ", "ಸಿಂಹ"],
    correctAnswer: "ಚೀಟಾ",
  },
  {
    question: "ಯಾವ ಪಕ್ಷಿ ಅಮೇಝೋನ್ ನ ಪ್ರಮುಖ ಪಕ್ಷಿ?",
    options: ["ಈಗಲ್", "ಹಮಿಂಗ್ಬರ್ಡ್", "ಮೋರ", "ಪೆಂಗ್ವಿನ್"],
    correctAnswer: "ಹಮಿಂಗ್ಬರ್ಡ್",
  },
  {
    question: "ಭಾರತದ ಯಾವ ಪ್ರಾಣಿ ಸಂಸಾರ ಮಾಡುವ ಪ್ರಾಣಿ?",
    options: ["ಬಿಳಿ ಚಿಂಪಾಂಜಿ", "ಚಿಂಪಾಂಜಿ", "ಗೊರಿಲ್ಲಾ", "ಆನೆ"],
    correctAnswer: "ಆನೆ",
  },
  {
    question: "ಯಾವ ಪ್ರಾಣಿ ಮಾನವ ನಿಕಟ ಬಂಧು?",
    options: ["ಗೊರಿಲ್ಲಾ", "ಚಿಂಪಾಂಜಿ", "ಓರಂಗ್ ಉಟಾನ್", "ಬಿಳಿ ಚಿಂಪಾಂಜಿ"],
    correctAnswer: "ಚಿಂಪಾಂಜಿ",
  },
  {
    question: "ಯಾವ ಪ್ರಾಣಿ ಅಮೇಝೋನ್ ನಲ್ಲಿ ಸಾಮಾನ್ಯ ಪ್ರಾಣಿ?",
    options: ["ಆನೆ", "ಮಂಗ", "ಹುಲಿ", "ಸಿಂಹ"],
    correctAnswer: "ಮಂಗ",
  },
  {
    question: "ಭಾರತದ ಯಾವ ಪಕ್ಷಿ ಅತಿ ಹೆಚ್ಚು ಕಾಣಸಿಗುವ ಪಕ್ಷಿ?",
    options: ["ಮೋರ", "ಈಗಲ್", "ಹಮಿಂಗ್ಬರ್ಡ್", "ಪೆಂಗ್ವಿನ್"],
    correctAnswer: "ಈಗಲ್",
  },
  {
    question: "ಯಾವ ಪ್ರಾಣಿ ಅತಿ ಹೆಚ್ಚು ಬುದ್ಧಿವಂತ ಸಮುದ್ರ ಪ್ರಾಣಿ?",
    options: ["ಶಾರ್ಕ್", "ಬ್ಲೂ ವ್ಹೇಲ್", "ಡಾಲ್ಫಿನ್", "ಆರ್ಕ್ಟಿಕ್ ವ್ಹೇಲ್"],
    correctAnswer: "ಡಾಲ್ಫಿನ್",
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

// celebratetion code
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
