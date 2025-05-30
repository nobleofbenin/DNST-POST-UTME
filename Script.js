let currentMode = '';
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let startTime;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startPracticeMode() {
  currentMode = 'practice';
  currentQuestions = shuffle(questions).slice(0, 25);
  currentIndex = 0;
  score = 0;
  document.getElementById('quiz-container').style.display = 'block';
  showQuestion();
}

function startExamMode() {
  currentMode = 'exam';
  currentQuestions = shuffle(questions).slice(0, 30);
  currentIndex = 0;
  score = 0;
  startTime = Date.now();
  document.getElementById('quiz-container').style.display = 'block';
  showQuestion();
  setTimeout(() => {
    alert("Time's up!");
    showResult();
  }, 45 * 60 * 1000);
}

function showQuestion() {
  const question = currentQuestions[currentIndex];
  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <h2>Q${currentIndex + 1}: ${question.question}</h2>
    ${question.options.map((opt, i) => `
      <button onclick="selectAnswer('${opt}')">${opt}</button>
    `).join('')}
  `;
}

function selectAnswer(selected) {
  const question = currentQuestions[currentIndex];
  if (currentMode === 'practice') {
    let message = selected === question.answer ? "✅ Correct!" : `❌ Wrong! Correct Answer: ${question.answer}`;
    alert(message + "\nExplanation: " + question.explanation);
  } else if (selected === question.answer) {
    score++;
  }

  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const container = document.getElementById('quiz-container');
  let finalScore = currentMode === 'exam' ? score * 2 : score;
  container.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your score: ${finalScore}/${currentQuestions.length * (currentMode === 'exam' ? 2 : 1)}</p>
    ${currentMode === 'exam' ? `
      <h3>Answers & Explanations:</h3>
      <ul>${currentQuestions.map(q => `
        <li><strong>${q.question}</strong><br>
        Answer: ${q.answer}<br>
        Explanation: ${q.explanation}</li>
      `).join('')}</ul>
    ` : ''}
  `;
}

function joinWhatsApp() {
  window.open("https://wa.me/2349156478004", "_blank");
}
document.getElementById('whatsapp-btn').addEventListener('click', () => {
  window.open("https://wa.me/2349156478004", "_blank");
});
