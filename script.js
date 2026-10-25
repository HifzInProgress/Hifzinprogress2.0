/**
 * Hifz In Progress — Unified Multi-Page JavaScript
 * Production-ready vanilla JS for navigation, search modal,
 * Daily Hifz Tracker (Qur'an metadata dropdowns & localStorage),
 * My Hifz Timetable Planner (projection calculator, live editable timetable, & high-res PNG canvas generator),
 * and printable study templates.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. ACTIVE NAVIGATION & MOBILE DRAWER
  // =========================================================================
  function initNavigation() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Highlight desktop links
    const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
    desktopLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Highlight mobile links
    const mobileLinks = document.querySelectorAll('.mobile-nav-links .mobile-nav-link');
    mobileLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Mobile menu toggle
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => {
        const isOpen = drawer.classList.contains('open');
        if (isOpen) {
          drawer.classList.remove('open');
          toggleBtn.setAttribute('aria-expanded', 'false');
        } else {
          drawer.classList.add('open');
          toggleBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  }

  // =========================================================================
  // 2. SEARCH MODAL FUNCTIONALITY
  // =========================================================================
  const SEARCH_DATABASE = [
    { title: 'My Hifz Timetable Planner', url: 'hifz-planner.html', category: 'Planner', desc: 'Calculate completion dates, customize Salah-aligned daily blocks, and download PNG schedules.' },
    { title: 'Daily Hifz Interactive Tracker', url: 'tracker.html', category: 'Tracker', desc: 'Record daily Sabaq, Sabqi, and Manzil with authentic Quran metadata dropdowns and localStorage.' },
    { title: 'How to Start Hifz', url: 'hifz-guide.html#start', category: 'Guide', desc: 'Foundations, pure intention (Niyyah), and selecting a single 15-line standard Mus\'haf.' },
    { title: 'Nazrah & Tajweed Preparation', url: 'hifz-guide.html#tajweed', category: 'Guide', desc: 'Why reciting to a qualified teacher before memorization is mandatory.' },
    { title: 'Sabaq, Sabqi & Manzil System', url: 'hifz-guide.html#methodology', category: 'Guide', desc: 'The 3-tier revision system used by traditional Quran madrasahs.' },
    { title: 'Daily Hifz Routine', url: 'hifz-guide.html#routine', category: 'Guide', desc: 'Fajr Sabaq, Asr Sabqi, and Isha Manzil scheduling.' },
    { title: 'Common Mistakes in Hifz', url: 'hifz-guide.html#mistakes', category: 'Guide', desc: 'Avoid rushing, switching prints, and neglecting revision.' },
    { title: 'Authentic Duas for Memory', url: 'hifz-guide.html#duas', category: 'Guide', desc: 'Rabbi zidni \'ilman and prophetic supplications for mental ease.' },
    { title: 'My Journey Milestones', url: 'journey.html', category: 'Journey', desc: 'Chronological Day 1 onward reflections, Fajr routines, and teacher guidance.' },
    { title: 'Daily Hifz Planner Template', url: 'resources.html#planner', category: 'Resource', desc: 'Printable daily timetable structured around the 5 daily prayers.' },
    { title: '30-Juz Manzil Rotation Tracker', url: 'resources.html#revision', category: 'Resource', desc: 'Printable revision matrix to prevent memorized Juz from slipping.' },
    { title: 'Authentic Dua Collection PDF', url: 'resources.html#duas', category: 'Resource', desc: 'Curated supplications with Arabic text, transliteration, and translation.' },
    { title: 'About Hifz In Progress', url: 'about.html', category: 'About', desc: 'The creator story, mission, and official Instagram community.' }
  ];

  function initSearchModal() {
    const searchBtn = document.getElementById('search-toggle-btn');
    const searchModal = document.getElementById('search-modal');
    const closeBtn = document.getElementById('search-close-btn');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');

    if (!searchBtn || !searchModal) return;

    function openSearch() {
      searchModal.classList.add('open');
      if (searchInput) {
        searchInput.value = '';
        renderResults('');
        setTimeout(() => searchInput.focus(), 100);
      }
    }

    function closeSearch() {
      searchModal.classList.remove('open');
    }

    function renderResults(q) {
      if (!resultsContainer) return;
      const query = q.trim().toLowerCase();

      if (!query) {
        resultsContainer.innerHTML = `
          <div style="text-align: center; padding: 2rem 1rem; color: var(--sage);">
            <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold); margin-bottom: 0.75rem; font-weight: 700;">Popular Searches</div>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem;">
              <button class="filter-btn quick-search-tag" data-tag="Planner">Planner</button>
              <button class="filter-btn quick-search-tag" data-tag="Tracker">Tracker</button>
              <button class="filter-btn quick-search-tag" data-tag="Tajweed">Tajweed</button>
              <button class="filter-btn quick-search-tag" data-tag="Sabaq">Sabaq</button>
              <button class="filter-btn quick-search-tag" data-tag="Fajr">Fajr Routine</button>
            </div>
          </div>
        `;

        document.querySelectorAll('.quick-search-tag').forEach((btn) => {
          btn.addEventListener('click', (e) => {
            const tag = e.currentTarget.getAttribute('data-tag') || '';
            if (searchInput) {
              searchInput.value = tag;
              renderResults(tag);
            }
          });
        });
        return;
      }

      const matches = SEARCH_DATABASE.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div style="text-align: center; padding: 2.5rem 1rem; color: var(--sage);">
            No results found for &ldquo;${q}&rdquo;. Try another term.
          </div>
        `;
        return;
      }

      let html = '<div style="display: flex; flex-direction: column; gap: 0.65rem;">';
      matches.forEach(item => {
        html += `
          <a href="${item.url}" style="display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 1rem; background-color: var(--bg-emerald-deep); border: 1px solid var(--gold-subtle); border-radius: var(--radius-md); transition: all 0.2s ease;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                <span class="badge" style="font-size: 0.65rem;">${item.category}</span>
                <span style="font-family: var(--font-serif); font-size: 0.95rem; font-weight: 700; color: var(--ivory);">${item.title}</span>
              </div>
              <div style="font-size: 0.78rem; color: var(--sage);">${item.desc}</div>
            </div>
            <span style="color: var(--gold); font-size: 1.1rem; margin-left: 1rem;">&rarr;</span>
          </a>
        `;
      });
      html += '</div>';
      resultsContainer.innerHTML = html;
    }

    searchBtn.addEventListener('click', openSearch);
    if (closeBtn) closeBtn.addEventListener('click', closeSearch);

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModal.classList.contains('open')) {
        closeSearch();
      }
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        renderResults(e.target.value);
      });
    }
  }

  // =========================================================================
  // 3. DAILY HIFZ TRACKER (LOCALSTORAGE CRUD & AUTHENTIC QURAN DROPDOWNS)
  // =========================================================================
  const TRACKER_STORAGE_KEY = 'hifz_in_progress_tracker_records';

  const INITIAL_RECORDS = [
    {
      id: 'rec-1',
      date: '2026-10-25',
      type: 'sabaq',
      juz: 29,
      surah: '67. Al-Mulk (الملك)',
      ayahRange: 'Ayahs 13 - 24 (12 ayahs, ~1.2 pages)',
      timeSpentMinutes: 45,
      quality: 'Mumtaz (Flawless)',
      notes: 'Recited with clean articulation to Sheikh. Makharij of Kha and Qaf felt strong.'
    },
    {
      id: 'rec-2',
      date: '2026-10-24',
      type: 'sabqi',
      juz: 30,
      surah: '78. An-Naba (النبأ)',
      ayahRange: 'Ayahs 1 - 40 (Full Surah)',
      timeSpentMinutes: 35,
      quality: 'Mumtaz (Flawless)',
      notes: 'Smooth recall without any stops. Recited during Fajr Sunnah prayer.'
    },
    {
      id: 'rec-3',
      date: '2026-10-23',
      type: 'manzil',
      juz: 30,
      surah: '84. Al-Inshiqaq to 114. An-Nas',
      ayahRange: 'Cumulative Juz 30 portion',
      timeSpentMinutes: 50,
      quality: 'Jayyid Jiddan (Very Good)',
      notes: 'Slight hesitation at Surah Al-Fajr ayah 15-16. Marked with pencil for tomorrow.'
    }
  ];

  function getStoredRecords() {
    try {
      const saved = localStorage.getItem(TRACKER_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error reading localStorage:', e);
    }
    return INITIAL_RECORDS;
  }

  function saveRecords(records) {
    try {
      localStorage.setItem(TRACKER_STORAGE_KEY, JSON.stringify(records));
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  }

  function initTrackerPage() {
    const trackerForm = document.getElementById('tracker-form');
    const recordsTableBody = document.getElementById('records-tbody');
    const emptyState = document.getElementById('records-empty-state');
    const statHours = document.getElementById('stat-total-hours');
    const statSabaq = document.getElementById('stat-sabaq-count');
    const statRevisions = document.getElementById('stat-revisions-count');
    const progressPercentEl = document.getElementById('stat-progress-percent');
    const progressBarEl = document.getElementById('stat-progress-bar');
    const parasRemainingEl = document.getElementById('stat-paras-remaining');
    const calMonthTitle = document.getElementById('cal-month-title');
    const calGridDays = document.getElementById('cal-grid-days');
    const calActiveDaysCount = document.getElementById('cal-active-days-count');
    const prevMonthBtn = document.getElementById('cal-prev-btn');
    const nextMonthBtn = document.getElementById('cal-next-btn');
    const exportBtn = document.getElementById('tracker-export-btn');
    const clearBtn = document.getElementById('tracker-clear-btn');
    const clearModal = document.getElementById('clear-confirm-modal');
    const confirmClearBtn = document.getElementById('confirm-clear-action');
    const cancelClearBtn = document.getElementById('cancel-clear-action');

    // Quran Selectors
    const inputJuz = document.getElementById('input-juz');
    const inputSurah = document.getElementById('input-surah');
    const inputAyahStart = document.getElementById('input-ayah-start');
    const inputAyahEnd = document.getElementById('input-ayah-end');
    const inputAyahComposite = document.getElementById('input-ayah');
    const toggleAllSurahs = document.getElementById('toggle-all-surahs');
    const calcAyahsCount = document.getElementById('calc-ayahs-count');
    const calcPagesEst = document.getElementById('calc-pages-est');

    if (!trackerForm && !recordsTableBody) return;

    let records = getStoredRecords();
    let currentCalDate = new Date(2026, 9, 1); // October 2026 default
    let activeType = 'sabaq';

    // 1. Setup Quran Selectors if available
    if (window.QURAN_JUZ && inputJuz && inputSurah && inputAyahStart && inputAyahEnd) {
      // Populate Juz dropdown
      inputJuz.innerHTML = window.QURAN_JUZ.map(j => 
        `<option value="${j.juz}" ${j.juz === 29 ? 'selected' : ''}>Juz ${j.juz} (${j.nameTranslit} · ${j.nameArabic})</option>`
      ).join('');

      function populateSurahs() {
        const selectedJuz = parseInt(inputJuz.value, 10);
        const showAll = toggleAllSurahs && toggleAllSurahs.checked;
        const surahs = showAll ? window.QURAN_SURAHS : window.getSurahsInJuz(selectedJuz);

        inputSurah.innerHTML = surahs.map(s => 
          `<option value="${s.number}">${s.number}. ${s.name} (${s.arabic}) — ${s.ayahs} ayahs</option>`
        ).join('');

        populateAyahs();
      }

      function populateAyahs() {
        const surahNum = parseInt(inputSurah.value, 10);
        const surah = window.getSurah(surahNum);
        if (!surah) return;

        let startHtml = '';
        let endHtml = '';
        for (let i = 1; i <= surah.ayahs; i++) {
          startHtml += `<option value="${i}">Ayah ${i}</option>`;
          endHtml += `<option value="${i}" ${i === Math.min(surah.ayahs, 12) ? 'selected' : ''}>Ayah ${i}</option>`;
        }
        inputAyahStart.innerHTML = startHtml;
        inputAyahEnd.innerHTML = endHtml;

        updateAyahSummary();
      }

      function updateAyahSummary() {
        const surahNum = parseInt(inputSurah.value, 10);
        const surah = window.getSurah(surahNum);
        if (!surah) return;

        let start = parseInt(inputAyahStart.value, 10) || 1;
        let end = parseInt(inputAyahEnd.value, 10) || surah.ayahs;

        if (end < start) {
          end = start;
          inputAyahEnd.value = String(end);
        }

        const count = end - start + 1;
        const estPages = Math.max(0.1, Math.round((count / 15) * 10) / 10);

        if (calcAyahsCount) calcAyahsCount.textContent = `Total: ${count} ayah${count > 1 ? 's' : ''}`;
        if (calcPagesEst) calcPagesEst.textContent = `~${estPages} Madinah page${estPages > 1 ? 's' : ''}`;

        if (inputAyahComposite) {
          inputAyahComposite.value = `Ayahs ${start} - ${end} (${count} ayahs, ~${estPages} p.)`;
        }
      }

      inputJuz.addEventListener('change', populateSurahs);
      if (toggleAllSurahs) toggleAllSurahs.addEventListener('change', populateSurahs);
      inputSurah.addEventListener('change', populateAyahs);
      inputAyahStart.addEventListener('change', () => {
        const start = parseInt(inputAyahStart.value, 10) || 1;
        const end = parseInt(inputAyahEnd.value, 10) || 1;
        if (end < start) inputAyahEnd.value = String(start);
        updateAyahSummary();
      });
      inputAyahEnd.addEventListener('change', updateAyahSummary);

      // Initial populate
      populateSurahs();
    }

    // Segmented tab toggle
    const typeButtons = document.querySelectorAll('.type-segmented-btn');
    typeButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        typeButtons.forEach(b => b.classList.remove('active'));
        const target = e.currentTarget;
        target.classList.add('active');
        activeType = target.getAttribute('data-type') || 'sabaq';
        const typeInput = document.getElementById('input-type');
        if (typeInput) typeInput.value = activeType;
      });
    });

    // Render Records Table & Statistics
    function render() {
      // 1. Table
      if (recordsTableBody && emptyState) {
        if (records.length === 0) {
          recordsTableBody.innerHTML = '';
          emptyState.style.display = 'block';
        } else {
          emptyState.style.display = 'none';
          let html = '';
          records.forEach((r) => {
            const badgeClass = r.type === 'sabaq' ? 'badge' : r.type === 'sabqi' ? 'badge badge-sage' : 'badge';
            html += `
              <tr>
                <td style="color: var(--gold); font-weight: 600; white-space: nowrap;">${r.date}</td>
                <td><span class="${badgeClass}">${r.type}</span></td>
                <td>
                  <strong style="color: var(--ivory);">${r.surah}</strong>
                  <div style="font-size: 0.72rem; color: var(--sage);">${r.ayahRange} · Juz ${r.juz}</div>
                </td>
                <td style="font-variant-numeric: tabular-nums; color: var(--sage);">${r.timeSpentMinutes} min</td>
                <td style="font-size: 0.78rem;">${r.quality}</td>
                <td style="font-size: 0.75rem; color: var(--sage); max-width: 220px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${r.notes || '—'}</td>
                <td style="text-align: right;">
                  <button class="delete-record-btn" data-id="${r.id}" style="background: transparent; border: none; color: #ff7b72; cursor: pointer; padding: 4px;" title="Delete record">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18m-2 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                  </button>
                </td>
              </tr>
            `;
          });
          recordsTableBody.innerHTML = html;

          // Wire delete buttons
          document.querySelectorAll('.delete-record-btn').forEach((btn) => {
            btn.addEventListener('click', (e) => {
              const id = e.currentTarget.getAttribute('data-id');
              records = records.filter(item => item.id !== id);
              saveRecords(records);
              render();
            });
          });
        }
      }

      // 2. Calculations
      const totalMinutes = records.reduce((acc, r) => acc + (Number(r.timeSpentMinutes) || 0), 0);
      const totalHours = (totalMinutes / 60).toFixed(1);
      const sabaqCount = records.filter(r => r.type === 'sabaq').length;
      const revisionsCount = records.filter(r => r.type === 'sabqi' || r.type === 'manzil').length;
      const approxParas = Math.min(30, Math.max(1, Math.round(sabaqCount * 0.4 + 2)));
      const progressPercent = Math.min(100, Math.round((approxParas / 30) * 100));

      if (statHours) statHours.textContent = `${totalHours}h`;
      if (statSabaq) statSabaq.textContent = `${sabaqCount}`;
      if (statRevisions) statRevisions.textContent = `${revisionsCount}`;
      if (progressPercentEl) progressPercentEl.textContent = `${progressPercent}%`;
      if (progressBarEl) progressBarEl.style.width = `${progressPercent}%`;
      if (parasRemainingEl) parasRemainingEl.textContent = `${approxParas} Paras memorized · ${(30 - approxParas).toFixed(1)} Paras remaining`;

      // 3. Calendar
      renderCalendar();
    }

    function renderCalendar() {
      if (!calGridDays || !calMonthTitle) return;

      const year = currentCalDate.getFullYear();
      const month = currentCalDate.getMonth();
      const monthName = currentCalDate.toLocaleString('default', { month: 'long' });
      calMonthTitle.textContent = `${monthName} ${year}`;

      const firstDay = new Date(year, month, 1);
      let startingDay = firstDay.getDay() - 1; // Monday start
      if (startingDay === -1) startingDay = 6;

      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const loggedDates = new Set(records.map(r => r.date));

      let html = '';
      for (let i = 0; i < startingDay; i++) {
        html += `<div class="cal-day"></div>`;
      }

      let activeCount = 0;
      for (let day = 1; day <= daysInMonth; day++) {
        const monthStr = String(month + 1).padStart(2, '0');
        const dayStr = String(day).padStart(2, '0');
        const dateKey = `${year}-${monthStr}-${dayStr}`;
        const hasSession = loggedDates.has(dateKey);

        if (hasSession) {
          activeCount++;
          html += `<div class="cal-day has-session" title="${dateKey}: Logged Hifz Session">${day}</div>`;
        } else {
          html += `<div class="cal-day">${day}</div>`;
        }
      }

      calGridDays.innerHTML = html;
      if (calActiveDaysCount) {
        calActiveDaysCount.textContent = `${activeCount} active day${activeCount === 1 ? '' : 's'}`;
      }
    }

    if (prevMonthBtn) {
      prevMonthBtn.addEventListener('click', () => {
        currentCalDate.setMonth(currentCalDate.getMonth() - 1);
        renderCalendar();
      });
    }

    if (nextMonthBtn) {
      nextMonthBtn.addEventListener('click', () => {
        currentCalDate.setMonth(currentCalDate.getMonth() + 1);
        renderCalendar();
      });
    }

    // Form submission
    if (trackerForm) {
      trackerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const dateVal = (document.getElementById('input-date')).value;
        const typeVal = (document.getElementById('input-type')).value;
        const juzVal = (document.getElementById('input-juz')).value;
        
        let surahVal = '';
        if (inputSurah) {
          const opt = inputSurah.options[inputSurah.selectedIndex];
          surahVal = opt ? opt.text.split(' — ')[0] : inputSurah.value;
        }

        let ayahVal = (document.getElementById('input-ayah')).value;
        const timeVal = (document.getElementById('input-time')).value;
        const qualitySelect = document.getElementById('input-quality');
        const qualityVal = qualitySelect ? qualitySelect.options[qualitySelect.selectedIndex].text : 'Mumtaz';
        const notesVal = (document.getElementById('input-notes')).value;

        const newRecord = {
          id: 'rec-' + Date.now(),
          date: dateVal,
          type: typeVal,
          juz: Number(juzVal),
          surah: surahVal,
          ayahRange: ayahVal,
          timeSpentMinutes: Number(timeVal) || 30,
          quality: qualityVal,
          notes: notesVal
        };

        records.unshift(newRecord);
        saveRecords(records);
        render();

        // Optional reset notes
        const notesInput = document.getElementById('input-notes');
        if (notesInput) notesInput.value = '';
      });
    }

    // Export JSON
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(records, null, 2));
        const a = document.createElement('a');
        a.setAttribute("href", dataStr);
        a.setAttribute("download", `hifz-progress-export.json`);
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
    }

    // Clear confirmation modal
    if (clearBtn && clearModal) {
      clearBtn.addEventListener('click', () => {
        clearModal.classList.add('open');
      });

      if (cancelClearBtn) {
        cancelClearBtn.addEventListener('click', () => {
          clearModal.classList.remove('open');
        });
      }

      if (confirmClearBtn) {
        confirmClearBtn.addEventListener('click', () => {
          records = [];
          saveRecords(records);
          clearModal.classList.remove('open');
          render();
        });
      }

      clearModal.addEventListener('click', (e) => {
        if (e.target === clearModal) clearModal.classList.remove('open');
      });
    }

    // Initial render
    render();
  }

  // =========================================================================
  // 4. MY HIFZ TIMETABLE PLANNER (CALCULATIONS, EDITABLE CARDS & CANVAS PNG)
  // =========================================================================
  const PLANNER_STORAGE_KEY = 'hifz_planner_inputs';

  const DEFAULT_PLANNER_CONFIG = {
    completedParas: 2,
    currentJuz: 29,
    currentSurah: 67,
    currentAyah: 1,
    mushafType: 15,
    dailyLines: 15,
    restDay: 'Friday',
    activeDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    timeFajr: '05:30',
    durFajr: 45,
    timeAsr: '16:30',
    durAsr: 30,
    timeMaghrib: '18:45',
    durMaghrib: 20,
    timeIsha: '20:30',
    durIsha: 45
  };

  function getStoredPlannerConfig() {
    try {
      const saved = localStorage.getItem(PLANNER_STORAGE_KEY);
      if (saved) return { ...DEFAULT_PLANNER_CONFIG, ...JSON.parse(saved) };
    } catch (e) {
      console.error('Error reading planner storage:', e);
    }
    return DEFAULT_PLANNER_CONFIG;
  }

  function savePlannerConfig(cfg) {
    try {
      localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(cfg));
    } catch (e) {
      console.error('Error saving planner storage:', e);
    }
  }

  function initPlannerPage() {
    const plannerForm = document.getElementById('planner-form');
    if (!plannerForm) return;

    // Controls
    const parasSlider = document.getElementById('plan-completed-paras');
    const parasDisplay = document.getElementById('plan-paras-display');
    const juzSelect = document.getElementById('plan-current-juz');
    const surahSelect = document.getElementById('plan-current-surah');
    const ayahSelect = document.getElementById('plan-current-ayah');
    const mushafSelect = document.getElementById('plan-mushaf-type');
    const dailyLinesSelect = document.getElementById('plan-daily-lines');
    const restDaySelect = document.getElementById('plan-rest-day');
    const activeDayInputs = document.querySelectorAll('input[name="active_days"]');
    const timeFajr = document.getElementById('plan-time-fajr');
    const durFajr = document.getElementById('plan-dur-fajr');
    const timeAsr = document.getElementById('plan-time-asr');
    const durAsr = document.getElementById('plan-dur-asr');
    const timeMaghrib = document.getElementById('plan-time-maghrib');
    const durMaghrib = document.getElementById('plan-dur-maghrib');
    const timeIsha = document.getElementById('plan-time-isha');
    const durIsha = document.getElementById('plan-dur-isha');
    const recalculateBtn = document.getElementById('btn-recalculate-plan');
    const resetBtn = document.getElementById('planner-reset-btn');

    // Display elements
    const summaryPaceText = document.getElementById('summary-pace-text');
    const summaryRestText = document.getElementById('summary-rest-text');
    const statEstDate = document.getElementById('stat-est-date');
    const planProgressBar = document.getElementById('plan-progress-bar');
    const planParasStatus = document.getElementById('plan-paras-status');
    const statDaysLeft = document.getElementById('stat-days-left');
    const statDailyStudyTime = document.getElementById('stat-daily-study-time');
    const statMonthlyPages = document.getElementById('stat-monthly-pages');
    const statManzilCycle = document.getElementById('stat-manzil-cycle');
    const statActiveDaysCount = document.getElementById('stat-active-days-count');
    const weekTbody = document.getElementById('planner-week-tbody');

    // Cards display
    const cardFajrTime = document.getElementById('card-fajr-time');
    const cardFajrDur = document.getElementById('card-fajr-dur');
    const cardAsrTime = document.getElementById('card-asr-time');
    const cardAsrDur = document.getElementById('card-asr-dur');
    const cardMaghribTime = document.getElementById('card-maghrib-time');
    const cardMaghribDur = document.getElementById('card-maghrib-dur');
    const cardIshaTime = document.getElementById('card-isha-time');
    const cardIshaDur = document.getElementById('card-isha-dur');

    // Canvas & Preview modal
    const previewBtn = document.getElementById('btn-preview-timetable');
    const downloadPngBtn = document.getElementById('btn-download-timetable-png');
    const previewModal = document.getElementById('image-preview-modal');
    const previewClose = document.getElementById('modal-preview-close');
    const previewCloseAction = document.getElementById('modal-close-action');
    const previewImg = document.getElementById('modal-preview-img');
    const modalDownloadBtn = document.getElementById('modal-download-btn');
    const canvas = document.getElementById('timetable-canvas');

    let cfg = getStoredPlannerConfig();

    // 1. Populate Juz & Surahs
    if (window.QURAN_JUZ && juzSelect && surahSelect && ayahSelect) {
      juzSelect.innerHTML = window.QURAN_JUZ.map(j => 
        `<option value="${j.juz}" ${j.juz === cfg.currentJuz ? 'selected' : ''}>Juz ${j.juz} (${j.nameTranslit})</option>`
      ).join('');

      function populateSurahs() {
        const jNum = parseInt(juzSelect.value, 10);
        const surahs = window.getSurahsInJuz(jNum);
        surahSelect.innerHTML = surahs.map(s => 
          `<option value="${s.number}" ${s.number === cfg.currentSurah ? 'selected' : ''}>${s.number}. ${s.name} (${s.arabic})</option>`
        ).join('');
        populateAyahs();
      }

      function populateAyahs() {
        const sNum = parseInt(surahSelect.value, 10);
        const surah = window.getSurah(sNum);
        if (!surah) return;
        let html = '';
        for (let a = 1; a <= surah.ayahs; a++) {
          html += `<option value="${a}" ${a === cfg.currentAyah ? 'selected' : ''}>Ayah ${a}</option>`;
        }
        ayahSelect.innerHTML = html;
      }

      juzSelect.addEventListener('change', populateSurahs);
      surahSelect.addEventListener('change', populateAyahs);
      populateSurahs();
    }

    // 2. Load stored config into form
    function applyConfigToUI() {
      if (parasSlider) parasSlider.value = String(cfg.completedParas);
      if (parasDisplay) parasDisplay.textContent = `${cfg.completedParas} Para${cfg.completedParas === 1 ? '' : 's'}`;
      if (mushafSelect) mushafSelect.value = String(cfg.mushafType);
      if (dailyLinesSelect) dailyLinesSelect.value = String(cfg.dailyLines);
      if (restDaySelect) restDaySelect.value = cfg.restDay;
      if (timeFajr) timeFajr.value = cfg.timeFajr;
      if (durFajr) durFajr.value = String(cfg.durFajr);
      if (timeAsr) timeAsr.value = cfg.timeAsr;
      if (durAsr) durAsr.value = String(cfg.durAsr);
      if (timeMaghrib) timeMaghrib.value = cfg.timeMaghrib;
      if (durMaghrib) durMaghrib.value = String(cfg.durMaghrib);
      if (timeIsha) timeIsha.value = cfg.timeIsha;
      if (durIsha) durIsha.value = String(cfg.durIsha);

      activeDayInputs.forEach(cb => {
        cb.checked = cfg.activeDays.includes(cb.value);
      });
    }

    function readUIConfig() {
      const activeDays = [];
      activeDayInputs.forEach(cb => {
        if (cb.checked) activeDays.push(cb.value);
      });

      cfg = {
        completedParas: parseFloat(parasSlider.value) || 0,
        currentJuz: parseInt(juzSelect.value, 10) || 1,
        currentSurah: parseInt(surahSelect.value, 10) || 1,
        currentAyah: parseInt(ayahSelect.value, 10) || 1,
        mushafType: parseInt(mushafSelect.value, 10) || 15,
        dailyLines: parseInt(dailyLinesSelect.value, 10) || 15,
        restDay: restDaySelect.value || 'Friday',
        activeDays: activeDays.length ? activeDays : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        timeFajr: timeFajr.value,
        durFajr: parseInt(durFajr.value, 10) || 45,
        timeAsr: timeAsr.value,
        durAsr: parseInt(durAsr.value, 10) || 30,
        timeMaghrib: timeMaghrib.value,
        durMaghrib: parseInt(durMaghrib.value, 10) || 20,
        timeIsha: timeIsha.value,
        durIsha: parseInt(durIsha.value, 10) || 45
      };

      savePlannerConfig(cfg);
    }

    function formatTime12h(time24) {
      if (!time24) return '';
      const [h, m] = time24.split(':').map(Number);
      const ampm = h >= 12 ? 'PM' : 'AM';
      const h12 = h % 12 || 12;
      return `${String(h12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${ampm}`;
    }

    // 3. Calculation Engine
    function calculate() {
      readUIConfig();

      const parasRemaining = Math.max(0, 30 - cfg.completedParas);
      const totalPagesRemaining = Math.round(parasRemaining * 20); // ~20 pages per Juz in Madinah Mushaf
      const pagesPerDay = cfg.dailyLines / 15; // 15 lines = 1 page
      const activeDaysPerWeek = cfg.activeDays.length;

      // Active study days needed
      const activeDaysNeeded = Math.round(totalPagesRemaining / pagesPerDay);

      // Calendar days needed accounting for rest days
      const calendarDaysNeeded = Math.round(activeDaysNeeded * (7 / Math.max(1, activeDaysPerWeek)));

      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + calendarDaysNeeded);

      const dateOptions = { year: 'numeric', month: 'long' };
      const dateString = targetDate.toLocaleDateString('en-US', dateOptions);

      // Percent complete
      const pct = Math.min(100, Math.round((cfg.completedParas / 30) * 100 * 10) / 10);

      // Daily study time
      const dailyMinutes = cfg.durFajr + cfg.durAsr + cfg.durMaghrib + cfg.durIsha;
      const hours = Math.floor(dailyMinutes / 60);
      const mins = dailyMinutes % 60;
      const studyTimeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;

      // Monthly pace in pages
      const monthlyPacePages = Math.round((pagesPerDay * (activeDaysPerWeek * 4.33)));

      // Manzil cycle
      const manzilCycleDays = cfg.completedParas > 5 ? (cfg.completedParas <= 15 ? '7 Days' : '10 Days') : '3-5 Days';

      // Update UI elements
      if (parasDisplay) parasDisplay.textContent = `${cfg.completedParas} Para${cfg.completedParas === 1 ? '' : 's'}`;
      if (summaryPaceText) summaryPaceText.textContent = `${cfg.dailyLines} lines (${(pagesPerDay).toFixed(1)} page) daily`;
      if (summaryRestText) summaryRestText.textContent = `${cfg.restDay === 'None' ? '7 days continuous' : cfg.restDay + ' consolidation'}`;
      if (statEstDate) statEstDate.textContent = dateString;
      if (planProgressBar) planProgressBar.style.width = `${pct}%`;
      if (planParasStatus) planParasStatus.textContent = `${cfg.completedParas} / 30 Paras Memorized (${pct}%)`;
      if (statDaysLeft) statDaysLeft.textContent = `~${activeDaysNeeded} Active Days (${calendarDaysNeeded} Calendar Days)`;
      if (statDailyStudyTime) statDailyStudyTime.textContent = studyTimeStr;
      if (statMonthlyPages) statMonthlyPages.textContent = `${monthlyPacePages} Pages`;
      if (statManzilCycle) statManzilCycle.textContent = manzilCycleDays;
      if (statActiveDaysCount) statActiveDaysCount.textContent = `${activeDaysPerWeek} Days`;

      // Update timetable slot badges
      if (cardFajrTime) cardFajrTime.textContent = formatTime12h(cfg.timeFajr);
      if (cardFajrDur) cardFajrDur.textContent = `${cfg.durFajr} Minutes`;
      if (cardAsrTime) cardAsrTime.textContent = formatTime12h(cfg.timeAsr);
      if (cardAsrDur) cardAsrDur.textContent = `${cfg.durAsr} Minutes`;
      if (cardMaghribTime) cardMaghribTime.textContent = formatTime12h(cfg.timeMaghrib);
      if (cardMaghribDur) cardMaghribDur.textContent = `${cfg.durMaghrib} Minutes`;
      if (cardIshaTime) cardIshaTime.textContent = formatTime12h(cfg.timeIsha);
      if (cardIshaDur) cardIshaDur.textContent = `${cfg.durIsha} Minutes`;

      // Render 7-day table
      if (weekTbody) {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const dayCodes = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        let html = '';
        days.forEach((dayName, idx) => {
          const code = dayCodes[idx];
          const isActive = cfg.activeDays.includes(code);
          const isRest = cfg.restDay === dayName;

          if (isRest) {
            html += `
              <tr style="background-color: rgba(200, 160, 82, 0.08);">
                <td style="color: var(--gold); font-weight: 700;">${dayName} (Rest &amp; Rev.)</td>
                <td style="color: var(--sage); font-style: italic;">No New Sabaq (Rest)</td>
                <td><span class="badge badge-sage">Full Week Sabqi</span></td>
                <td><span class="badge">Weekly Manzil Check</span></td>
                <td style="color: var(--gold); font-size: 0.75rem;">Consolidation</td>
              </tr>
            `;
          } else if (isActive) {
            html += `
              <tr>
                <td style="color: var(--ivory); font-weight: 600;">${dayName}</td>
                <td><span class="badge">Sabaq: ${cfg.dailyLines} Lines</span></td>
                <td style="color: var(--sage);">Recent 1-2 Juz (${cfg.durAsr}m)</td>
                <td style="color: var(--sage);">1/7th Manzil (${cfg.durIsha}m)</td>
                <td style="color: #4ade80; font-size: 0.75rem;">High Focus</td>
              </tr>
            `;
          } else {
            html += `
              <tr style="opacity: 0.65;">
                <td style="color: var(--sage);">${dayName} (Off)</td>
                <td style="color: var(--sage);">Optional Review</td>
                <td style="color: var(--sage);">Self-Paced</td>
                <td style="color: var(--sage);">Light Tilawah</td>
                <td style="color: var(--sage); font-size: 0.75rem;">Flexible</td>
              </tr>
            `;
          }
        });
        weekTbody.innerHTML = html;
      }
    }

    // 4. Canvas Timetable PNG Generator (High-Res 1080x1920)
    function generateTimetableCanvas() {
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = 1080;
      const h = 1920;
      canvas.width = w;
      canvas.height = h;

      // Background deep emerald gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
      bgGrad.addColorStop(0, '#031C17');
      bgGrad.addColorStop(0.3, '#062D24');
      bgGrad.addColorStop(0.7, '#073B30');
      bgGrad.addColorStop(1, '#031C17');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Delicate gold geometric outer border
      ctx.strokeStyle = '#C8A052';
      ctx.lineWidth = 4;
      ctx.strokeRect(40, 40, w - 80, h - 80);

      // Fine inner border
      ctx.strokeStyle = 'rgba(200, 160, 82, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(52, 52, w - 104, h - 104);

      // Header Arch Ornament / Brand Title
      ctx.textAlign = 'center';
      ctx.fillStyle = '#C8A052';
      ctx.font = 'bold 22px system-ui, sans-serif';
      ctx.letterSpacing = '4px';
      ctx.fillText('HIFZ IN PROGRESS', w / 2, 130);

      // Title
      ctx.fillStyle = '#F3EBDD';
      ctx.font = 'bold 54px "Cinzel", Georgia, serif';
      ctx.fillText('My Daily Hifz Timetable', w / 2, 205);

      // Subtitle
      ctx.fillStyle = '#8EA393';
      ctx.font = '24px system-ui, sans-serif';
      ctx.fillText('Salah-Aligned Quran Memorization & Revision System', w / 2, 250);

      // Divider line
      ctx.strokeStyle = 'rgba(200, 160, 82, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(220, 285);
      ctx.lineTo(860, 285);
      ctx.stroke();

      // Golden diamond
      ctx.fillStyle = '#C8A052';
      ctx.beginPath();
      ctx.arc(w / 2, 285, 6, 0, Math.PI * 2);
      ctx.fill();

      // Top Stats Bar (3 columns)
      const statsY = 320;
      ctx.fillStyle = 'rgba(6, 45, 36, 0.7)';
      ctx.strokeStyle = 'rgba(200, 160, 82, 0.3)';
      ctx.lineWidth = 1.5;
      roundRect(ctx, 80, statsY, 920, 140, 16, true, true);

      // Stat 1: Completed
      ctx.fillStyle = '#8EA393';
      ctx.font = 'bold 16px system-ui, sans-serif';
      ctx.fillText('COMPLETED PROGRESS', 230, statsY + 45);
      ctx.fillStyle = '#C8A052';
      ctx.font = 'bold 38px Georgia, serif';
      ctx.fillText(`${cfg.completedParas} / 30 Paras`, 230, statsY + 95);

      // Stat 2: Pace
      ctx.fillStyle = '#8EA393';
      ctx.font = 'bold 16px system-ui, sans-serif';
      ctx.fillText('DAILY PACE TARGET', 540, statsY + 45);
      ctx.fillStyle = '#F3EBDD';
      ctx.font = 'bold 38px Georgia, serif';
      ctx.fillText(`${cfg.dailyLines} Lines / Day`, 540, statsY + 95);

      // Stat 3: Target Completion
      ctx.fillStyle = '#8EA393';
      ctx.font = 'bold 16px system-ui, sans-serif';
      ctx.fillText('EST. COMPLETION', 850, statsY + 45);
      ctx.fillStyle = '#C8A052';
      ctx.font = 'bold 34px Georgia, serif';
      const estText = statEstDate ? statEstDate.textContent : 'In Progress';
      ctx.fillText(estText, 850, statsY + 95);

      // Slots Section Header
      ctx.fillStyle = '#C8A052';
      ctx.font = 'bold 20px system-ui, sans-serif';
      ctx.fillText('DAILY SALAH-ALIGNED BLOCKS', w / 2, 515);

      // Draw 4 Timetable Block Cards
      const cardStartX = 80;
      const cardWidth = 920;
      const cardHeight = 175;
      let cardY = 545;

      const slots = [
        {
          time: formatTime12h(cfg.timeFajr),
          tag: 'SABAQ (NEW LESSON)',
          title: 'Fajr Sabaq Window',
          desc: 'Intention renewal, listen to Sheikh Al-Husary 3x, and memorize new lines before dawn noise.',
          dur: `${cfg.durFajr} Minutes`,
          badgeBg: '#C8A052',
          badgeText: '#031C17'
        },
        {
          time: formatTime12h(cfg.timeAsr),
          tag: 'SABQI (RECENT REVISION)',
          title: 'Asr Sabqi Revision',
          desc: 'Recite the last 1–2 recently completed Juz to prevent fresh verses from fading.',
          dur: `${cfg.durAsr} Minutes`,
          badgeBg: '#8EA393',
          badgeText: '#031C17'
        },
        {
          time: formatTime12h(cfg.timeMaghrib),
          tag: 'SANAD RECITATION',
          title: 'Teacher Audit & Makharij',
          desc: 'Recite today\'s portion to your Sheikh or study partner. Catch subtle slips immediately.',
          dur: `${cfg.durMaghrib} Minutes`,
          badgeBg: '#C8A052',
          badgeText: '#031C17'
        },
        {
          time: formatTime12h(cfg.timeIsha),
          tag: 'MANZIL (CUMULATIVE)',
          title: 'Isha Manzil & Preview',
          desc: 'Recite cumulative weekly Manzil from memory and preview tomorrow\'s new Sabaq 5 times.',
          dur: `${cfg.durIsha} Minutes`,
          badgeBg: 'rgba(200, 160, 82, 0.3)',
          badgeText: '#C8A052'
        }
      ];

      slots.forEach(slot => {
        ctx.fillStyle = 'rgba(6, 45, 36, 0.85)';
        ctx.strokeStyle = 'rgba(200, 160, 82, 0.35)';
        ctx.lineWidth = 1.5;
        roundRect(ctx, cardStartX, cardY, cardWidth, cardHeight, 14, true, true);

        // Time pill
        ctx.fillStyle = '#031C17';
        ctx.strokeStyle = '#C8A052';
        ctx.lineWidth = 1.5;
        roundRect(ctx, cardStartX + 24, cardY + 22, 160, 42, 8, true, true);

        ctx.textAlign = 'center';
        ctx.fillStyle = '#C8A052';
        ctx.font = 'bold 20px Georgia, serif';
        ctx.fillText(slot.time, cardStartX + 104, cardY + 50);

        // Tag badge
        ctx.fillStyle = slot.badgeBg;
        roundRect(ctx, cardStartX + 200, cardY + 25, 260, 34, 6, true, false);

        ctx.fillStyle = slot.badgeText;
        ctx.font = 'bold 13px system-ui, sans-serif';
        ctx.fillText(slot.tag, cardStartX + 330, cardY + 47);

        // Duration right aligned
        ctx.textAlign = 'right';
        ctx.fillStyle = '#F3EBDD';
        ctx.font = 'bold 18px Georgia, serif';
        ctx.fillText(slot.dur, cardStartX + cardWidth - 30, cardY + 50);

        // Slot title
        ctx.textAlign = 'left';
        ctx.fillStyle = '#F3EBDD';
        ctx.font = 'bold 24px Georgia, serif';
        ctx.fillText(slot.title, cardStartX + 26, cardY + 105);

        // Slot desc
        ctx.fillStyle = '#8EA393';
        ctx.font = '17px system-ui, sans-serif';
        ctx.fillText(slot.desc, cardStartX + 26, cardY + 142);

        cardY += cardHeight + 20;
      });

      // Weekly active schedule bar
      const weekY = 1350;
      ctx.fillStyle = 'rgba(6, 45, 36, 0.6)';
      ctx.strokeStyle = 'rgba(200, 160, 82, 0.25)';
      ctx.lineWidth = 1.5;
      roundRect(ctx, 80, weekY, 920, 110, 14, true, true);

      ctx.textAlign = 'left';
      ctx.fillStyle = '#C8A052';
      ctx.font = 'bold 16px system-ui, sans-serif';
      ctx.fillText('WEEKLY ROTATION:', 110, weekY + 45);

      ctx.fillStyle = '#F3EBDD';
      ctx.font = '16px system-ui, sans-serif';
      ctx.fillText(`${cfg.activeDays.length} Active Days · Rest & Consolidation: ${cfg.restDay}`, 110, weekY + 80);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#C8A052';
      ctx.font = 'bold 20px Georgia, serif';
      ctx.fillText(`Daily Total: ${statDailyStudyTime ? statDailyStudyTime.textContent : '2h 20m'}`, 80 + 920 - 30, weekY + 65);

      // Ayah of Reflection Card
      const ayahCardY = 1490;
      ctx.fillStyle = 'rgba(3, 28, 23, 0.9)';
      ctx.strokeStyle = '#C8A052';
      ctx.lineWidth = 1.5;
      roundRect(ctx, 80, ayahCardY, 920, 210, 16, true, true);

      ctx.textAlign = 'center';
      ctx.fillStyle = '#C8A052';
      ctx.font = 'bold 15px system-ui, sans-serif';
      ctx.fillText('AYAH OF ENCOURAGEMENT', w / 2, ayahCardY + 40);

      // Arabic Calligraphy
      ctx.fillStyle = '#F3EBDD';
      ctx.font = 'bold 36px "Traditional Arabic", Amiri, serif';
      ctx.fillText('وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ', w / 2, ayahCardY + 100);

      // English
      ctx.fillStyle = 'rgba(243, 235, 221, 0.85)';
      ctx.font = 'italic 19px Georgia, serif';
      ctx.fillText('“And We have indeed made the Qur\'an easy to remember, so is there any who will remember?”', w / 2, ayahCardY + 145);

      ctx.fillStyle = '#8EA393';
      ctx.font = 'bold 14px system-ui, sans-serif';
      ctx.fillText('SURAH AL-QAMAR (54:17)', w / 2, ayahCardY + 180);

      // Footer brand block
      ctx.textAlign = 'center';
      ctx.fillStyle = '#C8A052';
      ctx.font = 'bold 20px Georgia, serif';
      ctx.fillText('Hifz In Progress · One Ayah At A Time', w / 2, 1770);

      ctx.fillStyle = '#8EA393';
      ctx.font = '16px system-ui, sans-serif';
      ctx.fillText('Official Community: https://www.instagram.com/hifzinprogress?rpxt=dG0ybnVlNmg1OGx1', w / 2, 1810);
    }

    // Helper for rounded rectangles
    function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      if (fill) ctx.fill();
      if (stroke) ctx.stroke();
    }

    // Download PNG Action
    function triggerDownload() {
      generateTimetableCanvas();
      if (!canvas) return;
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'my-hifz-timetable.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }

    // Preview Action
    function triggerPreview() {
      generateTimetableCanvas();
      if (!canvas || !previewModal || !previewImg) return;
      previewImg.src = canvas.toDataURL('image/png');
      previewModal.classList.add('open');
    }

    if (parasSlider) {
      parasSlider.addEventListener('input', () => {
        if (parasDisplay) parasDisplay.textContent = `${parasSlider.value} Para${parasSlider.value === '1' ? '' : 's'}`;
        calculate();
      });
    }

    if (recalculateBtn) recalculateBtn.addEventListener('click', calculate);

    // Any input change triggers calculate
    dailyLinesSelect.addEventListener('change', calculate);
    restDaySelect.addEventListener('change', calculate);
    activeDayInputs.forEach(cb => cb.addEventListener('change', calculate));
    timeFajr.addEventListener('change', calculate);
    durFajr.addEventListener('change', calculate);
    timeAsr.addEventListener('change', calculate);
    durAsr.addEventListener('change', calculate);
    timeMaghrib.addEventListener('change', calculate);
    durMaghrib.addEventListener('change', calculate);
    timeIsha.addEventListener('change', calculate);
    durIsha.addEventListener('change', calculate);

    if (previewBtn) previewBtn.addEventListener('click', triggerPreview);
    if (downloadPngBtn) downloadPngBtn.addEventListener('click', triggerDownload);
    if (modalDownloadBtn) modalDownloadBtn.addEventListener('click', triggerDownload);

    if (previewClose && previewModal) {
      previewClose.addEventListener('click', () => previewModal.classList.remove('open'));
    }
    if (previewCloseAction && previewModal) {
      previewCloseAction.addEventListener('click', () => previewModal.classList.remove('open'));
    }
    if (previewModal) {
      previewModal.addEventListener('click', (e) => {
        if (e.target === previewModal) previewModal.classList.remove('open');
      });
    }

    // Reset Defaults
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset planner settings to standard defaults?')) {
          cfg = { ...DEFAULT_PLANNER_CONFIG };
          savePlannerConfig(cfg);
          applyConfigToUI();
          calculate();
        }
      });
    }

    // Initial setup
    applyConfigToUI();
    calculate();
  }

  // =========================================================================
  // 5. PRINTABLE RESOURCES & TEMPLATE DOWNLOADS
  // =========================================================================
  function initResourceActions() {
    // Printable triggers
    document.querySelectorAll('.btn-print-resource').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.print();
      });
    });

    // Text file downloads
    document.querySelectorAll('.btn-download-txt').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const title = target.getAttribute('data-title') || 'Hifz Planner';
        const content = `=================================================\n` +
          `${title.toUpperCase()}\n` +
          `Hifz In Progress — https://www.instagram.com/hifzinprogress?rpxt=dG0ybnVlNmg1OGx1\n` +
          `=================================================\n\n` +
          `DAILY CHECKLIST & ROTATION STRUCTURE:\n` +
          `[ ] Fajr Block: Tahajjud, intention renewal & 45 min new Sabaq\n` +
          `[ ] Audio Session: Listen to Sheikh Al-Husary 3x with finger tracing\n` +
          `[ ] Asr Block: 30 min Sabqi revision (last 1-2 completed Juz)\n` +
          `[ ] Maghrib Block: Teacher recitation check & Makharij audit\n` +
          `[ ] Isha Block: 30 min Manzil rotation & preview tomorrow's Sabaq\n\n` +
          `One ayah at a time. In sha Allah.\n`;

        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.txt`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });
    });
  }

  // =========================================================================
  // INITIALIZE ON DOM READY
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSearchModal();
    initTrackerPage();
    initPlannerPage();
    initResourceActions();
  });
})();
