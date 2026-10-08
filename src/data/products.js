// Obtiene los productos de Fake Store API.
export async function obtenerProductos() {
  const respuesta = await fetch('https://fakestoreapi.com/products')

  if (!respuesta.ok) {
    throw new Error(`No se pudieron cargar los productos (${respuesta.status}).`)
  }

  return respuesta.json()
}
