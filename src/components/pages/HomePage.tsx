import { Search, MapPin, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { categories, mockBusinesses } from '../../lib/data';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigateToServices: () => void;
  onSelectCategory: (categoryId: string) => void;
}

export function HomePage({ onNavigateToServices, onSelectCategory }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredBusinesses = mockBusinesses.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1A4D4D] to-[#2D6A6A] px-6 pt-12 pb-8 rounded-b-[2rem]">
        <div className="mb-6">
          <h1 className="text-white mb-2">Classificados do Bairro</h1>
          <div className="flex items-center gap-2 text-[#A8E6D7]">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Caucaia, CE</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Buscar serviços, comércios..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-soft text-[#2C3E50] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#6DD5C3] transition-all"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-8">
        {/* Categories */}
        <section>
          <h2 className="text-[#1A4D4D] mb-4">Categorias</h2>
          <div className="grid grid-cols-3 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className="bg-white rounded-2xl p-4 shadow-soft hover:shadow-card transition-all active:scale-95 flex flex-col items-center gap-3"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#6DD5C3] to-[#A8E6D7] rounded-2xl flex items-center justify-center text-2xl">
                  {category.icon}
                </div>
                <span className="text-sm text-[#2C3E50]" style={{ fontWeight: 500 }}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Featured */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#1A4D4D]">Destaques</h2>
            <button 
              onClick={onNavigateToServices}
              className="text-sm text-[#1A4D4D] flex items-center gap-1"
              style={{ fontWeight: 600 }}
            >
              Ver todos
              <TrendingUp className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {featuredBusinesses.map((business) => (
              <div
                key={business.id}
                className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all cursor-pointer"
              >
                <div className="h-40 bg-gray-200 overflow-hidden">
                  <ImageWithFallback
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[#1A4D4D] flex-1">{business.name}</h3>
                    <div className="flex items-center gap-1 bg-[#6DD5C3]/10 px-2 py-1 rounded-lg">
                      <span className="text-[#1A4D4D]" style={{ fontWeight: 600 }}>
                        ⭐ {business.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#6B7280] mb-3 line-clamp-2">
                    {business.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <MapPin className="w-4 h-4" />
                    <span>{business.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="pb-8">
          <div className="bg-gradient-to-br from-[#6DD5C3] to-[#A8E6D7] rounded-2xl p-6 shadow-card">
            <h3 className="text-[#1A4D4D] mb-2">Tem um negócio?</h3>
            <p className="text-[#2D6A6A] text-sm mb-4">
              Cadastre seu estabelecimento e alcance mais clientes no bairro!
            </p>
            <button className="w-full bg-[#1A4D4D] text-white py-3 rounded-xl hover:bg-[#2D6A6A] transition-colors">
              Cadastrar Negócio
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
