/**
 * Interactive product demo. Takes over the static `.appMockup` markup (which
 * stays as the no-JS / first-paint version) and makes it behave like the app:
 * switch chats, filter, send a message and get a reply, and try bulk leave
 * (select channels, confirm, watch them go one by one). Mock data only, no
 * network. Texts follow <html lang> (en/ru).
 */

type Lang = 'en' | 'ru';
type Kind = 'user' | 'group' | 'channel';
interface Msg { out: boolean; text: string; time: string }
interface Chat {
  id: string;
  kind: Kind;
  title: Record<Lang, string>;
  letter: string;
  time: string;
  star?: boolean;
  unread?: number;
  msgs: Record<Lang, Msg[]>;
  replies: Record<Lang, string[]>;
  /** The original static chat keeps its voice-message story in the markup. */
  story?: boolean;
}

const m = (out: boolean, text: string, time: string): Msg => ({ out, text, time });

const CHATS: Chat[] = [
  {
    id: 'artem', kind: 'user', title: { en: 'Artem (Project Lead)', ru: 'Артём (Project Lead)' }, letter: 'A', time: '10:30', unread: 2, star: true, story: true,
    msgs: { en: [], ru: [] },
    replies: { en: ['Sounds good!', 'Let me check and get back to you.', '👍'], ru: ['Отлично!', 'Сейчас проверю и отвечу.', '👍'] },
  },
  {
    id: 'pavel', kind: 'user', title: { en: 'Pavel Durov', ru: 'Павел Дуров' }, letter: 'P', time: '12:04',
    msgs: {
      en: [m(false, 'The feature looks great!', '12:04'), m(true, 'Thanks! Local transcription ships next week.', '12:05')],
      ru: [m(false, 'Фича выглядит отлично!', '12:04'), m(true, 'Спасибо! Локальная расшифровка выйдет на следующей неделе.', '12:05')],
    },
    replies: { en: ['Nice, keep going.', 'Send me the build.'], ru: ['Класс, продолжайте.', 'Пришли сборку.'] },
  },
  {
    id: 'work', kind: 'group', title: { en: 'Work Group', ru: 'Рабочий чат' }, letter: 'W', time: '11:58', unread: 3,
    msgs: {
      en: [m(false, 'Meeting in 5 mins', '11:58'), m(true, 'Joining now.', '11:59')],
      ru: [m(false, 'Встреча через 5 минут', '11:58'), m(true, 'Уже подключаюсь.', '11:59')],
    },
    replies: { en: ['See you there.', 'Agenda is in the doc.'], ru: ['Ждем.', 'Повестка в документе.'] },
  },
  ...([
    ['news', 'Daily News', 'Ежедневные новости', 'D', '09:12', 'Markets open higher today', 'Рынки сегодня открылись ростом'],
    ['crypto', 'Crypto Signals', 'Крипто сигналы', 'C', '08:40', 'BTC breaks resistance!!!', 'BTC пробивает сопротивление!!!'],
    ['deals', 'Hot Deals', 'Горячие скидки', 'H', 'Yesterday', '-70% only today', '-70% только сегодня'],
    ['memes', 'Memes Daily', 'Мемы каждый день', 'M', 'Yesterday', 'New batch is here', 'Свежая подборка'],
    ['promo', 'Casino Promo', 'Казино промо', 'K', 'Mon', 'FREE SPINS for you', 'БЕСПЛАТНЫЕ ВРАЩЕНИЯ для вас'],
    ['jobs', 'Remote Jobs', 'Удаленная работа', 'R', 'Mon', '120 new vacancies', '120 новых вакансий'],
  ] as const).map(([id, en, ru, letter, time, pen, pru]): Chat => ({
    id, kind: 'channel', title: { en, ru }, letter, time,
    msgs: { en: [m(false, pen, time)], ru: [m(false, pru, time)] },
    replies: { en: [], ru: [] },
  })),
  {
    id: 'dev', kind: 'group', title: { en: 'Open Source Devs', ru: 'Опенсорс разработчики' }, letter: 'O', time: 'Sun',
    msgs: { en: [m(false, 'PR merged, thanks all', 'Sun')], ru: [m(false, 'PR влит, всем спасибо', 'Sun')] },
    replies: { en: ['Merged.'], ru: ['Влито.'] },
  },
];

const T = {
  en: { all: 'All', hint: 'Try it: open chats, type a message, or tap the checklist icon to leave channels in bulk.', select: 'Select chats', selected: (n: number) => `${n} selected`, allChannels: (n: number) => `All channels (${n})`, clear: 'Clear', leave: (n: number) => `Leave ${n}`, confirm: (n: number) => `Leave ${n} chats?`, confirmNote: 'You will leave all of them. This cannot be undone.', cancel: 'Cancel', running: (d: number, n: number) => `Leaving ${d} of ${n}`, done: (n: number) => `Left ${n} chats. Try the real app: it does this for your Telegram.`, restart: 'Restart demo', placeholder: 'Write a message...', empty: 'Nothing here', typing: 'typing…' },
  ru: { all: 'Все', hint: 'Попробуйте: откройте чаты, напишите сообщение или нажмите на значок списка, чтобы выйти из каналов разом.', select: 'Выбрать чаты', selected: (n: number) => `Выбрано: ${n}`, allChannels: (n: number) => `Все каналы (${n})`, clear: 'Сбросить', leave: (n: number) => `Выйти из ${n}`, confirm: (n: number) => `Выйти из чатов: ${n}?`, confirmNote: 'Вы выйдете из всех. Отменить нельзя.', cancel: 'Отмена', running: (d: number, n: number) => `Выход: ${d} из ${n}`, done: (n: number) => `Вышли из чатов: ${n}. В настоящем приложении так же с вашим Telegram.`, restart: 'Заново', placeholder: 'Напишите сообщение...', empty: 'Здесь пусто', typing: 'печатает…' },
} as const;

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const lang = (): Lang => (document.documentElement.lang === 'ru' ? 'ru' : 'en');
const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export function initDemo(): void {
  const root = document.querySelector<HTMLElement>('.appMockup');
  if (!root) return;
  const list = root.querySelector<HTMLElement>('.chatList');
  const filters = root.querySelector<HTMLElement>('.chatFilters');
  const actions = root.querySelector<HTMLElement>('.sidebarActions');
  const inner = root.querySelector<HTMLElement>('.messageListInner');
  const msgList = root.querySelector<HTMLElement>('.messageList');
  const headerTitle = root.querySelector<HTMLElement>('.chatHeaderTitle');
  const headerStatus = root.querySelector<HTMLElement>('.chatHeaderStatus');
  const inputInner = root.querySelector<HTMLElement>('.messageInputInner');
  if (!list || !filters || !inner || !headerTitle || !inputInner || !actions || !msgList) return;
  const storyHtml = inner.innerHTML; // original voice-message story, translated by the page script

  let chats = CHATS.map((c) => ({ ...c, msgs: { en: [...c.msgs.en], ru: [...c.msgs.ru] } }));
  let openId = 'artem';
  let filter: 'all' | Kind | 'star' = 'all';
  let selecting = false;
  let busy = false;
  const picked = new Set<string>();
  let anchor: string | null = null;

  // ---- injected controls -------------------------------------------------
  const selectBtn = document.createElement('button');
  selectBtn.className = 'iconBtn demoSelectBtn';
  selectBtn.innerHTML = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>';
  actions.insertBefore(selectBtn, actions.lastElementChild);

  const bar = document.createElement('div');
  bar.className = 'demoBar';
  filters.after(bar);

  const input = document.createElement('input');
  input.className = 'demoInput';
  input.type = 'text';
  input.autocomplete = 'off';
  input.maxLength = 200;
  inputInner.querySelector('.messagePlaceholder')?.setAttribute('hidden', '');
  inputInner.appendChild(input);

  const overlay = document.createElement('div');
  overlay.className = 'demoOverlay';
  overlay.hidden = true;
  root.appendChild(overlay);

  // ---- rendering ----------------------------------------------------------
  const visible = () =>
    chats.filter((c) => (filter === 'all' ? true : filter === 'star' ? c.star : c.kind === filter));
  const leavable = (c: Chat) => c.kind !== 'user';

  function renderFilters() {
    const L = T[lang()];
    const labels: Array<[typeof filter, string]> = [
      ['all', L.all],
      ['user', lang() === 'ru' ? 'Контакты' : 'Contacts'],
      ['channel', lang() === 'ru' ? 'Каналы' : 'Channels'],
      ['star', lang() === 'ru' ? 'Избранное' : 'Favorites'],
    ];
    filters.innerHTML = labels
      .map(([k, label]) => `<div class="filterBtn demoFilter${filter === k ? ' filterActive' : ''}" role="button" tabindex="0" data-f="${k}">${esc(label)}</div>`)
      .join('');
  }

  function renderList() {
    const L = T[lang()];
    const rows = visible();
    list!.innerHTML = rows.length
      ? rows
          .map((c) => {
            const on = picked.has(c.id);
            const last = c.msgs[lang()].at(-1)?.text ?? (c.story ? (lang() === 'ru' ? 'Голосовое сообщение' : 'Voice message') : '');
            return `<div class="chatItem demoChat${c.id === openId && !selecting ? ' chatSelected' : ''}${selecting ? ' selecting' : ''}${on ? ' picked' : ''}${selecting && !leavable(c) ? ' locked' : ''}" role="button" tabindex="0" data-id="${c.id}">
              ${selecting ? `<span class="selBox${on ? ' on' : ''}">${on ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' : ''}</span>` : ''}
              <div class="chatAvatar">${esc(c.letter)}</div>
              <div class="chatInfo">
                <div class="chatInfoTop"><span class="chatTitle">${esc(c.title[lang()])}</span><span class="chatTime">${esc(c.time)}</span></div>
                <div class="chatInfoBottom"><div class="chatPreview">${esc(last)}</div>${c.unread ? `<div class="unreadCount">${c.unread}</div>` : ''}</div>
              </div></div>`;
          })
          .join('')
      : `<div class="demoEmpty">${esc(L.empty)}</div>`;
  }

  function renderBar() {
    const L = T[lang()];
    bar.hidden = !selecting;
    if (!selecting) return;
    const channels = visible().filter((c) => c.kind === 'channel');
    bar.innerHTML = `<div class="demoBarTop"><b>${esc(L.selected(picked.size))}</b><button class="demoLink" data-a="exit">${esc(L.cancel)}</button></div>
      <div class="demoBarRow"><button class="demoChip" data-a="allch" ${channels.length ? '' : 'disabled'}>${esc(L.allChannels(channels.length))}</button>
      <button class="demoChip" data-a="clear" ${picked.size ? '' : 'disabled'}>${esc(L.clear)}</button></div>
      <button class="demoLeave" data-a="leave" ${picked.size ? '' : 'disabled'}>${esc(L.leave(picked.size))}</button>`;
  }

  function bubble(msg: Msg): string {
    return `<div class="message ${msg.out ? 'outgoing' : 'incoming'} msg"><div class="messageBubble"><div class="messageText">${esc(msg.text)}</div><div class="messageMeta">${esc(msg.time)}${msg.out ? ' <span class="ticks">✓✓</span>' : ''}</div></div></div>`;
  }

  function renderChat(scroll = true) {
    const c = chats.find((x) => x.id === openId);
    if (!c) {
      headerTitle!.textContent = '';
      if (headerStatus) headerStatus.textContent = '';
      inner!.innerHTML = '';
      return;
    }
    headerTitle!.textContent = c.title[lang()];
    if (headerStatus) {
      const subs = c.kind === 'channel' ? (lang() === 'ru' ? 'канал' : 'channel') : c.kind === 'group' ? (lang() === 'ru' ? 'группа' : 'group') : lang() === 'ru' ? 'в сети' : 'online';
      headerStatus.textContent = subs;
    }
    inner!.innerHTML = (c.story ? storyHtml : '') + c.msgs[lang()].map(bubble).join('');
    input.disabled = c.kind === 'channel';
    input.placeholder = c.kind === 'channel' ? (lang() === 'ru' ? 'Канал: только чтение' : 'Channel: read only') : T[lang()].placeholder;
    if (scroll) msgList!.scrollTop = msgList!.scrollHeight;
  }

  const renderAll = () => {
    renderFilters();
    renderList();
    renderBar();
    root.classList.toggle('selectingMode', selecting);
    renderChat(false);
  };

  // ---- interactions -------------------------------------------------------
  function engage() {
    root!.classList.add('play', 'live');
  }

  function openChat(id: string) {
    engage();
    openId = id;
    const c = chats.find((x) => x.id === id);
    if (c) c.unread = 0;
    renderList();
    renderChat();
  }

  function toggle(id: string, shift: boolean) {
    const c = chats.find((x) => x.id === id);
    if (!c || !leavable(c)) return;
    if (shift && anchor) {
      const ids = visible().filter(leavable).map((x) => x.id);
      const a = ids.indexOf(anchor);
      const b = ids.indexOf(id);
      if (a >= 0 && b >= 0) {
        for (let i = Math.min(a, b); i <= Math.max(a, b); i++) picked.add(ids[i]);
        anchor = id;
        return renderSel();
      }
    }
    if (!picked.delete(id)) picked.add(id);
    anchor = id;
    renderSel();
  }
  const renderSel = () => { renderList(); renderBar(); };

  function setSelecting(on: boolean) {
    engage();
    selecting = on;
    picked.clear();
    anchor = null;
    selectBtn.classList.toggle('active', on);
    renderAll();
  }

  async function send() {
    const text = input.value.trim();
    const c = chats.find((x) => x.id === openId);
    if (!text || !c || c.kind === 'channel') return;
    engage();
    input.value = '';
    c.msgs[lang()].push(m(true, text, now()));
    c.msgs[lang() === 'ru' ? 'en' : 'ru'].push(m(true, text, now()));
    c.time = now();
    renderChat();
    renderList();
    const pool = c.replies[lang()];
    if (!pool.length) return;
    if (headerStatus) headerStatus.textContent = T[lang()].typing;
    await sleep(1100);
    const reply = pool[Math.floor(Math.random() * pool.length)];
    c.msgs.en.push(m(false, c.replies.en[pool.indexOf(reply)] ?? reply, now()));
    c.msgs.ru.push(m(false, c.replies.ru[pool.indexOf(reply)] ?? reply, now()));
    if (openId === c.id) renderChat();
    renderList();
    if (headerStatus && openId === c.id) renderChat(false);
  }

  function modal(html: string) {
    overlay.innerHTML = `<div class="demoModal">${html}</div>`;
    overlay.hidden = false;
  }
  const closeModal = () => { overlay.hidden = true; overlay.innerHTML = ''; };

  async function leaveFlow() {
    if (busy || !picked.size) return;
    const L = T[lang()];
    const ids = [...picked];
    modal(`<h4>${esc(L.confirm(ids.length))}</h4><p>${esc(ids.slice(0, 4).map((id) => chats.find((c) => c.id === id)?.title[lang()] ?? '').join(', '))}${ids.length > 4 ? ` +${ids.length - 4}` : ''}<br>${esc(L.confirmNote)}</p>
      <div class="demoModalBtns"><button class="demoChip" data-a="mcancel">${esc(L.cancel)}</button><button class="demoLeave" data-a="mgo">${esc(L.leave(ids.length))}</button></div>`);
  }

  async function runLeave() {
    const ids = [...picked];
    busy = true;
    for (let i = 0; i < ids.length; i++) {
      const L = T[lang()];
      modal(`<h4>${esc(L.running(i, ids.length))}</h4><div class="demoProgress"><div style="width:${(i / ids.length) * 100}%"></div></div>`);
      const el = list!.querySelector<HTMLElement>(`[data-id="${ids[i]}"]`);
      el?.classList.add('leaving');
      await sleep(420);
      chats = chats.filter((c) => c.id !== ids[i]);
      picked.delete(ids[i]);
      if (openId === ids[i]) openId = chats.find((c) => c.kind === 'user')?.id ?? chats[0]?.id ?? '';
      renderList();
      renderBar();
    }
    busy = false;
    const L = T[lang()];
    modal(`<h4>${esc(L.done(ids.length))}</h4><div class="demoModalBtns"><button class="demoChip" data-a="mclose">OK</button><button class="demoChip" data-a="restart">${esc(L.restart)}</button></div>`);
    setSelecting(false);
  }

  function restart() {
    chats = CHATS.map((c) => ({ ...c, msgs: { en: [...c.msgs.en], ru: [...c.msgs.ru] } }));
    openId = 'artem';
    filter = 'all';
    closeModal();
    setSelecting(false);
  }

  // ---- events (delegated) -------------------------------------------------
  const activate = (target: HTMLElement, shift: boolean) => {
    const a = target.closest<HTMLElement>('[data-a]')?.dataset.a;
    if (a) {
      if (a === 'exit') setSelecting(false);
      else if (a === 'allch') { visible().filter((c) => c.kind === 'channel').forEach((c) => picked.add(c.id)); renderSel(); }
      else if (a === 'clear') { picked.clear(); renderSel(); }
      else if (a === 'leave') leaveFlow();
      else if (a === 'mcancel' || a === 'mclose') closeModal();
      else if (a === 'mgo') runLeave();
      else if (a === 'restart') restart();
      return true;
    }
    return false;
  };

  root.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (activate(t, e.shiftKey)) return;
    if (t.closest('.demoSelectBtn')) return setSelecting(!selecting);
    const f = t.closest<HTMLElement>('.demoFilter');
    if (f) { engage(); filter = f.dataset.f as typeof filter; return renderAll(); }
    const row = t.closest<HTMLElement>('.demoChat');
    if (row && !busy) return selecting ? toggle(row.dataset.id!, e.shiftKey) : openChat(row.dataset.id!);
  });
  root.addEventListener('keydown', (e) => {
    const t = e.target as HTMLElement;
    if (e.key === 'Enter' && t === input) return void send();
    if ((e.key === 'Enter' || e.key === ' ') && t.matches('.demoChat, .demoFilter')) {
      e.preventDefault();
      t.click();
    }
  });

  // Follow the page language switcher.
  new MutationObserver(() => renderAll()).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  // Keep the original markup on screen (story animation) until first use, but
  // upgrade the sidebar right away so it is interactive and has more chats.
  renderFilters();
  renderList();
  renderBar();
  const hint = document.querySelector<HTMLElement>('.demoHint');
  if (hint) hint.textContent = T[lang()].hint;
  new MutationObserver(() => { if (hint) hint.textContent = T[lang()].hint; }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
}
