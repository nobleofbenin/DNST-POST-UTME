let mode = '';
let score = 0;
let currentQuestionIndex = 0;
let selectedQuestions = [];

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
  if (mode === "exam") startTimer(45);
  showQuestion();
}

function showQuestion() {
  const quiz = document.getElementById("quiz-container");
  const q = selectedQuestions[currentQuestionIndex];
  if (!q) return finishQuiz();
  quiz.innerHTML = `
    <h2>${q.question}</h2>
    ${q.options.map(opt => `<button onclick="selectAnswer('${opt}')">${opt}</button>`).join("<br><br>")}
  `;
}

function selectAnswer(option) {
  const q = selectedQuestions[currentQuestionIndex];
  const isCorrect = option === q.answer;
  if (isCorrect) score++;
  if (mode === "practice") {
    document.getElementById("quiz-container").innerHTML += `
      <p><strong>${isCorrect ? "Correct ✅" : "Wrong ❌"}:</strong> ${q.explanation}</p>
      <button onclick="nextQuestion()">Next</button>
    `;
  } else {
    nextQuestion();
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}

function finishQuiz() {
  const total = mode === "exam" ? score * 2 : score;
  document.getElementById("quiz-container").innerHTML = `
    <h2>Quiz Completed</h2>
    <p>Your score: ${total} / ${mode === "exam" ? 60 : selectedQuestions.length}</p>
    ${mode === "exam" ? showExplanations() : ""}
  `;
}

function showExplanations() {
  return selectedQuestions.map(q => `
    <div>
      <p><strong>Q:</strong> ${q.question}</p>
      <p><strong>Answer:</strong> ${q.answer}</p>
      <p><strong>Explanation:</strong> ${q.explanation}</p>
    </div>
  `).join("<hr>");
}

function startTimer(minutes) {
  let seconds = minutes * 60;
  const timerInterval = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);
}
