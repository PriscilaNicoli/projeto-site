function mostrarDetalhes(material) {
  const detalhesSection = document.getElementById('pagina-detalhes');
  const conteudo = document.getElementById('conteudo-pagina-detalhes');
  const materiaisSection = document.getElementById('materiais');
  const apresentacaoSection = document.querySelector('.apresentacao');
  const bannerSection = document.querySelector('.banner');
  const cabecalho = document.querySelector('header.cabecalho');

  // Esconde as seções principais
  cabecalho.style.display = 'none';
  bannerSection.style.display = 'none';
  apresentacaoSection.style.display = 'none';
  materiaisSection.style.display = 'none';

  let texto = '';

  switch(material) {
    case 'arduino':
      texto = `
        <h2>Detalhes do Arduino Uno</h2>
        <p>Este é um texto de exemplo para o Arduino. Aqui você pode colocar todas as informações, imagens e links que quiser.</p>
      `;
      break;

    case 'material2':
      texto = `
        <h2>Detalhes do Material 2</h2>
        <p>Texto de exemplo para o Material 2.</p>
      `;
      break;

    case 'material3':
      texto = `
        <h2>Detalhes do Material 3</h2>
        <p>Texto de exemplo para o Material 3.</p>
      `;
      break;

    case 'material4':
      texto = `
        <h2>Detalhes do Material 4</h2>
        <p>Texto de exemplo para o Material 4.</p>
      `;
      break;

    default:
      texto = `<p>Detalhes não encontrados.</p>`;
  }

  conteudo.innerHTML = texto;
  detalhesSection.style.display = 'block';
}

function voltarPagina() {
  const detalhesSection = document.getElementById('pagina-detalhes');
  const materiaisSection = document.getElementById('materiais');
  const apresentacaoSection = document.querySelector('.apresentacao');
  const bannerSection = document.querySelector('.banner');
  const cabecalho = document.querySelector('header.cabecalho');

  detalhesSection.style.display = 'none';

  // Mostra as seções principais novamente
  cabecalho.style.display = 'flex';
  bannerSection.style.display = 'block';
  apresentacaoSection.style.display = 'block';
  materiaisSection.style.display = 'block';
}


