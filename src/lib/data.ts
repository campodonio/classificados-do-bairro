import { Business } from "../App";

export const categories = [
  { id: "alimentacao", name: "Alimentação", icon: "🍔" },
  { id: "saude", name: "Saúde", icon: "💊" },
  { id: "beleza", name: "Beleza", icon: "💇" },
  { id: "servicos", name: "Serviços", icon: "🔧" },
  { id: "pets", name: "Pets", icon: "🐾" },
  { id: "fitness", name: "Fitness", icon: "💪" },
];

export const mockBusinesses: Business[] = [
  {
    id: "1",
    name: "Mercadinho e Lanchonete Junior",
    category: "mercado",
    description:
      "Mini mercado e lanchonete local com produtos variados, lanches e atendimento familiar. Ideal para compras rápidas no bairro.",
    address: "Rua Rio Negro, Tabapua",
    phone: "(85) 99847-0619",
    whatsapp: "5585998470619",
    image:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1080&q=80",
    rating: 4.7,
    reviews: 82,
    hours: "Seg-Sáb: 06h às 20h | Dom: 06h às 12h",
    services: [
      "Lanches",
      "Refrigerantes",
      "Produtos de mercado",
      "Atendimento rápido",
    ],
    lat: -3.7364,
    lng: -38.6539,
  },
  {
    id: "2",
    name: "Mercadinho Dourado",
    category: "mercado",
    description:
      "Mercadinho de bairro com grande variedade de produtos do dia a dia, incluindo alimentos, bebidas e itens de limpeza.",
    address: "Rua Rio Negro, Tabapua",
    phone: "(85) 98296-9137",
    whatsapp: "5585982969137",
    image:
      "https://blog.zanottirefrigeracao.com.br/wp-content/uploads/2021/03/58c8641226c4182f4a6f870b_minimercado-GR-2-1.jpg",
    rating: 4.8,
    reviews: 65,
    hours:
      "Seg-Sex: 06h às 18h | Sáb: 06h às 12h | Dom: fechado",
    services: [
      "Produtos de mercado",
      "Bebidas",
      "Itens de higiene",
      "Atendimento local",
    ],
    lat: -3.7368,
    lng: -38.6541,
  },
  {
    id: "3",
    name: "Ki Delícia Dindin Gourmet",
    category: "doces",
    description:
      "Dindins gourmet artesanais, sobremesas especiais e variedades de sabores. Perfeito para refrescar e adoçar o dia.",
    address: "Rua Rio Negro, Tabapua",
    phone: "(85) 98701-6291",
    whatsapp: "5585987016291",
    image:
      "https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/VTTSR6LPMRCI5GQJFH6DTR7BZU.jpeg?auth=e588dd84ea5ba590bb209bf070b3cbafc5f680e94ebfbcceacfaebcf6fc36e2c&width=1600&height=1066",
    rating: 4.9,
    reviews: 41,
    hours: "Seg-Sáb: 13h às 18h",
    services: [
      "Dindins gourmet",
      "Sobremesas",
      "Doces artesanais",
    ],
    lat: -3.7369,
    lng: -38.6543,
  },
  {
    id: "4",
    name: "Restaurante Sabor da Casa",
    category: "alimentacao",
    description:
      "Comida caseira com tempero especial. Marmitex e refeições no local. Almoço executivo com preço justo.",
    address: "Rua Rio Negro, Tabapua",
    phone: "(85) 95432-1098",
    whatsapp: "5511954321098",
    image:
      "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzNTI2NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 203,
    hours: "Seg-Sáb: 11h às 15h e 18h às 22h",
    services: [
      "Almoço executivo",
      "Marmitex",
      "À la carte",
      "Delivery",
    ],
    lat: -23.5525,
    lng: -46.6353,
  },
  {
    id: "5",
    name: "Academia Corpo em Forma",
    category: "fitness",
    description:
      "Espaço completo para treinos. Musculação, funcional e aulas coletivas. Instrutores qualificados.",
    address: "Rua Rio Negro, Tabapua",
    phone: "(85) 94321-0987",
    whatsapp: "5511943210987",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzfGVufDF8fHx8MTc2MzU0MDg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 94,
    hours: "Seg-Sex: 6h às 22h | Sáb: 8h às 14h",
    services: [
      "Musculação",
      "Funcional",
      "Spinning",
      "Pilates",
    ],
    lat: -23.5535,
    lng: -46.6363,
  },
  {
    id: "6",
    name: "Pet Shop Amigo Fiel",
    category: "pets",
    description:
      "Tudo para seu pet! Banho, tosa, produtos e acessórios. Atendimento carinhoso e profissional.",
    address: "Rua Rio Negro, Tabapua",
    phone: "(85) 93210-9876",
    whatsapp: "5511932109876",
    image:
      "https://images.unsplash.com/photo-1528846104175-4fd300ee59da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZ3xlbnwxfHx8fDE3NjM1MTkxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 142,
    hours: "Seg-Sáb: 8h às 18h",
    services: [
      "Banho e tosa",
      "Produtos",
      "Acessórios",
      "Ração",
    ],
    lat: -23.5485,
    lng: -46.6313,
  },
];