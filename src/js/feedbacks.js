// Array de depoimentos
const testimonials = [
    {
        image: './src/imagens/Feedback/Perfil-1-Paulo-Henrique.png',
        name: 'Paulo Henrique',
        testimonial: 'fiz limpeza de pele com outra pessoa e eu tinha acnes infeccionadas, ela até fez peeling. 3 dias depois, meu rosto estava cheio de infecções. Vc me explicou q isso era errado e, em 2 meses de tratamento, praticamente n tinha mais nenhuma acne infeccionada.',
    },
  {
      image: './src/imagens/Feedback/Perfil-2-Floriana-Teixeira.png',
      name: 'Floriana Teixeira',
      testimonial: 'Você salvou a  minha vida. Minha chiquetosa, você Janaína tem o poder de transformar a vida das pessoas. Seu trabalho é incrível.',
  },
  {
      image: './src/imagens/Feedback/Perfil-3-Alana-Soares.png',
      name: 'Alana Soares',
      testimonial: 'tô tão feliz Jana! só tenho agradecer 💖💖 isso estava  me afetando muito, eu não saía sem maquiagem, hoje me sinto levreee ✨✨✨',
  },
  {
      image: './src/imagens/Feedback/Perfil-4-Mariana.png',
      name: 'Mariana da Silva',
      testimonial: 'Fizemos apenas UMA CONSULTA ONLINE, você explicou detalhadamente tudo! Super atenciosa. A minha filhinha estava sofrendo muito, amiguinhos zombavam dela. HOJE a Pele dela é OUTRA! Só GRATIDÃO Jana O seu trabalho é incrível',
  },
  {
      image: './src/imagens/Feedback/Perfil-5-Amanda-Medeiros.png',
      name: 'Amanda Medeiros',
      testimonial: 'Muito obrigada Jana. Gratidão por todo carinho e cuidado! Nem nos meus sonhos imaginei estar com a pele tão linda e bem cuidada, não sei o que seria de mim sem o seu acompanhamento. Gratidão! 💜',
  },

  {
    image: './src/imagens/Feedback/Perfil-6-sem-nome.png',
    name: 'Ana Boazal',
    testimonial: 'E eu que recebi uma mensagem, a pessoa perguntando se o meu resultado foi realmente bom? Certeza que a pessoa achou que a sua foto tinha Photoshop hahaha contei toda a verdade pra ela, é real esse depois simm ',
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
let startX = 0; // Posição inicial do toque
let endX = 0;   // Posição final do toque

// Detecta o início do toque
container.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX; // Armazena a posição inicial do toque
});

// Detecta o movimento do toque
container.addEventListener('touchmove', (event) => {
  endX = event.touches[0].clientX; // Atualiza a posição final enquanto o dedo se move
});

// Detecta o fim do toque
container.addEventListener('touchend', () => {
  const deltaX = endX - startX; // Calcula a diferença entre o início e o fim do toque

  if (Math.abs(deltaX) > 50) { // Define um limite mínimo para considerar o swipe
    if (deltaX > 0) {
      mudarSlideFeedback(-1); // Swipe para a direita
    } else {
      mudarSlideFeedback(1);  // Swipe para a esquerda
    }
  }

  // Reseta as variáveis
  startX = 0;
  endX = 0;
});


// Muda o índice e atualiza os cards
function mudarSlideFeedback(direction) {
  currentIndex = (currentIndex + direction + testimonials.length) % testimonials.length;
  renderCards();
}

// Atualiza os cards ao redimensionar a tela
window.addEventListener('resize', renderCards);

// Inicializa a renderização dos cards
renderCards();
