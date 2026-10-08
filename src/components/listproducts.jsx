import { products } from '../data/products'
import { useCarrito } from '../store/useCarrito'

function ListProducts() {
  // Obtenemos del store la acción para agregar productos al carrito.
  const agregarProducto = useCarrito((state) => state.agregarProducto)

  return (
    <section className="panel">
      <h2>Productos</h2>

      {/* Mostramos cada producto del catálogo con su precio y botón de agregado. */}
      {products.map((product) => (
        <div key={product.id} className="fila">
          <div>
            <p className="fila-nombre">{product.name}</p>
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