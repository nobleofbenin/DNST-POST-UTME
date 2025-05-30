let mode = '';
let score = 0;
let currentQuestionIndex = 0;
let selectedQuestions = [];
let timerInterval = null;
let timeLeft = 0;

document.getElementById("practiceMode").onclick = () => startQuiz("practice");
document.getElementById("examMode").onclick = () => startQuiz("exam");

document.getElementById("whatsapp-btn").onclick = () => {
  window.open("https://wa.me/2349156478004", "_blank");
};

function startQuiz(selectedMode) {
  mode = selectedMode;
  score = 0;
  currentQuestionIndex = 0;
  selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, mode === "practice" ? 25 : 30);

  if (mode === "exam") {
    timeLeft = 40 * 60; // 40 minutes in seconds
    startTimer();
  } else {
    clearInterval(timerInterval);
    document.getElementById("timer").remove();
  }

  showQuestion();
}

function showQuestion() {
  const quiz = document.getElementById("quiz-container");
  const q = selectedQuestions[currentQuestionIndex];
  if (!q) return finishQuiz();

  if (mode === "practice") {
    quiz.innerHTML = `
      <h2>Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}</h2>
      <p>${q.question}</p>
      ${q.options.map(opt => `<button onclick="selectAnswer('${opt}')">${opt}</button>`).join("<br><br>")}
    `;
  } else if (mode === "exam") {
    quiz.innerHTML = `
      <div id="timer" style="font-weight:bold; margin-bottom:10px;"></div>
      <h2>Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}</h2>
      <p>${q.question}</p>
      ${q.options.map(opt => `<button onclick="selectAnswer('${opt}')" ${q.selectedAnswer ? "disabled" : ""}>${opt}</button>`).join("<br><br>")}
      <br><br>
      <button onclick="prevQuestion()" ${currentQuestionIndex === 0 ? "disabled" : ""}>Previous</button>
      <button onclick="nextQuestion()" ${currentQuestionIndex === selectedQuestions.length -1 ? "disabled" : ""}>Next</button>
    `;
  }
}

function selectAnswer(option) {
  const q = selectedQuestions[currentQuestionIndex];
  if (mode === "practice") {
    const isCorrect = option === q.answer;
    if (isCorrect) score++;
    const quiz = document.getElementById("quiz-container");
    quiz.innerHTML += `
      <p><strong>${isCorrect ? "Correct ✅" : "Wrong ❌"}:</strong> ${q.explanation}</p>
      <button onclick="nextQuestion()">Next</button>
    `;
  } else if (mode === "exam") {
    if (!q.selectedAnswer) {
      q.selectedAnswer = option;
      if (option === q.answer) score++;
      // disable buttons after selection
      showQuestion();
    }
  }
}

function nextQuestion() {
  if (currentQuestionIndex < selectedQuestions.length -1) {
    currentQuestionIndex++;
    showQuestion();
  } else if (mode === "practice") {
    finishQuiz();
  } else if (mode === "exam") {
    // maybe do nothing or alert user
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
  const quiz = document.getElementById("quiz-container");
  if (mode === "practice") {
    quiz.innerHTML = `
      <h2>Practice Completed</h2>
      <p>Your score: ${score} / ${selectedQuestions.length}</p>
    `;
  } else if (mode === "exam") {
    const percent = ((score / selectedQuestions.length) * 100).toFixed(2);
    quiz.innerHTML = `
      <h2>Exam Completed</h2>
      <p>Your score: ${percent}%</p>
      <h3>Review</h3>
      ${selectedQuestions.map((q, i) => `
        <div style="margin-bottom:20px;">
          <p><strong>Q${i+1}:</strong> ${q.question}</p>
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
    timerElem.textContent = `Time left: ${minutes}:${seconds.toString().padStart(2,'0')}`;
  }
}
