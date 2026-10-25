/**
 * Quran Metadata: Authentic canonical 114 Surahs and 30 Juz boundaries
 * For Hifz In Progress Tracker and Hifz Timetable Planner
 */

const QURAN_SURAHS = [
  { number: 1, name: "Al-Fatihah", arabic: "الفاتحة", english: "The Opening", ayahs: 7 },
  { number: 2, name: "Al-Baqarah", arabic: "البقرة", english: "The Cow", ayahs: 286 },
  { number: 3, name: "Ali 'Imran", arabic: "آل عمران", english: "Family of Imran", ayahs: 200 },
  { number: 4, name: "An-Nisa", arabic: "النساء", english: "The Women", ayahs: 176 },
  { number: 5, name: "Al-Ma'idah", arabic: "المائدة", english: "The Table Spread", ayahs: 120 },
  { number: 6, name: "Al-An'am", arabic: "الأنعام", english: "The Cattle", ayahs: 165 },
  { number: 7, name: "Al-A'raf", arabic: "الأعراف", english: "The Heights", ayahs: 206 },
  { number: 8, name: "Al-Anfal", arabic: "الأنفال", english: "The Spoils of War", ayahs: 75 },
  { number: 9, name: "At-Tawbah", arabic: "التوبة", english: "The Repentance", ayahs: 129 },
  { number: 10, name: "Yunus", arabic: "يونس", english: "Jonah", ayahs: 109 },
  { number: 11, name: "Hud", arabic: "هود", english: "Hud", ayahs: 123 },
  { number: 12, name: "Yusuf", arabic: "يوسف", english: "Joseph", ayahs: 111 },
  { number: 13, name: "Ar-Ra'd", arabic: "الرعد", english: "The Thunder", ayahs: 43 },
  { number: 14, name: "Ibrahim", arabic: "إبراهيم", english: "Abraham", ayahs: 52 },
  { number: 15, name: "Al-Hijr", arabic: "الحجر", english: "The Rocky Tract", ayahs: 99 },
  { number: 16, name: "An-Nahl", arabic: "النحل", english: "The Bee", ayahs: 128 },
  { number: 17, name: "Al-Isra", arabic: "الإسراء", english: "The Night Journey", ayahs: 111 },
  { number: 18, name: "Al-Kahf", arabic: "الكهف", english: "The Cave", ayahs: 110 },
  { number: 19, name: "Maryam", arabic: "مريم", english: "Mary", ayahs: 98 },
  { number: 20, name: "Taha", arabic: "طه", english: "Ta-Ha", ayahs: 135 },
  { number: 21, name: "Al-Anbiya", arabic: "الأنبياء", english: "The Prophets", ayahs: 112 },
  { number: 22, name: "Al-Hajj", arabic: "الحج", english: "The Pilgrimage", ayahs: 78 },
  { number: 23, name: "Al-Mu'minun", arabic: "المؤمنون", english: "The Believers", ayahs: 118 },
  { number: 24, name: "An-Nur", arabic: "النور", english: "The Light", ayahs: 64 },
  { number: 25, name: "Al-Furqan", arabic: "الفرقان", english: "The Criterion", ayahs: 77 },
  { number: 26, name: "Ash-Shu'ara", arabic: "الشعراء", english: "The Poets", ayahs: 227 },
  { number: 27, name: "An-Naml", arabic: "النمل", english: "The Ant", ayahs: 93 },
  { number: 28, name: "Al-Qasas", arabic: "القصص", english: "The Stories", ayahs: 88 },
  { number: 29, name: "Al-'Ankabut", arabic: "العنكبوت", english: "The Spider", ayahs: 69 },
  { number: 30, name: "Ar-Rum", arabic: "الروم", english: "The Romans", ayahs: 60 },
  { number: 31, name: "Luqman", arabic: "لقمان", english: "Luqman", ayahs: 34 },
  { number: 32, name: "As-Sajdah", arabic: "السجدة", english: "The Prostration", ayahs: 30 },
  { number: 33, name: "Al-Ahzab", arabic: "الأحزاب", english: "The Combined Forces", ayahs: 73 },
  { number: 34, name: "Saba", arabic: "سبأ", english: "Sheba", ayahs: 54 },
  { number: 35, name: "Fatir", arabic: "فاطر", english: "The Originator", ayahs: 45 },
  { number: 36, name: "Ya-Sin", arabic: "يس", english: "Ya-Sin", ayahs: 83 },
  { number: 37, name: "As-Saffat", arabic: "الصافات", english: "Those who set the Ranks", ayahs: 182 },
  { number: 38, name: "Sad", arabic: "ص", english: "The letter Sad", ayahs: 88 },
  { number: 39, name: "Az-Zumar", arabic: "الزمر", english: "The Troops", ayahs: 75 },
  { number: 40, name: "Ghafir", arabic: "غافر", english: "The Forgiver", ayahs: 85 },
  { number: 41, name: "Fussilat", arabic: "فصلت", english: "Explained in Detail", ayahs: 54 },
  { number: 42, name: "Ash-Shura", arabic: "الشورى", english: "The Consultation", ayahs: 53 },
  { number: 43, name: "Az-Zukhruf", arabic: "الزخرف", english: "The Ornaments of Gold", ayahs: 89 },
  { number: 44, name: "Ad-Dukhan", arabic: "الدخان", english: "The Smoke", ayahs: 59 },
  { number: 45, name: "Al-Jathiyah", arabic: "الجاثية", english: "The Crouching", ayahs: 37 },
  { number: 46, name: "Al-Ahqaf", arabic: "الأحقاف", english: "The Wind-curved Sandhills", ayahs: 35 },
  { number: 47, name: "Muhammad", arabic: "محمد", english: "Muhammad", ayahs: 38 },
  { number: 48, name: "Al-Fath", arabic: "الفتح", english: "The Victory", ayahs: 29 },
  { number: 49, name: "Al-Hujurat", arabic: "الحجرات", english: "The Rooms", ayahs: 18 },
  { number: 50, name: "Qaf", arabic: "ق", english: "The letter Qaf", ayahs: 45 },
  { number: 51, name: "Adh-Dhariyat", arabic: "الذاريات", english: "The Winnowing Winds", ayahs: 60 },
  { number: 52, name: "At-Tur", arabic: "الطور", english: "The Mount", ayahs: 49 },
  { number: 53, name: "An-Najm", arabic: "النجم", english: "The Star", ayahs: 62 },
  { number: 54, name: "Al-Qamar", arabic: "القمر", english: "The Moon", ayahs: 55 },
  { number: 55, name: "Ar-Rahman", arabic: "الرحمن", english: "The Beneficent", ayahs: 78 },
  { number: 56, name: "Al-Waqi'ah", arabic: "الواقعة", english: "The Inevitable", ayahs: 96 },
  { number: 57, name: "Al-Hadid", arabic: "الحديد", english: "The Iron", ayahs: 29 },
  { number: 58, name: "Al-Mujadila", arabic: "المجادلة", english: "The Pleading Woman", ayahs: 22 },
  { number: 59, name: "Al-Hashr", arabic: "الحشر", english: "The Exile", ayahs: 24 },
  { number: 60, name: "Al-Mumtahanah", arabic: "الممتحنة", english: "She that is to be examined", ayahs: 13 },
  { number: 61, name: "As-Saff", arabic: "الصف", english: "The Ranks", ayahs: 14 },
  { number: 62, name: "Al-Jumu'ah", arabic: "الجمعة", english: "Friday", ayahs: 11 },
  { number: 63, name: "Al-Munafiqun", arabic: "المنافقون", english: "The Hypocrites", ayahs: 11 },
  { number: 64, name: "At-Taghabun", arabic: "التغابن", english: "Mutual Disillusion", ayahs: 18 },
  { number: 65, name: "At-Talaq", arabic: "الطلاق", english: "Divorce", ayahs: 12 },
  { number: 66, name: "At-Tahrim", arabic: "التحريم", english: "The Prohibition", ayahs: 12 },
  { number: 67, name: "Al-Mulk", arabic: "الملك", english: "The Sovereignty", ayahs: 30 },
  { number: 68, name: "Al-Qalam", arabic: "القلم", english: "The Pen", ayahs: 52 },
  { number: 69, name: "Al-Haqqah", arabic: "الحاقة", english: "The Inevitable Reality", ayahs: 52 },
  { number: 70, name: "Al-Ma'arij", arabic: "المعارج", english: "The Ascending Stairways", ayahs: 44 },
  { number: 71, name: "Nuh", arabic: "نوح", english: "Noah", ayahs: 28 },
  { number: 72, name: "Al-Jinn", arabic: "الجن", english: "The Jinn", ayahs: 28 },
  { number: 73, name: "Al-Muzzammil", arabic: "المزمل", english: "The Enshrouded One", ayahs: 20 },
  { number: 74, name: "Al-Muddaththir", arabic: "المدثر", english: "The Cloaked One", ayahs: 56 },
  { number: 75, name: "Al-Qiyamah", arabic: "القيامة", english: "The Resurrection", ayahs: 40 },
  { number: 76, name: "Al-Insan", arabic: "الإنسان", english: "Man", ayahs: 31 },
  { number: 77, name: "Al-Mursalat", arabic: "المرسلات", english: "The Emissaries", ayahs: 50 },
  { number: 78, name: "An-Naba", arabic: "النبأ", english: "The Tidings", ayahs: 40 },
  { number: 79, name: "An-Nazi'at", arabic: "النازعات", english: "Those who drag forth", ayahs: 46 },
  { number: 80, name: "'Abasa", arabic: "عبس", english: "He Frowned", ayahs: 42 },
  { number: 81, name: "At-Takwir", arabic: "التكوير", english: "The Overthrowing", ayahs: 29 },
  { number: 82, name: "Al-Infitar", arabic: "الانفطار", english: "The Cleaving", ayahs: 19 },
  { number: 83, name: "Al-Mutaffifin", arabic: "المطففين", english: "Defrauding", ayahs: 36 },
  { number: 84, name: "Al-Inshiqaq", arabic: "الانشقاق", english: "The Splitting Asunder", ayahs: 25 },
  { number: 85, name: "Al-Buruj", arabic: "البروج", english: "The Mansions of the Stars", ayahs: 22 },
  { number: 86, name: "At-Tariq", arabic: "الطارق", english: "The Nightcomer", ayahs: 17 },
  { number: 87, name: "Al-A'la", arabic: "الأعلى", english: "The Most High", ayahs: 19 },
  { number: 88, name: "Al-Ghashiyah", arabic: "الغاشية", english: "The Overwhelming", ayahs: 26 },
  { number: 89, name: "Al-Fajr", arabic: "الفجر", english: "The Dawn", ayahs: 30 },
  { number: 90, name: "Al-Balad", arabic: "البلد", english: "The City", ayahs: 20 },
  { number: 91, name: "Ash-Shams", arabic: "الشمس", english: "The Sun", ayahs: 15 },
  { number: 92, name: "Al-Layl", arabic: "الليل", english: "The Night", ayahs: 21 },
  { number: 93, name: "Ad-Duhaa", arabic: "الضحى", english: "The Morning Hours", ayahs: 11 },
  { number: 94, name: "Ash-Sharh", arabic: "الشرح", english: "The Relief", ayahs: 8 },
  { number: 95, name: "At-Tin", arabic: "التين", english: "The Fig", ayahs: 8 },
  { number: 96, name: "Al-'Alaq", arabic: "العلق", english: "The Clot", ayahs: 19 },
  { number: 97, name: "Al-Qadr", arabic: "القدر", english: "The Power", ayahs: 5 },
  { number: 98, name: "Al-Bayyinah", arabic: "البينة", english: "The Clear Proof", ayahs: 8 },
  { number: 99, name: "Az-Zalzalah", arabic: "الزلزلة", english: "The Earthquake", ayahs: 8 },
  { number: 100, name: "Al-'Adiyat", arabic: "العاديات", english: "The Courser", ayahs: 11 },
  { number: 101, name: "Al-Qari'ah", arabic: "القارعة", english: "The Calamity", ayahs: 11 },
  { number: 102, name: "At-Takathur", arabic: "التكاثر", english: "The Rivalry in World Increase", ayahs: 8 },
  { number: 103, name: "Al-'Asr", arabic: "العصر", english: "The Declining Day", ayahs: 3 },
  { number: 104, name: "Al-Humazah", arabic: "الهمزة", english: "The Traducer", ayahs: 9 },
  { number: 105, name: "Al-Fil", arabic: "الفيل", english: "The Elephant", ayahs: 5 },
  { number: 106, name: "Quraysh", arabic: "قريش", english: "Quraysh", ayahs: 4 },
  { number: 107, name: "Al-Ma'un", arabic: "الماعون", english: "Small kindnesses", ayahs: 7 },
  { number: 108, name: "Al-Kawthar", arabic: "الكوثر", english: "Abundance", ayahs: 3 },
  { number: 109, name: "Al-Kafirun", arabic: "الكافرون", english: "The Disbelievers", ayahs: 6 },
  { number: 110, name: "An-Nasr", arabic: "النصر", english: "Divine Support", ayahs: 3 },
  { number: 111, name: "Al-Masad", arabic: "المسد", english: "The Palm Fibre", ayahs: 5 },
  { number: 112, name: "Al-Ikhlas", arabic: "الإخلاص", english: "Sincerity", ayahs: 4 },
  { number: 113, name: "Al-Falaq", arabic: "الفلق", english: "The Daybreak", ayahs: 5 },
  { number: 114, name: "An-Nas", arabic: "الناس", english: "Mankind", ayahs: 6 }
];

const QURAN_JUZ = [
  { juz: 1, nameTranslit: "Alif-Lam-Meem", nameArabic: "الم", start: { surah: 1, ayah: 1 }, end: { surah: 2, ayah: 141 } },
  { juz: 2, nameTranslit: "Sayaqool", nameArabic: "سيقول", start: { surah: 2, ayah: 142 }, end: { surah: 2, ayah: 252 } },
  { juz: 3, nameTranslit: "Tilka ar-Rusul", nameArabic: "تلك الرسل", start: { surah: 2, ayah: 253 }, end: { surah: 3, ayah: 92 } },
  { juz: 4, nameTranslit: "Lan Tanaloo", nameArabic: "لن تنالوا", start: { surah: 3, ayah: 93 }, end: { surah: 4, ayah: 23 } },
  { juz: 5, nameTranslit: "Wal-Muhsanat", nameArabic: "والمحصنات", start: { surah: 4, ayah: 24 }, end: { surah: 4, ayah: 147 } },
  { juz: 6, nameTranslit: "La Yuhibbullah", nameArabic: "لا يحب الله", start: { surah: 4, ayah: 148 }, end: { surah: 5, ayah: 81 } },
  { juz: 7, nameTranslit: "Wa Iza Sami'oo", nameArabic: "وإذا سمعوا", start: { surah: 5, ayah: 82 }, end: { surah: 6, ayah: 110 } },
  { juz: 8, nameTranslit: "Wa Lau Annana", nameArabic: "ولو أننا", start: { surah: 6, ayah: 111 }, end: { surah: 7, ayah: 87 } },
  { juz: 9, nameTranslit: "Qal al-Mala'o", nameArabic: "قال الملأ", start: { surah: 7, ayah: 88 }, end: { surah: 8, ayah: 40 } },
  { juz: 10, nameTranslit: "Wa'lamoo", nameArabic: "واعلموا", start: { surah: 8, ayah: 41 }, end: { surah: 9, ayah: 92 } },
  { juz: 11, nameTranslit: "Ya'taziroon", nameArabic: "يعتذرون", start: { surah: 9, ayah: 93 }, end: { surah: 11, ayah: 5 } },
  { juz: 12, nameTranslit: "Wa Ma Min Daabbah", nameArabic: "وما من دابة", start: { surah: 11, ayah: 6 }, end: { surah: 12, ayah: 52 } },
  { juz: 13, nameTranslit: "Wa Ma Ubarri'u", nameArabic: "وما أبرئ", start: { surah: 12, ayah: 53 }, end: { surah: 14, ayah: 52 } },
  { juz: 14, nameTranslit: "Rubama", nameArabic: "ربما", start: { surah: 15, ayah: 1 }, end: { surah: 16, ayah: 128 } },
  { juz: 15, nameTranslit: "Subhan alladhi", nameArabic: "سبحان الذي", start: { surah: 17, ayah: 1 }, end: { surah: 18, ayah: 74 } },
  { juz: 16, nameTranslit: "Qala Alam", nameArabic: "قال ألم", start: { surah: 18, ayah: 75 }, end: { surah: 20, ayah: 135 } },
  { juz: 17, nameTranslit: "Iqtaraba", nameArabic: "اقترب للناس", start: { surah: 21, ayah: 1 }, end: { surah: 22, ayah: 78 } },
  { juz: 18, nameTranslit: "Qad Aflaha", nameArabic: "قد أفلح", start: { surah: 23, ayah: 1 }, end: { surah: 25, ayah: 20 } },
  { juz: 19, nameTranslit: "Wa Qal alladhina", nameArabic: "وقال الذين", start: { surah: 25, ayah: 21 }, end: { surah: 27, ayah: 55 } },
  { juz: 20, nameTranslit: "A'man Khalaqa", nameArabic: "أمّن خلق", start: { surah: 27, ayah: 56 }, end: { surah: 29, ayah: 45 } },
  { juz: 21, nameTranslit: "Utlu Ma Oohiya", nameArabic: "اتل ما أوحي", start: { surah: 29, ayah: 46 }, end: { surah: 33, ayah: 30 } },
  { juz: 22, nameTranslit: "Wa May-Yaqnut", nameArabic: "ومن يقنت", start: { surah: 33, ayah: 31 }, end: { surah: 36, ayah: 27 } },
  { juz: 23, nameTranslit: "Wa Maliya", nameArabic: "وما لي", start: { surah: 36, ayah: 28 }, end: { surah: 39, ayah: 31 } },
  { juz: 24, nameTranslit: "Fa-man Azlamu", nameArabic: "فمن أظلم", start: { surah: 39, ayah: 32 }, end: { surah: 41, ayah: 46 } },
  { juz: 25, nameTranslit: "Ilayhi Yuraddu", nameArabic: "إليه يرد", start: { surah: 41, ayah: 47 }, end: { surah: 45, ayah: 37 } },
  { juz: 26, nameTranslit: "Ha-Meem", nameArabic: "حم", start: { surah: 46, ayah: 1 }, end: { surah: 51, ayah: 30 } },
  { juz: 27, nameTranslit: "Qala Fama Khatbukum", nameArabic: "قال فما خطبكم", start: { surah: 51, ayah: 31 }, end: { surah: 57, ayah: 29 } },
  { juz: 28, nameTranslit: "Qad Sami'allah", nameArabic: "قد سمع الله", start: { surah: 58, ayah: 1 }, end: { surah: 66, ayah: 12 } },
  { juz: 29, nameTranslit: "Tabarakalladhi", nameArabic: "تبارك الذي", start: { surah: 67, ayah: 1 }, end: { surah: 77, ayah: 50 } },
  { juz: 30, nameTranslit: "'Amma Yatasa'aloon", nameArabic: "عمّ يتساءلون", start: { surah: 78, ayah: 1 }, end: { surah: 114, ayah: 6 } }
];

// Helper functions for Quran metadata
function getSurah(num) {
  const n = parseInt(num, 10);
  return QURAN_SURAHS.find(s => s.number === n) || null;
}

function getJuz(num) {
  const n = parseInt(num, 10);
  return QURAN_JUZ.find(j => j.juz === n) || null;
}

/**
 * Returns all surahs that are at least partially in the specified Juz
 */
function getSurahsInJuz(juzNum) {
  const j = getJuz(juzNum);
  if (!j) return [...QURAN_SURAHS];
  return QURAN_SURAHS.filter(s => s.number >= j.start.surah && s.number <= j.end.surah);
}

/**
 * Returns the valid ayah range for a given surah within a specific Juz
 */
function getAyahRangeForJuz(juzNum, surahNum) {
  const j = getJuz(juzNum);
  const s = getSurah(surahNum);
  if (!s) return { min: 1, max: 1 };
  if (!j) return { min: 1, max: s.ayahs };

  let min = 1;
  let max = s.ayahs;

  if (s.number === j.start.surah) {
    min = j.start.ayah;
  }
  if (s.number === j.end.surah) {
    max = j.end.ayah;
  }
  return { min, max };
}

/**
 * Compares two Quran positions: returns negative if a < b, 0 if equal, positive if a > b
 */
function comparePositions(aSurah, aAyah, bSurah, bAyah) {
  if (aSurah !== bSurah) return aSurah - bSurah;
  return aAyah - bAyah;
}

/**
 * Calculates total ayahs between two Quran locations inclusive
 */
function calculateAyahsBetween(startSurah, startAyah, endSurah, endAyah) {
  if (comparePositions(startSurah, startAyah, endSurah, endAyah) > 0) {
    return 0;
  }
  let total = 0;
  for (let sNum = startSurah; sNum <= endSurah; sNum++) {
    const surah = getSurah(sNum);
    if (!surah) continue;
    let sAyahStart = (sNum === startSurah) ? startAyah : 1;
    let sAyahEnd = (sNum === endSurah) ? endAyah : surah.ayahs;
    if (sAyahEnd >= sAyahStart) {
      total += (sAyahEnd - sAyahStart + 1);
    }
  }
  return total;
}

/**
 * Estimate page count assuming standard 15-line Madinah Mushaf (~604 pages total, 6,236 ayahs)
 * Average ~10.3 ayahs per page, or roughly 20 pages per Juz
 */
function estimatePagesFromAyahs(ayahCount) {
  return Math.max(1, Math.round((ayahCount / 6236) * 604 * 10) / 10);
}

// Export for module environments if available, else attach to window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    QURAN_SURAHS,
    QURAN_JUZ,
    getSurah,
    getJuz,
    getSurahsInJuz,
    getAyahRangeForJuz,
    comparePositions,
    calculateAyahsBetween,
    estimatePagesFromAyahs
  };
}
if (typeof window !== 'undefined') {
  window.QURAN_SURAHS = QURAN_SURAHS;
  window.QURAN_JUZ = QURAN_JUZ;
  window.getSurah = getSurah;
  window.getJuz = getJuz;
  window.getSurahsInJuz = getSurahsInJuz;
  window.getAyahRangeForJuz = getAyahRangeForJuz;
  window.comparePositions = comparePositions;
  window.calculateAyahsBetween = calculateAyahsBetween;
  window.estimatePagesFromAyahs = estimatePagesFromAyahs;
}
