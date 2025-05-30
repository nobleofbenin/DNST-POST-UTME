import { questions } from './questions.js';

const modeContainer = document.getElementById('mode-selection');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question');
const optionsList = document.getElementById('options');
const feedbackContainer = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-btn');
const timerDisplay = document.getElementById('timer');
const resultContainer = document.getElementById('result');
const explanationContainer = document.getElementById('explanations');
const backBtn = document.getElementById('back-btn');

let currentMode = '';
let currentQuestionIndex = 0;
let shuffledQuestions = [];
let userAnswers = [];
let timer = null;
let timeLeft = 3600;

function startQuiz(mode) {
  currentMode = mode;
  currentQuestionIndex = 0;
  userAnswers = [];
  shuffledQuestions = [...questions]
    .sort(() => 0.5 - Math.random())
    .slice(0, mode === 'practice' ? 30 : 50);

  modeContainer.style.display = 'none';
  quizContainer.style.display = 'block';
  resultContainer.style.display = 'none';
  explanationContainer.innerHTML = '';
  if (currentMode === 'exam') {
    startTimer();
  }
  showQuestion();
}

function startTimer() {
  timerDisplay.style.display = 'block';
  timeLeft = 3600;
  updateTimerDisplay();
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      submitQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `Time left: ${minutes}m ${seconds}s`;
}

function showQuestion() {
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionText.textContent = `Q${currentQuestionIndex + 1}: ${currentQuestion.question}`;
  optionsList.innerHTML = '';
  feedbackContainer.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => handleAnswer(index));
    li.appendChild(btn);
    optionsList.appendChild(li);
  });

  prevBtn.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
  nextBtn.style.display = 'none';
  submitBtn.style.display = currentQuestionIndex === shuffledQuestions.length - 1 && currentMode === 'exam' ? 'inline-block' : 'none';
  backBtn.style.display = 'inline-block';
}

function handleAnswer(selectedIndex) {
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  userAnswers[currentQuestionIndex] = selectedIndex;

  const isCorrect = selectedIndex === currentQuestion.answer;
  if (currentMode === 'practice') {
    feedbackContainer.innerHTML = `
      <p><strong>${isCorrect ? 'Correct!' : 'Incorrect!'}</strong></p>
      <p>Correct answer: ${currentQuestion.options[currentQuestion.answer]}</p>
      <p>Explanation: ${currentQuestion.explanation}</p>
    `;
  }

  nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
  if (currentQuestionIndex < shuffledQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

function submitQuiz() {
  if (timer) clearInterval(timer);

  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  timerDisplay.style.display = 'none';

  let score = 0;
  explanationContainer.innerHTML = '';

  shuffledQuestions.forEach((q, i) => {
    const userAnswer = userAnswers[i];
    if (userAnswer === q.answer) {
      score++;
    }

    const explanationHTML = `
      <div class="explanation-block">
        <p><strong>Q${i + 1}: ${q.question}</strong></p>
        <p>Your Answer: ${userAnswer !== undefined ? q.options[userAnswer] : 'No answer'}</p>
        <p>Correct Answer: ${q.options[q.answer]}</p>
        <p>Explanation: ${q.explanation}</p>
        <hr>
      </div>
    `;
    explanationContainer.innerHTML += explanationHTML;
  });

  const percentage = ((score / shuffledQuestions.length) * 100).toFixed(2);
  resultContainer.innerHTML = `
    <h2>Exam Complete!</h2>
    <p>You scored ${score} out of ${shuffledQuestions.length} (${percentage}%)</p>
    <h3>Explanations:</h3>
  `;
}

function goBackToModeSelection() {
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'none';
  explanationContainer.innerHTML = '';
  modeContainer.style.display = 'block';
  if (timer) clearInterval(timer);
}

// Event listeners
document.getElementById('practice-btn').addEventListener('click', () => startQuiz('practice'));
document.getElementById('exam-btn').addEventListener('click', () => startQuiz('exam'));
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
submitBtn.addEventListener('click', submitQuiz);
backBtn.addEventListener('click', goBackToModeSelection);
