import { Search, SlidersHorizontal, MapPin, Star } from 'lucide-react';
import { useState } from 'react';
import { categories, mockBusinesses } from '../../lib/data';
import { Business } from '../../App';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ServicesListPageProps {
  initialCategory: string;
  onSelectBusiness: (business: Business) => void;
}

export function ServicesListPage({ initialCategory, onSelectBusiness }: ServicesListPageProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBusinesses = mockBusinesses.filter((business) => {
    const matchesCategory = selectedCategory === 'all' || business.category === selectedCategory;
    const matchesSearch = 
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-[#E1E8ED] sticky top-0 z-10">
        <h1 className="text-[#1A4D4D] mb-4">Serviços e Comércios</h1>
        
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#F5F7F9] rounded-xl text-[#2C3E50] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#6DD5C3]"
          />
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-6 px-6 pb-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#1A4D4D] text-white shadow-soft'
                : 'bg-white text-[#6B7280] border border-[#E1E8ED]'
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-[#1A4D4D] text-white shadow-soft'
                  : 'bg-white text-[#6B7280] border border-[#E1E8ED]'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-[#6B7280]">
            {filteredBusinesses.length} estabelecimentos encontrados
          </p>
          <button className="flex items-center gap-2 text-sm text-[#1A4D4D]">
            <SlidersHorizontal className="w-4 h-4" />
            Filtros
          </button>
        </div>

        <div className="space-y-4 pb-8">
          {filteredBusinesses.map((business) => (
            <div
              key={business.id}
              onClick={() => onSelectBusiness(business)}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all cursor-pointer active:scale-[0.98]"
            >
              <div className="flex gap-4 p-4">
                <div className="w-24 h-24 flex-shrink-0 bg-gray-200 rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-[#1A4D4D] truncate pr-2">{business.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                    <span className="text-sm text-[#2C3E50]" style={{ fontWeight: 600 }}>
                      {business.rating}
                    </span>
                    <span className="text-xs text-[#6B7280]">
                      ({business.reviews})
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] line-clamp-2 mb-2">
                    {business.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-[#6B7280]">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{business.address.split(' - ')[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
