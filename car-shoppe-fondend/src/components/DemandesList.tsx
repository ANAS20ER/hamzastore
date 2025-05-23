import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const DemandeForm = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const res = await fetch(`${API_URL}/api/demandes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ prenom: "", nom: "", telephone: "", message: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Erreur lors de l'envoi.");
      }
    } catch (err) {
      setError("Erreur réseau.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">📞 Demande de Rappel</h2>

      {success && <p className="text-green-600 mb-4">✅ Demande envoyée avec succès !</p>}
      {error && <p className="text-red-600 mb-4">❌ {error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Prénom</label>
          <input
            type="text"
            name="prenom"
            placeholder="Votre prénom"
            className="w-full border px-3 py-2 rounded"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Nom</label>
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            className="w-full border px-3 py-2 rounded"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Téléphone</label>
          <input
            type="tel"
            name="telephone"
            placeholder="Votre numéro de téléphone"
            className="w-full border px-3 py-2 rounded"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Comment pouvons-nous vous aider?"
            className="w-full border px-3 py-2 rounded"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Envoyer ma demande
        </button>
      </form>
    </div>
  );
};

export default DemandeForm;
