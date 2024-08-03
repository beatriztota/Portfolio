const habilidades = document.querySelectorAll('.habilidade');

const descricaoTexto = document.querySelector('.habilidade-texto');

habilidades.forEach(habilidade => {
  habilidade.addEventListener('mouseover', () => {
    descricaoTexto.textContent = habilidade.getAttribute('data-text');
    
    document.querySelector('.descricao-container').style.display = 'block';
  });

  habilidade.addEventListener('mouseout', () => {
    document.querySelector('.descricao-container').style.display = 'none';
  });
});




