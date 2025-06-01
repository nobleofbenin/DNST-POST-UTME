let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];
let reviewMode = false;
let answers = [];
let examTimer;
let examMode = false;

function startPractice() {
  examMode = false;
  shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 30);
  currentQuestion = 0;
  score = 0;
  answers = [];
  reviewMode = false;
  showQuestion();
  updateProgress();
}

function startExam() {
  examMode = true;
  shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 50);
  currentQuestion = 0;
  score = 0;
  answers = [];
  reviewMode = false;
  showQuestion();
  updateProgress();
  startTimer(60 * 60); // 1 hour = 3600 seconds
}

function showQuestion() {
  const q = shuffledQuestions[currentQuestion];
  const container = document.getElementById("quiz-container");
  const mode = reviewMode ? `<p><strong>Review Mode</strong></p>` : "";

  container.innerHTML = `
    ${mode}
    <h2>Question ${currentQuestion + 1} of ${shuffledQuestions.length}</h2>
    <p>${q.question}</p>
    ${q.options.map(opt => `<button onclick="checkAnswer('${opt}')">${opt}</button>`).join("")}
    <div id="feedback"></div>
    <div style="margin-top: 20px;">
      ${currentQuestion > 0 ? `<button onclick="prevQuestion()">Previous</button>` : ""}
      ${currentQuestion < shuffledQuestions.length - 1 ? `<button onclick="nextQuestion()">Next</button>` : `<button onclick="submitExam()">Submit</button>`}
    </div>
    <button onclick="goHome()" style="margin-top: 15px; background: red; color: white;">End / Go Back</button>
    ${examMode && !reviewMode ? `<p id='timer' style='margin-top:10px; font-weight:bold;'></p>` : ""}
  `;

  if (examMode && !reviewMode) updateTimerDisplay();
}

function checkAnswer(selected) {
  if (reviewMode) return;

  const correct = shuffledQuestions[currentQuestion].answer;
  if (!examMode) {
    const feedback = document.getElementById("feedback");
    if (selected === correct) {
      score++;
      feedback.innerHTML = `<p style='color:green'><strong>Correct!</strong></p>`;
    } else {
      feedback.innerHTML = `<p style='color:red'><strong>Wrong!</strong> Correct Answer: ${correct}</p>`;
    }
  } else {
    if (selected === correct) score++;
  }

  answers[currentQuestion] = selected;
}

function nextQuestion() {
  if (currentQuestion < shuffledQuestions.length - 1) {
    currentQuestion++;
    showQuestion();
    updateProgress();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
    updateProgress();
  }
}

function submitExam() {
  clearInterval(examTimer);
  const total = shuffledQuestions.length;
  const percent = Math.round((score / total) * 100);

  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <h2>Well done!</h2>
    <p>Your score: ${score}/${total} (${percent}%)</p>
    <button onclick="startReview()">Review Answers</button>
    <button onclick="goHome()">Back to Home</button>
  `;
}

function startReview() {
  currentQuestion = 0;
  reviewMode = true;
  showQuestion();
}

function updateProgress() {
  const text = document.getElementById("progress-text");
  const fill = document.getElementById("fill");
  const total = shuffledQuestions.length;
  const percent = Math.round(((currentQuestion + 1) / total) * 100);
  text.textContent = `Progress: ${currentQuestion + 1} of ${total}`;
  fill.style.width = `${percent}%`;
}

function goHome() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("home").style.display = "block";
  document.getElementById("progress-bar").style.display = "none";
  clearInterval(examTimer);
}

function startTimer(seconds) {
  let timeLeft = seconds;
  examTimer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(examTimer);
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay(timeLeft = 0) {
  const timerEl = document.getElementById("timer");
  if (!timerEl) return;
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  timerEl.textContent = `Time Left: ${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
