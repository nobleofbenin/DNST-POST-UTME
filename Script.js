let currentQuestion = 0;
let userAnswers = [];
let examMode = false;

function startPractice() {
  examMode = false;
  currentQuestion = 0;
  userAnswers = [];
  showQuestion();
}

function startExam() {
  examMode = true;
  currentQuestion = 0;
  userAnswers = [];
  showQuestion();
}

function showQuestion() {
  const container = document.querySelector("main");
  const q = questions[currentQuestion];

  container.innerHTML = `
    <h2>Question ${currentQuestion + 1} of ${questions.length}</h2>
    <p>${q.question}</p>
    <div>
      ${q.options.map((option, index) =>
        `<button onclick="submitAnswer('${option}')">${option}</button>`
      ).join("<br><br>")}
    </div>
  `;
}

function submitAnswer(selected) {
  userAnswers.push(selected);

  if (!examMode) {
    const correct = questions[currentQuestion].answer;
    alert(selected === correct ? "✅ Correct!" : `❌ Wrong. Correct: ${correct}`);
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let score = 0;
  questions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) score++;
  });

  document.querySelector("main").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your score: ${score} out of ${questions.length}</p>
    <button onclick="location.reload()">Try Again</button>
  `;
}
