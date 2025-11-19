import { Heart, Users, MapPin, Smartphone, Mail, MessageCircle } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1A4D4D] to-[#2D6A6A] px-6 pt-12 pb-8 rounded-b-[2rem]">
        <h1 className="text-white mb-2">Sobre Nós</h1>
        <p className="text-[#A8E6D7]">Conectando você ao seu bairro</p>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Mission */}
        <div className="bg-white rounded-2xl p-6 shadow-soft">
          <div className="w-12 h-12 bg-[#6DD5C3]/10 rounded-2xl flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-[#1A4D4D]" />
          </div>
          <h2 className="text-[#1A4D4D] mb-3">Nossa Missão</h2>
          <p className="text-[#6B7280] leading-relaxed">
            Fortalecer a economia local conectando moradores aos serviços e comércios do bairro. 
            Acreditamos que uma comunidade forte começa com vizinhos se apoiando mutuamente.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-[#1A4D4D] mb-4">O que Oferecemos</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-5 shadow-soft flex items-start gap-4">
              <div className="w-10 h-10 bg-[#6DD5C3]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#1A4D4D]" />
              </div>
              <div>
                <h3 className="text-[#1A4D4D] mb-1">Localização por Bairro</h3>
                <p className="text-sm text-[#6B7280]">
                  Encontre serviços e comércios pertinho de você
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-soft flex items-start gap-4">
              <div className="w-10 h-10 bg-[#6DD5C3]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-[#1A4D4D]" />
              </div>
              <div>
                <h3 className="text-[#1A4D4D] mb-1">Comunidade Ativa</h3>
                <p className="text-sm text-[#6B7280]">
                  Avaliações e recomendações de vizinhos reais
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-soft flex items-start gap-4">
              <div className="w-10 h-10 bg-[#6DD5C3]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 h-5 text-[#1A4D4D]" />
              </div>
              <div>
                <h3 className="text-[#1A4D4D] mb-1">Fácil Contato</h3>
                <p className="text-sm text-[#6B7280]">
                  WhatsApp integrado para comunicação rápida
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-[#6DD5C3] to-[#A8E6D7] rounded-2xl p-6 shadow-card">
          <h2 className="text-[#1A4D4D] mb-4">Nossa Comunidade</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl text-[#1A4D4D] mb-1" style={{ fontWeight: 700 }}>
                150+
              </div>
              <div className="text-xs text-[#2D6A6A]">Negócios</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-[#1A4D4D] mb-1" style={{ fontWeight: 700 }}>
                2.5k+
              </div>
              <div className="text-xs text-[#2D6A6A]">Usuários</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-[#1A4D4D] mb-1" style={{ fontWeight: 700 }}>
                4.8⭐
              </div>
              <div className="text-xs text-[#2D6A6A]">Avaliação</div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl p-6 shadow-soft">
          <h2 className="text-[#1A4D4D] mb-4">Fale Conosco</h2>
          <div className="space-y-3">
            <a
              href="mailto:contato@classificadosdobairro.com"
              className="flex items-center gap-3 p-3 bg-[#F5F7F9] rounded-xl hover:bg-[#E1E8ED] transition-colors"
            >
              <Mail className="w-5 h-5 text-[#1A4D4D]" />
              <span className="text-sm text-[#2C3E50]">
                contato@classificadosdobairro.com
              </span>
            </a>
            <a
              href="https://wa.me/5511999999999"
              className="flex items-center gap-3 p-3 bg-[#F5F7F9] rounded-xl hover:bg-[#E1E8ED] transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span className="text-sm text-[#2C3E50]">
                WhatsApp: (85) 99999-9999
              </span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-sm text-[#6B7280] mb-2">
            Classificados do Bairro
          </p>
          <p className="text-xs text-[#6B7280]">
            Versão 1.0.0 • 2025
          </p>
          <p className="text-xs text-[#6B7280] mt-4">
            Feito com ❤️ para nossa comunidade
          </p>
        </div>
      </div>
    </div>
  );
}
