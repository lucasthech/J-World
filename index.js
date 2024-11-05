let img = document.getElementsByClassName('download-button')[0];
let landscape = document.getElementsByClassName('landscape')[0];

function ajustarImagem() {
    if (window.innerWidth < 768) {
        img.style.display = 'none';
        document.getElementsByClassName('description2')[0].style.fontSize = '25px';
        document.getElementsByClassName('description')[0].style.fontSize = '18px';
        document.getElementsByClassName('image-container')[0].style.display = 'none';
    } else {
        img.style.display = 'block';
        document.getElementsByClassName('description2')[0].style.display = 'none';

        // Ajustar imagem para encher a tela em resoluções maiores
        landscape.style.height = '100vh';
        landscape.style.width = 'auto';
        landscape.style.objectFit = 'cover'; // Garante que a imagem preencha sem distorcer
        landscape.style.objectPosition = 'top'; // Mantém o topo da imagem visível
        document.getElementsByClassName('description')[0].style.fontSize = '25px';
        document.getElementsByClassName('description')[0].style.bottom = '80px';
    }
}

ajustarImagem();
window.addEventListener('resize', ajustarImagem); // Atualiza a imagem ao redimensionar a tela
