import { useState, useEffect } from 'react';
import { Header, type PageId } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { InscriptionPage } from './pages/InscriptionPage';
import { SuiviPage } from './pages/SuiviPage';
import { PiecesTarifsPage } from './pages/PiecesTarifsPage';
import { AdminPage } from './pages/AdminPage';
import { ContactPage } from './pages/ContactPage';
import { initDatabase } from './db/db';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    const validPages: PageId[] = [
      'accueil',
      'inscription',
      'suivi',
      'pieces',
      'admin',
      'contact',
    ];
    return validPages.includes(hash) ? hash : 'accueil';
  });

  // Initialize Dexie IndexedDB with sample records
  useEffect(() => {
    initDatabase().catch(err => {
      console.error('Erreur initialisation BDD:', err);
    });
  }, []);

  // Listen to hash changes in browser url
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'accueil',
        'inscription',
        'suivi',
        'pieces',
        'admin',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF6EA] text-[#221812] selection:bg-[#F4D889]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1 pb-12">
        {currentPage === 'accueil' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'inscription' && <InscriptionPage onNavigate={handleNavigate} />}
        {currentPage === 'suivi' && <SuiviPage onNavigate={handleNavigate} />}
        {currentPage === 'pieces' && <PiecesTarifsPage onNavigate={handleNavigate} />}
        {currentPage === 'admin' && <AdminPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
