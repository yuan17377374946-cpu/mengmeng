'use strict';

const byId = (id) => document.getElementById(id);
const workspace = document.querySelector('.workspace');
const viewer = byId('viewer');
const sheet = byId('sheet');
const pageImage = byId('page');
const overlay = byId('overlay');
const courseButtons = [...document.querySelectorAll('[data-course]')];
const toolButtons = [...document.querySelectorAll('[data-tool]')];
const topicsFor = (course) => courses[course].sections.flatMap(([, topics]) => topics);
const imageUrl = (course, page) => 'assets/' + course + '-' + page + '.webp';
const mathQuestionMarks = new Map([
  ['填空 3', '易错'],
  ['填空 5', '易错'],
  ['填空 6', '易错'],
  ['填空 8', '易错'],
  ['选择 3', '易错'],
  ['选择 4', '重点易错'],
  ['选择 5', '易错'],
  ['竖式 2', '易错'],
  ['作图 3', '易错'],
  ['应用题 1', '易错'],
  ['应用题 2', '重点易错'],
  ['应用题 3（2）', '重点易错'],
  ['判断说理（1）', '易错'],
  ['判断说理（2）', '易错']
]);
const strokesByPage = new Map();
const lastTopic = {};
let subject = 'en';
let currentTopic = 0;
let pageNumber = 1;
let zoom = 1;
let tool = 'browse';
let activeStroke = null;
let audioUrl = null;
let pendingScroll = null;

function topicQuestionMark(index) {
  if (subject !== 'math') return;
  const marks = questionExplanations.math[index].map(([label]) => mathQuestionMarks.get(label));
  return marks.includes('重点易错') ? '重点易错' : marks.find(Boolean);
}

function appendQuestionMark(element, mark) {
  if (!mark) return;
  const badge = document.createElement('span');
  badge.className = 'question-mark';
  if (mark === '重点易错') badge.classList.add('question-mark-priority');
  badge.textContent = mark;
  element.append(badge);
}

function renderIndex() {
  const nav = byId('contents');
  nav.replaceChildren();
  let index = 0;
  for (const [name, topics] of courses[subject].sections) {
    const group = document.createElement('section');
    group.className = 'group';
    const title = document.createElement('h3');
    title.textContent = name;
    group.append(title);
    for (const [page, , label] of topics) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'topic';
      button.dataset.topic = index;
      const caption = document.createElement('span');
      caption.textContent = label;
      appendQuestionMark(caption, topicQuestionMark(index));
      index++;
      const marker = document.createElement('small');
      marker.textContent = 'P' + page;
      button.append(caption, marker);
      group.append(button);
    }
    nav.append(group);
  }
}

function fitSheet() {
  const inset = parseFloat(getComputedStyle(viewer).paddingLeft) + parseFloat(getComputedStyle(viewer).paddingRight);
  const available = Math.min(Math.max(viewer.clientWidth - inset, 1), 1060);
  sheet.style.width = Math.round(available * zoom) + 'px';
  byId('zoom-out').disabled = zoom <= .75;
  byId('zoom-in').disabled = zoom >= 2.5;
  byId('fit').textContent = zoom === 1 ? '适宽' : Math.round(zoom * 100) + '%';
}

function setZoom(next) {
  const center = (viewer.scrollTop + viewer.clientHeight / 2) / Math.max(1, sheet.offsetHeight);
  zoom = Math.max(.75, Math.min(2.5, next));
  fitSheet();
  viewer.scrollTop = center * sheet.offsetHeight - viewer.clientHeight / 2;
}

function setReveal(open) {
  byId('solution').hidden = !open;
  byId('reveal').setAttribute('aria-expanded', String(open));
  const hasAnswer = Boolean(topicsFor(subject)[currentTopic][4]);
  byId('reveal').textContent = open ? '收起' : hasAnswer ? '展开答案与逐题解析' : '展开逐题听力提示';
}

function renderIndividualExplanations() {
  const container = byId('individual-explanations');
  const rows = questionExplanations[subject][currentTopic];
  byId('individual-heading').textContent = subject === 'en' && currentTopic < 5 ? '逐题听辨提示' : '逐小题解析';
  const cards = rows.map(([label, answer, explanation]) => {
    const card = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = label;
    if (subject === 'math') appendQuestionMark(summary, mathQuestionMarks.get(label));
    card.append(summary);
    if (answer) {
      const result = document.createElement('p');
      result.className = 'individual-answer';
      result.textContent = answer;
      card.append(result);
    }
    const detail = document.createElement('p');
    detail.className = 'individual-detail';
    detail.textContent = explanation;
    card.append(detail);
    return card;
  });
  container.replaceChildren(...cards);
}

function renderNotes(topic) {
  const [, , title, prompt, answer, detail, figure] = topic;
  const heading = byId('note-title');
  heading.textContent = title;
  appendQuestionMark(heading, topicQuestionMark(currentTopic));
  byId('note-prompt').textContent = prompt;
  byId('note-key').textContent = answer;
  byId('note-key').hidden = !answer;
  byId('note-key').previousElementSibling.hidden = !answer;
  byId('note-detail').textContent = detail;
  const diagram = byId('note-figure');
  diagram.hidden = !figure;
  if (figure) diagram.src = figure;
  else diagram.removeAttribute('src');
  renderIndividualExplanations();
  setReveal(false);
  byId('notes').scrollTop = 0;
}

function scrollToTopic() {
  if (pendingScroll === null || !pageImage.complete || !pageImage.naturalWidth) return;
  viewer.scrollTop = Math.round(sheet.offsetHeight * pendingScroll);
  viewer.scrollLeft = 0;
  pendingScroll = null;
}

function showTopic(index, toTop = false) {
  const topics = topicsFor(subject);
  const topic = topics[index];
  if (!topic) return;
  activeStroke = null;
  currentTopic = index;
  lastTopic[subject] = index;
  pageNumber = topic[0];
  const course = courses[subject];
  const url = imageUrl(subject, pageNumber);
  pageImage.alt = course.name + '原卷第' + pageNumber + '页';
  pendingScroll = toTop ? 0 : topic[1];
  if (pageImage.getAttribute('src') !== url) pageImage.src = url;
  scrollToTopic();
  byId('page-index').textContent = pageNumber + ' / ' + course.pages;
  byId('prev').disabled = pageNumber === 1;
  byId('next').disabled = pageNumber === course.pages;
  document.querySelectorAll('.topic').forEach((button) => {
    if (Number(button.dataset.topic) === index) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  });
  renderNotes(topic);
  renderStrokes();
  history.replaceState(null, '', '#' + subject + '-' + (index + 1));
}

function switchCourse(id, index, toTop = false) {
  subject = id;
  const course = courses[id];
  courseButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.course === id)));
  byId('edition').textContent = course.edition;
  byId('original').href = course.pdf;
  byId('audio-area').hidden = id !== 'en';
  if (id !== 'en') byId('audio-player').pause();
  renderIndex();
  showTopic(index ?? lastTopic[id] ?? 0, toTop);
}

function flipPage(offset) {
  const nextPage = pageNumber + offset;
  const firstTopic = topicsFor(subject).findIndex(([page]) => page === nextPage);
  if (firstTopic !== -1) showTopic(firstTopic, true);
}

function currentStrokes() {
  const key = subject + '-' + pageNumber;
  if (!strokesByPage.has(key)) strokesByPage.set(key, []);
  return strokesByPage.get(key);
}

function renderStrokes() {
  const paths = currentStrokes();
  overlay.replaceChildren(...paths.map(({ type, points }) => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    path.setAttribute('points', points.join(' '));
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('stroke', type === 'pen' ? '#bf2644' : '#ffd032');
    path.setAttribute('stroke-width', type === 'pen' ? '4.5' : '23');
    if (type === 'highlight') path.setAttribute('opacity', '.43');
    return path;
  }));
  byId('undo').disabled = !paths.length;
  byId('clear').disabled = !paths.length;
}

function point(event) {
  const rect = overlay.getBoundingClientRect();
  const x = Math.round((event.clientX - rect.left) / rect.width * 1000);
  const y = Math.round((event.clientY - rect.top) / rect.height * 1415);
  return [x, y];
}

function setTool(type) {
  tool = type;
  sheet.dataset.draw = String(type !== 'browse');
  toolButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.tool === type)));
}

overlay.addEventListener('pointerdown', (event) => {
  if (tool === 'browse' || event.button !== 0 || activeStroke) return;
  const [x, y] = point(event);
  const stroke = { type: tool, points: [[x, y], [x + .01, y]] };
  activeStroke = { stroke, pointerId: event.pointerId };
  overlay.setPointerCapture(event.pointerId);
  currentStrokes().push(stroke);
  renderStrokes();
});
overlay.addEventListener('pointermove', (event) => {
  if (activeStroke?.pointerId !== event.pointerId) return;
  activeStroke.stroke.points.push(point(event));
  overlay.lastElementChild?.setAttribute('points', activeStroke.stroke.points.join(' '));
});
for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) {
  overlay.addEventListener(name, (event) => {
    if (activeStroke?.pointerId === event.pointerId) activeStroke = null;
  });
}

courseButtons.forEach((button) => button.addEventListener('click', () => {
  if (button.dataset.course !== subject) switchCourse(button.dataset.course);
}));
toolButtons.forEach((button) => button.addEventListener('click', () => setTool(button.dataset.tool)));
byId('contents').addEventListener('click', (event) => {
  const button = event.target.closest('[data-topic]');
  if (button) showTopic(Number(button.dataset.topic));
});
byId('undo').addEventListener('click', () => {
  currentStrokes().pop();
  renderStrokes();
});
byId('clear').addEventListener('click', () => {
  currentStrokes().length = 0;
  renderStrokes();
});
byId('prev').addEventListener('click', () => flipPage(-1));
byId('next').addEventListener('click', () => flipPage(1));
byId('zoom-in').addEventListener('click', () => setZoom(zoom + .25));
byId('zoom-out').addEventListener('click', () => setZoom(zoom - .25));
byId('fit').addEventListener('click', () => setZoom(1));
byId('reveal').addEventListener('click', () => setReveal(byId('solution').hidden));
byId('hide-notes').addEventListener('click', () => {
  const button = byId('hide-notes');
  const notes = byId('notes');
  notes.hidden = !notes.hidden;
  workspace.classList.toggle('notes-off', notes.hidden);
  button.textContent = notes.hidden ? '显示讲解' : '收起讲解';
  button.setAttribute('aria-expanded', String(!notes.hidden));
});
const fullscreen = byId('fullscreen');
if (!document.fullscreenEnabled) fullscreen.hidden = true;
fullscreen.addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch {
    fullscreen.textContent = '请用浏览器全屏';
  }
});
document.addEventListener('fullscreenchange', () => {
  fullscreen.textContent = document.fullscreenElement ? '退出全屏' : '全屏投屏';
});
byId('audio-file').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const player = byId('audio-player');
  if (audioUrl) URL.revokeObjectURL(audioUrl);
  audioUrl = URL.createObjectURL(file);
  player.src = audioUrl;
  player.hidden = false;
});
pageImage.addEventListener('load', scrollToTopic);
new ResizeObserver(fitSheet).observe(viewer);
viewer.addEventListener('keydown', (event) => {
  if (event.key === 'PageDown' || event.key === 'PageUp') {
    event.preventDefault();
    flipPage(event.key === 'PageDown' ? 1 : -1);
  }
});
const match = location.hash.match(/^#(en|math)-(\d+)$/);
const requestedCourse = match?.[1] ?? 'en';
const requestedTopic = Number(match?.[2] ?? 1) - 1;
fitSheet();
switchCourse(requestedCourse, topicsFor(requestedCourse)[requestedTopic] ? requestedTopic : 0, !match);
