export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Carol Domingos',
  monogram: 'CD',
  headline: 'Seu sorriso. Sua essência. Por inteiro.',
  cro: 'CRO-GO 14226',
  bio: 'Sou Carol Domingos, cirurgiã-dentista em Goiânia. Meu olhar para as lentes em resina e porcelana começa na sua história. Acredito em sorrisos naturais e autênticos, planejados com atenção às proporções, aos detalhes e à sua individualidade.',
  education: [] as string[],
  specialties: ['Lentes em resina', 'Lentes em porcelana', 'Estética do sorriso'],
  phone: '+55 62 98636-8263',
  whatsapp: '5562986368263',
  whatsappUrl: 'https://wa.me/5562986368263?text=Ol%C3%A1%2C%20Dra.%20Carol!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  address: 'Goiânia, GO',
  professionalPhilosophy: 'Sorrisos naturais. Essência preservada.',
  instagram: 'https://www.instagram.com/dracaroldomingos/',
  instagramHandle: '@dracaroldomingos',
  philosophy: ['SEU SORRISO.', 'SUA HISTÓRIA.', 'SUA ESSÊNCIA.'],
  colors: { paper: '#f4f0e9', ink: '#28241f', taupe: '#967d5c', champagne: '#d5bd95', dark: '#1c1b18', wine: '#28241f', muted: '#716a5f' },
  images: { hero: '/images/carol-hero.webp', essence: '/images/carol-essencia.webp', about: '/images/carol-sobre.webp', beauty: '/images/carol-hero.webp' },
  procedures: [] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.webp', label: 'Um sorriso, uma nova confiança', alt: 'Comparativo original de antes e depois do sorriso de um paciente, com detalhes dos dentes.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1599 },
    { image: '/images/resultado-02.webp', label: 'Naturalidade em cada detalhe', alt: 'Registro aproximado de um sorriso com lentes, enviado pela Dra. Carol Domingos.', orientation: 'single', beforeShare: .5, comparisonRatio: 1252 / 1600 },
    { image: '/images/resultado-03.webp', label: 'Textura, luz e personalidade', alt: 'Vista lateral de um sorriso mostrando a textura e as proporções dos dentes.', orientation: 'single', beforeShare: .5, comparisonRatio: 1284 / 1273 },
    { image: '/images/resultado-04.webp', label: 'A beleza de se reconhecer', alt: 'Comparativo original de antes e depois do sorriso de uma paciente, com detalhes dos dentes.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1594 },
    { image: '/images/resultado-05.webp', label: 'Harmonia que faz sorrir', alt: 'Comparativo aproximado do sorriso, com o antes acima e o depois abaixo.', orientation: 'vertical', beforeShare: .5, comparisonRatio: 1284 / 1583 },
    { image: '/images/resultado-06.webp', label: 'Precisão nas proporções', alt: 'Registro aproximado de dentes e sorriso no portfólio da Dra. Carol Domingos.', orientation: 'single', beforeShare: .5, comparisonRatio: 1284 / 1553 },
    { image: '/images/resultado-07.webp', label: 'Leveza para a vida real', alt: 'Registro de um sorriso em vista lateral com uma bala de goma, enviado pela Dra. Carol Domingos.', orientation: 'single', beforeShare: .5, comparisonRatio: 1284 / 1281 },
    { image: '/images/resultado-08.webp', label: 'Seu sorriso, por inteiro', alt: 'Registro lateral de um sorriso do portfólio da Dra. Carol Domingos.', orientation: 'single', beforeShare: .5, comparisonRatio: 1222 / 1600 },
  ] },
  seo: { title: 'Dra. Carol Domingos | Lentes em Resina e Porcelana em Goiânia', description: 'Sorrisos naturais e autênticos com a Dra. Carol Domingos, CRO-GO 14226. Lentes em resina e porcelana em Goiânia. Agende sua avaliação.', url: '' },
};

export const appointmentUrl = site.whatsappUrl;
