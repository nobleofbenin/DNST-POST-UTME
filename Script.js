// DOM Elements
const practiceBtn = document.getElementById("practice-mode-btn");
const examBtn = document.getElementById("exam-mode-btn");
const quizContainer = document.getElementById("quiz-container");
const questionNumberElem = document.getElementById("question-number");
const questionTextElem = document.getElementById("question-text");
const optionsList = document.querySelector(".options");
const explanationElem = document.getElementById("explanation");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreElem = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
const timerElem = document.getElementById("timer");
const whatsappBtn = document.getElementById("whatsapp-btn");

const WHATSAPP_NUMBER = "+2349156478004";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

whatsappBtn.onclick = () => {
  window.open(WHATSAPP_LINK, "_blank");
};

// Quiz state
let currentMode = null; // "practice" or "exam"
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let examTime = 45 * 60; // 45 minutes in seconds
let timerInterval = null;

// Utility to shuffle questions
function shuffleArray(arr) {
  return arr
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);
}

// Start Practice Mode
practiceBtn.addEventListener("click", () => {
  startQuiz("practice");
});

// Start Exam Mode
examBtn.addEventListener("click", () => {
  startQuiz("exam");
});

// Start quiz common
function startQuiz(mode) {
  currentMode = mode;
  score = 0;
  currentQuestionIndex = 0;
  explanationElem.style.display = "none";
  nextBtn.style.display = "none";
  resultContainer.style.display = "none";
  quizContainer.style.display = "block";
  timerElem.style.display = mode === "exam" ? "block" : "none";

  // Shuffle and limit questions based on mode
  let limit = mode === "practice" ? 25 : 30;
  shuffledQuestions = shuffleArray(questions).slice(0, limit);

  if (mode === "exam") {
    startTimer();
  }

  showQuestion();
}

// Show current question
function showQuestion() {
  explanationElem.style.display = "none";
  nextBtn.style.display = "none";

  const q = shuffledQuestions[currentQuestionIndex];
  questionNumberElem.textContent = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
  questionTextElem.textContent = q.question;

  optionsList.innerHTML = "";
  q.options.forEach((option, idx) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.dataset.index = idx;
    li.onclick = () => selectAnswer(idx);
    optionsList.appendChild(li);
  });
}

// Handle answer selection
function selectAnswer(selectedIndex) {
  const q = shuffledQuestions[currentQuestionIndex];

  // Disable further clicks
  Array.from(optionsList.children).forEach(li => {
    li.onclick = null;
  });

  if (currentMode === "practice") {
    // Show instant feedback & explanation
    if (selectedIndex === q.answer) {
      score++;
      optionsList.children[selectedIndex].classList.add("correct");
    } else {
      optionsList.children[selectedIndex].classList.add("incorrect");
      optionsList.children[q.answer].classList.add("correct");
    }
    explanationElem.textContent = `Explanation: ${q.explanation}`;
    explanationElem.style.display = "block";
    nextBtn.style.display = "inline-block";
  } else {
    // Exam mode: just mark selection but no explanation now
    optionsList.children[selectedIndex].classList.add("selected");
    nextBtn.style.display = "inline-block";
  }
}

// Next question button
nextBtn.addEventListener("click", () => {
  const q = shuffledQuestions[currentQuestionIndex];
  if (currentMode === "exam") {
    // In exam, check answer only when next clicked
    // Get selected answer
    let selectedLi = Array.from(optionsList.children).find(li => li.classList.contains("selected"));
    if (selectedLi) {
      let selectedIdx = Number(selectedLi.dataset.index);
      if (selectedIdx === q.answer) score++;
    }
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

// End quiz & show results
function endQuiz() {
  quizContainer.style.display = "none";
  timerElem.style.display = "none";
  if (timerInterval) clearInterval(timerInterval);

  let totalScore = currentMode === "exam" ? score * 2 : score;
  scoreElem.textContent = `You scored ${totalScore} out of ${shuffledQuestions.length * (currentMode === "exam" ? 2 : 1)}.`;
  resultContainer.style.display = "block";
}

// Restart quiz button
restartBtn.addEventListener("click", () => {
  resultContainer.style.display = "none";
});

// Timer for exam mode
function startTimer() {
  let timeLeft = examTime;
  updateTimer(timeLeft);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time is up!");
      endQuiz();
    }
  }, 1000);
}

function updateTimer(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  timerElem.textContent = `Time Left: ${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`;
}
