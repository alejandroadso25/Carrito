import { useEffect, useState } from 'react'
import { obtenerProductos } from '../data/products'
import { useCarrito } from '../store/useCarrito'

function ListProducts() {
  // Guardamos el catálogo y el estado de la petición.
  const [products, setProducts] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  const agregarProducto = useCarrito((state) => state.agregarProducto)

  // Consultamos la API una vez al cargar la lista.
  useEffect(() => {
    obtenerProductos()
      .then(setProducts)
      .catch((errorCarga) => setError(errorCarga.message))
      .finally(() => setCargando(false))
  }, [])

  return (
    <section className="panel">
      <h2>Productos</h2>

      {cargando && <p className="estado">Cargando productos...</p>}

      {!cargando && error && <p className="estado estado-error">{error}</p>}

      {/* La API devuelve el nombre en title y el precio en price. */}
      {!cargando && !error && products.map((product) => (
        <div key={product.id} className="fila">
          <div>
            <p className="fila-nombre">{product.title}</p>
            <p className="fila-detalle">${product.price.toLocaleString('es-CO')}</p>
          </div>

          <button className="btn btn-primario" onClick={() => agregarProducto(product)}>
            Agregar
          </button>
        </div>
      ))}
    </section>
  )
}

export default ListProducts