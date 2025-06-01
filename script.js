let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];
let reviewMode = false;
let answers = [];
let examTimer;
let examMode = false;
const studentName = localStorage.getItem("studentName") || "Student";

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
  startTimer(60 * 60); // 1 hour timer
}

function showQuestion() {
  const q = shuffledQuestions[currentQuestion];
  const container = document.getElementById("quiz-container");
  const mode = reviewMode ? `<p><strong>Review Mode</strong></p>` : "";

  container.innerHTML = `
    ${mode}
    <h2>Question ${currentQuestion + 1
