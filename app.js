// Arabic Words Quiz
// Vocabulary transcribed from the lesson images (L1-L5).
// Each entry: { lesson, arabic, urdu, english }

const WORDS = [
  // ----- L1: Demonstrative / Relative / Negative particles -----
  { lesson: "L1", arabic: "هَٰذَا", urdu: "یہ [مذکر]", english: "this (m.)" },
  { lesson: "L1", arabic: "هَٰذِهِ", urdu: "یہ [مؤنث]", english: "this (f.)" },
  { lesson: "L1", arabic: "هَٰؤُلَاءِ", urdu: "یہ سب", english: "these" },
  { lesson: "L1", arabic: "ذَٰلِكَ", urdu: "وہ [مذکر]", english: "that (m.)" },
  { lesson: "L1", arabic: "تِلْكَ", urdu: "وہ [مؤنث]", english: "that (f.)" },
  { lesson: "L1", arabic: "أُولَٰئِكَ", urdu: "وہ سب", english: "those" },
  { lesson: "L1", arabic: "الَّذِي", urdu: "وہ جو [مذکر]", english: "the one who (m.)" },
  { lesson: "L1", arabic: "الَّتِي", urdu: "وہ جو [مؤنث]", english: "the one who (f.)" },
  { lesson: "L1", arabic: "الَّذِينَ", urdu: "وہ سب جو", english: "those who" },
  { lesson: "L1", arabic: "لَا", urdu: "نہیں", english: "no / not" },
  { lesson: "L1", arabic: "إِلَّا", urdu: "سوائے", english: "except" },
  { lesson: "L1", arabic: "كَلَّا", urdu: "ہرگز نہیں", english: "by no means" },
  { lesson: "L1", arabic: "لَنْ", urdu: "ہرگز نہیں", english: "never (will not)" },
  { lesson: "L1", arabic: "لَمْ", urdu: "نہیں [ماضی]", english: "did not" },
  { lesson: "L1", arabic: "مَا", urdu: "نہیں", english: "not" },
  { lesson: "L1", arabic: "لَيْسَ", urdu: "نہیں", english: "is not" },
  { lesson: "L1", arabic: "بَلَىٰ", urdu: "کیوں نہیں!", english: "yes indeed / why not" },
  { lesson: "L1", arabic: "غَيْر", urdu: "سوا / نہیں", english: "other than / not" },
  { lesson: "L1", arabic: "دُونَ", urdu: "سوا / علاوہ", english: "besides / without" },
  { lesson: "L1", arabic: "إِلَّا [أَنْ لَا]", urdu: "اگر نہ", english: "unless" },
  { lesson: "L1", arabic: "نَعَمْ", urdu: "ہاں", english: "yes" },

  // ----- L2: Pronouns (objective & possessive case) -----
  { lesson: "L2", arabic: "هُ", urdu: "اس کو / اس کا [واحد مذکر]", english: "him / his" },
  { lesson: "L2", arabic: "هُمَا", urdu: "ان کو / ان کا [تثنیہ مذکر]", english: "them / their (two, m.)" },
  { lesson: "L2", arabic: "هُمْ", urdu: "ان کو / ان کا [جمع مذکر]", english: "them / their (m.)" },
  { lesson: "L2", arabic: "هَا", urdu: "اس کو / اس کا [واحد مؤنث]", english: "her / hers" },
  { lesson: "L2", arabic: "هُمَا", urdu: "ان کو / ان کا [تثنیہ مؤنث]", english: "them / their (two, f.)" },
  { lesson: "L2", arabic: "هُنَّ", urdu: "ان کو / ان کا [جمع مؤنث]", english: "them / their (f.)" },
  { lesson: "L2", arabic: "كَ", urdu: "تجھے / تیرا [واحد مذکر]", english: "you / your (m.)" },
  { lesson: "L2", arabic: "كُمَا", urdu: "تمہیں / تمہارا [تثنیہ مذکر]", english: "you / your (two, m.)" },
  { lesson: "L2", arabic: "كُمْ", urdu: "تمہیں / تمہارا [جمع مذکر]", english: "you / your (pl. m.)" },
  { lesson: "L2", arabic: "كِ", urdu: "تجھے / تیرا [واحد مؤنث]", english: "you / your (f.)" },
  { lesson: "L2", arabic: "كُمَا", urdu: "تمہیں / تمہارا [تثنیہ مؤنث]", english: "you / your (two, f.)" },
  { lesson: "L2", arabic: "كُنَّ", urdu: "تمہیں / تمہارا [جمع مؤنث]", english: "you / your (pl. f.)" },
  { lesson: "L2", arabic: "نِي / ي", urdu: "میرا / مجھے", english: "me / my" },
  { lesson: "L2", arabic: "نَا", urdu: "ہمیں / ہمارا", english: "us / our" },

  // ----- L3: Pronouns (nominative / subject case) -----
  { lesson: "L3", arabic: "هُوَ", urdu: "وہ / اس نے [مذکر]", english: "he" },
  { lesson: "L3", arabic: "هُمَا", urdu: "وہ دو / ان دونوں [مذکر]", english: "they two (m.)" },
  { lesson: "L3", arabic: "هُمْ", urdu: "وہ سب / ان سب نے [مذکر]", english: "they (m.)" },
  { lesson: "L3", arabic: "هِيَ", urdu: "وہ / اس نے [مؤنث]", english: "she" },
  { lesson: "L3", arabic: "هُمَا", urdu: "وہ دو / ان دونوں [مؤنث]", english: "they two (f.)" },
  { lesson: "L3", arabic: "هُنَّ", urdu: "وہ سب / ان سب نے [مؤنث]", english: "they (f.)" },
  { lesson: "L3", arabic: "أَنْتَ", urdu: "تو / تو نے [مذکر]", english: "you (m.)" },
  { lesson: "L3", arabic: "أَنْتُمَا", urdu: "تم دو / تم دونوں [مذکر]", english: "you two (m.)" },
  { lesson: "L3", arabic: "أَنْتُمْ", urdu: "تم سب / تم سب نے [مذکر]", english: "you all (m.)" },
  { lesson: "L3", arabic: "أَنْتِ", urdu: "تو / تو نے [مؤنث]", english: "you (f.)" },
  { lesson: "L3", arabic: "أَنْتُمَا", urdu: "تم دو / تم دونوں [مؤنث]", english: "you two (f.)" },
  { lesson: "L3", arabic: "أَنْتُنَّ", urdu: "تم سب / تم سب نے [مؤنث]", english: "you all (f.)" },
  { lesson: "L3", arabic: "أَنَا", urdu: "میں / میں نے", english: "I" },
  { lesson: "L3", arabic: "نَحْنُ", urdu: "ہم / ہم نے", english: "we" },

  // ----- L4: Interrogatives -----
  { lesson: "L4", arabic: "مَا", urdu: "کیا / وہ جو", english: "what" },
  { lesson: "L4", arabic: "مَنْ", urdu: "کون / جو", english: "who" },
  { lesson: "L4", arabic: "مَتَىٰ", urdu: "کب", english: "when" },
  { lesson: "L4", arabic: "أَيْنَ", urdu: "کہاں", english: "where" },
  { lesson: "L4", arabic: "كَيْفَ", urdu: "کیسے", english: "how" },
  { lesson: "L4", arabic: "كَمْ", urdu: "کتنا", english: "how many / how much" },
  { lesson: "L4", arabic: "أَيُّ", urdu: "کون سا", english: "which" },
  { lesson: "L4", arabic: "أَنَّىٰ", urdu: "کیسے / کہاں", english: "how / whence" },
  { lesson: "L4", arabic: "أَ ، هَلْ", urdu: "کیا", english: "(question particle)" },
  { lesson: "L4", arabic: "مَاذَا", urdu: "کیا", english: "what" },
  { lesson: "L4", arabic: "لِمَ ، لِمَاذَا", urdu: "کیوں", english: "why" },
  { lesson: "L4", arabic: "لَوْلَا", urdu: "کیوں نہیں", english: "why not" },

  // ----- L5: Possession & other particles -----
  { lesson: "L5", arabic: "ذُو ، ذَا ، ذِي", urdu: "والا", english: "possessor of (m.)" },
  { lesson: "L5", arabic: "ذَات", urdu: "والی", english: "possessor of (f.)" },
  { lesson: "L5", arabic: "مَثَل", urdu: "مثال", english: "example / likeness" },
  { lesson: "L5", arabic: "أَهْل", urdu: "والے", english: "people of" },
  { lesson: "L5", arabic: "مِمَّنْ", urdu: "اس سے جو", english: "from the one who" },
  { lesson: "L5", arabic: "أَلَا", urdu: "خبردار", english: "lo! / beware" },
  { lesson: "L5", arabic: "نِعْمَ", urdu: "بہت اچھا", english: "how excellent" },
  { lesson: "L5", arabic: "بِئْس", urdu: "بہت برا", english: "how wretched" },
  { lesson: "L5", arabic: "أُولُوا ، أُولِي", urdu: "والے", english: "possessors of" },
  { lesson: "L5", arabic: "مِثْل", urdu: "جیسا", english: "like / similar" },
  { lesson: "L5", arabic: "بِئْسَمَا", urdu: "بہت برا جو", english: "how evil is that which" },
  { lesson: "L5", arabic: "آل", urdu: "اولاد / والے", english: "family / people of" },
];

const QUIZ_LENGTH = 5;
const NUM_OPTIONS = 4;

const LESSON_TITLES = {
  L1: "Demonstrative, relative & negative particles",
  L2: "Pronouns - object & possessive",
  L3: "Pronouns - subject",
  L4: "Interrogatives",
  L5: "Possession & other particles",
};

// ----- App state -----
const state = {
  name: "",
  lessons: [],
  direction: "ar2mean", // "ar2mean" or "mean2ar"
  language: "urdu", // "english" or "urdu"
  quizLength: QUIZ_LENGTH,
  feedback: "end", // "each" or "end"
  questions: [],
  current: 0,
  answers: [], // { question, chosen, correct }
};

const LANGUAGE_NAMES = { english: "English", urdu: "اردو" };

// ----- Helpers -----
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function meaningOf(word) {
  return state.language === "urdu" ? word.urdu : word.english;
}

function showScreen(id) {
  $$(".screen").forEach((s) => s.classList.remove("active"));
  $("#" + id).classList.add("active");
  document.body.classList.toggle("quiz-active", id === "quiz-screen");
}

// ----- Screen 1: name -----
function initNameScreen() {
  const input = $("#name-input");
  const btn = $("#name-next");
  const go = () => {
    const value = input.value.trim();
    if (!value) {
      $("#name-error").textContent = "Please enter your name to continue.";
      input.focus();
      return;
    }
    $("#name-error").textContent = "";
    state.name = value;
    buildSetupScreen();
    showScreen("setup-screen");
  };
  btn.addEventListener("click", go);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") go();
  });
}

// ----- Screen 2: setup -----
function buildSetupScreen() {
  $("#setup-greeting").textContent = `Hi ${state.name}, set up your quiz`;

  const lessonsList = $("#lessons-list");
  lessonsList.innerHTML = "";
  const defaults = ["L1", "L2"];
  ["L1", "L2", "L3", "L4", "L5"].forEach((l) => {
    const count = WORDS.filter((w) => w.lesson === l).length;
    const label = document.createElement("label");
    label.className = "lesson-option";
    label.innerHTML = `
      <input type="checkbox" value="${l}" ${defaults.includes(l) ? "checked" : ""} />
      <span class="lesson-name">${l}</span>
      <span class="lesson-desc">${LESSON_TITLES[l]} <em>(${count} words)</em></span>
    `;
    lessonsList.appendChild(label);
  });
}

function selectedLanguage() {
  const active = $("#lang-toggle .lang-btn.active");
  return active ? active.dataset.lang : "english";
}

function updateLanguageLabels() {
  const name = LANGUAGE_NAMES[selectedLanguage()];
  $$(".lang-label").forEach((el) => (el.textContent = name));
}

function initSetupScreen() {
  // Language toggle button
  $$("#lang-toggle .lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$("#lang-toggle .lang-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      updateLanguageLabels();
    });
  });

  $("#start-quiz").addEventListener("click", () => {
    const selected = $$('#lessons-list input[type="checkbox"]:checked').map((c) => c.value);
    if (selected.length === 0) {
      $("#setup-error").textContent = "Please select at least one lesson.";
      return;
    }

    const requested = parseInt($("#num-questions").value, 10);
    if (!Number.isFinite(requested) || requested < 1) {
      $("#setup-error").textContent = "Please enter a valid number of questions (1 or more).";
      return;
    }

    $("#setup-error").textContent = "";
    state.lessons = selected;
    state.direction = $('input[name="direction"]:checked').value;
    state.language = selectedLanguage();
    state.feedback = $('input[name="feedback"]:checked').value;
    state.quizLength = requested;
    startQuiz();
  });

  $("#setup-back").addEventListener("click", () => showScreen("name-screen"));
}

// ----- Build questions -----
function startQuiz() {
  const pool = WORDS.filter((w) => state.lessons.includes(w.lesson));
  const picked = shuffle(pool).slice(0, Math.min(state.quizLength, pool.length));

  state.questions = picked.map((word) => {
    // Distractors come from the whole pool, must differ from the correct answer text.
    const answerText = state.direction === "ar2mean" ? meaningOf(word) : word.arabic;
    const promptText = state.direction === "ar2mean" ? word.arabic : meaningOf(word);

    const distractors = shuffle(pool)
      .filter((w) => {
        const t = state.direction === "ar2mean" ? meaningOf(w) : w.arabic;
        return t !== answerText;
      })
      .map((w) => (state.direction === "ar2mean" ? meaningOf(w) : w.arabic));

    const uniqueDistractors = [];
    for (const d of distractors) {
      if (!uniqueDistractors.includes(d) && d !== answerText) uniqueDistractors.push(d);
      if (uniqueDistractors.length === NUM_OPTIONS - 1) break;
    }

    const options = shuffle([answerText, ...uniqueDistractors]);
    return { word, promptText, answerText, options };
  });

  state.current = 0;
  state.answers = [];
  renderQuestion();
  showScreen("quiz-screen");
}

// ----- Screen 3: quiz -----
function renderQuestion() {
  const q = state.questions[state.current];
  const total = state.questions.length;

  $("#progress-text").textContent = `Question ${state.current + 1} of ${total}`;
  const scoreEl = $("#score-text");
  if (state.feedback === "each") {
    scoreEl.style.display = "";
    scoreEl.textContent = `Score: ${state.answers.filter((a) => a.correct).length}`;
  } else {
    scoreEl.style.display = "none";
  }
  $("#progress-bar-fill").style.width = `${(state.current / total) * 100}%`;

  const promptIsArabic = state.direction === "ar2mean";
  const labels = {
    english: {
      ar2mean: "What does this word mean?",
      mean2ar: "Which Arabic word means this?",
    },
    urdu: {
      ar2mean: "اس لفظ کا مطلب کیا ہے؟",
      mean2ar: "اس کا مطلب کون سا عربی لفظ ہے؟",
    },
  };
  const labelEl = $("#question-label");
  labelEl.textContent = labels[state.language][promptIsArabic ? "ar2mean" : "mean2ar"];
  labelEl.className = "question-label" + (state.language === "urdu" ? " urdu" : "");

  const promptEl = $("#question-prompt");
  promptEl.textContent = q.promptText;
  promptEl.className = "question-prompt " + (promptIsArabic ? "arabic" : state.language === "urdu" ? "urdu" : "english");

  const optionsEl = $("#options");
  optionsEl.innerHTML = "";
  const optionIsArabic = !promptIsArabic; // answers are arabic when prompt is meaning
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option " + (optionIsArabic ? "arabic" : state.language === "urdu" ? "urdu" : "english");
    btn.textContent = opt;
    btn.addEventListener("click", () => chooseAnswer(opt, btn));
    optionsEl.appendChild(btn);
  });
}

function chooseAnswer(chosen, btnEl) {
  const q = state.questions[state.current];
  const correct = chosen === q.answerText;

  $$("#options .option").forEach((b) => {
    b.disabled = true;
  });

  state.answers.push({ question: q, chosen, correct });

  if (state.feedback === "each") {
    // Reveal correct / wrong immediately.
    $$("#options .option").forEach((b) => {
      if (b.textContent === q.answerText) b.classList.add("correct");
      else if (b === btnEl) b.classList.add("wrong");
    });
    $("#score-text").textContent = `Score: ${state.answers.filter((a) => a.correct).length}`;
  } else {
    // Summary at the end: just mark the chosen option, no reveal.
    btnEl.classList.add("selected");
  }

  const isLast = state.current === state.questions.length - 1;
  $("#next-question").textContent = isLast ? "See results" : "Next";
  $("#next-question").classList.remove("hidden");
}

function initQuizScreen() {
  $("#next-question").addEventListener("click", () => {
    $("#next-question").classList.add("hidden");
    state.current++;
    if (state.current < state.questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  });
}

// ----- Screen 4: results -----
function showResults() {
  const score = state.answers.filter((a) => a.correct).length;
  const total = state.questions.length;

  $("#result-greeting").textContent = `Well done, ${state.name}!`;
  $("#result-score-num").textContent = `${score}`;
  $("#result-score-total").textContent = `/ ${total}`;

  const ringPct = total ? (score / total) * 100 : 0;
  $(".score-circle").style.background = `conic-gradient(var(--primary) ${ringPct}%, #e2e8f0 ${ringPct}%)`;

  let msg;
  const pct = (score / total) * 100;
  if (pct === 100) msg = "Perfect score! Excellent work.";
  else if (pct >= 60) msg = "Great job, keep practising!";
  else msg = "Keep going - revise the words and try again.";
  $("#result-message").textContent = msg;

  const review = $("#review");
  review.innerHTML = "";
  state.answers.forEach((a, i) => {
    const item = document.createElement("div");
    item.className = "review-item " + (a.correct ? "ok" : "no");
    item.innerHTML = `
      <div class="review-head">
        <span class="review-num">${i + 1}</span>
        <span class="review-word">${a.question.promptText}</span>
        <span class="review-mark">${a.correct ? "✓" : "✗"}</span>
      </div>
      <div class="review-detail">
        <div>Correct: <strong>${a.question.answerText}</strong></div>
        ${a.correct ? "" : `<div>Your answer: <span class="your-answer">${a.chosen}</span></div>`}
      </div>
    `;
    review.appendChild(item);
  });

  showScreen("result-screen");
}

function initResultScreen() {
  $("#try-again").addEventListener("click", () => {
    buildSetupScreen();
    // restore previous lesson selections + options
    $$('#lessons-list input[type="checkbox"]').forEach((c) => {
      c.checked = state.lessons.includes(c.value);
    });
    $(`input[name="direction"][value="${state.direction}"]`).checked = true;
    $(`input[name="feedback"][value="${state.feedback}"]`).checked = true;
    $("#num-questions").value = state.quizLength;
    $$("#lang-toggle .lang-btn").forEach((b) =>
      b.classList.toggle("active", b.dataset.lang === state.language)
    );
    updateLanguageLabels();
    showScreen("setup-screen");
  });

  $("#new-user").addEventListener("click", () => {
    $("#name-input").value = "";
    showScreen("name-screen");
  });
}

// ----- Init -----
document.addEventListener("DOMContentLoaded", () => {
  initNameScreen();
  initSetupScreen();
  initQuizScreen();
  initResultScreen();
  showScreen("name-screen");
});
