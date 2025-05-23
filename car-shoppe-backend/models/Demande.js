const mongoose = require('mongoose');

const DemandeSchema = new mongoose.Schema({
  prenom: { type: String, required: true },
  nom: { type: String, required: true },
  telephone: { type: String, required: true },
  message: { type: String, required: false },
  dateCreation: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Demande', DemandeSchema);
// const mongoose = require('mongoose');