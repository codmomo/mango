function loadContent(section) {
  // Carica il file fullcontent.html tramite fetch
  fetch('fullcontent.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Errore nel caricamento del contenuto');
      }
      return response.text();
    })
    .then(html => {
      // Inserisce il contenuto caricato nell'elemento con id "dynamic-content"
      document.getElementById('dynamic-content').innerHTML = html;
      // Se è stato specificato un id di sezione, scrolla in quella sezione
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById('dynamic-content').innerHTML = '<p>Errore nel caricamento del contenuto.</p>';
    });
}

// Carica la sezione "home" di default all'avvio
document.addEventListener('DOMContentLoaded', function() {
  loadContent('home');
});
