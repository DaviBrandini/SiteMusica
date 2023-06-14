function obterUltimasMusicas() {
    
    const ultimasMusicas = [
      { id: 1, nome: 'Música 1', artista: 'Artista 1' },
      { id: 2, nome: 'Música 2', artista: 'Artista 2' },
      { id: 3, nome: 'Música 3', artista: 'Artista 3' }
    ];
  
    const ultimasMusicasElement = document.getElementById('ultimasMusicas');
  
    ultimasMusicas.forEach(musica => {
      const div = document.createElement('div');
      div.innerHTML = `<img src="caminho/para/imagem/${musica.id}.jpg" alt="${musica.nome}">
                       <h3>${musica.nome}</h3>
                       <p>${musica.artista}</p>`;
      ultimasMusicasElement.appendChild(div);
    });
  }
  
  function obterArtistasDestaque() {
    const artistasDestaque = [
      { id: 1, nome: 'Artista 1' },
      { id: 2, nome: 'Artista 2' },
      { id: 3, nome: 'Artista 3' }
    ];
  
    const artistasDestaqueElement = document.getElementById('artistasDestaque');
  
    artistasDestaque.forEach(artista => {
      const div = document.createElement('div');
      div.innerHTML = `<img src="caminho/para/imagem/${artista.id}.jpg" alt="${artista.nome}">
                       <h3>${artista.nome}</h3>`;
      artistasDestaqueElement.appendChild(div);
    });
  }
  
  
  function enviarContato(event) {
    event.preventDefault(); 
  
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
  
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Mensagem: ${mensagem}`);
  
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    obterUltimasMusicas();
    obterArtistasDestaque();
  
    const contatoForm = document.getElementById('contatoForm');
    contatoForm.addEventListener('submit', enviarContato);
  });