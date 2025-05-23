const mongoose = require('mongoose');
const Demande = require('../models/Demande');

const mongoUri = 'mongodb://localhost:27017/carshoppe';

mongoose.connect(mongoUri).then(async () => {
  console.log("🌱 Insertion de données de test...");
  await Demande.insertMany([
    {
      prenom: "Soufiane",
      nom: "El Aoufi",
      telephone: "0611111111",
      message: "Je suis intéressé par la Clio"
    },
    {
      prenom: "Oumaima",
      nom: "Zaid",
      telephone: "0622222222",
      message: "Merci de me contacter rapidement"
    }
  ]);
  console.log("✅ Données insérées !");
  mongoose.disconnect();
});
