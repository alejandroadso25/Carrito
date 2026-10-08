// Importamos los tres componentes de la tienda
import Header from './components/header'
import  ListProducts from './components/listproducts'
import Carrito from './components/carrito'
import './App.css'

// Componente principal de la aplicación
function App() {
  return (
    <div className="app">
      <Header />
      <main className="contenido">
        <ListProducts />
        <Carrito />
      </main>
    </div>
  )
}

export default App