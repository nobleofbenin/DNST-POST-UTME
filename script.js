// script.js — Fixed version

let mode = '';
let score = 0;
let currentQuestionIndex = 0;
let selectedQuestions = [];
let timerInterval = null;
let timeLeft = 0;

const quizContainer = document.getElementById("quiz-container");

// Event Listeners

document.getElementById("practiceMode").onclick = () => startQuiz("practice");
document.getElementById("examMode").onclick = () => startQuiz("exam");
document.getElementById("whatsapp-btn").onclick = () => {
  window.open("https://wa.me/2349156478004", "_blank");
};

function startQuiz(selectedMode) {
  mode = selectedMode;
  score = 0;
  currentQuestionIndex = 0;
  selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, mode === "practice" ? 25 : 50);

  clearInterval(timerInterval);

  if (mode === "exam") {
    timeLeft = 60 * 60; // 1 hour
    startTimer();
  }

  showQuestion();
}

function showQuestion() {
  const q = selectedQuestions[currentQuestionIndex];
  if (!q) return finishQuiz();

  let buttonsHTML = q.options.map(opt => {
    let isDisabled = mode === "exam" && q.selectedAnswer;
    return `<button onclick="selectAnswer('${opt}')" ${isDisabled ? "disabled" : ""}>${opt}</button>`;
  }).join("<br><br>");

  let timerHTML = mode === "exam" ? `<div id="timer" style="font-weight:bold; margin-bottom:10px;"></div>` : "";

  quizContainer.innerHTML = `
    ${timerHTML}
    <h2>Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}</h2>
    <p>${q.question}</p>
    ${buttonsHTML}
    <br><br>
    ${mode === "exam" ? `<button onclick="prevQuestion()" ${currentQuestionIndex === 0 ? "disabled" : ""}>Previous</button>
    <button onclick="nextQuestion()" ${currentQuestionIndex === selectedQuestions.length - 1 ? "disabled" : ""}>Next</button>` : ""}
  `;
}

function selectAnswer(option) {
  const q = selectedQuestions[currentQuestionIndex];
  if (!q) return;

  if (mode === "practice") {
    const isCorrect = option === q.answer;
    if (isCorrect) score++;

    quizContainer.innerHTML += `
      <p><strong>${isCorrect ? "Correct ✅" : "Wrong ❌"}:</strong> ${q.explanation}</p>
      <button onclick="nextQuestion()">Next</button>
    `;
  } else if (mode === "exam") {
    if (!q.selectedAnswer) {
      q.selectedAnswer = option;
      if (option === q.answer) score++;
      showQuestion();
    }
  }
}

function nextQuestion() {
  if (currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else if (mode === "practice") {
    finishQuiz();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

function finishQuiz() {
  clearInterval(timerInterval);

  if (mode === "practice") {
    quizContainer.innerHTML = `
      <h2>Practice Completed</h2>
      <p>Your score: ${score} / ${selectedQuestions.length}</p>
    `;
  } else if (mode === "exam") {
    const percent = ((score / selectedQuestions.length) * 100).toFixed(2);
    quizContainer.innerHTML = `
      <h2>Exam Completed</h2>
      <p>Your score: ${percent}%</p>
      <h3>Review</h3>
      ${selectedQuestions.map((q, i) => `
        <div style="margin-bottom:20px;">
          <p><strong>Q${i + 1}:</strong> ${q.question}</p>
          <p><strong>Your answer:</strong> ${q.selectedAnswer || "No answer"}</p>
          <p><strong>Correct answer:</strong> ${q.answer}</p>
          <p><strong>Explanation:</strong> ${q.explanation}</p>
        </div>
      `).join("")}
    `;
  }
}

function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    } else {
      updateTimerDisplay();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerElem = document.getElementById("timer");
  if (timerElem) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElem.textContent = `Time left: ${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}
