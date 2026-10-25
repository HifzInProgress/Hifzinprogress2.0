import React, { useState, useEffect } from 'react';
import { 
  Bookmark, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Trash2, 
  Plus, 
  Download, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { TrackerRecord, TrackerType, QualityRating } from '../types';
import { INITIAL_TRACKER_RECORDS } from '../data/hifzData';

const STORAGE_KEY = 'hifz_in_progress_tracker_records';

const QUALITY_LABELS: Record<QualityRating, string> = {
  mumtaz: 'Mumtaz (Flawless)',
  jayyid_jiddan: 'Jayyid Jiddan (Very Good)',
  jayyid: 'Jayyid (Good)',
  needs_revision: 'Needs Revision'
};

export const DailyTracker: React.FC = () => {
  const [records, setRecords] = useState<TrackerRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error reading tracker from localStorage:', e);
    }
    return INITIAL_TRACKER_RECORDS;
  });

  // Form State
  const [activeTab, setActiveTab] = useState<TrackerType>('sabaq');
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [juz, setJuz] = useState<number>(29);
  const [surah, setSurah] = useState<string>('Surah Al-Mulk');
  const [ayahRange, setAyahRange] = useState<string>('Ayah 1 - 15');
  const [timeSpent, setTimeSpent] = useState<number>(45);
  const [quality, setQuality] = useState<QualityRating>('mumtaz');
  const [notes, setNotes] = useState<string>('');
  
  // Feedback & Confirmations
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Calendar month state
  const [calendarDate, setCalendarDate] = useState(new Date(2026, 9, 1)); // Default to October 2026 as in mockup or current

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    } catch (e) {
      console.error('Error saving records to localStorage:', e);
    }
  }, [records]);

  // Handle Form Submission
  const handleSaveProgress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!surah.trim()) return;

    const newEntry: TrackerRecord = {
      id: `record-${Date.now()}`,
      date: selectedDate,
      type: activeTab,
      juz,
      surah: surah.trim(),
      ayahRange: ayahRange.trim() || 'Assigned portion',
      timeSpentMinutes: Number(timeSpent) || 30,
      quality,
      notes: notes.trim(),
      createdAt: Date.now()
    };

    setRecords((prev) => [newEntry, ...prev]);
    setSaveSuccess(true);
    setNotes('');

    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  const handleDeleteRecord = (id: string) => {
    setRecords((prev) => prev.filter((r) => r.id !== id));
  };

  const handleClearAll = () => {
    setRecords([]);
    setShowClearConfirm(false);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(records, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `hifz-progress-${selectedDate}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Progress Calculations
  const totalMinutes = records.reduce((acc, r) => acc + (r.timeSpentMinutes || 0), 0);
  const totalHours = (totalMinutes / 60).toFixed(1);
  const sabaqCount = records.filter((r) => r.type === 'sabaq').length;
  const sabqiCount = records.filter((r) => r.type === 'sabqi').length;
  const manzilCount = records.filter((r) => r.type === 'manzil').length;

  // Estimated Progress (Sample representation: e.g. 2.5 paras memorized = ~8%)
  const approximateParas = Math.min(30, Math.max(1, Math.round(sabaqCount * 0.4 + 2)));
  const progressPercent = Math.min(100, Math.round((approximateParas / 30) * 100));

  // Calendar Helpers for Mini Widget
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const monthName = calendarDate.toLocaleString('default', { month: 'long' });

  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sun
  // Convert Sunday=0 to Monday=0
  const adjustedFirstDay = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Dates with records this month
  const loggedDaysInMonth = new Set(
    records
      .filter((r) => {
        const d = new Date(r.date);
        return d.getFullYear() === year && d.getMonth() === month;
      })
      .map((r) => new Date(r.date).getDate())
  );

  return (
    <section id="tracker" className="py-20 bg-[#062D24] text-[#F3EBDD] border-b border-gold-subtle relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#031C17]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A052] uppercase">
            <span className="w-4 h-0.5 bg-[#C8A052]/60" />
            <span>Track Your Progress</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F3EBDD] mt-2">
            Daily Hifz Tracker
          </h2>

          <p className="text-base sm:text-lg text-[#F3EBDD]/80 font-light mt-3">
            Keep track of your sabaq, sabqi and manzil. Small steps, big progress.
          </p>
        </div>

        {/* Main Tracker Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Log Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#031C17] border border-gold-subtle rounded-3xl p-6 sm:p-8 shadow-xl">
            
            {/* Type Tabs: Sabaq, Sabqi, Manzil */}
            <div className="flex items-center gap-2 p-1.5 bg-[#062D24] rounded-2xl border border-gold-subtle/50 mb-6">
              {(['sabaq', 'sabqi', 'manzil'] as TrackerType[]).map((tab) => {
                const isActive = activeTab === tab;
                const tabTitles: Record<TrackerType, string> = {
                  sabaq: 'Sabaq (New Lesson)',
                  sabqi: 'Sabqi (Recent Rev.)',
                  manzil: 'Manzil (Old Rev.)'
                };
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center capitalize ${
                      isActive
                        ? 'bg-[#C8A052] text-[#031C17] shadow-md'
                        : 'text-[#F3EBDD]/70 hover:text-[#F3EBDD]'
                    }`}
                  >
                    {tabTitles[tab]}
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <form onSubmit={handleSaveProgress} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#8EA393] mb-1.5">
                    Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    className="w-full bg-[#062D24] border border-gold-subtle/70 rounded-xl px-4 py-2.5 text-sm text-[#F3EBDD] focus:outline-none focus:border-[#C8A052] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#8EA393] mb-1.5">
                    Juz Number (1 - 30)
                  </label>
                  <select
                    value={juz}
                    onChange={(e) => setJuz(Number(e.target.value))}
                    className="w-full bg-[#062D24] border border-gold-subtle/70 rounded-xl px-4 py-2.5 text-sm text-[#F3EBDD] focus:outline-none focus:border-[#C8A052] transition-colors"
                  >
                    {Array.from({ length: 30 }, (_, i) => 30 - i).map((j) => (
                      <option key={j} value={j} className="bg-[#031C17]">
                        Juz {j} {j === 30 ? '(Amma)' : j === 29 ? '(Tabarak)' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#8EA393] mb-1.5">
                    Surah / Passage
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Surah Al-Mulk"
                    value={surah}
                    onChange={(e) => setSurah(e.target.value)}
                    required
                    className="w-full bg-[#062D24] border border-gold-subtle/70 rounded-xl px-4 py-2.5 text-sm text-[#F3EBDD] placeholder-[#8EA393]/50 focus:outline-none focus:border-[#C8A052] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#8EA393] mb-1.5">
                    Ayah Range or Pages
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ayah 1 - 15 or 1 Page"
                    value={ayahRange}
                    onChange={(e) => setAyahRange(e.target.value)}
                    className="w-full bg-[#062D24] border border-gold-subtle/70 rounded-xl px-4 py-2.5 text-sm text-[#F3EBDD] placeholder-[#8EA393]/50 focus:outline-none focus:border-[#C8A052] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#8EA393] mb-1.5">
                    Time Spent (Minutes)
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="360"
                    step="5"
                    value={timeSpent}
                    onChange={(e) => setTimeSpent(Number(e.target.value))}
                    className="w-full bg-[#062D24] border border-gold-subtle/70 rounded-xl px-4 py-2.5 text-sm text-[#F3EBDD] focus:outline-none focus:border-[#C8A052] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#8EA393] mb-1.5">
                    Recitation Quality Rating
                  </label>
                  <select
                    value={quality}
                    onChange={(e) => setQuality(e.target.value as QualityRating)}
                    className="w-full bg-[#062D24] border border-gold-subtle/70 rounded-xl px-4 py-2.5 text-sm text-[#F3EBDD] focus:outline-none focus:border-[#C8A052] transition-colors"
                  >
                    <option value="mumtaz" className="bg-[#031C17]">Mumtaz (Flawless)</option>
                    <option value="jayyid_jiddan" className="bg-[#031C17]">Jayyid Jiddan (Very Good)</option>
                    <option value="jayyid" className="bg-[#031C17]">Jayyid (Good)</option>
                    <option value="needs_revision" className="bg-[#031C17]">Needs Revision</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#8EA393] mb-1.5">
                  Teacher Notes &amp; Reflections (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Notes from teacher or ayat to review..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#062D24] border border-gold-subtle/70 rounded-xl px-4 py-2.5 text-sm text-[#F3EBDD] placeholder-[#8EA393]/50 focus:outline-none focus:border-[#C8A052] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#031C17] bg-[#C8A052] hover:bg-[#D8B062] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A052]"
                >
                  {saveSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-[#031C17]" />
                      <span>Progress Recorded!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-[#031C17]" />
                      <span>Save Progress</span>
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* Privacy Guarantee Note */}
            <div className="mt-6 pt-4 border-t border-gold-subtle/30 flex items-center gap-2 text-[11px] text-[#8EA393]">
              <ShieldCheck className="w-4 h-4 text-[#C8A052] shrink-0" />
              <span>All progress is saved privately on your device via localStorage. No sign-up or servers.</span>
            </div>

          </div>

          {/* Right Column: Mini Calendar & Live Progress Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive Mini Calendar Widget matching reference */}
            <div className="bg-[#031C17] border border-gold-subtle rounded-3xl p-6 shadow-xl">
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-lg font-bold text-[#F3EBDD]">
                  {monthName} {year}
                </h3>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCalendarDate(new Date(year, month - 1, 1))}
                    className="p-1 rounded-lg text-[#F3EBDD]/70 hover:text-[#C8A052] hover:bg-[#062D24] transition-colors"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCalendarDate(new Date(year, month + 1, 1))}
                    className="p-1 rounded-lg text-[#F3EBDD]/70 hover:text-[#C8A052] hover:bg-[#062D24] transition-colors"
                    aria-label="Next month"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-[#8EA393] mb-2 uppercase tracking-wider">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>

              {/* Day Cells */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {/* Empty cells before month start */}
                {Array.from({ length: adjustedFirstDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-8" />
                ))}

                {/* Days of Month */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const dayNum = i + 1;
                  const hasRecord = loggedDaysInMonth.has(dayNum);
                  const isToday = 
                    new Date().getDate() === dayNum && 
                    new Date().getMonth() === month && 
                    new Date().getFullYear() === year;

                  return (
                    <div
                      key={`day-${dayNum}`}
                      className={`h-8 rounded-lg flex items-center justify-center font-medium transition-colors ${
                        hasRecord
                          ? 'bg-[#C8A052] text-[#031C17] font-bold shadow-sm'
                          : isToday
                          ? 'border border-[#C8A052] text-[#C8A052]'
                          : 'text-[#F3EBDD]/70 hover:bg-[#062D24]'
                      }`}
                      title={hasRecord ? `Hifz session logged on ${monthName} ${dayNum}` : ''}
                    >
                      {dayNum}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-gold-subtle/30 flex items-center justify-between text-[11px] text-[#8EA393]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C8A052]" />
                  <span>Logged Session</span>
                </div>
                <span>{loggedDaysInMonth.size} active days this month</span>
              </div>

            </div>

            {/* Overall Progress Bar Card matching mockup */}
            <div className="bg-[#031C17] border border-gold-subtle rounded-3xl p-6 shadow-xl space-y-4">
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#8EA393] uppercase tracking-wider font-semibold">
                    Overall Milestone
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#F3EBDD]">
                    Your Progress
                  </h4>
                </div>
                <div className="font-serif text-2xl font-bold text-[#C8A052] tabular-nums">
                  {progressPercent}%
                </div>
              </div>

              {/* Progress Track */}
              <div className="w-full h-3 rounded-full bg-[#062D24] overflow-hidden p-0.5 border border-gold-subtle/40">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-[#8EA393] to-[#C8A052] transition-all duration-700"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#8EA393]">
                <span>{approximateParas} Paras memorized</span>
                <span>{(30 - approximateParas).toFixed(1)} Paras remaining</span>
              </div>

              {/* Quick Summary Grid */}
              <div className="pt-3 border-t border-gold-subtle/30 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-[#062D24]/70">
                  <div className="font-bold text-[#F3EBDD] text-sm tabular-nums">{sabaqCount}</div>
                  <div className="text-[10px] text-[#8EA393] uppercase">Sabaq</div>
                </div>
                <div className="p-2 rounded-xl bg-[#062D24]/70">
                  <div className="font-bold text-[#F3EBDD] text-sm tabular-nums">{sabqiCount + manzilCount}</div>
                  <div className="text-[10px] text-[#8EA393] uppercase">Revisions</div>
                </div>
                <div className="p-2 rounded-xl bg-[#062D24]/70">
                  <div className="font-bold text-[#F3EBDD] text-sm tabular-nums">{totalHours}h</div>
                  <div className="text-[10px] text-[#8EA393] uppercase">Total Time</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Saved Records Table & Data Controls */}
        <div className="mt-12 bg-[#031C17] border border-gold-subtle rounded-3xl p-6 sm:p-8 shadow-xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#F3EBDD]">
                Logged Hifz Sessions ({records.length})
              </h3>
              <p className="text-xs text-[#8EA393] mt-0.5">
                Review your recent memorization and revision history.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleExportJSON}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-gold-subtle hover:border-[#C8A052] text-xs font-medium text-[#F3EBDD] transition-colors"
                title="Export as JSON backup file"
              >
                <Download className="w-3.5 h-3.5 text-[#C8A052]" />
                <span>Export Data</span>
              </button>

              <button
                onClick={() => setShowClearConfirm(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-red-500/30 hover:border-red-500/70 text-xs font-medium text-red-300 transition-colors"
                title="Clear all stored logs"
              >
                <RotateCcw className="w-3.5 h-3.5 text-red-400" />
                <span>Clear Records</span>
              </button>
            </div>
          </div>

          {/* Records List */}
          {records.length === 0 ? (
            <div className="py-12 text-center bg-[#062D24]/40 rounded-2xl border border-gold-subtle/50">
              <p className="text-sm text-[#8EA393]">No memorization sessions logged yet. Record today&apos;s Sabaq above!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-gold-subtle/40 text-[#8EA393] uppercase text-[11px] tracking-wider">
                    <th className="py-3 px-3">Date</th>
                    <th className="py-3 px-3">Type</th>
                    <th className="py-3 px-3">Portion / Surah</th>
                    <th className="py-3 px-3">Duration</th>
                    <th className="py-3 px-3">Recitation Quality</th>
                    <th className="py-3 px-3">Notes</th>
                    <th className="py-3 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold-subtle/20 text-[#F3EBDD]/90">
                  {records.map((r) => (
                    <tr key={r.id} className="hover:bg-[#062D24]/50 transition-colors">
                      <td className="py-3 px-3 whitespace-nowrap font-medium text-[#C8A052]">
                        {r.date}
                      </td>
                      <td className="py-3 px-3 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          r.type === 'sabaq'
                            ? 'bg-[#C8A052]/20 text-[#C8A052] border border-[#C8A052]/40'
                            : r.type === 'sabqi'
                            ? 'bg-[#8EA393]/20 text-[#8EA393] border border-[#8EA393]/40'
                            : 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/40'
                        }`}>
                          {r.type}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-semibold text-[#F3EBDD]">{r.surah}</div>
                        <div className="text-[11px] text-[#8EA393]">{r.ayahRange} · Juz {r.juz}</div>
                      </td>
                      <td className="py-3 px-3 whitespace-nowrap text-[#8EA393] tabular-nums">
                        {r.timeSpentMinutes} mins
                      </td>
                      <td className="py-3 px-3 whitespace-nowrap">
                        <span className="text-xs text-[#F3EBDD]/90">
                          {QUALITY_LABELS[r.quality] || r.quality}
                        </span>
                      </td>
                      <td className="py-3 px-3 max-w-[200px] truncate text-xs text-[#8EA393] font-light">
                        {r.notes || '—'}
                      </td>
                      <td className="py-3 px-3 text-right whitespace-nowrap">
                        <button
                          onClick={() => handleDeleteRecord(r.id)}
                          className="p-1.5 rounded-lg text-red-400/80 hover:text-red-300 hover:bg-red-950/40 transition-colors"
                          aria-label="Delete entry"
                          title="Delete record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>

      </div>

      {/* Clear Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#031C17] border border-gold-subtle rounded-3xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#F3EBDD]">
              Clear Tracker Records?
            </h4>
            <p className="text-xs sm:text-sm text-[#8EA393] leading-relaxed">
              This will remove all saved Hifz sessions from your browser&apos;s localStorage. This action cannot be undone. You may export a JSON backup first.
            </p>
            <div className="flex items-center justify-center gap-3 pt-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-5 py-2.5 rounded-full border border-gold-subtle text-xs font-semibold text-[#F3EBDD] hover:bg-[#062D24] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleClearAll}
                className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-xs font-semibold text-white transition-colors shadow-md"
              >
                Yes, Clear All
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
