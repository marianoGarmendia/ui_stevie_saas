export const getAudio = async () => {
  // Realizar la solicitud al backend
  const response = await fetch("http://localhost:3000/generate-audio", {
    method: "POST",
    body: JSON.stringify({
      /* Datos necesarios si los hay */
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Error al generar el audio");
  }

  // Convertir la respuesta a Blob
  // const blob = await response.blob();

  // Crear una URL temporal para el archivo, esta url la puedo colocar en un campo para descargar
  // const url = URL.createObjectURL(blob);
};
