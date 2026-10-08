import { useCarrito } from '../store/useCarrito'

function Carrito() {
  // Leemos del store los productos y las acciones para administrarlos.
  const items = useCarrito((state) => state.items)
  const eliminarProducto = useCarrito((state) => state.eliminarProducto)
  const vaciarCarrito = useCarrito((state) => state.vaciarCarrito)

  // Calculamos el importe considerando el precio y la cantidad de cada producto.
  const total = items.reduce((suma, item) => suma + item.price * item.cantidad, 0)

  // Si no hay productos, mostramos el estado vacío en lugar del detalle del carrito.
  if (items.length === 0) {
    return (
      <section className="panel">
        <h2>Carrito</h2>
        <p className="vacio">Tu carrito está vacío</p>
      </section>
    )
  }

  return (
    <section className="panel">
      <h2>Carrito</h2>

      {items.map((item) => (
        <div key={item.id} className="fila">
          <div>
            <p className="fila-nombre">{item.name}</p>
            <p className="fila-detalle">
              {item.cantidad} x ${item.price.toLocaleString('es-CO')}
            </p>
          </div>

          <button className="btn btn-secundario" onClick={() => eliminarProducto(item.id)}>
            Quitar
          </button>
        </div>
      ))}

      <div className="total">
        <span>Total</span>
        <strong>${total.toLocaleString('es-CO')}</strong>
      </div>

      <button className="btn btn-secundario btn-bloque" onClick={vaciarCarrito}>
        Vaciar carrito
      </button>
    </section>
  )
}

export default Carrito