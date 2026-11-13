(() => {
  const toggle = document.querySelector('.theme-toggle');
  let theme = 'light';
  try { theme = localStorage.getItem('yodo-site-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); } catch {}
  function setTheme(value) {
    document.documentElement.dataset.theme = value;
    toggle.setAttribute('aria-pressed', String(value === 'dark'));
    toggle.setAttribute('aria-label', value === 'dark' ? '切換淺色模式' : '切換深色模式');
  }
  setTheme(theme);
  toggle.addEventListener('click', () => {
    theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    try { localStorage.setItem('yodo-site-theme', theme); } catch {}
  });
  const labels = {game:'遊戲',anime:'動畫',music:'音樂',film:'影視',book:'書籍'};
  fetch('assets/profiles.json').then(r => { if (!r.ok) throw new Error('profiles'); return r.json(); }).then(profiles => {
    const grid = document.getElementById('profile-grid');
    for (const [i, p] of profiles.entries()) {
      const card = document.createElement('a'); card.className = 'profile-card'; card.href = p.url;
      const head = document.createElement('div'); head.className = 'profile-card-head';
      const avatar = document.createElement('span'); avatar.className = 'avatar'; avatar.style.setProperty('--h', String(255 + i * 21)); avatar.textContent = p.name.slice(0, 1); avatar.setAttribute('aria-hidden','true');
      const info = document.createElement('div'); const name = document.createElement('h3'); name.textContent = p.name; const username = document.createElement('small'); username.textContent = '@' + p.username; info.append(name, username); head.append(avatar,info);
      const bio = document.createElement('p'); bio.textContent = p.bio;
      const tags = document.createElement('div'); tags.className = 'profile-tags';
      for (const [category,count] of Object.entries(p.categories)) { const tag = document.createElement('span'); tag.textContent = `${labels[category]} ${count}`; tags.append(tag); }
      const action = document.createElement('span'); action.className = 'profile-link'; action.textContent = '打開興趣名片 ↗';
      card.append(head,bio,tags,action); grid.append(card);
    }
  }).catch(() => {
    const p = document.createElement('p'); p.textContent='';
    const a=document.createElement('a'); a.href='profiles/demo01.html'; a.textContent='查看小語的示範興趣名片 →'; p.append(a); document.getElementById('profile-grid').append(p);
  });
  fetch('site-config.json').then(r => r.json()).then(config => {
    if (config.video_url && /^https:\/\//.test(config.video_url)) {
      const slot=document.getElementById('video-slot'); slot.replaceChildren(); const a=document.createElement('a'); a.className='button primary'; a.href=config.video_url; a.target='_blank'; a.rel='noopener noreferrer'; a.textContent='觀看展示影片 ↗'; slot.append(a);
    }
    if (config.demo_url && /^https:\/\//.test(config.demo_url)) {
      const button=document.querySelector('.unavailable'); const a=document.createElement('a'); a.className='button primary'; a.href=config.demo_url; a.textContent='立即體驗 YODO ↗'; button.replaceWith(a);
    }
  }).catch(() => {});
})();
