let currentIndex = 0;
let selectedAnswers = [];
let examStartTime = null;
let mode = '';
let score = 0;
let examTimer;

function startPractice() {
  mode = 'practice';
  currentIndex = 0;
  score = 0;
  questions.sort(() => Math.random() - 0.5);
  showQuestion(questions.slice(0, 25));
}

function startExam() {
  mode = 'exam';
  currentIndex = 0;
  score = 0;
  selectedAnswers = [];
  questions.sort(() => Math.random() - 0.5);
  examStartTime = Date.now();
  examTimer = setTimeout(() => finishExam(questions.slice(0, 30)), 45 * 60 * 1000);
  showQuestion(questions.slice(0, 30));
}

function showQuestion(set) {
  const q = set[currentIndex];
  document.getElementById("main").innerHTML = `
    <h2>Question ${currentIndex + 1} of ${set.length}</h2>
    <p>${q.question}</p>
    ${q.options.map(opt =>
      `<button onclick="submitAnswer('${opt}', ${JSON.stringify(set).replace(/"/g, '&quot;')})">${opt}</button>`
    ).join("<br><br>")}
  `;
}

function submitAnswer(selected, setJSON) {
  const set = JSON.parse(setJSON.replace(/&quot;/g, '"'));
  const correct = set[currentIndex].answer;

  if (mode === 'practice') {
    const explanation = set[currentIndex].explanation;
    alert(selected === correct ? `✅ Correct!\n\n${explanation}` : `❌ Wrong.\n\nCorrect Answer: ${correct}\nExplanation: ${explanation}`);
    currentIndex++;
    if (currentIndex < 25) showQuestion(set);
    else showPracticeResult();
  } else {
    selectedAnswers.push({ selected, correct });
    currentIndex++;
    if (currentIndex < 30) showQuestion(set);
    else finishExam(set);
  }
}

function showPracticeResult() {
  document.getElementById("main").innerHTML = `
    <h2>Practice Completed</h2>
    <p>You practiced 25 questions. Great job!</p>
    <button onclick="location.reload()">Go Back</button>
  `;
}

function finishExam(set) {
  clearTimeout(examTimer);
  score = selectedAnswers.filter(ans => ans.selected === ans.correct).length;
  const percent = score * 2;

  let resultHTML = `
    <h2>Exam Completed</h2>
    <p>You answered 30 questions.</p>
    <h3>Your Score: ${score} / 30 → ${percent}%</h3>
    <h4>Review with Correct Answers</h4>
  `;

  selectedAnswers.forEach((ans, i) => {
    const q = set[i];
    resultHTML += `
      <p><strong>Q${i + 1}: ${q.question}</strong><br>
      Your Answer: ${ans.selected}<br>
      Correct Answer: ${q.answer}<br>
      Explanation: ${q.explanation}</p><hr>`;
  });

  resultHTML += `<button onclick="location.reload()">Back to Home</button>`;
  document.getElementById("main").innerHTML = resultHTML;
}
