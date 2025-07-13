function calculateScore(callback) {
  const answers = {
    q1: "Vinnveli Nayagan",
    q2: "Kamal Hassan",
    q3: "Kamal Hassan"
  };

  const userAnswers = {
    q1: document.getElementById('q1').value.trim(),
    q2: document.getElementById('q2').value.trim(),
    q3: document.getElementById('q3').value.trim()
  };

  return callback(answers, userAnswers);
}

function strictScoring(correct, user) {
  let score = 0;
  for (let key in correct) {
    if (user[key].toLowerCase() === correct[key].toLowerCase()) {
      score++;
    }
  }
  return score;
}

function lenientScoring(correct, user) {
  let score = 0;
  for (let key in correct) {
    if (user[key].toLowerCase().includes(correct[key].substring(0, 3).toLowerCase())) {
      score++;
    }
  }
  return score;
}

function checkScore() {
  const score = calculateScore(strictScoring); // You can switch to lenientScoring
  document.getElementById("score").innerText = `Your Score: ${score} / 3`;
}
