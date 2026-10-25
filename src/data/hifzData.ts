import { VideoItem, GuideItem, ResourceItem, TimelineMilestone } from '../types';

export const INITIAL_STATS = {
  followers: '1,002',
  followersLabel: 'Followers',
  views: '45.4K',
  viewsLabel: 'Total Views',
  videos: '9',
  videosLabel: 'Videos',
};

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: 'day-9',
    day: 9,
    title: 'Never Give Up',
    subtitle: 'Overcoming mental blocks & fatigue',
    description: 'When verses feel difficult or memory slips, remember that every repeated letter carries tenfold reward. Practical techniques for mental stamina and renewal of intention.',
    views: '2.3K views',
    timeAgo: '2 days ago',
    category: 'Motivation',
    thumbUrl: './images/video-thumb-day9.png',
    keyTakeaways: [
      'The reward of the Quran is in the effort, not just speed.',
      'How to take strategic 5-minute pauses during heavy memorization.',
      'Renewing your niyyah (intention) when tiredness creeps in.'
    ]
  },
  {
    id: 'day-8',
    day: 8,
    title: 'My Journey Continues',
    subtitle: 'Transitioning from Juz 30 to Juz 29',
    description: 'A behind-the-scenes look at how I manage the shift from short surahs to longer passages in Surah Al-Mulk and Surah Al-Qalam, keeping previous revision razor-sharp.',
    views: '2.6K views',
    timeAgo: '3 days ago',
    category: 'My Journey',
    thumbUrl: './images/video-thumb-day8.png',
    keyTakeaways: [
      'The difference in memorizing thematic verses vs short surahs.',
      'Why you must never drop Juz 30 revision when moving to Juz 29.',
      'Connecting ayah endings with rhythmic flow.'
    ]
  },
  {
    id: 'day-7',
    day: 7,
    title: 'Memorization Method',
    subtitle: 'My 20-repeat audio & visual technique',
    description: 'Detailed walkthrough of the exact repetition system I use daily: listening to Sheikh Al-Husary 3 times, reciting to teacher once, and doing 20 focused visual repetitions.',
    views: '13.1K views',
    timeAgo: '4 days ago',
    category: 'Guidance',
    thumbUrl: './images/video-thumb-day7.png',
    keyTakeaways: [
      'Visual lock: looking at the exact position on your 15-line Mus\'haf page.',
      'Audio conditioning: matching pauses and breath with authentic recitation.',
      'The 20-repeat rule: 10 times looking, 10 times from memory.'
    ]
  },
  {
    id: 'day-6',
    day: 6,
    title: 'Hifz In Progress',
    subtitle: 'Setting up your sacred sanctuary',
    description: 'Why your physical environment matters. Creating a quiet prayer corner, eliminating smartphone distractions, and using a dedicated carved wooden rehal.',
    views: '4.4K views',
    timeAgo: '5 days ago',
    category: 'Tips',
    thumbUrl: './images/video-thumb-day6.png',
    keyTakeaways: [
      'Keeping phone in airplane mode in another room during Hifz hours.',
      'Lighting and posture: why sitting upright on the floor preserves focus.',
      'Protecting the eyes from distractions between memorization blocks.'
    ]
  },
  {
    id: 'day-5',
    day: 5,
    title: 'Consistency Over Volume',
    subtitle: 'Why 5 ayahs firmly beats 2 pages loosely',
    description: 'The golden rule of Hifz: A small amount preserved like solid stone is infinitely better than memorizing whole pages that vanish within a week.',
    views: '5.8K views',
    timeAgo: '6 days ago',
    category: 'Tips',
    thumbUrl: './images/video-thumb-day9.png',
    keyTakeaways: [
      'The psychology of slow and steady memorization.',
      'Testing your retention by reciting in Sunnah and Tahajjud prayers.',
      'Building an unbreakable daily habit chain.'
    ]
  },
  {
    id: 'day-4',
    day: 4,
    title: 'Completing Juz Amma',
    subtitle: 'Milestone reflections & the Sabqi test',
    description: 'Celebrating the milestone of completing all 37 surahs of Juz 30, followed by the rigorous full-Juz examination with my teacher.',
    views: '8.2K views',
    timeAgo: '1 week ago',
    category: 'My Journey',
    thumbUrl: './images/video-thumb-day8.png',
    keyTakeaways: [
      'The emotional moment of reciting An-Naba to An-Nas in one sitting.',
      'Common pitfalls when transitioning out of Juz Amma.',
      'Why teacher certification at each Juz completion builds confidence.'
    ]
  },
  {
    id: 'day-3',
    day: 3,
    title: 'Finding a Qualified Teacher',
    subtitle: 'Recitation correction before memorization',
    description: 'Why you cannot do Hifz alone from an app or book. The absolute necessity of having a qualified teacher correct your Tajweed and Makharij.',
    views: '9.4K views',
    timeAgo: '8 days ago',
    category: 'Guidance',
    thumbUrl: './images/video-thumb-day7.png',
    keyTakeaways: [
      'What to look for in a qualified Quran teacher (Ijazah / Sanad).',
      'The danger of cementing pronunciation mistakes into permanent memory.',
      'How to receive gentle correction with humility and patience.'
    ]
  },
  {
    id: 'day-2',
    day: 2,
    title: 'The Fajr Routine',
    subtitle: 'Harnessing the Barakah of early morning',
    description: 'Waking up before Fajr, praying Tahajjud, making dua for memory, and utilizing the peak mental clarity of dawn for new Sabaq.',
    views: '6.7K views',
    timeAgo: '9 days ago',
    category: 'Tips',
    thumbUrl: './images/video-thumb-day6.png',
    keyTakeaways: [
      'Why memory retention is 300% higher within 2 hours of Fajr.',
      'Light brain foods: dates, honey water, and adequate hydration.',
      'Aligning your sleep schedule with the sun and Islamic prayer times.'
    ]
  },
  {
    id: 'day-1',
    day: 1,
    title: 'The Pure Intention (Niyyah)',
    subtitle: 'The first step of a lifetime journey',
    description: 'Why do you want to become a Hafiz? Guarding your heart against seeking titles or praises, and dedicating every single letter solely for the pleasure of Allah.',
    views: '11.5K views',
    timeAgo: '10 days ago',
    category: 'My Journey',
    thumbUrl: './images/video-thumb-day9.png',
    keyTakeaways: [
      'Hadith: Actions are judged by intentions.',
      'Writing down your private reasons for starting Hifz.',
      'Committing to Quran as a lifelong companion, not a temporary sprint.'
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    day: 'Day 1',
    badge: 'Started',
    title: 'The Pure Intention & Day 1',
    summary: 'Making the covenant with Allah, purchasing a standardized 15-line Madani Mus\'haf, and committing to daily Fajr memorization.',
    reflection: 'The journey of a thousand miles begins with a single step. I began with Surah Al-Fatihah and the first 5 ayahs of Surah Al-Baqarah, asking Allah to grant steadfastness and ease.',
    ayahText: 'رَّبِّ زِدْنِي عِلْمًا',
    ayahTranslation: 'My Lord, increase me in knowledge.',
    surahRef: 'Surah Taha (20:114)',
    videoRefDay: 1
  },
  {
    day: 'Day 2',
    badge: 'Routine',
    title: 'Establishing The Golden Fajr Hour',
    summary: 'Adjusting my sleep cycle to sleep early immediately after Isha and waking up 45 minutes before Fajr.',
    reflection: 'The silence before dawn is unmatched. There are no notifications, no emails, no noise—just you, the Mus\'haf, and your Lord.',
    ayahText: 'إِنَّ قُرْآنَ الْفَجْرِ كَانَ مَشْهُودًا',
    ayahTranslation: 'Indeed, the recitation of dawn is ever witnessed.',
    surahRef: 'Surah Al-Isra (17:78)',
    videoRefDay: 2
  },
  {
    day: 'Day 3',
    badge: 'Guidance',
    title: 'Connecting With A Qualified Sheikh',
    summary: 'Meeting with Sheikh Yusuf for my initial Nazrah recitation evaluation and Tajweed audit.',
    reflection: 'I realized that memorizing without a teacher is like navigating a dense forest without a compass. My teacher corrected my Ikhfa and Ghunnah lengths immediately before I memorized any further.',
    ayahText: 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
    ayahTranslation: 'And recite the Quran with measured, rhythmic recitation.',
    surahRef: 'Surah Al-Muzzammil (73:4)',
    videoRefDay: 3
  },
  {
    day: 'Day 4',
    badge: 'Progress',
    title: 'Completing Juz Amma (Juz 30)',
    summary: 'Reciting all 37 Surahs from An-Naba to An-Nas in one continuous sitting before the teacher.',
    reflection: 'Reaching the end of the 30th Juz gave me profound gratitude. But the Sheikh reminded me: "Now the real work begins—holding onto it through daily Sabqi revision."',
    ayahText: 'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ',
    ayahTranslation: 'And We have certainly made the Quran easy for remembrance, so is there any who will remember?',
    surahRef: 'Surah Al-Qamar (54:17)',
    videoRefDay: 4
  },
  {
    day: 'Day 5',
    badge: 'Consistency',
    title: 'The Battle of Sabqi (Recent Revision)',
    summary: 'Implementing the 3-session revision rhythm to prevent newly memorized pages from slipping.',
    reflection: 'It is natural for pages to feel shaky at first. The secret is not panic, but steady, calm repetition. 5 revisions daily cement the memory like steel.',
    ayahText: 'وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا',
    ayahTranslation: 'And those who strive for Us — We will surely guide them to Our ways.',
    surahRef: 'Surah Al-Ankabut (29:69)',
    videoRefDay: 5
  },
  {
    day: 'Day 6',
    badge: 'Focus',
    title: 'Eliminating Distractions & Digital Detox',
    summary: 'Deleting time-wasting apps and dedicating evenings to listening to Sheikh Al-Husary and Sheikh Minshawi.',
    reflection: 'What enters the eyes and ears during the day directly affects how easily verses settle into the heart. Purity of mind leads to clarity of memorization.',
    ayahText: 'يَهْدِي بِهِ اللَّهُ مَنِ اتَّبَعَ رِضْوَانَهُ سُبُلَ السَّلَامِ',
    ayahTranslation: 'By which Allah guides those who pursue His pleasure to the ways of peace.',
    surahRef: 'Surah Al-Ma\'idah (5:16)',
    videoRefDay: 6
  },
  {
    day: 'Day 7+',
    badge: 'Soon...',
    title: 'The Ongoing Journey Towards Completion',
    summary: 'Progressing through Juz 29 and beyond, trusting in Allah\'s divine plan and persistent daily effort.',
    reflection: 'Hifz is not a race. It is a lifelong companionship with the words of Allah. Even if it takes years, every second spent with the Quran is an eternal investment.',
    ayahText: 'وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ',
    ayahTranslation: 'And We send down of the Quran that which is healing and mercy for the believers.',
    surahRef: 'Surah Al-Isra (17:82)',
    videoRefDay: 7
  }
];

export const GUIDES_DATA: GuideItem[] = [
  {
    id: 'how-to-start-hifz',
    title: 'How to Start Hifz',
    tagline: 'Step by step guide for beginners',
    iconName: 'BookOpen',
    category: 'Foundations',
    readTime: '6 min read',
    summary: 'A structured, realistic approach for anyone starting their Quran memorization journey, from setting intention to establishing day-one discipline.',
    qualifiedTeacherNote: 'CRITICAL: Never begin memorizing in isolation without an initial assessment by a qualified Quran teacher. Pronunciation errors learned early are extremely difficult to unlearn.',
    sections: [
      {
        heading: '1. Purifying Your Intention (Ikhlas)',
        content: 'Before opening the Mus\'haf, settle your heart upon the sincere intention that this Hifz is solely to please Allah, honor your parents on the Day of Judgment, and live by the Quran’s teachings. Guard against seeking praise, social media admiration, or personal ego.',
        bulletPoints: [
          'Make sincere dua at Tahajjud asking Allah to make your heart a vessel for His speech.',
          'Understand that memorization without acting upon the Quran holds no benefit.'
        ]
      },
      {
        heading: '2. Select ONE Standard Mus\'haf Edition',
        content: 'Visual memory is the single most powerful tool in Hifz. Always use the standard 15-line Madinah Mus\'haf (King Fahd Complex edition) or a consistent edition where every page ends with an ayah. Never switch between different printings or phone font styles during active memorization.',
        bulletPoints: [
          'Your brain memorizes the exact spatial position of words: top-right, center, bottom-left.',
          'Keep one physical copy dedicated exclusively to your daily memorization desk.'
        ]
      },
      {
        heading: '3. Start with Feasible Targets',
        content: 'Many enthusiastic beginners attempt to memorize 2 pages on Day 1, only to burn out by Day 7. Begin with 5 to 7 lines per day, or 1/2 page. Consistency is beloved to Allah even if it is small.',
        bulletPoints: [
          'Aim for 5 days of new memorization and 2 days dedicated entirely to consolidation.',
          'Track your daily routine in our Daily Hifz Tracker.'
        ]
      }
    ],
    recommendedDua: {
      arabic: 'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلَاءَ حُزْنِي، وَذَهَابَ هَمِّي',
      transliteration: 'Allahumma ij\'al al-Qur\'ana rabee\'a qalbi, wa noora sadri, wa jala\'a huzni, wa dhahaba hammi.',
      translation: 'O Allah, make the Quran the spring of my heart, the light of my chest, the remover of my sorrow, and the pacifier of my worries.',
      reference: 'Musnad Ahmad (Authenticated by Al-Albani)'
    }
  },
  {
    id: 'nazrah-tajweed',
    title: 'Nazrah (Tajweed)',
    tagline: 'Learn correct recitation before Hifz',
    iconName: 'Compass',
    category: 'Pronunciation',
    readTime: '7 min read',
    summary: 'Why mastering Tajweed and fluent sight-reading (Nazrah) is an absolute prerequisite before memorizing a single new ayah.',
    qualifiedTeacherNote: 'Recitation correction requires a living teacher listening to your lips, tongue placement, and breath. Audio recordings alone cannot tell you if your Makhraj is accurate.',
    sections: [
      {
        heading: '1. The Danger of Memorizing with Mistakes',
        content: 'When you memorize an ayah with a Tajweed error (e.g. pronouncing Sin as Sad, or skipping a Madd), you repeat that mistake 50 to 100 times during the memorization process. That mistake becomes deeply rooted in muscle memory and requires immense effort to correct later.',
        bulletPoints: [
          'Always recite tomorrow\'s Sabaq to your teacher BEFORE memorizing it.',
          'Only begin independent repetition once your teacher gives explicit approval.'
        ]
      },
      {
        heading: '2. Core Tajweed Rules to Master First',
        content: 'You do not need to be a scholar of advanced theoretical Qira\'at to begin Hifz, but you must master practical application:',
        bulletPoints: [
          'Makharij al-Huroof (articulation points of letters like Kha, Ghayn, Qaf, Ta, Dhad).',
          'Rules of Noon Sakinah & Tanween (Izhar, Idgham, Iqlab, Ikhfa).',
          'Rules of Meem Sakinah & basic Madd lengths (Natural 2 harakah vs 4-6 harakah).'
        ]
      },
      {
        heading: '3. Listening to Master Reciters',
        content: 'Immerse your daily commute and quiet hours in the recitation of Sheikh Mahmud Khalil Al-Husary (Murattal) or Sheikh Muhammad Siddiq Al-Minshawi. Their deliberate pacing and pristine articulation train your ears to internalize proper rhythm.',
        bulletPoints: [
          'Listen to each ayah 5 times while tracing the text with your finger.',
          'Notice where the reciter takes a breath and how stops (Waqf) are handled.'
        ]
      }
    ],
    recommendedDua: {
      arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',
      transliteration: 'Rabbi ishrah li sadri, wa yassir li amri, wahlul \'uqdatan min lisani, yafqahu qawli.',
      translation: 'My Lord, expand for me my chest, and ease for me my task, and untie the knot from my tongue that they may understand my speech.',
      reference: 'Surah Taha (20:25-28)'
    }
  },
  {
    id: 'sabaq-sabqi-manzil',
    title: 'Sabaq, Sabqi & Manzil',
    tagline: 'Memorization methods & revision tips',
    iconName: 'BookMarked',
    category: 'Methodology',
    readTime: '8 min read',
    summary: 'The proven 3-tier revision system used by traditional Quran madrasahs across the Muslim world for over a millennium.',
    qualifiedTeacherNote: 'A student who recites only Sabaq and neglects Sabqi and Manzil will soon find their Quran evaporating. Your teacher will evaluate your Manzil with the same rigor as your Sabaq.',
    sections: [
      {
        heading: '1. Sabaq (The New Lesson)',
        content: 'Sabaq is today\'s newly assigned portion (typically 1/2 page to 1 page). It is memorized fresh, usually after Fajr when the mind is fully rested.',
        bulletPoints: [
          'Recite to teacher before memorizing.',
          'Break the page into 3 chunks: memorize Chunk A, memorize Chunk B, link A+B, memorize Chunk C, link A+B+C.',
          'Recite the full page 10 times consecutively from memory without glancing.'
        ]
      },
      {
        heading: '2. Sabqi / Dhor (Recent Revision)',
        content: 'Sabqi represents the last 1 to 2 Juz you recently completed. Because it is relatively new, it is the most vulnerable to being forgotten.',
        bulletPoints: [
          'Recite at least 1/4 to 1/2 Juz of Sabqi every single day to your teacher or study partner.',
          'If Sabaq is shaky, stop new Sabaq for 3 days and dedicate all focus to strengthening Sabqi.'
        ]
      },
      {
        heading: '3. Manzil / Muraja\'ah (Permanent Old Revision)',
        content: 'Manzil is all the older memorized Quran that has passed beyond the Sabqi phase. The Prophet (pbuh) taught that the Quran slips away faster than untethered camels if it is not constantly reviewed.',
        bulletPoints: [
          'Divide your total memorized Juz into a 7-day or 10-day cycle.',
          'If you know 7 Juz, recite 1 Juz of Manzil every day so you complete the rotation weekly.',
          'Recite your Manzil while walking, in your Sunnah prayers, or to a family member.'
        ]
      }
    ]
  },
  {
    id: 'daily-routine',
    title: 'Daily Routine',
    tagline: 'Plan your day for better results',
    iconName: 'Calendar',
    category: 'Productivity',
    readTime: '5 min read',
    summary: 'A balanced, realistic schedule engineered around the 5 daily prayers to integrate Hifz seamlessly into work, studies, and family life.',
    sections: [
      {
        heading: '1. The Fajr Block (5:00 AM – 6:30 AM): New Sabaq',
        content: 'The early morning is the pinnacle of cognitive retention. Research shows cortisol and mental processing are at their cleanest directly after waking.',
        bulletPoints: [
          'Tahajjud / Fajr prayer followed by 10 minutes of morning Adhkar.',
          '50 minutes of deep, uninterrupted Sabaq memorization.',
          'Test yourself before leaving for work or school.'
        ]
      },
      {
        heading: '2. The Asr Block (4:30 PM – 5:30 PM): Sabqi Revision',
        content: 'After returning home from daily commitments, wash your face, pray Asr, and review the last 10-20 pages of recent memorization.',
        bulletPoints: [
          'Smoothly recite while following along with your eyes to catch subtle vowel markers.',
          'Mark any hesitant ayat with a light pencil mark.'
        ]
      },
      {
        heading: '3. The Isha & Night Block (8:30 PM – 9:30 PM): Manzil & Tomorrow\'s Prep',
        content: 'Wrap up your day by reciting your assigned Manzil portion in Tahiyyat al-Masjid or Witr prayer, and listen to tomorrow\'s Sabaq 3 times before sleeping.',
        bulletPoints: [
          'Sleeping directly after reviewing tomorrow\'s verses allows memory consolidation during REM sleep.',
          'Keep your phone completely outside the bedroom.'
        ]
      }
    ]
  },
  {
    id: 'common-mistakes',
    title: 'Common Mistakes',
    tagline: 'Avoid what slows you down',
    iconName: 'AlertCircle',
    category: 'Pitfalls',
    readTime: '6 min read',
    summary: 'The 5 fatal traps that cause aspiring Huffaz to stall, lose motivation, or abandon their memorization goals.',
    sections: [
      {
        heading: 'Mistake #1: Prioritizing Speed Over Quality',
        content: 'Rushing to finish a Juz just to say "I completed Juz 28" while the previous Juz is half-forgotten. A Hafiz is known by what they can recite without looking, not by what they once passed.'
      },
      {
        heading: 'Mistake #2: Switching Different Quran Prints',
        content: 'Reading from a digital phone app on the train, a 16-line South Asian print at home, and a Turkish print at the mosque. This scrambles your visual spatial memory completely.'
      },
      {
        heading: 'Mistake #3: Memorizing in Social Isolation',
        content: 'Thinking you can self-memorize and test yourself. You will inevitably skip subtle mistakes (I’rab endings, Noon Ghunnah, Tashdeed). You MUST have a qualified ear listening.'
      },
      {
        heading: 'Mistake #4: Skipping Revision on Busy Days',
        content: 'Even on exam days or work travel, recite at least 3 pages of revision. Once you break the habit chain for 3 days, resuming requires twice the mental effort.'
      }
    ]
  },
  {
    id: 'duas-motivation',
    title: 'Duas & Motivation',
    tagline: 'Stay consistent and close to Allah',
    iconName: 'Sparkles',
    category: 'Spiritual',
    readTime: '5 min read',
    summary: 'Authentic prophetic duas, spiritual mindset shifts, and reminders to keep your heart resilient when the path feels steep.',
    sections: [
      {
        heading: '1. The Quran is a Trust (Amanah)',
        content: 'Memorizing the Quran is not merely an intellectual memory challenge; it is a spiritual elevation. Imam Al-Shafi\'i famously noted that knowledge is a divine light, and the light of Allah is not bestowed upon disobedience.',
        bulletPoints: [
          'Protect your eyes from impermissible sights.',
          'Eat wholesome halal food and avoid overeating before study periods.',
          'Maintain humility: never look down upon those who have memorized less.'
        ]
      },
      {
        heading: '2. The Crown of Honor on the Day of Judgment',
        content: 'The Prophet (pbuh) said: "Whoever recites the Quran, learns it, and acts upon it, his parents will be crowned on the Day of Resurrection with a crown of light whose brightness is like that of the sun..."',
        bulletPoints: [
          'Every single letter you repeat 20 times brings 200 good deeds.',
          'Even when you stutter, you receive double the reward for your striving.'
        ]
      }
    ],
    recommendedDua: {
      arabic: 'اللَّهُمَّ ذَكِّرْنِي مِنْهُ مَا نَسِيتُ، وَعَلِّمْنِي مِنْهُ مَا جَهِلْتُ، وَارْزُقْنِي تِلَاوَتَهُ آنَاءَ اللَّيْلِ وَأَطْرَافَ النَّهَارِ',
      transliteration: 'Allahumma dhakkirni minhu ma naseetu, wa \'allimni minhu ma jahiltu, warzuqni tilawatahu ana\'a al-layli wa atrafa an-nahar.',
      translation: 'O Allah, remind me of what I have forgotten of it, teach me of it what I do not know, and grant me its recitation during the hours of the night and the edges of the day.',
      reference: 'Du\'a Khatm al-Qur\'an'
    }
  }
];

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'daily-planner',
    title: 'Daily Planner',
    subtitle: 'Plan your day for better results',
    category: 'Planning & Routine',
    pages: '2 Pages',
    format: 'Printable PDF Template',
    description: 'A beautifully formatted daily timetable structured around Fajr, Dhuhr, Asr, Maghrib, and Isha. Includes checkboxes for Sabaq, Sabqi, and Manzil, mood/energy rating, and notes.',
    iconName: 'CalendarCheck',
    printableTitle: 'Hifz In Progress — Daily Schedule & Memorization Planner',
    instructions: [
      'Print 7 copies per week or laminate one copy for dry-erase reuse.',
      'Fill in tomorrow\'s Sabaq page numbers the night before.',
      'Check off each session immediately after recitation to maintain momentum.'
    ],
    checklistItems: [
      'Pre-Fajr: Tahajjud, intention renewal & 10 mins Adhkar',
      'Post-Fajr: 45 mins new Sabaq memorization (10x eye + 10x memory)',
      'Mid-Morning: 10 mins audio listen to Sheikh Al-Husary',
      'Post-Asr: 30 mins Sabqi revision (last 1 Juz)',
      'Post-Maghrib: Teacher check-in or recitation partner',
      'Post-Isha: 30 mins Manzil rotation + preview tomorrow\'s Sabaq'
    ]
  },
  {
    id: 'revision-tracker',
    title: 'Revision Tracker',
    subtitle: 'Track your progress & keep it sharp',
    category: 'Revision & Retention',
    pages: '3 Pages',
    format: 'Printable Matrix & Chart',
    description: 'A 30-Juz rotation grid with columns for last revised date, rating (Mumtaz, Jayyid, Needs Revision), and teacher signature. Ensures no portion is neglected.',
    iconName: 'LineChart',
    printableTitle: 'Hifz In Progress — 30-Juz Manzil Rotation Tracker',
    instructions: [
      'Keep this sheet tucked inside your Mus\'haf cover.',
      'Color-code each Juz: Green (Mumtaz/Rock-solid), Gold (Good), Coral (Needs immediate review).',
      'Never let any memorized Juz go longer than 10 days without a complete pass.'
    ],
    checklistItems: [
      'Juz 30 (Amma): Full weekly recitation in Tahajjud or Sunnah',
      'Juz 29 (Tabarak): Recite Surah Al-Mulk to Al-Mursalat',
      'Current Juz in progress: Daily Sabqi testing',
      'Monthly full-Juz examination with qualified Sheikh'
    ]
  },
  {
    id: 'dua-collection',
    title: 'Dua Collection',
    subtitle: 'For every step of the journey',
    category: 'Spiritual Fortification',
    pages: '4 Pages',
    format: 'Arabic, English & Transliteration',
    description: 'A hand-curated collection of authentic Quranic and Prophetic supplications for cognitive focus, memory preservation, speech clarity, and protection against pride.',
    iconName: 'BookHeart',
    printableTitle: 'Hifz In Progress — Authentic Duas for Quran Memorization',
    instructions: [
      'Recite these supplications during Sujood, before study sessions, and after obligatory prayers.',
      'Contemplate the meanings so that the heart is aligned with the tongue.'
    ],
    checklistItems: [
      'Rabbi zidni \'ilman (Surah Taha 20:114) — For increasing knowledge',
      'Rabbi ishrah li sadri (Surah Taha 20:25) — For mental ease & speech fluency',
      'Allahumma la sahla illa ma ja\'altahu sahla — For making hard ayahs easy',
      'Allahumma inni as\'aluka \'ilman nafi\'an — For beneficial knowledge'
    ]
  },
  {
    id: 'beginner-guide',
    title: 'Beginner Guide',
    subtitle: 'Start with confidence & clarity',
    category: 'Foundational Roadmap',
    pages: '5 Pages',
    format: 'Complete PDF Handbook',
    description: 'Comprehensive orientation guide for newcomers: how to choose a qualified teacher, the rules of handling the Mus\'haf, understanding Surah divisions, and realistic timeline expectations.',
    iconName: 'GraduationCap',
    printableTitle: 'Hifz In Progress — The Complete Beginner\'s Hifz Handbook',
    instructions: [
      'Read thoroughly before beginning your first week of memorization.',
      'Share with family members so they understand how to support your quiet study hours.'
    ],
    checklistItems: [
      'Teacher search checklist: Sanad, Tajweed rigor, patience & availability',
      'Equipment setup: 15-line Madani Mus\'haf, carved rehal stand, pencil & notebook',
      'Habit environment audit: Quiet room, good lighting, zero screen temptations'
    ]
  }
];

export const INITIAL_TRACKER_RECORDS: any[] = [
  {
    id: 'rec-1',
    date: '2026-10-24',
    type: 'sabaq',
    juz: 29,
    surah: 'Surah Al-Mulk',
    ayahRange: 'Ayah 1 - 12',
    pagesCompleted: 1,
    timeSpentMinutes: 45,
    quality: 'mumtaz',
    notes: 'Recited with clean articulation to Sheikh. Makhraj of Kha and Qaf felt strong.',
    createdAt: Date.now() - 86400000
  },
  {
    id: 'rec-2',
    date: '2026-10-23',
    type: 'sabqi',
    juz: 30,
    surah: 'Surah An-Naba to Al-Mutaffifin',
    ayahRange: 'Full passages',
    pagesCompleted: 4,
    timeSpentMinutes: 35,
    quality: 'mumtaz',
    notes: 'Smooth recall without any stops. Recited in Sunnah prayers.',
    createdAt: Date.now() - 172800000
  },
  {
    id: 'rec-3',
    date: '2026-10-22',
    type: 'manzil',
    juz: 30,
    surah: 'Surah Al-Inshiqaq to An-Nas',
    ayahRange: 'Remaining Juz 30',
    pagesCompleted: 12,
    timeSpentMinutes: 50,
    quality: 'jayyid_jiddan',
    notes: 'Slight hesitation at Surah Al-Fajr ayah 15-16. Marked with pencil for tomorrow.',
    createdAt: Date.now() - 259200000
  }
];
