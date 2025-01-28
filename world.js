const quizData = [
  {
    question: "ಐಫೆಲ್ ಟವರ್ ಯಾವ ನಗರದಲ್ಲಿದೆ?",
    options: ["ರೋಮ್", "ಲಂಡನ್", "ಪ್ಯಾರಿಸ್", "ಬರ್ಲಿನ್"],
    correctAnswer: "ಪ್ಯಾರಿಸ್",
  },
  {
    question: "ಚೀನಾದ ಮಹಾಗೋಡೆಯ ಉದ್ದವನ್ನು ಅಂದಾಜು ಮಾಡಲಾಗಿದೆ:",
    options: ["5,000 ಕಿಮೀ", "10,000 ಕಿಮೀ", "15,000 ಕಿಮೀ", "20,000 ಕಿಮೀ"],
    correctAnswer: "20,000 ಕಿಮೀ",
  },
  {
    question: "ಸ್ವತಂತ್ರ್ಯದ ಪ್ರತಿಕೆಯಾದ Statue of Liberty ಯಾವ ದೇಶದಲ್ಲಿದೆ?",
    options: ["ಕೆನಡಾ", "ಅಮೆರಿಕ", "ಫ್ರಾನ್ಸ್", "ಇಂಗ್ಲೆಂಡ್"],
    correctAnswer: "ಅಮೆರಿಕ",
  },
  {
    question: "ಬರ್ಜಿ ಖಲಿಫಾ ಯಾವ ದೇಶದಲ್ಲಿ ಇದೆ?",
    options: ["ಸೌದಿ ಅರೇಬಿಯಾ", "ದುಬೈ (ಯುಎಇ)", "ಇಜಿಪ್ಟ್", "ಇರಾನ್"],
    correctAnswer: "ದುಬೈ (ಯುಎಇ)",
  },
  {
    question:
      "ಮೊದಲ ಮಹಾಯುದ್ಧದ ಸ್ಮಾರಕ ಯುದ್ಧದ ಸ್ಥಳ (Battlefield of Somme) ಯಾವ ದೇಶದಲ್ಲಿದೆ?",
    options: ["ಫ್ರಾನ್ಸ್", "ಜರ್ಮನಿ", "ಇಟಲಿ", "ಪೋಲ್ಯಾಂಡ್"],
    correctAnswer: "ಫ್ರಾನ್ಸ್",
  },
  {
    question: "ಮಾಚು ಪಿಚು ಯಾವ ದೇಶದಲ್ಲಿ ಇದೆ?",
    options: ["ಬೊಲಿವಿಯಾ", "ಪೆರೂ", "ಚಿಲಿ", "ಅರ್ಜೆಂಟಿನಾ"],
    correctAnswer: "ಪೆರೂ",
  },
  {
    question: "ಅಲ್ಹಾಂಬ್ರಾ ಪ್ಯಾಲೆಸ್ ಯಾವ ದೇಶದಲ್ಲಿ ಇದೆ?",
    options: ["ಪೋರ್ಚುಗಲ್", "ಇಟಲಿ", "ಸ್ಪೇನ್", "ಗ್ರೀಸ್"],
    correctAnswer: "ಸ್ಪೇನ್",
  },
  {
    question: "ಕೊಲೊಸಿಯಮ್ ರೋಮ್ ಯಾವ ಕಾಲದ ಸ್ಮಾರಕವಾಗಿದೆ?",
    options: ["ಗ್ರೀಕ್ ಕಾಲ", "ರೋಮನ್ ಸಾಮ್ರಾಜ್ಯ", "ಮಧ್ಯಯುಗ", "ಮೋಡರ್ನ್ ಕಾಲ"],
    correctAnswer: "ರೋಮನ್ ಸಾಮ್ರಾಜ್ಯ",
  },
  {
    question:
      "ತಾಜಾ ನೀರಿನ ಜಲಪಾತಗಳು ಮತ್ತು ದೊಡ್ಡ ಯುದ್ಧದ ಸ್ಥಳ ನಯಾಗರ ಫಾಲ್ಸ್ ಯಾವ ದೇಶಗಳಲ್ಲಿ ಇದೆ?",
    options: [
      "ಅಮೆರಿಕಾ-ಕೆನಡಾ",
      "ಕೆನಡಾ-ಮೆಕ್ಸಿಕೋ",
      "ಅಮೆರಿಕಾ-ಮೆಕ್ಸಿಕೋ",
      "ಅಮೆರಿಕಾ-ಚೀನಾ",
    ],
    correctAnswer: "ಅಮೆರಿಕಾ-ಕೆನಡಾ",
  },
  {
    question: "ಸಿಡ್ನಿ ಓಪೆರಾ ಹೌಸ್ ಯಾವ ದೇಶದಲ್ಲಿ ಇದೆ?",
    options: ["ಅಮೆರಿಕಾ", "ಆಸ್ಟ್ರೇಲಿಯಾ", "ಕ್ಯಾನಡಾ", "ಇಂಗ್ಲೆಂಡ್"],
    correctAnswer: "ಆಸ್ಟ್ರೇಲಿಯಾ",
  },
  {
    question:
      "ಆಫ್ರಿಕಾದ ಸಾವುನ್ನ ಹಸಿರು ಪ್ರದೇಶ ಸಹಾರಾ ಮರುಭೂಮಿಯು ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಇದು ಯಾವ ಸ್ಥಳಕ್ಕೆ ಸೇರಿದೆ?",
    options: [
      "ಉತ್ತರ ಆಫ್ರಿಕಾ",
      "ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ",
      "ಪಶ್ಚಿಮ ಆಫ್ರಿಕಾ",
      "ಕೇಂದ್ರ ಆಫ್ರಿಕಾ",
    ],
    correctAnswer: "ಉತ್ತರ ಆಫ್ರಿಕಾ",
  },
  {
    question:
      "ಜಪಾನ್ ದೇಶದ ಪ್ರಸಿದ್ಧ ಪರ್ವತ ಫುಜಿಯುಕಿಯು (ಮೌಂಟ್ ಫುಜಿ) ಯಾವಾಗಲೂ ಖ್ಯಾತವಾಗಿದೆ:",
    options: [
      "ತೀವ್ರ ಬಂಡೆ",
      "ನಿಷ್ಕ್ರಿಯ ಜ್ವಾಲಾಮುಖಿ",
      "ಗ್ಲೇಶಿಯರ್ ಪರ್ವತ",
      "ಕಾಡು ಪರ್ವತ",
    ],
    correctAnswer: "ನಿಷ್ಕ್ರಿಯ ಜ್ವಾಲಾಮುಖಿ",
  },
  {
    question: "ಹೋವರ್ಡಾನ್ ವಾಲ್ ಯಾವ ದೇಶದ ಐತಿಹಾಸಿಕ ಗೋಡೆಯಾಗಿದೆ?",
    options: ["ಸ್ಕಾಟ್‌ಲ್ಯಾಂಡ್", "ಇಂಗ್ಲೆಂಡ್", "ಆಯರ್ಲೆಂಡ್", "ವೆಲ್ಸ್"],
    correctAnswer: "ಇಂಗ್ಲೆಂಡ್",
  },
  {
    question: "ಪೆಟ್ರಾ, ಪ್ರಾಚೀನ ಪಿಂಕ್ ಶಹರವು ಯಾವ ದೇಶದಲ್ಲಿ ಇದೆ?",
    options: ["ಮೂರಾಕೊ", "ಜೋರ್ಡಾನ್", "ತುನೀಷ್ಯಾ", "ಈಜಿಪ್ಟ್"],
    correctAnswer: "ಜೋರ್ಡಾನ್",
  },
  {
    question: "ಐತಿಹಾಸಿಕ 'ಡಯಾಮಂಡ್‌ಹೆಡ್ ಕ್ರೇಟರ್' ಯಾವ ದೇಶದಲ್ಲಿ ಇದೆ?",
    options: ["ಜಪಾನ್", "ಹವಾಯಿ (ಅಮೆರಿಕಾ)", "ನ್ಯೂಜಿಲ್ಯಾಂಡ್", "ಫಿಲಿಫೈನ್ಸ್"],
    correctAnswer: "ಹವಾಯಿ (ಅಮೆರಿಕಾ)",
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
