// script.js

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 3600; // 1 hour for Exam Mode

const quizContainer = document.getElementById("quiz-container");

function startPractice() {
  currentQuestions = shuffleArray(questions).slice(0, 30);
  currentQuestionIndex = 0;
  score = 0;
  renderPracticeQuestion();
}

function startExam() {
  currentQuestions = shuffleArray(questions).slice(0, 50);
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 3600;
  startTimer();
  renderExamQuestion();
}

function renderPracticeQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  quizContainer.innerHTML = `
    <h2>Question ${currentQuestionIndex + 1} of ${currentQuestions.length}</h2>
    <p>${q.question}</p>
    <ul>
      ${q.options
        .map(
          (opt, i) => `<li><button onclick="handlePracticeAnswer('${opt}')">${opt}</button></li>`
        )
        .join("")}
    </ul>
    <div id="explanation"></div>
    <div>
      <button onclick="prevPractice()" ${currentQuestionIndex === 0 ? "disabled" : ""}>Previous</button>
      <button onclick="nextPractice()" ${currentQuestionIndex === currentQuestions.length - 1 ? "disabled" : ""}>Next</button>
    </div>
  `;
}

function handlePracticeAnswer(selected) {
  const q = currentQuestions[currentQuestionIndex];
  const expDiv = document.getElementById("explanation");
  if (selected === q.answer) {
    expDiv.innerHTML = `<p style='color:green'><strong>Correct!</strong><br>${q.explanation}</p>`;
  } else {
    expDiv.innerHTML = `<p style='color:red'><strong>Wrong.</strong> Correct Answer: ${q.answer}<br>${q.explanation}</p>`;
  }
}

function nextPractice() {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex++;
    renderPracticeQuestion();
  }
}

function prevPractice() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderPracticeQuestion();
  }
}

function renderExamQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  quizContainer.innerHTML = `
    <h2>Exam Mode - Question ${currentQuestionIndex + 1} of ${currentQuestions.length}</h2>
    <p>Time Left: <span id="timer"></span></p>
    <p>${q.question}</p>
    <ul>
      ${q.options
        .map(
          (opt, i) => `<li><button onclick="handleExamAnswer('${opt}')">${opt}</button></li>`
        )
        .join("")}
    </ul>
  `;
  updateTimerDisplay();
}

function handleExamAnswer(selected) {
  const q = currentQuestions[currentQuestionIndex];
  if (selected === q.answer) score++;
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    renderExamQuestion();
  } else {
    clearInterval(timer);
    showExamResults();
  }
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      showExamResults();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function showExamResults() {
  quizContainer.innerHTML = `
    <h2>Exam Completed</h2>
    <p>Your Score: ${score} out of ${currentQuestions.length} (${(score * 2)}%)</p>
    <h3>Review Questions:</h3>
    <div>
      ${currentQuestions
        .map(
          (q, i) => `
        <div style="border:1px solid #ccc; padding:10px; margin:10px 0">
          <p><strong>Q${i + 1}:</strong> ${q.question}</p>
          <p><strong>Correct Answer:</strong> ${q.answer}</p>
          <p><strong>Explanation:</strong> ${q.explanation}</p>
        </div>`
        )
        .join("")}
    </div>
  `;
}

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}
