// src/services/demandeService.ts

export interface Demande {
    _id: string;
    prenom: string;
    nom: string;
    telephone: string;
    message: string;
    createdAt?: string;
  }
  
  const API_URL = import.meta.env.VITE_API_URL;
  
  export const getAllDemandes = async (): Promise<Demande[]> => {
    try {
      const response = await fetch(`${API_URL}/api/demandes`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des demandes:', error);
      return [];
    }
  };
  