'use strict';

const byId = (id) => document.getElementById(id);
const buttons = (selector) => [...document.querySelectorAll(selector)];
const press = (button, value) => button.setAttribute('aria-pressed', String(value));

const estimates = {
  up: { type: 'upper', upper: 48, formula: '6 × 8 = 48 元' },
  down: { type: 'lower', lower: 35, formula: '5 × 7 = 35 元' },
  closer: { type: 'upper', upper: 44, formula: '5.5 × 8 = 44 元' },
  range: { type: 'range', lower: 35, upper: 48, formula: '35 元 < 实际总价 < 48 元' }
};

function judgeBudget(budget, { type, lower, upper }) {
  if (upper !== undefined && budget >= upper) {
    return ['yes', '一定够', `多算了也只要 ${upper} 元，预算有 ${budget} 元，所以一定付得起。`];
  }
  if (lower !== undefined && budget <= lower) {
    const reason = budget === lower
      ? `两个数都往小估了，少算后刚好是 ${lower} 元，实际一定比 ${budget} 元多。`
      : `少算了还要 ${lower} 元，超过了 ${budget} 元的预算，实际要付得更多。`;
    return ['no', '一定不够', reason];
  }
  const explanations = {
    upper: `多算后要 ${upper} 元，超过预算。但实际价格比 ${upper} 元低，有可能低到 ${budget} 元以内。`,
    lower: `少算后只要 ${lower} 元，实际比它高。光凭这个结果，还不知道实际会不会超过 ${budget} 元。`,
    range: `${budget} 元夹在 ${lower} 元和 ${upper} 元之间。实际可能在预算左边，也可能在右边。可以保留其中一个原数，再估一次。`
  };
  return ['unknown', '还不能判断', explanations[type]];
}

const budgetInput = byId('budget');
const budgetButtons = buttons('[data-budget]');
const methodButtons = buttons('[data-method]');
let method = 'up';

const lessonUrl = new URL(location.href);
let classroomMode = lessonUrl.searchParams.get('mode') === 'classroom';
let revealStage = 0;
const classroomButton = byId('classroom-mode');
const fullscreenButton = byId('fullscreen');
const nextReveal = byId('advance-explanation');
const classroomStages = [
  ['先说说你准备怎么估。两个数都要改吗？', '展示估算式'],
  ['看这个估算结果，钱一定够、一定不够，还是暂时不能判断？', '展示结论和理由'],
  ['换个预算或估法，可以再问一次。', '收起算式和结论']
];

function renderClassroom() {
  document.body.classList.toggle('classroom', classroomMode);
  press(classroomButton, classroomMode);
  classroomButton.textContent = classroomMode ? '退出讲课模式' : '线上讲课';
  fullscreenButton.hidden = !classroomMode || !document.fullscreenEnabled;
  byId('teacher-panel').hidden = !classroomMode;
  byId('lab-work').hidden = classroomMode && revealStage < 1;
  byId('lab-explanation').hidden = classroomMode && revealStage < 2;
  byId('verdict').hidden = classroomMode && revealStage < 2;
  byId('teacher-prompt').textContent = classroomStages[revealStage][0];
  nextReveal.textContent = classroomStages[revealStage][1];
  if (classroomMode && revealStage < 2) byId('exact').open = false;
}

classroomButton.addEventListener('click', () => {
  classroomMode = !classroomMode;
  revealStage = 0;
  const url = new URL(location.href);
  if (classroomMode) url.searchParams.set('mode', 'classroom');
  else url.searchParams.delete('mode');
  history.replaceState(null, '', url);
  renderClassroom();
});

nextReveal.addEventListener('click', () => {
  revealStage = (revealStage + 1) % classroomStages.length;
  renderClassroom();
});

fullscreenButton.addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch {
    fullscreenButton.textContent = '请用浏览器全屏';
  }
});

document.addEventListener('fullscreenchange', () => {
  fullscreenButton.textContent = document.fullscreenElement ? '退出全屏' : '全屏';
});

function renderLab() {
  const budget = Number(budgetInput.value);
  const estimate = estimates[method];
  const [tone, verdict, reason] = judgeBudget(budget, estimate);
  byId('budget-output').textContent = budget + ' 元';
  byId('verdict').dataset.tone = tone;
  byId('verdict').textContent = verdict;
  byId('equation').textContent = estimate.formula;
  byId('reason').textContent = reason;
  budgetButtons.forEach(button => press(button, Number(button.dataset.budget) === budget));
  methodButtons.forEach(button => press(button, button.dataset.method === method));

  const scale = value => (value - 32) * 5;
  const points = [];
  if (estimate.lower !== undefined) points.push([estimate.lower, '估小', 'lower']);
  if (estimate.upper !== undefined) points.push([estimate.upper, '估大', 'upper']);
  points.push([budget, '预算', 'budget']);
  byId('number-line').setAttribute('aria-label', points.map(([value, label]) => label + value + '元').join('，'));
  byId('markers').replaceChildren(...points.map(([value, label, type]) => {
    const marker = document.createElement('span');
    marker.className = 'marker ' + type;
    marker.style.left = scale(value) + '%';
    const caption = document.createElement('span');
    caption.className = 'marker-label';
    if (value <= 34) caption.classList.add('edge-left');
    if (value >= 50) caption.classList.add('edge-right');
    caption.textContent = label + ' ' + value;
    marker.append(caption);
    return marker;
  }));
  const interval = byId('interval');
  interval.hidden = estimate.type !== 'range';
  if (!interval.hidden) {
    interval.style.left = scale(estimate.lower) + '%';
    interval.style.width = (scale(estimate.upper) - scale(estimate.lower)) + '%';
  }
}

budgetButtons.forEach(button => button.addEventListener('click', () => {
  budgetInput.value = button.dataset.budget;
  updateLab();
}));
methodButtons.forEach(button => button.addEventListener('click', () => {
  method = button.dataset.method;
  updateLab();
}));
function updateLab() {
  if (classroomMode) revealStage = 0;
  renderClassroom();
  renderLab();
}

budgetInput.addEventListener('input', updateLab);
updateLab();

const questions = [
  {
    topic: '水果摊 · 买苹果',
    text: '买 4.6 千克苹果，每千克 11.7 元。带 60 元够付吗？',
    estimate: '估算式　5 × 12 = 60（元）', direction: 'upper', outcome: 'yes',
    yes: '一定够', no: '一定不够',
    why: '4.6 估成 5，11.7 估成 12，两个数都变大了。多算后刚好 60 元，实际一定少于 60 元，所以够付。'
  },
  {
    topic: '水果摊 · 买番茄',
    text: '买 4.2 千克番茄，每千克 8.6 元。带 32 元够付吗？',
    estimate: '估算式　4 × 8 = 32（元）', direction: 'lower', outcome: 'no',
    yes: '一定够', no: '一定不够',
    why: '4.2 变成 4，8.6 变成 8，两个正数都严格变小。少算了还要 32 元，原价一定超过 32 元，所以不够。'
  },
  {
    topic: '水果摊 · 买橙子',
    text: '买 5.4 千克橙子，每千克 8.6 元。带了 49 元，只看下面这次估算，能判断钱够不够吗？',
    estimate: '估算式　6 × 9 = 54（元）', direction: 'upper', outcome: 'unknown',
    yes: '一定够', no: '一定不够',
    why: '54 元是多算的结果。实际总价会低于 54 元，但不一定还超过 49 元。可以保留 5.4，只把 8.6 估成 9，得 48.6 元，再确认钱够。'
  },
  {
    topic: '文具店 · 满减活动',
    text: '两套书签每套 19.□ 元，茶杯共花了 62 元。一定能参加满 100 元减 5 元吗？',
    estimate: '估算式　19 × 2 + 62 = 100（元）', direction: 'lower', outcome: 'yes',
    yes: '一定能参加', no: '一定不能参加',
    why: '□ 可以是 0 到 9，书签单价最低是 19 元。最低总价就是 100 元，刚好达到门槛，实际总价只会等于或高于 100 元。'
  },
  {
    topic: '装货 · 水果筐',
    text: '5 个筐，每个最多能装 9.6 千克。能装下 45 千克水果吗？',
    estimate: '把每筐能装的重量按 9 千克算　5 × 9 = 45（千克）', direction: 'lower', outcome: 'yes',
    yes: '一定能装下', no: '一定装不下',
    why: '估的是 5 个筐的总容量。把每筐能装的重量往小估，合计也有 45 千克，所以用这 5 个筐一定能装下。'
  },
  {
    topic: '装货 · 推车限重',
    text: '5 桶水，每桶重 9.6 千克。推车限重 45 千克，能一次把水运走吗？',
    estimate: '把每桶水的重量按 9 千克算　5 × 9 = 45（千克）', direction: 'lower', outcome: 'no',
    yes: '一定能运走', no: '一定不能运走',
    why: '估的是要运的货物重量。每桶 9.6 千克比 9 千克重，5 桶一定超过 45 千克，推车一次运不了。'
  },
  {
    topic: '水果摊 · 买梨',
    text: '买 6.5 千克梨，每千克 8.8 元。带 59 元够付吗？',
    estimate: '只把单价估成 9 元　6.5 × 9 = 58.5（元）', direction: 'upper', outcome: 'yes',
    yes: '一定够', no: '一定不够',
    why: '质量保持 6.5 千克，单价从 8.8 变成 9 元，总价往大估到 58.5 元。这个上界仍低于 59 元，所以够付。'
  },
  {
    topic: '文具店 · 单价有一位未知',
    text: '买 6 件文具，每件 8.□ 元。□ 是 0 到 9 中的一个数字。带 48 元一定够吗？',
    estimate: '按每件最低 8 元算　6 × 8 = 48（元）', direction: 'lower', outcome: 'unknown',
    yes: '一定够', no: '一定不够',
    why: '这是最低可能花的钱。□ 是 0 时，实际刚好 48 元，钱够。□ 比 0 大时，实际超过 48 元，钱不够。只知道最低价，不能断定这两种情况中的哪一种。'
  }
];

const directionOptions = [['upper', '往大估'], ['lower', '往小估']];
const check = byId('check-answer');
const explain = byId('show-explanation');
const next = byId('next-question');
const restart = byId('restart-quiz');
const feedback = byId('quiz-feedback');
const progress = byId('quiz-progress');
const states = questions.map(() => ({}));
let current = 0;

function makeChoices(container, field, options) {
  const state = states[current];
  container.replaceChildren(...options.map(([value, label]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    press(button, state[field] === value);
    button.disabled = Boolean(state.correct);
    button.addEventListener('click', () => {
      state[field] = value;
      state.checked = false;
      for (const sibling of container.children) press(sibling, sibling === button);
      renderFeedback();
    });
    return button;
  }));
}

function renderFeedback() {
  const state = states[current];
  const question = questions[current];
  check.disabled = !state.direction || !state.outcome;
  check.hidden = Boolean(state.correct);
  explain.hidden = !state.checked || state.correct || state.revealed;
  const ready = Boolean(state.correct || state.revealed);
  next.hidden = !ready || current === questions.length - 1;
  restart.hidden = !ready || current !== questions.length - 1;
  feedback.hidden = !state.checked && !state.revealed && !state.correct;
  if (feedback.hidden) return;

  feedback.dataset.state = state.correct ? 'correct' : 'retry';
  const title = document.createElement('strong');
  const message = document.createElement('p');
  if (ready) {
    const direction = directionOptions.find(([value]) => value === question.direction)[1];
    const outcome = question[question.outcome] ?? '这次还不能判断';
    title.textContent = (state.correct ? '答对了。' : '参考答案。') + direction + '，' + outcome + '。';
    message.textContent = question.why;
  } else if (state.direction !== question.direction) {
    title.textContent = '再看一次估算方向。';
    message.textContent = '把原来的数和替换后的数比一比。变大了还是变小了？';
  } else {
    title.textContent = '方向选对了，再看看结论。';
    message.textContent = '先说出实际值在估算值的左边还是右边，再判断这能不能证明题目想问的事。';
  }
  feedback.replaceChildren(title, message);
}

function renderQuiz(focusQuestion = false) {
  const question = questions[current];
  progress.replaceChildren(...questions.map((_, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = String(index + 1);
    button.className = 'progress-dot';
    button.dataset.correct = String(Boolean(states[index].correct));
    button.setAttribute('aria-label', '第' + (index + 1) + '题' + (states[index].correct ? '，已答对' : ''));
    if (index === current) button.setAttribute('aria-current', 'true');
    button.addEventListener('click', () => {
      current = index;
      renderQuiz(true);
    });
    return button;
  }));
  byId('quiz-count').textContent = states.filter(state => state.correct).length + ' / ' + questions.length + ' 题已答对';
  byId('question-tag').textContent = '第 ' + (current + 1) + ' 题 · ' + question.topic;
  const prompt = byId('question-text');
  prompt.textContent = question.text;
  byId('given-estimate').textContent = question.estimate;
  makeChoices(byId('quiz-direction'), 'direction', directionOptions);
  makeChoices(byId('quiz-outcome'), 'outcome', [['yes', question.yes], ['no', question.no], ['unknown', '这次还不能判断']]);
  renderFeedback();
  if (focusQuestion) {
    prompt.tabIndex = -1;
    prompt.focus({ preventScroll: true });
  }
}

check.addEventListener('click', () => {
  const state = states[current];
  const question = questions[current];
  state.checked = true;
  state.correct = state.direction === question.direction && state.outcome === question.outcome;
  renderQuiz();
  if (state.correct) (next.hidden ? restart : next).focus({ preventScroll: true });
});
explain.addEventListener('click', () => {
  states[current].revealed = true;
  renderFeedback();
  (next.hidden ? restart : next).focus({ preventScroll: true });
});
next.addEventListener('click', () => {
  current += 1;
  renderQuiz(true);
});
restart.addEventListener('click', () => {
  states.forEach((_, index) => { states[index] = {}; });
  current = 0;
  renderQuiz(true);
});
renderQuiz();
