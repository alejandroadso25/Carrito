import { create } from 'zustand'

// Store compartido que mantiene los productos y las acciones del carrito.
export const useCarrito = create((set) => ({
  items: [],

  // Si el producto ya está en el carrito, aumentamos su cantidad; si no, lo agregamos.
  agregarProducto: (product) =>
    set((state) => {
      const existe = state.items.find((item) => item.id === product.id)

      if (existe) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
        }
      }

      return {
        items: [...state.items, { ...product, cantidad: 1 }],
      }
    }),

  // Quitamos del carrito el producto que coincide con el identificador recibido.
  eliminarProducto: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  // Reiniciamos el carrito eliminando todos sus productos.
  vaciarCarrito: () => set({ items: [] }),
}))

// Alias disponible para los componentes que consumen el store con este nombre.
export const useCarritoStore = useCarrito
