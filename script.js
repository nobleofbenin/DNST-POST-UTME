const practiceBtn = document.getElementById("practiceBtn");
const examBtn = document.getElementById("examBtn");
const container = document.getElementById("quizContainer");

let currentQuestionIndex = 0;
let selectedAnswers = [];
let score = 0;
let timerInterval;

practiceBtn.addEventListener("click", () => {
  loadPracticeMode();
});

examBtn.addEventListener("click", () => {
  loadExamMode();
});

// Shuffle and select random questions
function getRandomQuestions(count) {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// PRACTICE MODE
function loadPracticeMode() {
  container.innerHTML = "";
  const practiceQuestions = getRandomQuestions(30);
  currentQuestionIndex = 0;

  const questionDiv = document.createElement("div");
  const feedbackDiv = document.createElement("div");
  const explanationDiv = document.createElement("div");
  const navDiv = document.createElement("div");

  const nextBtn = document.createElement("button");
  const prevBtn = document.createElement("button");
  const backBtn = document.createElement("button");

  nextBtn.textContent = "Next";
  prevBtn.textContent = "Previous";
  backBtn.textContent = "Back to Main Page";

  nextBtn.onclick = () => showPracticeQuestion(currentQuestionIndex + 1);
  prevBtn.onclick = () => showPracticeQuestion(currentQuestionIndex - 1);
  backBtn.onclick = () => location.reload();

  navDiv.appendChild(prevBtn);
  navDiv.appendChild(nextBtn);
  navDiv.appendChild(backBtn);
  container.appendChild(questionDiv);
  container.appendChild(feedbackDiv);
  container.appendChild(explanationDiv);
  container.appendChild(navDiv);

  function showPracticeQuestion(index) {
    if (index < 0 || index >= practiceQuestions.length) return;

    currentQuestionIndex = index;
    const q = practiceQuestions[index];
    questionDiv.innerHTML = `<h3>Question ${index + 1} of ${practiceQuestions.length}</h3><p>${q.question}</p>`;
    feedbackDiv.innerHTML = "";
    explanationDiv.innerHTML = "";

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        if (opt === q.answer) {
          feedbackDiv.innerHTML = "<p style='color:green;'>Correct!</p>";
        } else {
          feedbackDiv.innerHTML = `<p style='color:red;'>Wrong. Correct answer: ${q.answer}</p>`;
        }
        explanationDiv.innerHTML = `<p><strong>Explanation:</strong> ${q.explanation}</p>`;
      };
      questionDiv.appendChild(btn);
    });
  }

  showPracticeQuestion(0);
}

// EXAM MODE
function loadExamMode() {
  container.innerHTML = "";
  const examQuestions = getRandomQuestions(50);
  selectedAnswers = Array(50).fill(null);
  score = 0;
  currentQuestionIndex = 0;

  const questionDiv = document.createElement("div");
  const optionsDiv = document.createElement("div");
  const submitBtn = document.createElement("button");
  const timerDiv = document.createElement("div");
  const backBtn = document.createElement("button");

  submitBtn.textContent = "Submit Exam";
  backBtn.textContent = "Back to Main Page";

  submitBtn.onclick = () => finishExam();
  backBtn.onclick = () => location.reload();

  container.appendChild(timerDiv);
  container.appendChild(questionDiv);
  container.appendChild(optionsDiv);
  container.appendChild(submitBtn);
  container.appendChild(backBtn);

  function showExamQuestion(index) {
    currentQuestionIndex = index;
    const q = examQuestions[index];
    questionDiv.innerHTML = `<h3>Question ${index + 1} of 50</h3><p>${q.question}</p>`;
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        selectedAnswers[index] = opt;
        if (index < 49) {
          showExamQuestion(index + 1);
        }
      };
      optionsDiv.appendChild(btn);
    });
  }

  function finishExam() {
    clearInterval(timerInterval);
    container.innerHTML = "";
    let resultsHTML = "";
    score = 0;

    examQuestions.forEach((q, i) => {
      const userAnswer = selectedAnswers[i];
      const isCorrect = userAnswer === q.answer;
      if (isCorrect) score++;

      resultsHTML += `
        <div style="border-bottom:1px solid #ccc; padding:10px;">
          <p><strong>Q${i + 1}:</strong> ${q.question}</p>
          <p>Your answer: <span style="color:${isCorrect ? 'green' : 'red'};">${userAnswer || 'No answer'}</span></p>
          <p>Correct answer: <strong>${q.answer}</strong></p>
          <p><em>Explanation:</em> ${q.explanation}</p>
        </div>
      `;
    });

    const finalScore = (score / 50) * 100;
    container.innerHTML = `<h2>Exam Finished</h2><p>Your Score: ${finalScore}% (${score} out of 50)</p>` + resultsHTML;

    const backBtn = document.createElement("button");
    backBtn.textContent = "Back to Main Page";
    backBtn.className = "back-button";
    backBtn.onclick = () => location.reload();
    container.appendChild(backBtn);
  }

  showExamQuestion(0);
  startTimer(60 * 60, timerDiv); // 1 hour
}

// TIMER
function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  timerInterval = setInterval(() => {
    minutes = Math.floor(timer / 60);
    seconds = timer % 60;

    display.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (--timer < 0) {
      clearInterval(timerInterval);
      alert("Time is up! Submitting your exam.");
      finishExam();
    }
  }, 1000);
}
