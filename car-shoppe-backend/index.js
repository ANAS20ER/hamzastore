/*console.log("🚀 Démarrage du backend...");
require('dotenv').config();

// Importation المكتبات
const express = require('express');
const mongoose = require('mongoose');
const Demande = require('./models/Demande');

const app = express();
const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/carshoppe';

// فك تشفير JSON في الطلبات
app.use(express.json());

// مسار استقبال طلبات "Demande de rappel"
app.post('/api/demandes', async (req, res) => {
  try {
    const { prenom, nom, telephone, message } = req.body;
    const demande = new Demande({ prenom, nom, telephone, message });
    await demande.save();
    res.status(201).json({ message: 'Demande enregistrée avec succès' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// مسار بسيط للترحيب
app.get('/', (req, res) => {
  console.log('✅ Requête GET reçue sur /');
  res.send('🚗 Bienvenue dans Car Shoppe Backend!');
});
// بيانات السيارات
const cars = [
  { nom: "Clio", marque: "Renault" },
  { nom: "308", marque: "Peugeot" },
  { nom: "Golf", marque: "Volkswagen" },
];

// مسار لجلب قائمة السيارات
app.get('/api/cars', (req, res) => {
  res.json(cars);
});

// الاتصال بقاعدة البيانات MongoDB
mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// تشغيل السيرفر
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Le backend est en cours d'exécution sur http://0.0.0.0:${PORT}`);
});


// مسار لجلب جميع Demandes de rappel
app.get('/api/demandes', async (req, res) => {
  try {
    const demandes = await Demande.find();
    res.json(demandes);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des demandes' });
  }
});
*/
console.log("🚀 Démarrage du backend...");
require('dotenv').config();

// 📦 Importation des bibliothèques
const express = require('express');
const mongoose = require('mongoose');
const Demande = require('./models/Demande');

const app = express();
const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/carshoppe';

// 🧠 Middleware pour parser le JSON
app.use(express.json());

// 📬 Route POST pour enregistrer une demande de rappel
app.post('/api/demandes', async (req, res) => {
  try {
    const { prenom, nom, telephone, message } = req.body;
    const demande = new Demande({ prenom, nom, telephone, message });
    await demande.save();
    res.status(201).json({ message: 'Demande enregistrée avec succès' });
  } catch (err) {
    console.error('Erreur lors de l\'enregistrement :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ✅ Route GET pour l'accueil
app.get('/', (req, res) => {
  console.log('✅ Requête GET reçue sur /');
  res.send('🚗 Bienvenue dans Car Shoppe Backend!');
});

// 🚗 Liste statique des voitures
const cars = [
  { nom: "Clio", marque: "Renault" },
  { nom: "308", marque: "Peugeot" },
  { nom: "Golf", marque: "Volkswagen" },
];

// 🔍 Route GET pour obtenir la liste des voitures
app.get('/api/cars', (req, res) => {
  res.json(cars);
});

// 📂 Route GET pour obtenir toutes les demandes de rappel
app.get('/api/demandes', async (req, res) => {
  try {
    const demandes = await Demande.find();
    res.json(demandes);
  } catch (err) {
    console.error('Erreur récupération demandes :', err);
    res.status(500).json({ error: 'Erreur lors de la récupération des demandes' });
  }
});

// 🌐 Connexion à MongoDB
mongoose.connect(mongoUri)
  .then(() => {
    console.log('✅ Connected to MongoDB!');

    // 🚀 Démarrage du serveur seulement après connexion à MongoDB
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`✅ Le backend est en cours d'exécution sur http://0.0.0.0:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

  app.get('/api/demandes', async (req, res) => {
    try {
      const demandes = await Demande.find();
      res.json(demandes);
    } catch (err) {
      res.status(500).json({ error: 'Erreur lors de la récupération des demandes' });
    }
  });
  

