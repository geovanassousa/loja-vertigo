import { useState } from "react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CategoryPage from "./components/CategoryPage"
import CartDrawer from "./components/CartDrawer"

import {
  shirts,
  jackets,
  shorts,
  pants,
  accessories,
} from "./data/products"

export default function App() {

  const [activeCategory, setActiveCategory] =
    useState("camisas")

  // SACOLA
  const [cartItems, setCartItems] = useState([])

  // MODAL ABERTO
  const [isCartOpen, setIsCartOpen] =
    useState(false)

  // ADICIONAR PRODUTO
  function addToCart(product) {
    setCartItems([...cartItems, product])
  }

  // REMOVER PRODUTO
  function removeFromCart(index) {
    const updatedCart = cartItems.filter(
      (_, i) => i !== index
    )

    setCartItems(updatedCart)
  }

  const categories = {
    camisas: shirts,
    casacos: jackets,
    shorts: shorts,
    calcas: pants,
    acessorios: accessories,
  }

  return (

    <div className="min-h-screen bg-[#06152B] text-white">

      <Navbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setIsCartOpen={setIsCartOpen}
      />

      <main className="main-below-fixed-nav page-horizontal-gutter">

        <CategoryPage
          title={activeCategory}
          products={categories[activeCategory]}
          addToCart={addToCart}
        />

      </main>

      {/* ESPAÇO EDITORIAL */}
      <div className="h-32 md:h-44 xl:h-48" />

      <CartDrawer
  isCartOpen={isCartOpen}
  setIsCartOpen={setIsCartOpen}
  cartItems={cartItems}
  removeFromCart={removeFromCart}
/>

      <Footer />

    </div>

  )
}