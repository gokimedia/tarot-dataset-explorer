const DATA_URL = 'https://raw.githubusercontent.com/gokimedia/tarot-mcp-server/main/data/tarot_card_meanings.csv';

const cardsEl = document.querySelector('#cards');
const statusEl = document.querySelector('#status');
const searchEl = document.querySelector('#search');
const arcanaEl = document.querySelector('#arcana');
let cards = [];

function escapeHtml(value = '') {
  return value.replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  }[char]));
}

function render() {
  const query = searchEl.value.trim().toLowerCase();
  const arcana = arcanaEl.value;
  const filtered = cards.filter((card) => {
    const matchesArcana = arcana === 'all' || card.arcana === arcana;
    const haystack = [card.card_name, card.suit, card.element, card.upright_meaning, card.reversed_meaning, card.love_meaning, card.career_meaning].join(' ').toLowerCase();
    return matchesArcana && haystack.includes(query);
  });

  statusEl.textContent = `${filtered.length} of ${cards.length} cards shown`;
  if (!filtered.length) {
    cardsEl.innerHTML = '<p class="empty">No cards match these filters. Try a broader search.</p>';
    return;
  }

  cardsEl.innerHTML = filtered.map((card) => `
    <article class="card">
      <h2>${escapeHtml(card.card_name)}</h2>
      <div class="meta">${escapeHtml(card.arcana)}${card.suit ? ` · ${escapeHtml(card.suit)}` : ''} · ${escapeHtml(card.element)}</div>
      <div class="meaning"><strong>Upright</strong><p>${escapeHtml(card.upright_meaning)}</p></div>
      <div class="meaning"><strong>Reversed</strong><p>${escapeHtml(card.reversed_meaning)}</p></div>
      <div class="meaning"><strong>Love</strong><p>${escapeHtml(card.love_meaning)}</p></div>
      <a class="card-link" href="${encodeURI(card.guide_url)}" target="_blank" rel="noopener noreferrer">Full meaning on Deckaura ↗</a>
    </article>
  `).join('');
}

Papa.parse(DATA_URL, {
  download: true,
  header: true,
  skipEmptyLines: true,
  complete(results) {
    cards = results.data;
    render();
  },
  error() {
    statusEl.textContent = 'The dataset could not be loaded. Use the source links below to access it directly.';
  },
});

searchEl.addEventListener('input', render);
arcanaEl.addEventListener('change', render);

