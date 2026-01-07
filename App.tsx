
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { WhyVibe } from './components/WhyVibe';
import { Solution } from './components/Solution';
import { Roles } from './components/Roles';
import { HowItWorks } from './components/HowItWorks';
import { AboutUs } from './components/AboutUs';
import { FAQ } from './components/FAQ';
import { FooterCTA } from './components/FooterCTA';
import { Login } from './components/Auth/Login';
import { StudentCreateAccount } from './components/Auth/StudentCreateAccount';
import { FacultyCreateAccount } from './components/Auth/FacultyCreateAccount';
import { IndustryCreateAccount } from './components/Auth/IndustryCreateAccount';
import { RoleSelector } from './components/Auth/RoleSelector';

export type ViewState = 'landing' | 'login' | 'role-selector' | 'signup-student' | 'signup-faculty' | 'signup-industry';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');

  const renderContent = () => {
    switch (view) {
      case 'login':
        return <Login onSwitchToSignup={() => setView('role-selector')} onBack={() => setView('landing')} />;
      case 'role-selector':
        return <RoleSelector 
          onSelect={(role) => setView(role as ViewState)} 
          onBack={() => setView('login')} 
        />;
      case 'signup-student':
        return <StudentCreateAccount onBack={() => setView('role-selector')} onComplete={() => setView('login')} />;
      case 'signup-faculty':
        return <FacultyCreateAccount onBack={() => setView('role-selector')} onComplete={() => setView('login')} />;
      case 'signup-industry':
        return <IndustryCreateAccount onBack={() => setView('role-selector')} onComplete={() => setView('login')} />;
      case 'landing':
      default:
        return (
          <>
            <Hero onStart={() => setView('role-selector')} />
            <PainPoints />
            <WhyVibe />
            <Solution />
            <Roles />
            <HowItWorks />
            <AboutUs />
            <FooterCTA onJoin={() => setView('role-selector')} />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#FF6B00]/20 selection:text-[#FF6B00]">
      <Navbar setView={setView} currentView={view} />
      <main>
        {renderContent()}
      </main>
      {view === 'landing' && (
        <footer className="py-8 px-6 text-center text-slate-400 text-sm border-t border-slate-100 bg-white">
          <p>&copy; {new Date().getFullYear()} VIBE Technologies Inc. Built for students, by students.</p>
        </footer>
      )}
    </div>
  );
};

export default App;
