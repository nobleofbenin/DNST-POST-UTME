let currentQuestion = 0;
let userAnswers = [];
let mode = "";
let timerInterval;

function startPracticeMode() {
  mode = "practice";
  showQuiz(30);
}

function startExamMode() {
  mode = "exam";
  showQuiz(50);
  startTimer(60 * 60); // 1 hour
}

function showQuiz(count) {
  questions.sort(() => Math.random() - 0.5);
  questions.length = count;
  document.querySelector("#quiz").classList.remove("hidden");
  document.querySelector("#results").classList.add("hidden");
  showQuestion();
  if (mode === "exam") {
    document.getElementById("timer").classList.remove("hidden");
    document.getElementById("submitBtn").classList.remove("hidden");
  }
}

function showQuestion() {
  const q = questions[currentQuestion];
  const container = document.getElementById("question-container");
  container.innerHTML = `<p>${currentQuestion + 1}. ${q.question}</p>`;
  q.options.forEach((opt, i) => {
    container.innerHTML += `<div><input type="radio" name="option" value="${opt}" onchange="submitAnswer('${opt}')"/> ${opt}</div>`;
  });
  document.getElementById("feedback").innerHTML = "";
}

function submitAnswer(selected) {
  userAnswers[currentQuestion] = selected;
  if (mode === "practice") {
    const correct = questions[currentQuestion].answer;
    const explanation = questions[currentQuestion].explanation;
    const result = selected === correct ? "✅ Correct!" : `❌ Wrong. Correct: ${correct}`;
    document.getElementById("feedback").innerHTML = `${result}<br>${explanation}`;
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

function submitExam() {
  clearInterval(timerInterval);
  let score = 0;
  let resultHTML = "";
  questions.forEach((q, i) => {
    const correct = q.answer;
    const chosen = userAnswers[i] || "No answer";
    const isCorrect = chosen === correct;
    if (isCorrect) score++;
    resultHTML += `<p><strong>Q${i + 1}:</strong> ${q.question}<br/>
    Your answer: ${chosen} <br/>
    Correct answer: ${correct} <br/>
    Explanation: ${q.explanation}</p><hr/>`;
  });
  const percentage = (score / questions.length) * 100;
  resultHTML = `<h2>Your Score: ${percentage.toFixed(2)}%</h2>` + resultHTML;
  document.getElementById("results").innerHTML = resultHTML;
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("quiz").classList.add("hidden");
}

function startTimer(seconds) {
  const timer = document.getElementById("timer");
  function update() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timer.innerText = `Time Left: ${mins}m ${secs}s`;
    if (seconds <= 0) {
      clearInterval(timerInterval);
      submitExam();
    }
    seconds--;
  }
  update();
  timerInterval = setInterval(update, 1000);
}

