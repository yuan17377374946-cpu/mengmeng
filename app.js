(function () {
  var STORAGE_KEY = "mengmeng-decimal-quest-v1";
  var levels = window.LEVELS;
  var allQuestions = [];
  levels.forEach(function (level) {
    level.questions.forEach(function (question) {
      allQuestions.push(Object.assign({}, question, { levelId: level.id }));
    });
  });
  var app = document.getElementById("app");
  var toastEl = document.getElementById("toast");
  var toastTimer;
  var mode = "home";
  var currentLevelId = 1;
  var currentIndex = 0;
  var reviewQueue = [];

  function defaultState() {
    return { version: 1, answers: {} };
  }

  function loadState() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!saved || saved.version !== 1) return defaultState();
      return Object.assign(defaultState(), saved, { answers: saved.answers || {} });
    } catch (error) {
      return defaultState();
    }
  }

  var state = loadState();

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateHeader();
  }

  function toast(message) {
    clearTimeout(toastTimer);
    toastEl.textContent = message;
    toastEl.classList.add("show");
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2300);
  }

  function levelScore(levelId) {
    var level = levels.find(function (item) { return item.id === levelId; });
    return level.questions.filter(function (question) {
      return state.answers[question.id] && state.answers[question.id].status === "correct";
    }).length;
  }

  function totalCorrect() {
    return allQuestions.filter(function (question) {
      return state.answers[question.id] && state.answers[question.id].status === "correct";
    }).length;
  }

  function wrongQuestions() {
    return allQuestions.filter(function (question) {
      return state.answers[question.id] && state.answers[question.id].status === "wrong";
    });
  }

  function updateHeader() {
    var correct = totalCorrect();
    var wrong = wrongQuestions().length;
    document.getElementById("overallText").textContent = correct + " / " + allQuestions.length;
    document.getElementById("overallBar").style.width = ((correct / allQuestions.length) * 100) + "%";
    document.getElementById("wrongCount").textContent = wrong;
  }

  function renderHome() {
    mode = "home";
    document.documentElement.style.setProperty("--primary", "#5147e5");
    document.documentElement.style.setProperty("--primary-dark", "#3f36c8");
    app.innerHTML = "";
    app.append(document.getElementById("homeTemplate").content.cloneNode(true));
    var grid = document.getElementById("levelGrid");
    var passedCount = levels.filter(function (level) { return levelScore(level.id) >= 4; }).length;
    document.getElementById("homeCorrect").textContent = totalCorrect();
    document.getElementById("mapSummary").textContent =
      passedCount === levels.length
        ? "全部关卡已经通关，继续挑战满分吧！"
        : "已经通关 " + passedCount + " 关，10个关卡都可以自由练习。";

    levels.forEach(function (level) {
      var score = levelScore(level.id);
      var passed = score >= 4;
      var card = document.createElement("button");
      card.type = "button";
      card.className = "level-card";
      card.style.setProperty("--level-color", level.color);
      card.innerHTML =
        '<span class="level-icon">' + level.icon + '</span>' +
        '<span><span class="level-number">LEVEL ' + String(level.id).padStart(2, "0") + '</span>' +
        '<h3>' + level.name + '</h3><p>' + level.subtitle + ' · 5道题</p></span>' +
        '<span class="level-status"><span class="score-pill">' + score + ' / 5</span>' +
        (passed
          ? '<span class="passed">✓ 已通关</span>'
          : '<span class="passed" style="color:var(--level-color)">开始挑战</span>') +
        '</span>';
      card.addEventListener("click", function () { startLevel(level.id); });
      grid.append(card);
    });

    document.getElementById("resetBtn").addEventListener("click", function () {
      if (!confirm("确定清空全部答题记录并重新开始吗？")) return;
      state = defaultState();
      saveState();
      renderHome();
      toast("进度已经清空");
    });
    app.focus({ preventScroll: true });
  }

  function startLevel(levelId) {
    mode = "level";
    currentLevelId = levelId;
    var level = levels.find(function (item) { return item.id === levelId; });
    var firstUnfinished = level.questions.findIndex(function (question) {
      return !state.answers[question.id] || state.answers[question.id].status !== "correct";
    });
    currentIndex = firstUnfinished >= 0 ? firstUnfinished : 0;
    renderQuiz();
  }

  function startWrongReview() {
    var wrong = wrongQuestions();
    if (!wrong.length) {
      toast("目前没有错题，继续保持！");
      return;
    }
    mode = "review";
    reviewQueue = wrong;
    currentIndex = 0;
    renderQuiz();
  }

  function currentQuestionList() {
    if (mode === "review") return reviewQueue;
    return levels.find(function (level) { return level.id === currentLevelId; }).questions;
  }

  function renderQuiz() {
    var list = currentQuestionList();
    if (!list.length) {
      renderHome();
      toast("错题已经全部订正");
      return;
    }
    currentIndex = Math.max(0, Math.min(currentIndex, list.length - 1));
    var question = list[currentIndex];
    var qLevelId = question.levelId || currentLevelId;
    var level = levels.find(function (item) { return item.id === qLevelId; });
    var record = state.answers[question.id] || {};

    document.documentElement.style.setProperty("--primary", level.color);
    document.documentElement.style.setProperty("--primary-dark", level.color);
    app.innerHTML = "";
    app.append(document.getElementById("quizTemplate").content.cloneNode(true));

    document.getElementById("levelLabel").textContent =
      mode === "review" ? "错题重练" : "第" + level.id + "关 · " + level.name;
    document.getElementById("questionCount").textContent = (currentIndex + 1) + " / " + list.length;
    document.getElementById("levelBar").style.width = (((currentIndex + 1) / list.length) * 100) + "%";
    document.getElementById("questionKicker").textContent =
      mode === "review" ? "原关卡：" + level.subtitle : level.subtitle;
    document.getElementById("questionTitle").textContent = question.title;
    document.getElementById("questionBody").innerHTML = question.body;
    document.getElementById("answerUnit").textContent = question.unit || "";

    var formulaInput = document.getElementById("formulaInput");
    var answerInput = document.getElementById("answerInput");
    formulaInput.value = record.formula || "";
    answerInput.value = record.answer || "";
    if (Array.isArray(question.answer)) {
      answerInput.inputMode = "text";
      answerInput.placeholder = "填写名称或编号";
    }

    var submitBtn = document.getElementById("submitBtn");
    if (record.status === "correct") {
      formulaInput.disabled = true;
      answerInput.disabled = true;
      submitBtn.disabled = true;
      submitBtn.textContent = "回答正确";
      showFeedback("good", "回答正确！", question, true);
    } else if (record.status === "wrong") {
      showFeedback("bad", "答案还不对，再检查一下题目中的数量关系。", question, (record.attempts || 0) >= 2);
    }

    submitBtn.addEventListener("click", function () { submitAnswer(question); });
    answerInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        submitAnswer(question);
      }
    });
    document.getElementById("hintBtn").addEventListener("click", function () {
      var feedback = document.getElementById("feedback");
      feedback.className = "feedback show hint";
      feedback.innerHTML = "<strong>💡 提示</strong>" + question.hint;
    });
    document.getElementById("backBtn").addEventListener("click", renderHome);

    var dots = document.getElementById("questionDots");
    list.forEach(function (item, index) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "question-dot";
      dot.textContent = index + 1;
      dot.setAttribute("aria-label", "第" + (index + 1) + "题");
      if (index === currentIndex) dot.classList.add("active");
      var itemStatus = state.answers[item.id] && state.answers[item.id].status;
      if (itemStatus === "correct") dot.classList.add("correct");
      if (itemStatus === "wrong") dot.classList.add("wrong");
      dot.addEventListener("click", function () {
        persistDraft(question);
        currentIndex = index;
        renderQuiz();
      });
      dots.append(dot);
    });

    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");
    prevBtn.disabled = currentIndex === 0;
    prevBtn.addEventListener("click", function () { navigateQuestion(-1, question); });
    nextBtn.textContent = currentIndex === list.length - 1
      ? (mode === "review" ? "完成重练" : "返回地图")
      : "下一题";
    nextBtn.addEventListener("click", function () {
      persistDraft(question);
      if (currentIndex < list.length - 1) {
        currentIndex += 1;
        renderQuiz();
      } else {
        if (mode === "level") {
          var score = levelScore(currentLevelId);
          toast(score >= 4 ? "本关已通关！" : "本关答对" + score + "题，再对" + (4 - score) + "题即可通关");
        } else {
          var remaining = wrongQuestions().length;
          toast(remaining ? "还有" + remaining + "道错题需要订正" : "错题已经全部订正");
        }
        renderHome();
      }
    });

    app.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function persistDraft(question) {
    var formulaEl = document.getElementById("formulaInput");
    var answerEl = document.getElementById("answerInput");
    var formula = formulaEl ? formulaEl.value.trim() : "";
    var answer = answerEl ? answerEl.value.trim() : "";
    if (!formula && !answer) return;
    state.answers[question.id] = Object.assign({}, state.answers[question.id] || {}, { formula: formula, answer: answer });
    saveState();
  }

  function navigateQuestion(delta, question) {
    persistDraft(question);
    currentIndex += delta;
    renderQuiz();
  }

  function normalizeText(value) {
    return String(value)
      .trim()
      .toUpperCase()
      .replace(/[，。、；：\s]/g, "")
      .replace(/^方案/, "")
      .replace(/品牌$/, "")
      .replace(/款$/, "");
  }

  function isCorrect(question, rawAnswer) {
    if (Array.isArray(question.answer)) {
      var normalized = normalizeText(rawAnswer);
      return question.answer.some(function (answer) { return normalizeText(answer) === normalized; });
    }
    var matches = String(rawAnswer).replace(/,/g, "").match(/-?\d+(?:\.\d+)?/g);
    if (!matches || !matches.length) return false;
    var value = Number(matches[matches.length - 1]);
    return Number.isFinite(value) && Math.abs(value - question.answer) < 0.000001;
  }

  function submitAnswer(question) {
    var formulaInput = document.getElementById("formulaInput");
    var answerInput = document.getElementById("answerInput");
    var formula = formulaInput.value.trim();
    var answer = answerInput.value.trim();
    if (!formula) {
      formulaInput.focus();
      toast("请先写出算式");
      return;
    }
    if (!answer) {
      answerInput.focus();
      toast("请填写最终答案");
      return;
    }

    var previous = state.answers[question.id] || {};
    var correct = isCorrect(question, answer);
    state.answers[question.id] = Object.assign({}, previous, {
      formula: formula,
      answer: answer,
      status: correct ? "correct" : "wrong",
      attempts: correct ? (previous.attempts || 0) : (previous.attempts || 0) + 1
    });

    if (correct) {
      toast("答对啦！");
      saveState();
      renderQuiz();
    } else {
      saveState();
      showFeedback(
        "bad",
        "答案还不对，再检查一下题目中的数量关系。",
        question,
        state.answers[question.id].attempts >= 2
      );
      answerInput.select();
    }
  }

  function showFeedback(type, title, question, includeSolution) {
    var feedback = document.getElementById("feedback");
    if (!feedback) return;
    feedback.className = "feedback show " + type;
    feedback.innerHTML =
      "<strong>" + (type === "good" ? "✓ " : "") + title + "</strong>" +
      (type === "good" ? question.explanation : question.hint) +
      (includeSolution
        ? '<div class="solution"><b>参考算式：</b>' + question.solution + '<br><b>想一想：</b>' + question.explanation + "</div>"
        : "");
  }

  function registerWebMCP() {
    var context = document.modelContext;
    if (!context || typeof context.registerTool !== "function") return;
    var lifecycle = new AbortController();
    function register(tool) {
      try {
        Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(function () {});
      } catch (error) {}
    }
    register({
      name: "get_practice_progress",
      title: "查看闯关进度",
      description: "读取梦梦当前的小数除法闯关进度、各关得分和错题数量。",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute: function () {
        return {
          correct: totalCorrect(),
          total: allQuestions.length,
          wrong: wrongQuestions().length,
          allLevelsOpen: true,
          levels: levels.map(function (level) {
            return { level: level.id, name: level.name, score: levelScore(level.id), passed: levelScore(level.id) >= 4 };
          })
        };
      }
    });
    register({
      name: "open_practice_level",
      title: "打开练习关卡",
      description: "在页面上打开任意一个小数除法练习关卡。",
      inputSchema: {
        type: "object",
        properties: { level: { type: "integer", minimum: 1, maximum: 10 } },
        required: ["level"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: function (input) {
        if (!input || !Number.isInteger(input.level) || input.level < 1 || input.level > levels.length) {
          throw new Error("关卡编号必须是1到10之间的整数。");
        }
        startLevel(input.level);
        return { opened: true, level: input.level, name: levels[input.level - 1].name };
      }
    });
  }

  document.getElementById("homeBtn").addEventListener("click", renderHome);
  document.getElementById("wrongBtn").addEventListener("click", startWrongReview);
  registerWebMCP();
  updateHeader();
  renderHome();
})();
