import { useState } from 'react';
import { HomePage } from './components/pages/HomePage';
import { ServicesListPage } from './components/pages/ServicesListPage';
import { BusinessDetailPage } from './components/pages/BusinessDetailPage';
import { AboutPage } from './components/pages/AboutPage';
import { BottomNavigation } from './components/shared/BottomNavigation';

export type NavigationPage = 'home' | 'services' | 'favorites' | 'about';

export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  image: string;
  rating: number;
  reviews: number;
  hours: string;
  services: string[];
  lat: number;
  lng: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleNavigate = (page: NavigationPage) => {
    setCurrentPage(page);
    setSelectedBusiness(null);
  };

  const handleSelectBusiness = (business: Business) => {
    setSelectedBusiness(business);
  };

  const handleBackFromDetail = () => {
    setSelectedBusiness(null);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('services');
  };

  return (
    <div className="mobile-container">
      <div className="min-h-[844px] bg-[#F5F7F9] pb-20">
        {selectedBusiness ? (
          <BusinessDetailPage 
            business={selectedBusiness} 
            onBack={handleBackFromDetail}
          />
        ) : (
          <>
            {currentPage === 'home' && (
              <HomePage 
                onNavigateToServices={() => setCurrentPage('services')}
                onSelectCategory={handleCategorySelect}
              />
            )}
            {currentPage === 'services' && (
              <ServicesListPage 
                initialCategory={selectedCategory}
                onSelectBusiness={handleSelectBusiness}
              />
            )}
            {currentPage === 'favorites' && (
              <div className="p-6 pt-16">
                <h1 className="text-[#1A4D4D] mb-4">Favoritos</h1>
                <p className="text-[#6B7280]">Em breve você poderá salvar seus negócios favoritos aqui.</p>
              </div>
            )}
            {currentPage === 'about' && <AboutPage />}
          </>
        )}
      </div>
      
      {!selectedBusiness && (
        <BottomNavigation 
          currentPage={currentPage} 
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}
