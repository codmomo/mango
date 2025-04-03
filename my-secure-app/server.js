// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve i file statici dalla cartella "public"
app.use(express.static(path.join(__dirname, 'public')));

// Middleware per leggere il body in formato JSON
app.use(express.json());

// Rotta principale: invia il file index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint API per il form di prenotazione (esempio)
app.post('/api/prenota', (req, res) => {
  const { nome, email, telefono, ...altriDati } = req.body;
  // Inserisci qui logica, validazione e salvataggio su DB
  console.log("Prenotazione ricevuta:", req.body);
  res.json({ success: true, message: "Prenotazione ricevuta!" });
});

// Imposta la porta (Vercel usa process.env.PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
