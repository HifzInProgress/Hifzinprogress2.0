import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MyJourney } from './components/MyJourney';
import { LearningCenter } from './components/LearningCenter';
import { VideoLibrary } from './components/VideoLibrary';
import { Resources } from './components/Resources';
import { DailyTracker } from './components/DailyTracker';
import { SupportAbout } from './components/SupportAbout';
import { Footer } from './components/Footer';

import { VideoModal } from './components/VideoModal';
import { GuideModal } from './components/GuideModal';
import { ResourceModal } from './components/ResourceModal';
import { MilestoneModal } from './components/MilestoneModal';
import { SearchModal } from './components/SearchModal';
import { GetInTouchModal } from './components/GetInTouchModal';

import { VIDEOS_DATA } from './data/hifzData';
import { VideoItem, GuideItem, ResourceItem, TimelineMilestone } from './types';

export default function App() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [activeGuide, setActiveGuide] = useState<GuideItem | null>(null);
  const [activeResource, setActiveResource] = useState<ResourceItem | null>(null);
  const [activeMilestone, setActiveMilestone] = useState<TimelineMilestone | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [getInTouchOpen, setGetInTouchOpen] = useState(false);

  // Trigger video modal by day number
  const handleWatchDayVideo = (day: number) => {
    const matched = VIDEOS_DATA.find((v) => v.day === day) || VIDEOS_DATA[0];
    setActiveVideo(matched);
  };

  const handleGoToTracker = () => {
    const el = document.getElementById('tracker');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#031C17] text-[#F3EBDD] font-sans selection:bg-[#C8A052] selection:text-[#031C17] relative">
      
      {/* 1. Header Navigation */}
      <Navbar 
        onOpenSearch={() => setSearchOpen(true)}
        onOpenGetInTouch={() => setGetInTouchOpen(true)}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero 
          onWatchJourney={() => handleWatchDayVideo(9)}
        />

        {/* 3. My Journey Section */}
        <MyJourney 
          onWatchVideo={handleWatchDayVideo}
          onSelectMilestone={(milestone) => setActiveMilestone(milestone)}
        />

        {/* 4. Hifz Learning Center */}
        <LearningCenter 
          onSelectGuide={(guide) => setActiveGuide(guide)}
        />

        {/* 5. Video Library */}
        <VideoLibrary 
          onSelectVideo={(video) => setActiveVideo(video)}
        />

        {/* 6. Useful Resources */}
        <Resources 
          onSelectResource={(resource) => setActiveResource(resource)}
        />

        {/* 7. Daily Hifz Tracker */}
        <DailyTracker />

        {/* 8. Support & Community */}
        <SupportAbout 
          onOpenGetInTouch={() => setGetInTouchOpen(true)}
        />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <VideoModal 
        video={activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />

      <GuideModal 
        guide={activeGuide} 
        onClose={() => setActiveGuide(null)} 
        onGoToTracker={handleGoToTracker}
      />

      <ResourceModal 
        resource={activeResource} 
        onClose={() => setActiveResource(null)} 
      />

      <MilestoneModal 
        milestone={activeMilestone} 
        onClose={() => setActiveMilestone(null)} 
        onWatchVideo={handleWatchDayVideo}
      />

      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)}
        onSelectVideo={(v) => setActiveVideo(v)}
        onSelectGuide={(g) => setActiveGuide(g)}
        onSelectResource={(r) => setActiveResource(r)}
        onSelectMilestone={(m) => setActiveMilestone(m)}
      />

      <GetInTouchModal 
        isOpen={getInTouchOpen} 
        onClose={() => setGetInTouchOpen(false)} 
      />

    </div>
  );
}
