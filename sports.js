const quizData = [
  // General Questions (25%)
  {
    question: "ಯಾರನ್ನು ಭಾರತೀಯ ಕ್ರಿಕೆಟ್ ಸಮ್ರಾಟ್ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ?",
    options: [
      "ಸಚಿನ್ ತೆಂಡೂಲ್ಕರ್",
      "ವಿರಾಟ್ ಕೊಹ್ಲಿ",
      "ಎಂಎಸ್ ಧೋನಿ",
      "ರಾಹುಲ್ ದ್ರಾವಿಡ್",
    ],
    correctAnswer: "ಸಚಿನ್ ತೆಂಡೂಲ್ಕರ್",
  },
  {
    question: "IPL ಯಾವ ವರ್ಷ ಆರಂಭಗೊಂಡಿತು?",
    options: ["2007", "2008", "2009", "2010"],
    correctAnswer: "2008",
  },
  {
    question: "ಭಾರತ ಕ್ರಿಕೆಟ್ ವಿಶ್ವಕಪ್ ಗೆದ್ದ ಮೊದಲ ಬಾರಿ ಯಾವ ವರ್ಷ?",
    options: ["1983", "1987", "1992", "2011"],
    correctAnswer: "1983",
  },
  {
    question: "ಯಾವ ಕ್ರಿಕೆಟಿಗ ಜಾಗತಿಕ ಮಟ್ಟದಲ್ಲಿ 10,000 ರನ್ ಗಳನ್ನು ಪೂರೈಸಿದ್ದಾರೆ?",
    options: [
      "ವಿರಾಟ್ ಕೊಹ್ಲಿ",
      "ಎಂಎಸ್ ಧೋನಿ",
      "ರಾಹುಲ್ ದ್ರಾವಿಡ್",
      "ಸಚಿನ್ ತೆಂಡೂಲ್ಕರ್",
    ],
    correctAnswer: "ಸಚಿನ್ ತೆಂಡೂಲ್ಕರ್",
  },
  {
    question:
      "ಯಾವ ಭಾರತೀಯ ಕ್ರಿಕೆಟಿಗ IPL ನಲ್ಲಿ ಅತಿ ಹೆಚ್ಚು ಶತಕಗಳನ್ನು ಬಾರಿಸಿದ್ದಾರೆ?",
    options: [
      "ವಿರಾಟ್ ಕೊಹ್ಲಿ",
      "ಶಿಖರ್ ಧವನ್",
      "ಆಶಿಶ್ ನೆಹ್ರಾ",
      "ಸಚಿನ್ ತೆಂಡೂಲ್ಕರ್",
    ],
    correctAnswer: "ವಿರಾಟ್ ಕೊಹ್ಲಿ",
  },

  // Olympic and Sports General Knowledge (25%)
  {
    question: "ಒಲಂಪಿಕ್ ಕ್ರೀಡಾಂಗಣವು ಯಾವ ದೇಶದಲ್ಲಿ ಆರಂಭಗೊಂಡಿತು?",
    options: ["ಭಾರತ", "ಗ್ರೀಸ್", "ರೋಮ್", "ಚೀನಾ"],
    correctAnswer: "ಗ್ರೀಸ್",
  },
  {
    question: "ಭಾರತದ ಯಾವ ಕ್ರೀಡಾಪಟು ಒಲಂಪಿಕ್ ನಲ್ಲಿ ಬಂಗಾರ ಪದಕ ಗೆದ್ದಿದ್ದಾರೆ?",
    options: ["ಮೈಲ್ ಖಾನ್", "ನೀರಜ್ ಚೋಪ್ರಾ", "ಪಿ.ವಿ. ಸಿಂಧು", "ಸಾನಿಯಾ ಮಿರ್ಜಾ"],
    correctAnswer: "ನೀರಜ್ ಚೋಪ್ರಾ",
  },
  {
    question: "ಯಾವ ಕ್ರೀಡೆಯನ್ನು ಆಟಗಳ ರಾಜ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ?",
    options: ["ಹಾಕಿ", "ಫುಟ್ಬಾಲ್", "ಕ್ರಿಕೆಟ್", "ಬ್ಯಾಡ್ಮಿಂಟನ್"],
    correctAnswer: "ಫುಟ್ಬಾಲ್",
  },
  {
    question: "ಭಾರತದ ಮೊದಲ ಒಲಂಪಿಕ್ ಬಂಗಾರ ಪದಕ ಯಾವ ಕ್ರೀಡೆಯಲ್ಲಿ?",
    options: ["ಹಾಕಿ", "ಜಿಮ್ನಾಸ್ಟಿಕ್", "ಕ್ರಿಕೆಟ್", "ಶೂಟಿಂಗ್"],
    correctAnswer: "ಹಾಕಿ",
  },
  {
    question: "ವಿಶ್ವ ಕಪ್ ಫುಟ್ಬಾಲ್ ಯಾವ ವರ್ಷ ಆರಂಭಗೊಂಡಿತು?",
    options: ["1930", "1950", "1960", "1970"],
    correctAnswer: "1930",
  },

  // Indian Sports Personalities (25%)
  {
    question: "ಭಾರತೀಯ ಪುರಸ್ಕಾರ ಪಡೆದ ಮೊದಲ ಟೆನಿಸ್ ಆಟಗಾರಿ?",
    options: ["ಸಾನಿಯಾ ಮಿರ್ಜಾ", "ಸಿಮಿ ಕಾಪೂರ್", "ಸಾನಿಯಾ ನೆಹ್ರಾ", "ಸಾಯಿಮಾ ಮಿರ್ಜಾ"],
    correctAnswer: "ಸಾನಿಯಾ ಮಿರ್ಜಾ",
  },
  {
    question: "ಯಾವ ಭಾರತೀಯ ಹ್ಯಾಕಿ ಆಟಗಾರ ಪದ್ಮ ಶ್ರೀ ಪ್ರಶಸ್ತಿ ಪಡೆದಿದ್ದಾರೆ?",
    options: [
      "ಸರ್ದಾರ್ ಸಿಂಗ್",
      "ಬಲಬಿರ್ ಸಿಂಗ್",
      "ಕ್ಯಾಪ್ಟನ್ ಮಹೇಂದ್ರ ಸಿಂಗ್",
      "ಗುರಬಂಧ್ ಸಿಂಗ್",
    ],
    correctAnswer: "ಬಲಬಿರ್ ಸಿಂಗ್",
  },
  {
    question: "ಯಾವ ಭಾರತೀಯ ಬ್ಯಾಡ್ಮಿಂಟನ್ ಆಟಗಾರಿ ಒಲಂಪಿಕ್ ಪದಕ ಗೆದ್ದಿದ್ದಾರೆ?",
    options: ["ಎಸ್ ಕಸಿಮಿ", "ಪಿ.ವಿ. ಸಿಂಧು", "ಸಾಯಿ ಪ್ರಣೀತ್", "ಸ್ಮೃತಿ ಮಂಧಾನಾ"],
    correctAnswer: "ಪಿ.ವಿ. ಸಿಂಧು",
  },
  {
    question:
      "ಭಾರತೀಯ ಕ್ರಿಕೆಟ್ ತಂಡಕ್ಕೆ ಮೊಟ್ಟ ಮೊದಲ ಬಾರಿ ಕ್ಯಾಪ್ಟನ್ ಆಗಿದ್ದ ವ್ಯಕ್ತಿ?",
    options: ["ಸೌರವ್ ಗಂಗೂಲಿ", "ಎಂಎಸ್ ಧೋನಿ", "ವಿರಾಟ್ ಕೊಹ್ಲಿ", "ಅಜೀನ್ ಠಾಕೂರ್"],
    correctAnswer: "ಸೌರವ್ ಗಂಗೂಲಿ",
  },
  {
    question: "ಭಾರತೀಯ ಹ್ಯಾಕಿ ತಂಡ ಮೊಟ್ಟ ಮೊದಲ ಬಾರಿ ಒಲಂಪಿಕ್ ಬಂಗಾರ ಗೆದ್ದ ವರ್ಷ?",
    options: ["1928", "1936", "1948", "1956"],
    correctAnswer: "1928",
  },

  // Animal and Bird Questions (25%)
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
