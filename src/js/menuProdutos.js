const mostrarDialogoBtn = document.getElementById('mostrarProdutos');
const caixaDialogo = document.getElementById('caixaProdutos');
let caixaVisivel = false;

mostrarDialogoBtn.addEventListener('click', () => {
    if (caixaVisivel) {
        caixaDialogo.style.display = 'none';
        caixaVisivel = false;
    } else {
        caixaDialogo.style.display = 'block';
        caixaVisivel = true;

        setTimeout(() => {
            caixaDialogo.style.display = 'none';
            caixaVisivel = false;
        }, 5000); 
    }
});
