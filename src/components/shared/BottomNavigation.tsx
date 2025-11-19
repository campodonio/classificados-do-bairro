import { Home, List, Heart, Info } from 'lucide-react';
import { NavigationPage } from '../../App';

interface BottomNavigationProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
}

export function BottomNavigation({ currentPage, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: 'home' as NavigationPage, icon: Home, label: 'Início' },
    { id: 'services' as NavigationPage, icon: List, label: 'Serviços' },
    { id: 'favorites' as NavigationPage, icon: Heart, label: 'Favoritos' },
    { id: 'about' as NavigationPage, icon: Info, label: 'Sobre' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E1E8ED] shadow-soft max-w-[390px] mx-auto">
      <div className="flex items-center justify-around h-20 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors"
            >
              <Icon 
                className={`w-6 h-6 transition-colors ${
                  isActive ? 'text-[#1A4D4D]' : 'text-[#6B7280]'
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span 
                className={`text-xs transition-colors ${
                  isActive ? 'text-[#1A4D4D]' : 'text-[#6B7280]'
                }`}
                style={{ fontWeight: isActive ? 600 : 400 }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
