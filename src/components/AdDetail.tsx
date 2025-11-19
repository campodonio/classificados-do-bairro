import { ArrowLeft, MapPin, Clock, User, Phone, Share2, Heart } from 'lucide-react';
import { Ad } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface AdDetailProps {
  ad: Ad;
  onBack: () => void;
}

const imageUrls: Record<string, string> = {
  'smartphone technology': 'https://images.unsplash.com/photo-1676173646307-d050e097d181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM1NTMxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'apartment interior': 'https://images.unsplash.com/photo-1675279200694-8529c73b1fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM0ODY3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'modern car': 'https://images.unsplash.com/photo-1616932321030-16411c3a6489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXJ8ZW58MXx8fHwxNzYzNDg5MzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'modern sofa': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhfGVufDF8fHx8MTc2MzQ5ODk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'laptop computer': 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjM0NTI1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'mountain bike': 'https://images.unsplash.com/photo-1506316940527-4d1c138978a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2V8ZW58MXx8fHwxNzYzNTQ4MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Hoje';
  if (diffDays === 1) return 'Ontem';
  if (diffDays < 7) return `${diffDays} dias atrás`;
  return date.toLocaleDateString('pt-BR');
}

export function AdDetail({ ad, onBack }: AdDetailProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Heart
                className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
              />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="w-full aspect-[4/3] bg-gray-200">
        <ImageWithFallback
          src={imageUrls[ad.image]}
          alt={ad.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Price & Title */}
        <div>
          <p className="text-blue-600 mb-2">
            R$ {ad.price.toLocaleString('pt-BR')}
          </p>
          <h1 className="text-gray-900 mb-2">{ad.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{formatDate(ad.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{ad.location}</span>
            </div>
          </div>
        </div>

        {/* Category */}
        <div className="bg-gray-100 rounded-lg p-3">
          <p className="text-sm text-gray-600">Categoria</p>
          <p className="text-gray-900">{ad.category}</p>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-gray-900 mb-2">Descrição</h2>
          <p className="text-gray-600">{ad.description}</p>
        </div>

        {/* Seller Info */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-gray-900 mb-3">Vendedor</h2>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-900">{ad.seller}</p>
              <p className="text-sm text-gray-500">Membro desde 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          <span>Entrar em contato</span>
        </button>
      </div>
    </div>
  );
}
