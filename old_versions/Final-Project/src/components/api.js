export async function createProject(formData) {
  try {
    const response = await fetch("http://localhost:5050/api/project", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error("Erreur backend: " + errorText);
    }

    return await response.json();
  } catch (err) {
    console.error("Erreur réseau ou backend:", err);
    throw err;
  }
}
