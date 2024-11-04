// Array de depoimentos
const testimonials = [
  {
      image: './src/imagens/Feedback/perfil1.png',
      name: 'Paulo Henrique',
      testimonial: 'Finalmente consegui resolver meu problema com acne. Já havia consultado outros profissionais, mas foi com você que consegui uma solução definitiva. Obrigado, Jana!',
  },
  {
      image: './src/imagens/Feedback/perfil2.png',
      name: 'Nome do Depoente 2',
      testimonial: 'Gostei bastante de mim, *testando esse depoimento aqui',
  },
  {
      image: './src/imagens/Feedback/perfil1.png',
      name: 'Nome do Depoente 3',
      testimonial: 'Depoimento do usuário 3.',
  },
  {
      image: './src/imagens/Feedback/perfil1.png',
      name: 'Nome do Depoente 4',
      testimonial: 'Depoimento do usuário 4. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nulla autem porro aperiam provident excepturi',
  },
  // Adicione mais objetos conforme necessário
];

// Índice inicial
let currentIndex = 0;
const container = document.getElementById('testimonialContainer');

// Função para gerar o SVG das estrelas
function renderStarSVG() {
  return `
      <svg width="66" height="15" viewBox="0 0 66 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
              <path id="star" d="M7.96508 1L9.21418 4.74433H13.2564L9.98617 7.05846L11.2353 10.8028L7.96508 8.48866L4.69488 10.8028L5.94399 7.05846L2.67379 4.74433H6.71597L7.96508 1Z" fill="#FFD362"/>
              <filter id="shadow" x="-2" y="-2" width="20" height="20" color-interpolation-filters="sRGB">
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="1.05" />
                  <feComposite in2="SourceAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
          </defs>
          <g filter="url(#shadow)">
              <use href="#star" x="0"/>
              <use href="#star" x="13"/>
              <use href="#star" x="26"/>
              <use href="#star" x="39"/>
              <use href="#star" x="52"/>
          </g>
      </svg>
  `;
}

// Determina o número de cards a serem exibidos com base na largura da tela
function getCardsPerView() {
  const width = window.innerWidth;
  if (width >= 1024) return 3; // Desktop
  if (width >= 768) return 2;   // Tablet
  return 1;                     // Mobile
}

// Renderiza os cards de acordo com a tela
function renderCards() {
  const cardsPerView = getCardsPerView();
  container.innerHTML = ''; // Limpa o container antes de renderizar novos cards

  for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length;
      const testimonial = testimonials[index];

      container.innerHTML += `
          <div class="card-feed">
              <div class="profile-name">
                  <div class="profile">
                      <img src="${testimonial.image}" alt="Foto de perfil do paciente loading="lazy">
                  </div>
                  <div class="name">
                      <p>${testimonial.name}</p>
                      ${renderStarSVG()}
                  </div>
              </div>
              <p class="depoimento">${testimonial.testimonial}</p>
          </div>
      `;
  }
}

// Muda o índice e atualiza os cards
function mudarSlideFeedback(direction) {
  currentIndex = (currentIndex + direction + testimonials.length) % testimonials.length;
  renderCards();
}

// Atualiza os cards ao redimensionar a tela
window.addEventListener('resize', renderCards);

// Inicializa a renderização dos cards
renderCards();
