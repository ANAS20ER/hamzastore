const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function fetchCars() {
  try {
    const response = await fetch(`${API_URL}/api/cars`);
    if (!response.ok) {
      throw new Error(`حدث خطأ: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("فشل في جلب السيارات:", error);
    throw error;
  }
}
