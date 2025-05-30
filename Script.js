let currentQuestion = 0;
let score = 0;
let mode = '';
let selectedQuestions = [];
let timerInterval;

const quizContainer = document.getElementById('quiz-container');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsList = document.querySelector('.options');
const explanation = document.getElementById('explanation');
const nextBtn = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');
const timer = document.getElementById('timer');

document.getElementById('practice-mode-btn').addEventListener('click', () => startQuiz('practice'));
document.getElementById('exam-mode-btn').addEventListener('click', () => startQuiz('exam'));
restartBtn.addEventListener('click', () => location.reload());
document.getElementById('whatsapp-btn').addEventListener('click', () => {
  window.open("https://wa.me/2349156478004", "_blank");
});

function startQuiz(selectedMode) {
  mode = selectedMode;
  currentQuestion = 0;
  score = 0;
  selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, mode === 'practice' ? 25 : 30);

  document.querySelector('.mode-select').style.display = 'none';
  quizContainer.style.display = 'block';
  resultContainer.style.display = 'none';
  if (mode === 'exam') {
    timer.style.display = 'block';
    startTimer(45 * 60);
  }
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= selectedQuestions.length) return showResult();

  const q = selectedQuestions[currentQuestion];
  questionNumber.textContent = `Question ${currentQuestion + 1} of ${selectedQuestions.length}`;
  questionText.textContent = q.question;
  optionsList.innerHTML = '';
  explanation.style.display = 'none';
  nextBtn.style.display = 'none';

  q.options.forEach(option => {
    const li = document.createElement('li');
    li.textContent = option;
    li.addEventListener('click', () => handleOptionClick(li, q));
    optionsList.appendChild(li);
  });
}

function handleOptionClick(selectedLi, question) {
  const isCorrect = selectedLi.textContent === question.answer;
  selectedLi.classList.add(isCorrect ? 'correct' : 'incorrect');

  if (mode === 'practice') {
    explanation.textContent = question.explanation;
    explanation.style.display = 'block';
  }

  if (isCorrect) score++;

  Array.from(optionsList.children).forEach(li => {
    li.removeEventListener('click', () => {});
    if (li.textContent === question.answer) li.classList.add('correct');
    else if (li !== selectedLi) li.classList.add('incorrect');
  });

  nextBtn.style.display = 'block';
  nextBtn.onclick = () => {
    currentQuestion++;
    showQuestion();
  };
}

function showResult() {
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  const finalScore = mode === 'exam' ? score * 2 : score;
  scoreDisplay.textContent = `You scored ${finalScore} out of ${selectedQuestions.length * (mode === 'exam' ? 2 : 1)}.`;
  clearInterval(timerInterval);
  timer.style.display = 'none';
}

function startTimer(seconds) {
  let timeLeft = seconds;
  updateTimerDisplay(timeLeft);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showResult();
    }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timer.textContent = `Time Left: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
