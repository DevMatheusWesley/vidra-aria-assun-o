let currentIndex = 0;
        const images = document.querySelectorAll('.carousel img');
        const totalImages = images.length;

        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % totalImages;
            images[currentIndex].classList.add('active');
        }

        setInterval(showNextImage, 3500);


        // Mostrar/Esconder botão de rolagem para cima
window.onscroll = function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

// Ação do botão de rolagem para cima
document.querySelector('.scroll-to-top').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});


function toggleMenu() {
    const sidebar = document.getElementById('sidebarMenu');
    sidebar.classList.toggle('show');
}

// Função para exibir o menu
function showChatbotMenu() {
    document.getElementById('chatbot-menu').style.display = 'block';
}

// Função para fechar o menu
function closeChatbotMenu() {
    document.getElementById('chatbot-menu').style.display = 'none';
}

// Função para navegação
function navigateTo(url) {
    window.location.href = url;
}
