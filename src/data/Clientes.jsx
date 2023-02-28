export async function obtenerClientes() {
  const respuesta = await fetch(process.env.REACT_APP_API_URL);
  const resultado =  await respuesta.json();
  return resultado
}
