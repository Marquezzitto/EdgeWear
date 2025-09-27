let currentSlide = 0;
const carousel = document.getElementById('productCarousel');
const cards = document.querySelectorAll('.product-card');
const totalCards = cards.length;

// Função para calcular cards por vista (3 para desktop, 1 para mobile)
function getCardsPerView() {
    return window.innerWidth > 768 ? 3 : 1;
}

function updateCarousel() {
    const cardsPerView = getCardsPerView();
    // 32px é a margem total (1rem de margem à esquerda e 1rem à direita)
    const cardWidth = cards.length > 0 ? cards[0].offsetWidth + 32 : 332; 
    carousel.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

function nextSlide() {
    const cardsPerView = getCardsPerView();
    const maxSlide = totalCards - cardsPerView;
    currentSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
    updateCarousel();
}

function prevSlide() {
    const cardsPerView = getCardsPerView();
    const maxSlide = totalCards - cardsPerView;
    currentSlide = currentSlide <= 0 ? maxSlide : currentSlide - 1;
    updateCarousel();
}

// Inicializa o carrossel e o auto-play
updateCarousel();
// Auto-play (descomente se quiser ativá-lo)
// setInterval(nextSlide, 4000); 

function addToCart(productName) {
    alert(`${productName} adicionado ao carrinho!`);
    // Lógica real para atualizar o carrinho no backend
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const currentCount = parseInt(cartCount.textContent);
    cartCount.textContent = currentCount + 1;
}

function toggleProfile() {
    alert('Área do usuário - aqui você pode fazer login ou criar uma conta!');
    // Lógica para abrir modal/página de login
}

function scrollToProducts() {
    document.getElementById('produtos').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function filterCategory(category) {
    alert(`Filtrar produtos da categoria: ${category}`);
    // Lógica de filtro real
}

// Responsividade do carrossel ao redimensionar a janela
window.addEventListener('resize', () => {
    currentSlide = 0; // Reinicia o slide no redimensionamento
    updateCarousel();
});


// Animação de scroll suave para links da navbar
document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});