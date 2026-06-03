import { useState } from "react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CategoryPage from "./components/CategoryPage"
import CartDrawer from "./components/CartDrawer"
import FavoritesDrawer from "./components/FavoritesDrawer"
import ProductPage from "./components/ProductPage"
import Home from "./pages/Home"

import {
  shirts,
  jackets,
  shorts,
  pants,
  accessories,
} from "./data/products"

export default function App() {
  const [isHome, setIsHome] = useState(true)
  const [activeCategory, setActiveCategory] = useState("camisas")
  const [selectedProduct, setSelectedProduct] = useState(null)

  const [cartItems, setCartItems] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])

  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  function addToCart(product) {
    setCartItems([...cartItems, product])
  }

  function removeFromCart(index) {
    setCartItems(cartItems.filter((_, i) => i !== index))
  }

  function addToFavorites(product) {
    const alreadyExists = favoriteItems.some(
      item => item.id === product.id
    )

    if (alreadyExists) return

    setFavoriteItems([
      ...favoriteItems,
      product
    ])
  }

  function removeFavorite(index) {
    setFavoriteItems(
      favoriteItems.filter((_, i) => i !== index)
    )
  }

  function goHome() {
    setIsHome(true)
    setSelectedProduct(null)
  }

  function changeCategory(category) {
    setActiveCategory(category)
    setSelectedProduct(null)
    setIsHome(false)
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
        setActiveCategory={changeCategory}
        setIsCartOpen={setIsCartOpen}
        setIsFavoritesOpen={setIsFavoritesOpen}
        goHome={goHome}
        setIsHome={setIsHome}
        setSelectedProduct={setSelectedProduct}
      />

      <main className="main-below-fixed-nav page-horizontal-gutter">

        {isHome ? (
          <Home
            setIsHome={setIsHome}
            setActiveCategory={setActiveCategory}
          />
        ) : selectedProduct ? (
          <ProductPage
            product={selectedProduct}
            addToCart={addToCart}
            addToFavorites={addToFavorites}
            setSelectedProduct={setSelectedProduct}
          />
        ) : (
          <CategoryPage
            title={activeCategory}
            products={categories[activeCategory]}
            addToCart={addToCart}
            addToFavorites={addToFavorites}
            setSelectedProduct={setSelectedProduct}
            setIsFavoritesOpen={setIsFavoritesOpen}
          />
        )}

      </main>

      <div className="h-32 md:h-44 xl:h-48" />

      <FavoritesDrawer
        isFavoritesOpen={isFavoritesOpen}
        setIsFavoritesOpen={setIsFavoritesOpen}
        favoriteItems={favoriteItems}
        removeFavorite={removeFavorite}
      />

      <CartDrawer
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />

      <Footer
       goHome={goHome}
  setIsFavoritesOpen={setIsFavoritesOpen}
/>

    </div>
  )
}