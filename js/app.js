/* ==========================================================================
   BE MENTOR AKADEMİ ONLINE — Interactive Application Engine (v4)
   ========================================================================== */
window.App = (() => {
  const D = window.BE_DATA;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const ic = (n, c = '') => `<svg class="i ${c}"><use href="#i-${n}"/></svg>`;
  const tl = n => new Intl.NumberFormat('tr-TR').format(n) + '₺';
  const M = id => D.mentors.find(m => m.id === id) || D.mentors[0];
  const C = id => D.courses.find(c => c.id === id) || D.courses[0];
  const catName = id => (D.categories.find(c => c.id === id) || {}).name || id;
  const stars = r => `<span class="st">${Array.from({ length: 5 }, (_, i) => ic('star', i < Math.round(r) ? 'i-fill' : '')).join('')}</span>`;

  const S = {
    view: 'home',
    homeCat: 'all',
    spot: 0,
    spotPlaying: false,
    spotProg: 32,
    spotTimer: null,
    seriesPage: 0,
    mentor: 0, // slot=(i - S.mentor + 4)%4 -> i=1 (Doç. Dr. Aylin Demir) is in slot 1 (Active Center)
    mentorHover: false,
    popTab: 'all',
    cart: [],
    owned: ['c2'],
    wish: [],
    coupon: false,
    done: { 'c2-1': true },
    fCats: new Set(),
    fLevels: new Set(),
    fTop: false,
    course: 'c1',
    lesson: null,
    playing: false,
    pProg: 18,
    pTimer: null,
    pTab: 'about',
    notes: {},
    qa: {},
    subscription: null, // null | 'student' | 'dentist'
    selectedSubPkg: 'student'
  };

  /* ---------------- Router ---------------- */
  function go(view, opts = {}) {
    if (opts.cat) {
      if (opts.cat === 'all') S.fCats.clear();
      else S.fCats = new Set([opts.cat]);
    }
    S.view = view;
    $$('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + view));
    $$('[data-nav]').forEach(b => b.classList.toggle('active', b.dataset.nav === view));
    if (view !== 'player') stopPlayer();
    if (view === 'catalog') { renderFilters(); renderCatalog(); }
    if (view === 'learning') renderLearning();
    if (view === 'studio') renderStudio();
    if (view === 'subscription') renderSubscriptions();
    window.scrollTo({ top: 0, behavior: opts.smooth === false ? 'auto' : 'smooth' });
    if (opts.focus) setTimeout(() => $('#q')?.focus(), 250);
  }

  function toSection(name) {
    const run = () => $('#sec-' + name)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (S.view !== 'home') { go('home', { smooth: false }); setTimeout(run, 60); } else run();
  }

  /* ---------------- Home: Mega Menu ---------------- */
  function renderDock() {
    if ($('#dock')) {
      $('#dock').innerHTML = D.categories.map(c => `
        <button class="dock-item ${S.homeCat === c.id ? 'active' : ''}" onclick="App.selectDockCat('${c.id}')">
          ${ic(c.icon)}<span>${c.name}</span>
        </button>`).join('');
    }

    if ($('#mega-cats')) {
      $('#mega-cats').innerHTML = D.categories.map(c => `
        <a onclick="App.go('catalog',{cat:'${c.id}'})">
          <span class="ico">${ic(c.icon)}</span>
          <div><strong>${c.name}</strong><span>${c.count} video eğitim</span></div>
        </a>`).join('');
    }
  }

  function selectDockCat(catId) {
    S.homeCat = catId;
    S.popTab = catId;
    S.seriesPage = 0;
    renderDock();
    renderSeries();
    renderPop();
  }

  /* ---------------- Home: Spotlight Carousel ---------------- */
  const spots = () => D.courses.filter(c => c.spotlight);
  function renderSpot() {
    const list = spots();
    const c = list[S.spot % list.length];
    const m = M(c.mentorId);
    const total = c.curriculum[0]?.lessons[1]?.d || '24:16';
    const [tm, ts] = total.split(':').map(Number);
    const sec = Math.round((tm * 60 + ts) * S.spotProg / 100);
    const cur = `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;

    $('#spot').innerHTML = `
      <div class="spot-info">
        <span class="tag">${ic('sparkle')}SPOTLIGHT</span>
        <h3 class="spot-title">${c.title}</h3>
        <p class="spot-desc">${c.subtitle}</p>
        <div class="spot-meta">
          <span>${ic('film')}${c.lessons} Bölüm</span>
          <span>${ic('clock')}${c.hours}</span>
          <span>${ic('star')}${c.rating} (${c.reviews})</span>
        </div>
        <div class="spot-foot">
          <div class="person">
            <img src="${m.photo}" alt="${m.name}">
            <div><b>${m.title} ${m.name}</b><small>${m.specialty}</small></div>
          </div>
          <button class="go-btn" aria-label="Seriye git" onclick="App.detail('${c.id}')">${ic('arrow')}</button>
        </div>
      </div>
      <div class="spot-media">
        <img src="${c.image}" alt="${c.title}">
        <button class="play-big" onclick="App.spotPlay()" aria-label="Önizlemeyi Oynat">
          ${S.spotPlaying ? ic('pause', 'i-fill') : ic('play', 'i-fill')}
        </button>
        <div class="vbar">
          <button onclick="App.spotPlay()">${S.spotPlaying ? ic('pause', 'i-fill') : ic('play', 'i-fill')}</button>
          <span>${cur} / ${total}</span>
          <div class="vtrack" onclick="App.detail('${c.id}')"><i style="width:${S.spotProg}%"></i></div>
          <button onclick="App.player('${c.id}')">${ic('vol')}</button>
          <span class="hd">HD</span>
          <button onclick="App.player('${c.id}')">${ic('full')}</button>
        </div>
      </div>`;

    $('#spot-dots').innerHTML = list.map((_, i) =>
      `<button class="${i === S.spot % list.length ? 'on' : ''}" onclick="App.spotTo(${i})" aria-label="Slayt ${i + 1}"></button>`
    ).join('');
  }

  function spot(step) {
    const n = spots().length;
    S.spot = (S.spot + step + n) % n;
    S.spotProg = 32;
    spotStop();
    renderSpot();
  }
  function spotTo(i) { S.spot = i; S.spotProg = 32; spotStop(); renderSpot(); }
  function spotStop() { S.spotPlaying = false; clearInterval(S.spotTimer); }
  function spotPlay() {
    S.spotPlaying = !S.spotPlaying;
    clearInterval(S.spotTimer);
    if (S.spotPlaying) {
      S.spotTimer = setInterval(() => {
        S.spotProg = Math.min(100, S.spotProg + 0.8);
        renderSpot();
        if (S.spotProg >= 100) spot(1);
      }, 200);
    }
    renderSpot();
  }

  /* ---------------- Home: Video Serileri (3-Column Reference Cards + Dots) ---------------- */
  function renderSeries() {
    let pool = S.homeCat === 'all'
      ? [...D.courses.filter(c => c.homeSeries), ...D.courses.filter(c => !c.homeSeries)]
      : D.courses.filter(c => c.category === S.homeCat);
    if (!pool.length) pool = D.courses;

    const start = (S.seriesPage * 3) % pool.length;
    const list = [0, 1, 2].map(k => pool[(start + k) % pool.length]);

    $('#series-grid').innerHTML = list.map(c => {
      const m = M(c.mentorId);
      return `
      <article class="series" onclick="App.detail('${c.id}')">
        <img class="bg" src="${c.image}" alt="${c.title}">
        <div class="series-in">
          <div class="chips">
            <span class="chip lav">${ic('play', 'i-fill')}Video Serisi</span>
            <span class="chip">${c.lessons} Bölüm</span>
          </div>
          <div class="series-mid">
            <h3>${c.title}</h3>
            <span class="play-sm">${ic('play', 'i-fill')}</span>
          </div>
          <div class="series-foot">
            <div class="person">
              <img src="${m.photo}" alt="${m.name}">
              <div><b>${m.title} ${m.name}</b></div>
            </div>
            <span class="series-price-tag">${tl(c.price)} →</span>
          </div>
        </div>
      </article>`;
    }).join('');

    const dotsEl = $('#series-dots');
    if (dotsEl) {
      dotsEl.innerHTML = [0, 1, 2].map(p =>
        `<button class="${p === S.seriesPage ? 'on' : ''}" onclick="App.setSeriesPage(${p})" aria-label="Sayfa ${p + 1}"></button>`
      ).join('');
    }
  }

  function setSeriesPage(p) {
    S.seriesPage = p;
    renderSeries();
  }

  /* ---------------- Home: Mentorlarımız (Smooth 3D Slot Stage + Auto-Rotation) ---------------- */
  function renderStage() {
    const stageEl = $('#stage');
    if (!stageEl) return;
    const n = D.mentors.length;

    // Build DOM cards once so CSS transitions glide smoothly between slots!
    if (!stageEl.children.length) {
      stageEl.innerHTML = D.mentors.map((m, i) => `
        <div class="m-card" data-idx="${i}" onclick="App.onMentorClick(${i})">
          <img src="${m.photo}" alt="${m.title} ${m.name}">
          <div class="m-info">
            <div>
              <small>${m.title}</small>
              <b>${m.name}</b>
              <span>${m.specialty}</span>
            </div>
            <span class="go">${ic('arrow')}</span>
          </div>
        </div>
      `).join('');
    }

    $$('.m-card', stageEl).forEach((cardEl, i) => {
      const slot = ((i - S.mentor) % n + n) % n;
      cardEl.dataset.slot = String(slot);
    });
  }

  function onMentorClick(idx) {
    const n = D.mentors.length;
    const slot = ((idx - S.mentor) % n + n) % n;
    if (slot === 1) {
      // Already in the active center spotlight slot -> open catalog
      go('catalog');
    } else {
      // Bring clicked mentor into slot 1 (Active Center)
      S.mentor = (idx - 1 + n) % n;
      renderStage();
    }
  }

  function mentor(step) {
    const n = D.mentors.length;
    S.mentor = (S.mentor + step + n) % n;
    renderStage();
  }

  function mentorTo(i) {
    const n = D.mentors.length;
    S.mentor = (i - 1 + n) % n;
    renderStage();
  }

  /* ---------------- Course Card (Marketplace) ---------------- */
  function card(c, mode = 'shop') {
    const m = M(c.mentorId);
    const own = S.owned.includes(c.id);
    const inCart = S.cart.includes(c.id);
    const lessons = c.curriculum.flatMap(x => x.lessons);
    const done = lessons.filter(l => S.done[l.id]).length;
    const pct = Math.round(done / Math.max(lessons.length, 1) * 100);
    const effPrice = S.subscription ? Math.round(c.price * 0.8) : c.price;

    const foot = mode === 'learn'
      ? `<div style="flex:1">
           <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--ink-2);margin-bottom:6px">
             <span>%${pct} tamamlandı</span><span>${done}/${lessons.length} ders</span>
           </div>
           <div class="progress"><i style="width:${pct}%"></i></div>
         </div>
         <button class="go-btn" style="width:40px;height:40px" onclick="App.player('${c.id}')" aria-label="Devam et">${ic('play', 'i-fill')}</button>`
      : own
        ? `<span class="owned">${ic('check')}Kütüphanende</span>
           <button class="btn btn-lav btn-sm" onclick="App.player('${c.id}')">İzle ${ic('play', 'i-fill')}</button>`
        : `<div class="price"><b>${tl(effPrice)}</b><s>${tl(S.subscription ? c.price : c.oldPrice)}</s>${S.subscription ? `<span class="sub-disc-pill">-%20 Abone</span>` : ''}</div>
           <button class="add-btn ${inCart ? 'in' : ''}" onclick="App.add('${c.id}')" title="Sepete Ekle" aria-label="Sepete ekle">${ic(inCart ? 'check' : 'plus')}</button>`;

    return `
    <article class="card">
      <div class="card-media" onclick="App.detail('${c.id}')">
        <img src="${c.image}" alt="${c.title}">
        <div class="chips">${c.badge ? `<span class="chip ${c.badge === 'En Çok Satan' ? 'gold' : 'lav'}">${c.badge}</span>` : ''}</div>
        <span class="chip dur">${ic('clock')}${c.hours}</span>
      </div>
      ${mode !== 'learn' ? `<button class="wish ${S.wish.includes(c.id) ? 'on' : ''}" onclick="App.wishToggle('${c.id}', this)" aria-label="Favorilere ekle">${ic('heart')}</button>` : ''}
      <div class="card-body">
        <span class="card-cat">${catName(c.category)} · ${c.lessons} Bölüm</span>
        <h3 class="card-title" onclick="App.detail('${c.id}')">${c.title}</h3>
        <span class="card-mentor">${m.title} ${m.name}</span>
        ${mode !== 'learn' ? `<div class="rating"><b>${c.rating}</b>${stars(c.rating)}<small>(${c.reviews})</small></div>` : ''}
        <div class="card-foot">${foot}</div>
      </div>
    </article>`;
  }

  /* ---------------- Popular Marketplace Tabs ---------------- */
  function renderPop() {
    const tabs = [
      ['all', 'Tümü'],
      ['implantoloji', 'İmplantoloji'],
      ['restoratif', 'Restoratif'],
      ['endodonti', 'Endodonti'],
      ['protetik', 'Protetik'],
      ['cerrahi', 'Cerrahi']
    ];
    $('#pop-tabs').innerHTML = tabs.map(([id, n]) =>
      `<button class="tab ${S.popTab === id ? 'on' : ''}" onclick="App.popTab('${id}')">${n}</button>`
    ).join('');

    let list = [...D.courses];
    if (S.popTab !== 'all') list = list.filter(c => c.category === S.popTab);
    $('#pop-grid').innerHTML = list.slice(0, 4).map(c => card(c)).join('') || '<div class="empty">Bu branşta yakında yeni seriler eklenecek.</div>';
  }
  function popTab(id) { S.popTab = id; renderPop(); }

  /* ---------------- Modüller (Multi-Course Bundles) ---------------- */
  function renderBundles() {
    if (!$('#bundle-grid') || !D.bundles) return;
    $('#bundle-grid').innerHTML = D.bundles.map(b => {
      const items = b.courseIds.map(C);
      return `
      <div class="bundle-card">
        <div class="chips">
          <span class="chip lav">${b.badge}</span>
          <span class="chip">${items.length} Seri · ${b.hours}</span>
        </div>
        <h3>${b.title}</h3>
        <p style="font-size:13px; color:var(--ink-2); line-height:1.55;">${b.desc}</p>
        <div class="bundle-items">
          ${items.map(c => `<div class="bundle-item">${ic('check')}<span>${c.title}</span></div>`).join('')}
        </div>
        <div style="display:flex; align-items:center; justify-content:space-between; margin-top:auto; padding-top:6px;">
          <div class="price"><b>${tl(b.price)}</b><s>${tl(b.oldPrice)}</s></div>
          <button class="btn btn-lav btn-sm" onclick="App.addBundle('${b.id}')">Sepete Ekle ${ic('arrow')}</button>
        </div>
      </div>`;
    }).join('');
  }

  function addBundle(bundleId) {
    const b = D.bundles.find(x => x.id === bundleId);
    if (!b) return;
    b.courseIds.forEach(cid => {
      if (!S.owned.includes(cid) && !S.cart.includes(cid)) S.cart.push(cid);
    });
    refresh();
    cart(true);
    toast('Modüldeki tüm seriler sepetinize eklendi!');
  }

  function renderQuotes() {
    $('#quotes').innerHTML = D.testimonials.map(t => `
      <div class="quote"><div class="qm">“</div><p>${t.text}</p>
        <div class="person"><span>${t.name.split(' ').slice(-2).map(w => w[0]).join('')}</span><div><b>${t.name}</b><small>${t.role}</small></div></div>
      </div>`).join('');
  }

  /* ---------------- Catalog ---------------- */
  function renderFilters() {
    const levels = [...new Set(D.courses.map(c => c.level))];
    const check = (group, val, label, count, on) => `
      <label class="check"><input type="checkbox" ${on ? 'checked' : ''} onchange="App.filter('${group}','${val}')"><span class="box">${ic('check')}</span><span class="lbl">${label}</span>${count != null ? `<em>${count}</em>` : ''}</label>`;
    $('#filters').innerHTML = `
      <h6>Branş</h6>
      ${D.categories.filter(c => c.id !== 'all').map(c => check('cat', c.id, c.name, D.courses.filter(x => x.category === c.id).length, S.fCats.has(c.id))).join('')}
      <h6>Seviye</h6>
      ${levels.map(l => check('level', l, l, null, S.fLevels.has(l))).join('')}
      <h6>Puan</h6>
      ${check('top', '1', `<span style="color:var(--gold)">★</span> 4.9 ve üzeri`, null, S.fTop)}
      <button class="btn btn-ghost btn-sm" style="margin-top:14px; padding:0" onclick="App.clearFilters()">Filtreleri temizle</button>`;
  }

  function filter(g, v) {
    if (g === 'cat') S.fCats.has(v) ? S.fCats.delete(v) : S.fCats.add(v);
    if (g === 'level') S.fLevels.has(v) ? S.fLevels.delete(v) : S.fLevels.add(v);
    if (g === 'top') S.fTop = !S.fTop;
    renderCatalog();
  }
  function clearFilters() { S.fCats.clear(); S.fLevels.clear(); S.fTop = false; renderFilters(); renderCatalog(); }

  function renderCatalog() {
    const q = ($('#q')?.value || '').toLocaleLowerCase('tr');
    const sort = $('#sort')?.value || 'popular';
    let list = D.courses.filter(c => {
      const m = M(c.mentorId);
      const hay = `${c.title} ${c.subtitle} ${m.name} ${catName(c.category)}`.toLocaleLowerCase('tr');
      return (!q || hay.includes(q)) && (!S.fCats.size || S.fCats.has(c.category)) && (!S.fLevels.size || S.fLevels.has(c.level)) && (!S.fTop || c.rating >= 4.9);
    });
    const sorters = {
      popular: (a, b) => b.students - a.students,
      rating: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
      new: (a, b) => (b.badge?.startsWith('Yeni') ? 1 : 0) - (a.badge?.startsWith('Yeni') ? 1 : 0),
      asc: (a, b) => a.price - b.price,
      desc: (a, b) => b.price - a.price
    };
    list.sort(sorters[sort]);
    $('#rcount').innerHTML = `<b>${list.length}</b> eğitim`;
    $('#cgrid').innerHTML = list.length
      ? list.map(c => card(c)).join('')
      : `<div class="empty">Aradığınız kriterlere uygun eğitim bulunamadı.<br><button class="btn btn-outline btn-sm" style="margin-top:16px" onclick="App.clearFilters()">Filtreleri temizle</button></div>`;
  }

  /* ---------------- Detail ---------------- */
  function detail(id) {
    const c = C(id);
    const m = M(c.mentorId);
    const own = S.owned.includes(id);
    const inCart = S.cart.includes(id);
    const all = c.curriculum.flatMap(x => x.lessons);
    const off = Math.round((1 - c.price / c.oldPrice) * 100);

    $('#view-detail').innerHTML = `
      <div class="detail-hero">
        <div class="bgimg" style="background-image:url('${c.image}')"></div>
        <div class="wrap">
          <div class="crumbs"><a onclick="App.go('home')">Anasayfa</a>${ic('chev-r')}<a onclick="App.go('catalog')">Eğitimler</a>${ic('chev-r')}<a onclick="App.go('catalog',{cat:'${c.category}'})">${catName(c.category)}</a></div>
          <div class="detail-grid"><div>
            <div class="chips">${c.badge ? `<span class="chip ${c.badge === 'En Çok Satan' ? 'gold' : 'lav'}">${c.badge}</span>` : ''}<span class="chip">${c.level}</span></div>
            <h1>${c.title}</h1>
            <p class="lead">${c.subtitle}</p>
            <div class="meta-row">
              <span class="rating"><b>${c.rating}</b>${stars(c.rating)}<small>(${c.reviews} değerlendirme)</small></span>
              <span>${ic('users')}${new Intl.NumberFormat('tr-TR').format(c.students)} hekim</span>
              <span>${ic('clock')}Son güncelleme: ${c.updated}</span>
            </div>
            <div class="person" style="margin-top:20px"><img src="${m.photo}" alt=""><div><small>Eğitmen Mentör</small><b>${m.title} ${m.name}</b></div></div>
          </div><div></div></div>
        </div>
      </div>
      <div class="wrap" style="padding-top:32px">
        <div class="detail-grid">
          <div>
            <div class="block"><h3>Bu seride neler öğreneceksiniz?</h3><ul class="learn">${c.learn.map(x => `<li>${ic('check')}<span>${x}</span></li>`).join('')}</ul></div>
            <div class="block">
              <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:10px;margin-bottom:16px">
                <h3 style="margin:0">Eğitim Müfredatı</h3>
                <span class="muted" style="font-size:13px">${c.curriculum.length} bölüm · ${all.length} ders · ${c.hours}</span>
              </div>
              ${c.curriculum.map((sec, si) => `
                <div class="acc ${si === 0 ? 'open' : ''}">
                  <div class="acc-h" onclick="this.parentElement.classList.toggle('open')">
                    <span>${sec.title}</span>
                    <span style="display:flex;gap:12px;align-items:center"><small>${sec.lessons.length} ders</small>${ic('chev')}</span>
                  </div>
                  <div class="acc-b">${sec.lessons.map(l => `
                    <div class="lesson" onclick="${l.pv || own ? `App.player('${c.id}','${l.id}')` : `App.toast('Bu ders satın alım sonrası açılır.','lock')`}">
                      ${ic(l.pv || own ? 'play' : 'lock')}
                      <span class="lt">${l.t}</span>
                      ${l.pv && !own ? '<span class="pv">Ücretsiz Önizle</span>' : ''}
                      <span class="d">${l.d}</span>
                    </div>`).join('')}</div>
                </div>`).join('')}
            </div>
            <div class="block"><h3>Mentörünüz</h3>
              <div class="instructor"><img src="${m.photo}" alt="">
                <div><h4>${m.title} ${m.name}</h4><div class="spec">${m.specialty}</div><p>${m.bio}</p>
                <div class="nums"><span><b>${m.rating}</b> puan</span><span><b>${m.students}</b> öğrenci</span><span><b>${m.courses}</b> seri</span></div></div>
              </div>
            </div>
          </div>
          <aside class="buy">
            <div class="buy-media" onclick="App.player('${c.id}')">
              <img src="${c.image}" alt="">
              <button class="play-big" aria-label="Önizle">${ic('play', 'i-fill')}</button>
              <span class="lbl">Ücretsiz önizlemeyi izle</span>
            </div>
            <div class="buy-body">
              ${own
                ? `<div class="owned" style="margin-bottom:14px">${ic('check')}Bu seri kütüphanende</div>
                   <button class="btn btn-lav btn-lg btn-block" onclick="App.player('${c.id}')">Eğitime Devam Et ${ic('arrow')}</button>`
                : `<div class="price"><b>${tl(c.price)}</b><s>${tl(c.oldPrice)}</s><span class="off">%${off} indirim</span></div>
                   <div class="timer">${ic('clock')}Özel lansman fiyatı</div>
                   <button class="btn btn-lav btn-lg btn-block" style="margin-bottom:8px" onclick="App.add('${c.id}', true)">${inCart ? 'Sepete Git' : 'Sepete Ekle'} ${ic('arrow')}</button>
                   <button class="btn btn-outline btn-block" onclick="App.buyNow('${c.id}')">Hemen Satın Al</button>
                   <p class="guarantee">14 gün koşulsuz iade garantisi</p>`}
              <ul>
                <li>${ic('film')}${c.lessons} bölüm 4K video · ${c.hours}</li>
                <li>${ic('device')}Mobil, tablet ve masaüstü erişim</li>
                <li>${ic('chat')}Mentora doğrudan soru sorma</li>
                <li>${ic('award')}BE Mentor Akademi onaylı sertifika</li>
                <li>${ic('shield')}Ömür boyu sınırsız erişim</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>`;
    go('detail');
  }

  /* ---------------- Player ---------------- */
  function player(id, lessonId) {
    const c = C(id);
    S.course = id;
    const all = c.curriculum.flatMap(x => x.lessons);
    S.lesson = lessonId || (S.owned.includes(id) ? (all.find(l => !S.done[l.id]) || all[0]).id : (all.find(l => l.pv) || all[0]).id);
    S.pProg = 24;
    S.playing = false;
    renderPlayer();
    go('player');
  }

  function stopPlayer() { S.playing = false; clearInterval(S.pTimer); }

  function renderPlayer() {
    const c = C(S.course);
    const m = M(c.mentorId);
    const own = S.owned.includes(c.id);
    const all = c.curriculum.flatMap(x => x.lessons);
    const l = all.find(x => x.id === S.lesson) || all[0];
    const done = all.filter(x => S.done[x.id]).length;
    const pct = Math.round(done / Math.max(all.length, 1) * 100);
    const [mm, ss] = l.d.split(':').map(Number);
    const sec = Math.round((mm * 60 + ss) * S.pProg / 100);
    const cur = `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;
    const R = 17, CIRC = 2 * Math.PI * R;

    $('#player-root').innerHTML = `
      <div class="player-top">
        <div style="display:flex;align-items:center;gap:12px">
          <button class="circle-btn" onclick="App.detail('${c.id}')" aria-label="Geri">${ic('arrow-l')}</button>
          <div><small class="muted" style="font-size:12px">${catName(c.category)} · ${m.title} ${m.name}</small><h2>${c.title}</h2></div>
        </div>
        <div class="ring-prog">
          <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="${R}" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="3.5"/><circle cx="20" cy="20" r="${R}" fill="none" stroke="#c2b2ff" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="${CIRC}" stroke-dashoffset="${CIRC * (1 - pct / 100)}"/></svg>
          <div><b style="color:#fff">%${pct}</b> tamamlandı<br><small class="muted">${done}/${all.length} ders</small></div>
        </div>
      </div>
      <div class="player">
        <div>
          <div class="screen ${S.playing ? 'playing' : ''}">
            <img src="${c.image}" alt="">
            <div class="ltitle">${l.t}<small>${c.curriculum.find(s => s.lessons.includes(l))?.title || ''}</small></div>
            <div class="wm"><img src="assets/be-logo.png" alt="">online.bementorakademi.com</div>
            <div class="user-wm">dt.elif.kaya@klinik.com · #BE-20481</div>
            ${S.playing ? '' : `<button class="play-big" onclick="App.pPlay()" aria-label="Oynat">${ic('play', 'i-fill')}</button>`}
            <div class="vbar">
              <button onclick="App.pPlay()">${ic(S.playing ? 'pause' : 'play', 'i-fill')}</button>
              <span>${cur} / ${l.d}</span>
              <div class="vtrack" onclick="App.pSeek(event, this)"><i style="width:${S.pProg}%"></i></div>
              <button>${ic('vol')}</button><button>${ic('gear')}</button><span class="hd">4K</span><button>${ic('full')}</button>
            </div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;gap:12px;flex-wrap:wrap">
            <button class="btn ${S.done[l.id] ? 'btn-outline' : 'btn-lav'} btn-sm" onclick="App.markDone('${l.id}')">${ic('check')}${S.done[l.id] ? 'Tamamlandı' : 'Tamamlandı Olarak İşaretle'}</button>
            <div style="display:flex;gap:8px"><button class="btn btn-ghost btn-sm" onclick="App.nextLesson(-1)">${ic('arrow-l')}Önceki</button><button class="btn btn-outline btn-sm" onclick="App.nextLesson(1)">Sonraki Ders${ic('arrow')}</button></div>
          </div>
          <div class="ptabs">
            ${[['about', 'Genel Bakış'], ['notes', 'Ders Notlarım'], ['qa', 'Mentora Soru Sor'], ['cert', 'Sertifika']].map(([k, n]) => `<button class="ptab ${S.pTab === k ? 'on' : ''}" onclick="App.pTab('${k}')">${n}</button>`).join('')}
          </div>
          <div>${tabBody(c, m, pct)}</div>
        </div>
        <aside class="side">
          <div class="side-h"><h4>Seri Müfredatı</h4><small>${all.length} ders · ${c.hours}</small></div>
          <div class="side-b">
            ${c.curriculum.map(sec => `
              <div class="acc open">
                <div class="acc-h" onclick="this.parentElement.classList.toggle('open')" style="font-size:13px;padding:12px 14px"><span>${sec.title}</span>${ic('chev')}</div>
                <div class="acc-b">${sec.lessons.map(x => {
                  const open = own || x.pv;
                  return `<div class="lesson ${x.id === l.id ? 'on' : ''}" style="padding:10px 14px" onclick="${open ? `App.player('${c.id}','${x.id}')` : `App.toast('Bu ders satın alım sonrası açılır.','lock')`}">
                    ${open ? `<span class="ck ${S.done[x.id] ? 'done' : ''}">${S.done[x.id] ? ic('check') : ''}</span>` : ic('lock')}
                    <span class="lt">${x.t}</span><span class="d">${x.d}</span></div>`;
                }).join('')}</div>
              </div>`).join('')}
            ${own ? '' : `<div style="padding:12px"><button class="btn btn-lav btn-block" onclick="App.add('${c.id}', true)">Tüm Seriyi Aç · ${tl(c.price)}</button></div>`}
          </div>
        </aside>
      </div>`;
  }

  function tabBody(c, m, pct) {
    if (S.pTab === 'about') return `
      <p style="color:var(--ink-2);font-size:14px;margin-bottom:18px">${c.subtitle}</p>
      <div class="instructor"><img src="${m.photo}" alt="" style="width:72px;height:72px;border-radius:16px"><div><h4>${m.title} ${m.name}</h4><div class="spec">${m.specialty}</div><p>${m.bio}</p></div></div>`;
    if (S.pTab === 'notes') return `
      <textarea class="textarea" rows="5" placeholder="Bu derste aldığınız klinik notlar otomatik kaydedilir…" oninput="App.note('${c.id}', this.value)">${S.notes[c.id] || ''}</textarea>
      <p class="muted" style="font-size:12px;margin-top:8px">${ic('check')} Notlarınız tüm cihazlarınız arasında senkronize edilir.</p>`;
    if (S.pTab === 'qa') {
      const list = S.qa[c.id] || [{ q: 'Dt. Mert A.', t: 'Membran perforasyonu 5 mm üzerindeyse işleme devam ediyor musunuz?', a: `${m.title} ${m.name}: 5 mm üzeri perforasyonlarda kollajen membranla onarım yapıp greftlemeyi genellikle 6–8 hafta erteliyorum.` }];
      return `
        <div style="display:flex;gap:10px;margin-bottom:16px"><input class="input" id="qa-in" placeholder="Mentörünüze sorunuzu yazın…"><button class="btn btn-lav" onclick="App.ask('${c.id}')">Gönder</button></div>
        ${list.map(x => `<div class="qa"><b>${x.q}</b><p>${x.t}</p>${x.a ? `<div class="ans">${x.a}</div>` : '<div class="ans muted">Mentöre iletildi · 24 saat içinde yanıtlanacak</div>'}</div>`).join('')}`;
    }
    return `
      <div class="cert">
        <img src="assets/be-logo.png" alt="BE">
        <h4>BE Mentor Akademi Katılım Sertifikası</h4>
        <p>${pct === 100 ? `Tebrikler! “${c.title}” serisini başarıyla tamamladınız.` : `Sertifikanız tüm dersleri tamamladığınızda açılır. Şu an %${pct} ilerlemedesiniz.`}</p>
        ${pct === 100 ? `<button class="btn btn-violet" onclick="App.toast('Sertifika PDF olarak indiriliyor…')">${ic('download')}Sertifikayı PDF İndir</button>` : `<span class="lock">${ic('lock')}Derslerin tamamlanması bekleniyor</span>`}
      </div>`;
  }

  function pPlay() {
    S.playing = !S.playing;
    clearInterval(S.pTimer);
    if (S.playing) {
      S.pTimer = setInterval(() => {
        S.pProg = Math.min(100, S.pProg + 0.6);
        const t = $('.screen .vtrack i');
        if (t) t.style.width = S.pProg + '%';
        if (S.pProg >= 100) {
          stopPlayer();
          S.done[S.lesson] = true;
          renderPlayer();
          toast('Ders tamamlandı!');
        }
      }, 150);
    }
    renderPlayer();
  }
  function pSeek(e, el) { const r = el.getBoundingClientRect(); S.pProg = Math.max(0, Math.min(100, (e.clientX - r.left) / r.width * 100)); renderPlayer(); }
  function markDone(id) { S.done[id] = !S.done[id]; renderPlayer(); }
  function nextLesson(dir) {
    const c = C(S.course);
    const all = c.curriculum.flatMap(x => x.lessons);
    const own = S.owned.includes(c.id);
    let i = all.findIndex(x => x.id === S.lesson) + dir;
    if (i < 0 || i >= all.length) return;
    if (!own && !all[i].pv) { toast('Sonraki ders için seriyi satın alın.', 'lock'); return; }
    player(c.id, all[i].id);
  }
  function setPTab(k) { S.pTab = k; renderPlayer(); }
  function note(id, v) { S.notes[id] = v; }
  function ask(id) {
    const v = $('#qa-in').value.trim();
    if (!v) return;
    S.qa[id] = S.qa[id] || [];
    S.qa[id].unshift({ q: 'Siz', t: v });
    renderPlayer();
    toast('Sorunuz mentöre iletildi.');
  }

  /* ---------------- Learning / Studio ---------------- */
  function renderLearning() {
    const list = D.courses.filter(c => S.owned.includes(c.id));
    $('#lgrid').innerHTML = list.length
      ? list.map(c => card(c, 'learn')).join('')
      : `<div class="empty">Henüz bir seriniz yok.<br><button class="btn btn-lav btn-sm" style="margin-top:16px" onclick="App.go('catalog')">Eğitimleri keşfet</button></div>`;
  }

  function renderStudio() {
    $('#f-cat').innerHTML = D.categories.filter(c => c.id !== 'all').map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    $('#f-mentor').innerHTML = D.mentors.map(m => `<option value="${m.id}">${m.title} ${m.name}</option>`).join('');
    $('#studio-table').innerHTML = D.courses.slice(0, 5).map(c =>
      `<tr><td>${c.title.length > 28 ? c.title.slice(0, 28) + '…' : c.title}</td><td>${c.students}</td><td>${tl(Math.round(c.students * c.price * 0.07))}</td></tr>`
    ).join('');
  }

  function fakeUpload(files) {
    if (!files || !files.length) return;
    const bar = $('#upbar');
    bar.classList.add('show');
    $('#upname').textContent = files[0].name + (files.length > 1 ? ` +${files.length - 1}` : '');
    let p = 0;
    const t = setInterval(() => {
      p = Math.min(100, p + Math.random() * 15);
      $('#upfill').style.width = p + '%';
      $('#uppct').textContent = Math.round(p) + '%';
      if (p >= 100) {
        clearInterval(t);
        $('#uppct').textContent = '4K HLS + DRM Hazır ✓';
      }
    }, 180);
  }

  function publish(e) {
    e.preventDefault();
    const cat = $('#f-cat').value;
    const imgs = { restoratif: 'restorative', endodonti: 'endo', implantoloji: 'implant', ortodonti: 'ortho', protetik: 'prosthetic', cerrahi: 'surgery', dijital: 'digital' };
    const price = +$('#f-price').value || 3500;
    const id = 'n' + Date.now();
    D.courses.unshift({
      id,
      title: $('#f-title').value.trim(),
      subtitle: $('#f-sub').value.trim(),
      category: cat,
      mentorId: $('#f-mentor').value,
      image: `assets/images/course-${imgs[cat] || 'restorative'}.jpg`,
      homeSeries: true,
      lessons: 6,
      hours: '4 sa 10 dk',
      level: 'Tüm Seviyeler',
      rating: 5.0,
      reviews: 1,
      students: 1,
      price,
      oldPrice: +$('#f-old').value || Math.round(price * 1.3),
      badge: 'Yeni',
      updated: 'Kasım 2026',
      learn: [$('#f-sub').value.trim()],
      curriculum: [{ title: 'Bölüm 1: Giriş ve Klinik Protokol', lessons: [{ id: id + '-1', t: 'Giriş ve vaka planlaması', d: '15:00', pv: true }, { id: id + '-2', t: 'Canlı klinik uygulama', d: '28:30' }] }]
    });
    e.target.reset();
    $('#upbar').classList.remove('show');
    renderSeries();
    renderPop();
    toast('Seriniz yayınlandı ve kataloğa eklendi!');
    go('catalog');
  }

  /* ---------------- Cart ---------------- */
  function add(id, open) {
    if (S.owned.includes(id)) return;
    if (!S.cart.includes(id)) {
      S.cart.push(id);
      toast('Sepete eklendi');
    } else if (!open) {
      S.cart = S.cart.filter(x => x !== id);
      toast('Sepetten çıkarıldı', 'x');
    }
    refresh();
    if (open) cart(true);
  }

  function buyNow(id) {
    if (!S.cart.includes(id)) S.cart.push(id);
    refresh();
    cart(true);
  }

  function remove(id) {
    S.cart = S.cart.filter(x => x !== id);
    refresh();
  }

  function refresh() {
    const n = S.cart.length;
    const el = $('#cart-count');
    el.textContent = n;
    el.dataset.n = n;
    const items = S.cart.map(C);

    $('#cart-list').innerHTML = items.length
      ? items.map(c => `
        <div class="citem">
          <img src="${c.image}" alt="">
          <div>
            <b>${c.title}</b>
            <small>${M(c.mentorId).title} ${M(c.mentorId).name}</small>
            <div class="p">${tl(c.price)} <s class="muted" style="font-weight:500;font-size:11.5px">${tl(c.oldPrice)}</s></div>
          </div>
          <button class="rm" onclick="App.remove('${c.id}')" aria-label="Kaldır">${ic('x')}</button>
        </div>`).join('')
      : `<div class="drawer-empty"><div class="ico">${ic('bag')}</div><b style="color:#fff">Sepetiniz boş</b><p style="font-size:13px;margin:6px 0 16px">Klinik pratiğinizi güçlendirecek serileri keşfedin.</p><button class="btn btn-lav btn-sm" onclick="App.cart(false); App.go('catalog')">Eğitimleri Keşfet</button></div>`;

    $('#cart-foot').style.display = items.length ? '' : 'none';
    const sub = items.reduce((s, c) => s + c.price, 0);
    const hasDisc = S.coupon || !!S.subscription;
    const disc = hasDisc ? Math.round(sub * 0.2) : 0;
    $('#sub').textContent = tl(sub);
    $('#disc').textContent = '−' + tl(disc);
    if ($('#disc-label')) {
      $('#disc-label').textContent = S.subscription ? 'Abonelik İndirimi (%20)' : 'İndirim (%20)';
    }
    $('#disc-row').style.display = hasDisc ? '' : 'none';
    $('#tot').textContent = tl(sub - disc);

    if (S.view === 'home') { renderPop(); renderSubscriptions(); }
    if (S.view === 'catalog') renderCatalog();
  }

  function cart(open) {
    $('#drawer').classList.toggle('open', open);
    $('#scrim').classList.toggle('open', open);
    if (open) refresh();
  }

  function coupon() {
    if ($('#coupon').value.trim().toUpperCase() === 'BEMENTOR20') {
      S.coupon = true;
      toast('%20 indirim kuponu uygulandı');
      refresh();
    } else {
      toast('Geçersiz kod · deneyin: BEMENTOR20', 'x');
    }
  }

  function checkout() {
    if (!S.cart.length) return;
    S.owned = [...new Set([...S.owned, ...S.cart])];
    S.cart = [];
    S.coupon = false;
    refresh();
    cart(false);
    toast('Ödeme başarılı! Seriler kütüphanene eklendi.');
    go('learning');
  }

  function wishToggle(id, btn) {
    const on = S.wish.includes(id);
    S.wish = on ? S.wish.filter(x => x !== id) : [...S.wish, id];
    btn.classList.toggle('on', !on);
    toast(on ? 'Favorilerden çıkarıldı' : 'Favorilere eklendi', on ? 'x' : 'heart');
  }

  /* ---------------- Abonelik (Subscription System) ---------------- */
  function renderSubscriptions() {
    const info = D.subscriptionInfo;
    if (!info) return;

    if ($('#page-sub-packages')) {
      $('#page-sub-packages').innerHTML = info.packages.map((pkg, idx) => {
        const isCurrent = S.subscription === pkg.id;
        const isFeatured = idx === 1;
        const badgeLabel = idx === 0 ? 'Fakülte Öğrencilerine Özel' : 'Mezun & Klinisyen Hekimler';
        return `
          <article class="sub-pkg-card ${isFeatured ? 'featured-pkg' : ''} ${isCurrent ? 'active-pkg' : ''}">
            <span class="sub-pkg-ribbon">${badgeLabel}</span>
            <div class="sub-pkg-top">
              <div class="sub-pkg-icon-ring">
                <img class="sub-pkg-icon" src="assets/sub-icon.png" alt="Abonelik" />
              </div>
              <div>
                <span class="sub-pkg-eyebrow">BeMentor Akademi</span>
                <h3 class="sub-pkg-title">${pkg.name}</h3>
              </div>
              ${isCurrent ? `<span class="sub-active-chip">${ic('check')}Aktif</span>` : ''}
            </div>
            <div class="sub-pkg-price">
              <b>${pkg.priceText}</b>
              <span>${pkg.periodText}</span>
            </div>
            <ul class="sub-pkg-list">
              ${pkg.features.map(f => `<li><span class="sub-li-ico">${ic('check')}</span><span>${f}</span></li>`).join('')}
            </ul>
            <button class="btn ${isFeatured || isCurrent ? 'btn-lav' : 'btn-outline'} btn-lg btn-block" onclick="App.subModal(true, '${pkg.id}')">
              <span>${isCurrent ? 'Paketiniz Aktif ✓' : 'Abone ol'}</span>
              ${isCurrent ? '' : ic('arrow')}
            </button>
          </article>
        `;
      }).join('');
    }

    const activePkg = info.packages.find(p => p.id === S.subscription);
    if ($('#nav-sub-label')) {
      $('#nav-sub-label').textContent = activePkg ? 'Aboneliğim' : 'Abonelik';
    }
    if ($('#nav-sub-btn')) {
      $('#nav-sub-btn').classList.toggle('sub-is-active', !!activePkg);
    }
  }

  function subModal(open, pkgId) {
    if (pkgId) S.selectedSubPkg = pkgId;
    const modal = $('#sub-modal');
    if (!modal) return;
    modal.classList.toggle('open', !!open);
    $('#scrim').classList.toggle('open', !!open);
    if (open) selectSubModalPkg(S.selectedSubPkg);
  }

  function selectSubModalPkg(pkgId) {
    S.selectedSubPkg = pkgId;
    $$('#sub-pkg-seg button').forEach(b => b.classList.toggle('on', b.dataset.pkg === pkgId));
    const pkg = D.subscriptionInfo.packages.find(p => p.id === pkgId) || D.subscriptionInfo.packages[0];
    if ($('#sub-price-summary')) {
      $('#sub-price-summary').innerHTML = `
        <div class="sum-row"><span>Seçilen Paket</span><b style="color:#fff">${pkg.name}</b></div>
        <div class="sum-row total" style="margin-bottom:0"><span>Aylık Abonelik Ücreti</span><span>${pkg.priceText} ${pkg.periodText}</span></div>
      `;
    }
  }

  function confirmSubscription(e) {
    e.preventDefault();
    S.subscription = S.selectedSubPkg;
    const pkg = D.subscriptionInfo.packages.find(p => p.id === S.subscription);
    subModal(false);
    renderSubscriptions();
    refresh();
    toast(`${pkg.shortName} aboneliğiniz aktif edildi! Tüm kurslarda %20 indirim tanımlandı.`);
  }

  /* ---------------- Auth / Toast ---------------- */
  function auth(open, mode) {
    $('#auth').classList.toggle('open', !!open);
    $('#scrim').classList.toggle('open', !!open);
    if (!open) return;
    $$('#auth .seg button').forEach(b => b.classList.toggle('on', b.dataset.m === mode));
    $('#f-name').style.display = mode === 'register' ? '' : 'none';
    $('#auth-title').textContent = mode === 'register' ? 'Aramıza katıl' : 'Tekrar hoş geldin';
    $('#auth-btn').textContent = mode === 'register' ? 'Hesap Oluştur' : 'Giriş Yap';
  }

  function openPhoto(src, cap) {
    const modal = $('#photo-modal');
    if (!modal) return;
    $('#photo-modal-img').src = src;
    $('#photo-modal-cap').textContent = cap || '';
    modal.classList.add('open');
    $('#scrim').classList.add('open');
  }

  function closePhoto() {
    const modal = $('#photo-modal');
    if (!modal) return;
    modal.classList.remove('open');
    $('#scrim').classList.remove('open');
  }

  let tt;
  function toast(msg, icon = 'check') {
    $('#toast-t').textContent = msg;
    $('#toast .ico').innerHTML = ic(icon);
    $('#toast').classList.add('show');
    clearTimeout(tt);
    tt = setTimeout(() => $('#toast').classList.remove('show'), 2600);
  }

  function init() {
    renderDock();
    renderSpot();
    renderSeries();
    renderStage();
    renderPop();
    renderBundles();
    renderSubscriptions();
    renderQuotes();
    refresh();

    const nav = $('#nav');
    let isScrolled = false;
    let scrollTick = false;
    const getScrollTop = () => window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const updateScroll = () => {
      scrollTick = false;
      const y = getScrollTop();
      const next = (!isScrolled && y > 28) || (isScrolled && y > 8);
      if (next !== isScrolled) {
        isScrolled = next;
        nav.classList.toggle('scrolled', isScrolled);
      }
    };
    addEventListener('scroll', () => {
      if (!scrollTick) {
        scrollTick = true;
        requestAnimationFrame(updateScroll);
      }
    }, { passive: true });
    updateScroll();

    // Pause mentor auto-rotation when user hovers over mentor stage
    const mWrap = $('#mentor-stage-wrap');
    if (mWrap) {
      mWrap.addEventListener('mouseenter', () => { S.mentorHover = true; });
      mWrap.addEventListener('mouseleave', () => { S.mentorHover = false; });
    }

    // Automatic Mentor rotation every 3.4 seconds
    setInterval(() => {
      if (S.view === 'home' && !S.mentorHover && !document.hidden) {
        mentor(1);
      }
    }, 3400);

    addEventListener('keydown', e => {
      if (e.key === 'Escape') { cart(false); auth(false); subModal(false); closePhoto(); }
    });

    const drop = $('#drop');
    if (drop) {
      ['dragenter', 'dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('drag'); }));
      ['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('drag'); if (ev === 'drop') fakeUpload(e.dataTransfer.files); }));
    }
  }

  document.addEventListener('DOMContentLoaded', init);

  return {
    go, toSection, selectDockCat, spot, spotTo, spotPlay, setSeriesPage,
    popTab, mentor, mentorTo, onMentorClick,
    addBundle, filter, clearFilters, renderCatalog, detail, player, pPlay, pSeek,
    markDone, nextLesson, pTab: setPTab, note, ask, fakeUpload, publish,
    add, buyNow, remove, cart, coupon, checkout, wishToggle, auth, toast,
    subModal, selectSubModalPkg, confirmSubscription, openPhoto, closePhoto
  };
})();
