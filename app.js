/* =========================================================
   잉글리시랭크 (EnglishRank) — 영어 읽기 파일럿
   - 콘텐츠: stories.js에 직접 작성한 이야기(문장+단어) 데이터
   - 퀴즈: 그 데이터에서 매번 다른 조합으로 자동 생성 (LLM 미사용)
   - 등급: 매쓰랭크와 동일한 RP/티어 시스템 (시리즈 통일)
   ========================================================= */

/* ---------- 유틸 ---------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function choice(arr) { return arr[randInt(0, arr.length - 1)]; }
function shuffleArr(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function daysBetween(a, b) {
  const d1 = new Date(a), d2 = new Date(b);
  return Math.round((d2 - d1) / 86400000);
}

/* ---------- 티어 시스템 (매쓰랭크와 동일) ---------- */
const START_RATING = 120;
const TIER_DEFS = [
  { name: '별사탕', category: 'candy', count: 1, hex: '#ff7aa8' },
  { name: '별사탕', category: 'candy', count: 2, hex: '#ff7aa8' },
  { name: '별사탕', category: 'candy', count: 3, hex: '#ff7aa8' },
  { name: '별사탕', category: 'candy', count: 4, hex: '#ff7aa8' },
  { name: '반짝별', category: 'twinkle', count: 1, hex: '#ffd166' },
  { name: '반짝별', category: 'twinkle', count: 2, hex: '#ffd166' },
  { name: '반짝별', category: 'twinkle', count: 3, hex: '#ffd166' },
  { name: '반짝별', category: 'twinkle', count: 4, hex: '#ffd166' },
  { name: '빛나는별', category: 'shining', count: 1, hex: '#ffb703' },
  { name: '빛나는별', category: 'shining', count: 2, hex: '#ffb703' },
  { name: '빛나는별', category: 'shining', count: 3, hex: '#ffb703' },
  { name: '빛나는별', category: 'shining', count: 4, hex: '#ffb703' },
  { name: '별똥별', category: 'shooting', count: 1, hex: '#4cc9f0' },
  { name: '별똥별', category: 'shooting', count: 2, hex: '#4cc9f0' },
  { name: '별똥별', category: 'shooting', count: 3, hex: '#4cc9f0' },
  { name: '별똥별', category: 'shooting', count: 4, hex: '#4cc9f0' },
  { name: '은하수', category: 'galaxy', count: 1, hex: '#9d4edd' },
  { name: '은하수', category: 'galaxy', count: 2, hex: '#9d4edd' },
  { name: '은하수', category: 'galaxy', count: 3, hex: '#9d4edd' },
  { name: '은하수', category: 'galaxy', count: 4, hex: '#9d4edd' },
  { name: '슈퍼노바', category: 'supernova', count: 1, hex: '#f72585' },
];
const CATEGORY_IMG = {
  candy: 'assets/badge_candy.jpg',
  twinkle: 'assets/badge_twinkle.jpg',
  shining: 'assets/badge_shining.jpg',
  shooting: 'assets/badge_shooting.jpg',
  galaxy: 'assets/badge_galaxy.jpg',
  supernova: 'assets/badge_supernova.jpg',
};
const TIER_STEP = 100;
function tierForRating(rp) {
  const idx = Math.min(Math.floor(rp / TIER_STEP), TIER_DEFS.length - 1);
  const t = TIER_DEFS[Math.max(idx, 0)];
  const floor = idx * TIER_STEP;
  const ceil = idx === TIER_DEFS.length - 1 ? Infinity : floor + TIER_STEP;
  return { ...t, idx, floor, ceil, label: t.name, img: CATEGORY_IMG[t.category] };
}
function pipsHtml(count, hex) {
  let s = '';
  for (let i = 0; i < count; i++) s += `<span class="pip" style="background:${hex}"></span>`;
  return s;
}

/* ---------- 퀴즈 생성 엔진: 이야기 데이터에서 문제를 매번 다르게 만든다 ---------- */
const ENG_GRADE_TYPING = { 1: false, 2: false, 3: 'partial', 4: 'partial', 5: true, 6: true };

function allVocabForGrade(grade) {
  const stories = STORIES[grade] || [];
  const list = [];
  stories.forEach(s => s.vocab.forEach(v => list.push(v)));
  return list;
}
function pickDistractors(pool, excludeValue, n) {
  const candidates = shuffleArr(pool.filter(v => v !== excludeValue));
  return candidates.slice(0, n);
}
function canType(grade) {
  const mode = ENG_GRADE_TYPING[grade];
  if (mode === true) return true;
  if (mode === 'partial') return Math.random() < 0.4;
  return false;
}

function genVocabMeaningQuiz(grade, vocabItem) {
  const pool = allVocabForGrade(grade).filter(v => v.word !== vocabItem.word).map(v => v.ko);
  const options = shuffleArr([vocabItem.ko, ...pickDistractors(pool, vocabItem.ko, 3)]);
  return {
    qType: 'vocab_meaning',
    question: `"${vocabItem.word}"의 뜻은 무엇인가요?`,
    answerType: 'mc', options,
    check: (input) => input === vocabItem.ko,
    reviewWord: vocabItem.word, difficulty: 150 + (grade - 1) * 50,
  };
}
function genVocabReverseQuiz(grade, vocabItem) {
  if (canType(grade)) {
    return {
      qType: 'vocab_reverse_type',
      question: `'${vocabItem.ko}'는 영어로 무엇인가요? (스펠링을 입력하세요)`,
      answerType: 'text',
      check: (input) => input.trim().toLowerCase() === vocabItem.word.toLowerCase(),
      reviewWord: vocabItem.word, difficulty: 350 + (grade - 1) * 50,
    };
  }
  const pool = allVocabForGrade(grade).filter(v => v.word !== vocabItem.word).map(v => v.word);
  const options = shuffleArr([vocabItem.word, ...pickDistractors(pool, vocabItem.word, 3)]);
  return {
    qType: 'vocab_reverse',
    question: `'${vocabItem.ko}'는 영어로 무엇인가요?`,
    answerType: 'mc', options,
    check: (input) => input === vocabItem.word,
    reviewWord: vocabItem.word, difficulty: 200 + (grade - 1) * 50,
  };
}
function genClozeQuiz(grade, sentence, target) {
  const re = new RegExp(`\\b${target.word}\\b`, 'i');
  const blanked = sentence.en.replace(re, '____');
  if (canType(grade)) {
    return {
      qType: 'cloze_type',
      question: `빈칸에 알맞은 단어를 입력하세요.\n"${blanked}"\n(${sentence.ko})`,
      answerType: 'text',
      check: (input) => input.trim().toLowerCase() === target.word.toLowerCase(),
      reviewWord: target.word, difficulty: 400 + (grade - 1) * 50,
    };
  }
  const pool = allVocabForGrade(grade).filter(v => v.word !== target.word).map(v => v.word);
  const options = shuffleArr([target.word, ...pickDistractors(pool, target.word, 3)]);
  return {
    qType: 'cloze_select',
    question: `빈칸에 알맞은 단어를 고르세요.\n"${blanked}"\n(${sentence.ko})`,
    answerType: 'mc', options,
    check: (input) => input === target.word,
    reviewWord: target.word, difficulty: 250 + (grade - 1) * 50,
  };
}
function genTranslateQuiz(grade, sentence) {
  const pool = (STORIES[grade] || []).flatMap(s => s.sentences.map(x => x.ko)).filter(k => k !== sentence.ko);
  const options = shuffleArr([sentence.ko, ...pickDistractors(pool, sentence.ko, 3)]);
  return {
    qType: 'translate',
    question: `다음 문장의 알맞은 뜻을 고르세요.\n"${sentence.en}"`,
    answerType: 'mc', options,
    check: (input) => input === sentence.ko,
    difficulty: 200 + (grade - 1) * 50,
  };
}
function buildQuizFromWord(grade, story, vocabItem) {
  const sentenceWithWord = story ? story.sentences.find(s => new RegExp(`\\b${vocabItem.word}\\b`, 'i').test(s.en)) : null;
  const kinds = ['meaning', 'reverse'];
  if (sentenceWithWord) kinds.push('cloze');
  const kind = choice(kinds);
  if (kind === 'meaning') return genVocabMeaningQuiz(grade, vocabItem);
  if (kind === 'reverse') return genVocabReverseQuiz(grade, vocabItem);
  return genClozeQuiz(grade, sentenceWithWord, vocabItem);
}

function generateEnglishSession(grade, profile) {
  const pool = STORIES[grade] || [];
  const storyIdx = (profile.storyIndex || 0) % pool.length;
  const todayStory = pool[storyIdx];

  const session = [];
  const todayWords = shuffleArr(todayStory.vocab);
  for (let i = 0; i < 7; i++) session.push(buildQuizFromWord(grade, todayStory, todayWords[i % todayWords.length]));
  session.push(genTranslateQuiz(grade, choice(todayStory.sentences)));

  const reviewBank = (profile.vocabBank || []).filter(v => !todayStory.vocab.some(tv => tv.word === v.word));
  for (let i = 0; i < 2; i++) {
    const v = reviewBank.length > 0 ? choice(reviewBank) : choice(todayStory.vocab);
    session.push(buildQuizFromWord(grade, null, v));
  }
  return { session: shuffleArr(session), todayStory, storyIdx };
}

/* ---------- 프로필 저장 (매쓰랭크와 동일한 로컬 다중 프로필 구조) ---------- */
const PROFILES_KEY = 'engrank_profiles_v1';
const ACTIVE_ID_KEY = 'engrank_active_profile_id_v1';
let storageAvailable = true;

function loadAllProfiles() {
  try { const raw = localStorage.getItem(PROFILES_KEY); return raw ? JSON.parse(raw) : []; }
  catch (e) { storageAvailable = false; return []; }
}
function saveAllProfiles(list) {
  if (!storageAvailable) return;
  try { localStorage.setItem(PROFILES_KEY, JSON.stringify(list)); }
  catch (e) { storageAvailable = false; }
}
function getActiveProfileId() { try { return localStorage.getItem(ACTIVE_ID_KEY); } catch (e) { return null; } }
function setActiveProfileId(id) { if (!storageAvailable) return; try { localStorage.setItem(ACTIVE_ID_KEY, id); } catch (e) {} }
function deleteProfile(id) {
  saveAllProfiles(loadAllProfiles().filter(p => p.id !== id));
  if (getActiveProfileId() === id) { try { localStorage.removeItem(ACTIVE_ID_KEY); } catch (e) {} }
}
function saveProfile(p) {
  if (!storageAvailable) return;
  const list = loadAllProfiles();
  const idx = list.findIndex(x => x.id === p.id);
  if (idx >= 0) list[idx] = p; else list.push(p);
  saveAllProfiles(list);
  setActiveProfileId(p.id);
}
function resolveInitialProfile() {
  const list = loadAllProfiles();
  if (list.length === 0) return { profile: null, mode: 'new' };
  const active = list.find(p => p.id === getActiveProfileId());
  if (active) return { profile: active, mode: 'home' };
  if (list.length === 1) { setActiveProfileId(list[0].id); return { profile: list[0], mode: 'home' }; }
  return { profile: null, mode: 'picker' };
}

const GRADE_ACCENT = { 1: '#ffb86b', 2: '#ff6b6b', 3: '#5ee7c0', 4: '#3ddc97', 5: '#6c8cff', 6: '#ff7ad9' };
function applyGradeAccent(grade) {
  document.documentElement.style.setProperty('--grade-accent', GRADE_ACCENT[grade] || '#6c8cff');
}
function newProfile(grade, nickname, id) {
  return {
    id: id || (Date.now().toString(36) + Math.random().toString(36).slice(2, 6)),
    nickname, grade,
    rating: START_RATING,
    streak: 0,
    lastCompletedDate: null,
    storyIndex: 0,
    vocabBank: [],
    wordStats: {},
    totalSessions: 0,
  };
}

let profile = null;
let onboardingMode = 'new';
let currentSession = null;
let currentIndex = 0;
let sessionCorrect = 0;
let ratingBefore = 0;
let todayStory = null;

/* ---------- 화면 전환 ---------- */
function showScreen(id) {
  $$('.screen').forEach(s => s.setAttribute('hidden', ''));
  $(`#${id}`).removeAttribute('hidden');
}
function isDoneToday() { return profile && profile.lastCompletedDate === todayStr(); }

/* ---------- 홈 화면 ---------- */
function renderHome() {
  const t = tierForRating(profile.rating);
  const badgeImg = $('#home-badge');
  badgeImg.src = t.img;
  badgeImg.alt = t.label;
  $('#home-nickname').textContent = profile.nickname ? `${profile.nickname}님` : '';
  $('#home-tier-name').textContent = t.label;
  $('#home-rating').textContent = profile.rating;
  $('#home-streak').textContent = profile.streak;
  document.documentElement.style.setProperty('--tier-color', t.hex);
  applyGradeAccent(profile.grade);

  const span = t.ceil === Infinity ? 1 : (t.ceil - t.floor);
  const progressPct = t.ceil === Infinity ? 100 : Math.round(((profile.rating - t.floor) / span) * 100);
  $('#home-progress').style.width = `${progressPct}%`;
  $('#home-progress-label').textContent = t.ceil === Infinity
    ? '최고 등급 슈퍼노바 달성!'
    : `다음 등급까지 ${t.ceil - profile.rating} RP`;
  $('#home-pips').innerHTML = pipsHtml(t.count, t.hex);

  const storiesRead = profile.storyIndex || 0;
  $('#home-stories-read').textContent = `지금까지 읽은 이야기: ${storiesRead}개 · 내 단어장: ${(profile.vocabBank || []).length}개`;

  const done = isDoneToday();
  $('#btn-start-reading').toggleAttribute('hidden', done);
  $('#home-done-msg').toggleAttribute('hidden', !done);
  $('#btn-change-grade').removeAttribute('hidden');
  $('#btn-switch-profile').removeAttribute('hidden');
  showScreen('screen-home');
}

/* ---------- 프로필 선택 화면 ---------- */
function renderProfilePicker() {
  const list = loadAllProfiles();
  const wrap = $('#profile-list');
  wrap.innerHTML = '';
  list.forEach(p => {
    const t = tierForRating(p.rating);
    const row = document.createElement('div');
    row.className = 'profile-card';
    row.innerHTML = `
      <img src="${t.img}" alt="">
      <div class="profile-card-info">
        <div class="profile-card-name">${p.nickname || '이름없음'}</div>
        <div class="profile-card-sub">초${p.grade} · ${t.label} · ${p.rating} RP</div>
      </div>
      <button class="profile-card-del" aria-label="삭제">✕</button>
    `;
    row.addEventListener('click', () => { profile = p; setActiveProfileId(p.id); renderHome(); });
    row.querySelector('.profile-card-del').addEventListener('click', (e) => {
      e.stopPropagation();
      if (!confirm(`"${p.nickname}" 프로필을 삭제할까요? 되돌릴 수 없어요.`)) return;
      deleteProfile(p.id);
      renderProfilePicker();
    });
    wrap.appendChild(row);
  });
  showScreen('screen-profile-picker');
}

/* ---------- 백업/이어하기 ---------- */
function encodeProfileCode(p) { return 'ER1:' + btoa(unescape(encodeURIComponent(JSON.stringify(p)))); }
function decodeProfileCode(code) {
  const trimmed = code.trim();
  if (!trimmed.startsWith('ER1:')) throw new Error('형식이 올바르지 않아요');
  const obj = JSON.parse(decodeURIComponent(escape(atob(trimmed.slice(4)))));
  if (!obj || typeof obj.rating !== 'number' || !obj.grade || !obj.id) throw new Error('올바른 백업 코드가 아니에요');
  return obj;
}
function renderBackupScreen() {
  const exportWrap = $('#backup-export-code').closest('.backup-section');
  if (profile) { exportWrap.removeAttribute('hidden'); $('#backup-export-code').value = encodeProfileCode(profile); }
  else exportWrap.setAttribute('hidden', '');
  $('#backup-import-code').value = '';
  showScreen('screen-backup');
}
function importProfileFromCode(code) {
  let obj;
  try { obj = decodeProfileCode(code); }
  catch (e) { alert('코드를 읽을 수 없어요. 코드를 정확히 복사했는지 확인해주세요.'); return; }
  const list = loadAllProfiles();
  const existing = list.find(p => p.id === obj.id);
  if (existing && !confirm(`"${obj.nickname}" 프로필이 이미 있어요. 가져온 기록으로 덮어쓸까요?`)) return;
  profile = obj;
  saveProfile(profile);
  setActiveProfileId(profile.id);
  alert(`"${obj.nickname}" 프로필을 가져왔어요!`);
  renderHome();
}

/* ---------- 등급표 화면 ---------- */
function renderTierTable() {
  const wrap = $('#tier-table');
  wrap.innerHTML = '';
  const currentIdx = tierForRating(profile.rating).idx;
  TIER_DEFS.slice().reverse().forEach((t) => {
    const idx = TIER_DEFS.indexOf(t);
    const floor = idx * TIER_STEP;
    const ceil = idx === TIER_DEFS.length - 1 ? null : floor + TIER_STEP;
    const img = CATEGORY_IMG[t.category];
    const row = document.createElement('div');
    row.className = 'tier-row' + (idx === currentIdx ? ' current' : '');
    row.innerHTML = `
      <div class="tr-badge"><img src="${img}" alt="${t.name}"><div class="pip-row">${pipsHtml(t.count, t.hex)}</div></div>
      <div class="tr-name">${t.name}</div>
      <div class="tr-range">${floor} ~ ${ceil ? ceil - 1 : '∞'} RP</div>
    `;
    wrap.appendChild(row);
  });
  showScreen('screen-tiers');
}

/* ---------- 내 단어장 화면 ---------- */
function renderVocabBook() {
  const wrap = $('#vocab-list');
  wrap.innerHTML = '';
  const bank = profile.vocabBank || [];
  const stats = profile.wordStats || {};
  if (bank.length === 0) {
    wrap.innerHTML = '<div class="weak-empty">아직 배운 단어가 없어요. 오늘의 이야기를 읽어보세요!</div>';
  } else {
    const rows = bank.map(v => {
      const st = stats[v.word] || { correct: 0, total: 0 };
      return { ...v, ...st, acc: st.total ? st.correct / st.total : null };
    }).sort((a, b) => (a.acc === null ? -1 : a.acc) - (b.acc === null ? -1 : b.acc));
    rows.forEach(r => {
      const pct = r.acc === null ? null : Math.round(r.acc * 100);
      const cls = pct === null ? '' : pct < 50 ? 'low' : pct < 80 ? 'mid' : 'high';
      const row = document.createElement('div');
      row.className = 'weak-row';
      row.innerHTML = `
        <div class="weak-row-top"><span>${r.word} — ${r.ko}</span><span>${pct === null ? '아직 안 풀어봄' : `${pct}% (${r.correct}/${r.total})`}</span></div>
        <div class="weak-bar-bg"><div class="weak-bar-fill ${cls}" style="width:${pct || 0}%"></div></div>
      `;
      wrap.appendChild(row);
    });
  }
  showScreen('screen-vocab');
}

/* ---------- 읽기 화면 ---------- */
function speak(text) {
  try {
    if (!('speechSynthesis' in window)) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.9;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  } catch (e) { /* 음성 지원 안 되면 그냥 무시 */ }
}
function renderReading() {
  const pool = STORIES[profile.grade] || [];
  const storyIdx = (profile.storyIndex || 0) % pool.length;
  todayStory = pool[storyIdx];

  $('#reading-title').textContent = todayStory.title;
  $('#reading-title-ko').textContent = todayStory.titleKo;
  const wrap = $('#reading-sentences');
  wrap.innerHTML = '';
  todayStory.sentences.forEach((s) => {
    const row = document.createElement('div');
    row.className = 'reading-sentence';
    row.innerHTML = `
      <div class="reading-en">${s.en}</div>
      <div class="reading-ko">${s.ko}</div>
    `;
    const btn = document.createElement('button');
    btn.className = 'reading-speak-btn';
    btn.textContent = '🔊 듣기';
    btn.addEventListener('click', () => speak(s.en));
    row.appendChild(btn);
    wrap.appendChild(row);
  });

  const vocabWrap = $('#reading-vocab');
  vocabWrap.innerHTML = '';
  todayStory.vocab.forEach(v => {
    const chip = document.createElement('div');
    chip.className = 'vocab-chip';
    chip.innerHTML = `<b>${v.word}</b><span>${v.ko}</span>`;
    vocabWrap.appendChild(chip);
  });

  showScreen('screen-reading');
}

/* ---------- 퀴즈 진행 ---------- */
function startQuizFromReading() {
  const { session, storyIdx } = generateEnglishSession(profile.grade, profile);
  currentSession = session;
  currentIndex = 0;
  sessionCorrect = 0;
  ratingBefore = profile.rating;
  showScreen('screen-quiz');
  renderQuestion();
}
function renderQuestion() {
  const p = currentSession[currentIndex];
  $('#quiz-index').textContent = currentIndex + 1;
  $('#quiz-progress-fill').style.width = `${(currentIndex / 10) * 100}%`;
  $('#quiz-question').textContent = p.question;
  $('#quiz-feedback').setAttribute('hidden', '');

  const inputWrap = $('#quiz-input-wrap');
  const mcWrap = $('#quiz-mc-wrap');
  if (p.answerType === 'mc') {
    inputWrap.setAttribute('hidden', '');
    mcWrap.removeAttribute('hidden');
    mcWrap.innerHTML = '';
    p.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'mc-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => submitAnswer(opt));
      mcWrap.appendChild(btn);
    });
  } else {
    mcWrap.setAttribute('hidden', '');
    inputWrap.removeAttribute('hidden');
    $('#quiz-input').value = '';
    $('#quiz-input').removeAttribute('disabled');
    setTimeout(() => $('#quiz-input').focus(), 50);
  }
  $('#btn-next-question').setAttribute('hidden', '');
}
function recordWordStat(word, correct) {
  if (!word) return;
  if (!profile.wordStats) profile.wordStats = {};
  if (!profile.wordStats[word]) profile.wordStats[word] = { correct: 0, total: 0 };
  profile.wordStats[word].total++;
  if (correct) profile.wordStats[word].correct++;
}
function submitAnswer(mcValue) {
  const p = currentSession[currentIndex];
  const input = p.answerType === 'mc' ? mcValue : $('#quiz-input').value;
  if (p.answerType === 'text' && input.trim() === '') return;
  const correct = p.check(input);
  if (correct) sessionCorrect++;
  recordWordStat(p.reviewWord, correct);

  const expected = 1 / (1 + Math.pow(10, (p.difficulty - profile.rating) / 400));
  const K = 40;
  const delta = Math.round(K * ((correct ? 1 : 0) - expected));
  profile.rating = Math.max(0, profile.rating + delta);

  $$('.mc-btn').forEach(b => b.setAttribute('disabled', ''));
  $('#quiz-input').setAttribute('disabled', '');
  $('#quiz-feedback').removeAttribute('hidden');
  const ft = $('#quiz-feedback-text');
  const fbMascot = $('#quiz-feedback-mascot');
  fbMascot.className = 'feedback-mascot';
  void fbMascot.offsetWidth;
  if (correct) {
    ft.textContent = `정답이에요! (${delta >= 0 ? '+' : ''}${delta} RP)`;
    ft.className = 'feedback-correct';
    fbMascot.src = 'assets/char_correct.jpg';
    fbMascot.classList.add('fb-correct');
  } else {
    const answerText = p.answerType === 'mc'
      ? (p.options.find(o => p.check(o)) || '')
      : (p.reviewWord || '');
    ft.textContent = `아쉬워요. 정답: ${answerText} (${delta >= 0 ? '+' : ''}${delta} RP)`;
    ft.className = 'feedback-wrong';
    fbMascot.src = 'assets/char_wrong.jpg';
    fbMascot.classList.add('fb-wrong');
  }
  $('#btn-next-question').removeAttribute('hidden');
  saveProfile(profile);
}
function nextQuestion() {
  currentIndex++;
  if (currentIndex >= currentSession.length) finishSession();
  else renderQuestion();
}
function finishSession() {
  const today = todayStr();
  if (profile.lastCompletedDate) {
    const gap = daysBetween(profile.lastCompletedDate, today);
    if (gap === 1) profile.streak += 1;
    else if (gap > 1) profile.streak = 1;
  } else profile.streak = 1;
  profile.lastCompletedDate = today;
  profile.totalSessions = (profile.totalSessions || 0) + 1;

  if (!profile.vocabBank) profile.vocabBank = [];
  todayStory.vocab.forEach(v => {
    if (!profile.vocabBank.some(x => x.word === v.word)) profile.vocabBank.push(v);
  });
  profile.storyIndex = ((profile.storyIndex || 0) + 1);
  saveProfile(profile);

  const tierBefore = tierForRating(ratingBefore);
  const tierAfter = tierForRating(profile.rating);

  $('#result-score').textContent = `${sessionCorrect}/${currentSession.length}`;
  const delta = profile.rating - ratingBefore;
  $('#result-delta').textContent = `${delta >= 0 ? '+' : ''}${delta}`;
  $('#result-delta').style.color = delta >= 0 ? 'var(--good)' : 'var(--bad)';
  $('#result-streak').textContent = `${profile.streak}일`;
  $('#result-story-title').textContent = `오늘의 이야기: ${todayStory.title}`;

  const headline = $('#result-headline');
  const mascot = $('#result-mascot');
  mascot.classList.remove('celebrate');
  if (sessionCorrect >= 9) { headline.textContent = '완벽해요! 오늘의 결과'; void mascot.offsetWidth; mascot.classList.add('celebrate'); }
  else if (sessionCorrect >= 7) headline.textContent = '아주 잘했어요! 오늘의 결과';
  else if (sessionCorrect >= 4) headline.textContent = '수고했어요! 오늘의 결과';
  else headline.textContent = '오늘의 결과 (내일 다시 도전!)';

  const levelup = $('#result-levelup');
  if (tierAfter.idx > tierBefore.idx) { levelup.removeAttribute('hidden'); $('#levelup-tier').textContent = `✨ ${tierAfter.label}`; }
  else levelup.setAttribute('hidden', '');

  showScreen('screen-result');
}

/* ---------- 인앱 브라우저(카카오톡 등) 감지 ---------- */
function isInAppBrowser() { return /KAKAOTALK|NAVER|Line\/|FBAN|FBAV|Instagram/i.test(navigator.userAgent); }
function openExternalBrowser() {
  if (/Android/i.test(navigator.userAgent)) {
    const urlNoScheme = location.href.replace(/^https?:\/\//, '');
    location.href = `intent://${urlNoScheme}#Intent;scheme=https;package=com.android.chrome;end;`;
  } else {
    alert('화면 아래쪽이나 오른쪽 위의 브라우저 아이콘을 눌러 "다른 브라우저로 열기"를 선택해주세요.');
  }
}

/* ---------- 홈 화면 설치(PWA install) 유도 ---------- */
let deferredInstallPrompt = null;
function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  maybeShowInstallBanner();
});
function maybeShowInstallBanner() {
  if (isStandalone() || isInAppBrowser()) return;
  try { if (sessionStorage.getItem('install_banner_dismissed')) return; } catch (e) {}
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!deferredInstallPrompt && !isIOS) return;
  $('#install-banner-text').textContent = isIOS
    ? '하단 공유 버튼을 누르고 "홈 화면에 추가"를 선택하면 앱처럼 바로 열 수 있어요!'
    : '홈 화면에 설치하면 다음부터 링크 없이 아이콘으로 바로 열 수 있어요!';
  $('#btn-install-app').toggleAttribute('hidden', !deferredInstallPrompt);
  $('#install-banner').removeAttribute('hidden');
}

/* ---------- 이벤트 바인딩 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  try {
    if (isInAppBrowser() && !sessionStorage.getItem('inapp_banner_dismissed')) $('#inapp-banner').removeAttribute('hidden');
  } catch (e) { if (isInAppBrowser()) $('#inapp-banner').removeAttribute('hidden'); }

  $('#btn-share-app').addEventListener('click', async () => {
    const shareUrl = location.origin + location.pathname;
    const shareData = { title: '잉글리시랭크 - 영어 읽기 등급전', text: '동화책 읽고 단어 익히면서 영어 등급 올리기! 같이 해봐요.', url: shareUrl };
    if (navigator.share) { try { await navigator.share(shareData); } catch (e) {} return; }
    try { await navigator.clipboard.writeText(shareUrl); alert('링크가 복사됐어요! 카톡 등에 붙여넣어 보내주세요.'); }
    catch (e) { prompt('아래 링크를 복사해서 보내주세요:', shareUrl); }
  });

  $('#btn-open-external').addEventListener('click', openExternalBrowser);
  $('#btn-dismiss-banner').addEventListener('click', () => {
    $('#inapp-banner').setAttribute('hidden', '');
    try { sessionStorage.setItem('inapp_banner_dismissed', '1'); } catch (e) {}
  });
  $('#btn-install-app').addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    $('#install-banner').setAttribute('hidden', '');
  });
  $('#btn-dismiss-install').addEventListener('click', () => {
    $('#install-banner').setAttribute('hidden', '');
    try { sessionStorage.setItem('install_banner_dismissed', '1'); } catch (e) {}
  });

  $$('.grade-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const grade = parseInt(btn.dataset.grade, 10);
      if (onboardingMode === 'new') {
        const nickname = $('#nickname-input').value.trim();
        if (!nickname) { $('#nickname-error').removeAttribute('hidden'); $('#nickname-input').focus(); return; }
        profile = newProfile(grade, nickname);
      } else {
        profile = newProfile(grade, profile.nickname, profile.id);
      }
      saveProfile(profile);
      renderHome();
    });
  });

  function showOnboarding(mode) {
    onboardingMode = mode;
    const wrap = $('#nickname-wrap');
    if (mode === 'new') { wrap.removeAttribute('hidden'); $('#nickname-input').value = ''; $('#nickname-error').setAttribute('hidden', ''); }
    else wrap.setAttribute('hidden', '');
    showScreen('screen-onboarding');
  }
  $('#btn-change-grade').addEventListener('click', () => showOnboarding('change-grade'));
  $('#btn-add-profile').addEventListener('click', () => showOnboarding('new'));
  $('#btn-switch-profile').addEventListener('click', renderProfilePicker);
  $('#btn-goto-restore-onboarding').addEventListener('click', renderBackupScreen);
  $('#btn-goto-restore-picker').addEventListener('click', renderBackupScreen);

  $('#btn-start-reading').addEventListener('click', renderReading);
  $('#btn-start-quiz-from-reading').addEventListener('click', startQuizFromReading);

  $('#btn-submit-answer').addEventListener('click', () => submitAnswer());
  $('#quiz-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if ($('#btn-next-question').hasAttribute('hidden')) submitAnswer();
      else nextQuestion();
    }
  });
  $('#btn-next-question').addEventListener('click', nextQuestion);

  $('#btn-back-home').addEventListener('click', renderHome);
  $('#btn-view-tiers').addEventListener('click', renderTierTable);
  $('#btn-view-vocab').addEventListener('click', renderVocabBook);
  $('#btn-view-backup').addEventListener('click', renderBackupScreen);
  $$('[data-back="home"]').forEach(btn => btn.addEventListener('click', renderHome));

  $('#btn-copy-backup').addEventListener('click', async () => {
    const code = $('#backup-export-code').value;
    try { await navigator.clipboard.writeText(code); alert('복사됐어요! 카톡 같은 곳에 붙여넣어 보관하세요.'); }
    catch (e) { $('#backup-export-code').select(); alert('자동 복사가 안 돼서 코드를 직접 선택해뒀어요. 길게 눌러 복사하세요.'); }
  });
  $('#btn-import-backup').addEventListener('click', () => {
    const code = $('#backup-import-code').value;
    if (!code.trim()) { alert('붙여넣은 코드가 없어요.'); return; }
    importProfileFromCode(code);
  });

  const init = resolveInitialProfile();
  profile = init.profile;
  if (init.mode === 'home') renderHome();
  else if (init.mode === 'picker') renderProfilePicker();
  else showOnboarding('new');

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' })
      .then((reg) => reg.update().catch(() => {}))
      .catch(() => {});
  }
  setTimeout(maybeShowInstallBanner, 1500);
});
