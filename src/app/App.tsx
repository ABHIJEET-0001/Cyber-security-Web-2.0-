import { useState, useEffect } from 'react';
import { Hero } from '@/app/components/Hero';
import { Navigation } from '@/app/components/Navigation';
import { AboutClub } from '@/app/components/AboutClub';
import { AboutCollege } from '@/app/components/AboutCollege';
import { HackathonList } from '@/app/components/HackathonList';
import { CodeBlitz2026 } from '@/app/components/CodeBlitz2026';
import { ProblemStatements } from '@/app/components/ProblemStatements';
import { Team } from '@/app/components/Team';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedHackathon, setSelectedHackathon] = useState<string | null>(null);

  const handleSelectHackathon = (hackathonId: string) => {
    setSelectedHackathon(hackathonId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHackathonList = () => {
    setSelectedHackathon(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (currentPage === 'hackathon' && selectedHackathon) {
      // Render specific hackathon detail page
      switch (selectedHackathon) {
        case 'coreblitz-2026':
          return <CodeBlitz2026 onBack={handleBackToHackathonList} />;
        // Add more hackathon detail pages here as needed
        default:
          return <HackathonList onSelectHackathon={handleSelectHackathon} />;
      }
    }

    // Render main pages
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'about':
        return (
          <>
            <AboutClub />
            <AboutCollege />
          </>
        );
      case 'hackathon':
        return <HackathonList onSelectHackathon={handleSelectHackathon} />;
      case 'problems':
        return <ProblemStatements />;
      case 'team':
        return <Team />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedHackathon(null); // Reset selected hackathon when navigating to a different page
  };

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-5 pointer-events-none z-0" />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        {renderPage()}
      </main>
      
      {currentPage !== 'home' && <Footer />}
    </div>
  );
}