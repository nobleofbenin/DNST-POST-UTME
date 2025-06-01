const quizContainer = document.getElementById("quiz-container");
const practiceBtn = document.getElementById("practiceBtn");
const examBtn = document.getElementById("examBtn");

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function showQuiz(questions, mode) {
  quizContainer.innerHTML = "";
  quizContainer.classList.remove("hidden");

  let current = 0;
  let score = 0;
  let userAnswers = [];

  const endButton = document.createElement("button");
  endButton.textContent = "Back to Mode Selection";
  endButton.onclick = () => {
    quizContainer.classList.add("hidden");
  };
  quizContainer.appendChild(endButton);

  if (mode === "exam") {
    let timer = 60 * 60;
    const timerEl = document.createElement("p");
    const updateTimer = () => {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      timerEl.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      if (timer > 0) {
        timer--;
        setTimeout(updateTimer, 1000);
      } else {
        showResults();
      }
    };
    quizContainer.appendChild(timerEl);
    updateTimer();
  }

  const shuffled = shuffle(questions).slice(0, mode === "exam" ? 50 : 30);
  showQuestion();

  function showQuestion() {
    quizContainer.innerHTML = "";
    quizContainer.appendChild(endButton);

    const q = shuffled[current];
    const qEl = document.createElement("div");
    qEl.innerHTML = `<h3>Q${current + 1}: ${q.question}</h3>`;
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        if (mode === "practice") {
          const feedback = document.createElement("p");
          if (opt === q.answer) {
            feedback.textContent = "✅ Correct!";
          } else {
            feedback.textContent = `❌ Incorrect. Correct: ${q.answer}`;
          }
          const explanation = document.createElement("p");
          explanation.textContent = `Explanation: ${q.explanation}`;
          quizContainer.appendChild(feedback);
          quizContainer.appendChild(explanation);
        }
        userAnswers[current] = opt;
        if (mode === "practice") {
          nextButton.disabled = false;
        }
      };
      qEl.appendChild(btn);
    });

    quizContainer.appendChild(qEl);

    const nav = document.createElement("div");
    const nextButton = document.createElement("button");
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    nextButton.textContent = current === shuffled.length - 1 ? "Submit" : "Next";

    prevButton.onclick = () => {
      if (current > 0) {
        current--;
        showQuestion();
      }
    };

    nextButton.onclick = () => {
      if (current < shuffled.length - 1) {
        current++;
        showQuestion();
      } else {
        showResults();
      }
    };

    nav.appendChild(prevButton);
    nav.appendChild(nextButton);
    quizContainer.appendChild(nav);
  }

  function showResults() {
    quizContainer.innerHTML = "<h2>Results</h2>";
    let correct = 0;
    shuffled.forEach((q, i) => {
      const userAnswer = userAnswers[i] || "No answer";
      const isCorrect = userAnswer === q.answer;
      if (isCorrect) correct++;
      const result = document.createElement("div");
      result.innerHTML = `
        <p><strong>Q${i + 1}: ${q.question}</strong></p>
        <p>Your answer: ${userAnswer} ${isCorrect ? "✅" : "❌"}</p>
        <p>Correct answer: ${q.answer}</p>
        <p><em>Explanation: ${q.explanation}</em></p>
        <hr/>
      `;
      quizContainer.appendChild(result);
    });
    const scoreDisplay = document.createElement("h3");
    scoreDisplay.textContent = `Score: ${((correct / shuffled.length) * 100).toFixed(2)}%`;
    quizContainer.prepend(scoreDisplay);
    quizContainer.appendChild(endButton);
  }
}

practiceBtn.onclick = () => showQuiz(questions, "practice");
examBtn.onclick = () => showQuiz(questions, "exam");
v
