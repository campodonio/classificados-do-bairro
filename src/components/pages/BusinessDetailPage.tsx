import { ArrowLeft, Star, MapPin, Clock, Phone, Share2, Heart, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Business } from '../../App';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BusinessDetailPageProps {
  business: Business;
  onBack: () => void;
}

export function BusinessDetailPage({ business, onBack }: BusinessDetailPageProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${business.whatsapp}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${business.phone}`;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: business.name,
        text: business.description,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="relative h-64">
        <ImageWithFallback
          src={business.image}
          alt={business.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        
        {/* Top Actions */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#1A4D4D]" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <Share2 className="w-5 h-5 text-[#1A4D4D]" />
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-[#1A4D4D]'}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Title & Rating */}
        <div>
          <h1 className="text-[#1A4D4D] mb-3">{business.name}</h1>
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1 bg-[#6DD5C3]/10 px-3 py-1.5 rounded-lg">
              <Star className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
              <span className="text-[#1A4D4D]" style={{ fontWeight: 600 }}>
                {business.rating}
              </span>
              <span className="text-sm text-[#6B7280]">
                ({business.reviews} avaliações)
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-[#F5F7F9] rounded-2xl p-5">
          <h3 className="text-[#1A4D4D] mb-2">Sobre</h3>
          <p className="text-[#6B7280] leading-relaxed">{business.description}</p>
        </div>

        {/* Info Cards */}
        <div className="space-y-3">
          <div className="flex items-start gap-4 bg-white border border-[#E1E8ED] rounded-2xl p-4">
            <div className="w-10 h-10 bg-[#6DD5C3]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#1A4D4D]" />
            </div>
            <div className="flex-1">
              <h4 className="text-[#1A4D4D] mb-1">Endereço</h4>
              <p className="text-sm text-[#6B7280]">{business.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white border border-[#E1E8ED] rounded-2xl p-4">
            <div className="w-10 h-10 bg-[#6DD5C3]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-[#1A4D4D]" />
            </div>
            <div className="flex-1">
              <h4 className="text-[#1A4D4D] mb-1">Horário de Funcionamento</h4>
              <p className="text-sm text-[#6B7280]">{business.hours}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white border border-[#E1E8ED] rounded-2xl p-4">
            <div className="w-10 h-10 bg-[#6DD5C3]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-[#1A4D4D]" />
            </div>
            <div className="flex-1">
              <h4 className="text-[#1A4D4D] mb-1">Telefone</h4>
              <p className="text-sm text-[#6B7280]">{business.phone}</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[#1A4D4D] mb-3">Serviços Oferecidos</h3>
          <div className="flex flex-wrap gap-2">
            {business.services.map((service, index) => (
              <div
                key={index}
                className="bg-[#6DD5C3]/10 text-[#1A4D4D] px-4 py-2 rounded-xl text-sm"
                style={{ fontWeight: 500 }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-[#1A4D4D] mb-3">Localização</h3>
          <div className="bg-[#E1E8ED] rounded-2xl h-48 flex items-center justify-center overflow-hidden">
            <div className="text-center text-[#6B7280]">
              <MapPin className="w-12 h-12 mx-auto mb-2 opacity-40" />
              <p className="text-sm">Mapa interativo</p>
              <p className="text-xs">Lat: {business.lat} | Lng: {business.lng}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E1E8ED] p-6 max-w-[390px] mx-auto">
        <div className="flex gap-3">
          <button
            onClick={handleCall}
            className="flex-1 bg-white border-2 border-[#1A4D4D] text-[#1A4D4D] py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#F5F7F9] transition-colors active:scale-95"
          >
            <Phone className="w-5 h-5" />
            Ligar
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#20BA5A] transition-colors active:scale-95 shadow-soft"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </button>
        </div>
      </div>

      <div className="h-24" />
    </div>
  );
}
