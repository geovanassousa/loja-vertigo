import { useState } from "react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CategoryPage from "./components/CategoryPage"
import CartDrawer from "./components/CartDrawer"
import FavoritesDrawer from "./components/FavoritesDrawer"
import ProductPage from "./components/ProductPage"

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

  const [selectedProduct, setSelectedProduct] =
  useState(null)

  // SACOLA
  const [cartItems, setCartItems] = useState([])

  const [favoriteItems, setFavoriteItems] = useState([])
  const [isFavoritesOpen,
  setIsFavoritesOpen] =
  useState(false)

  // MODAL ABERTO
  const [isCartOpen, setIsCartOpen] =
    useState(false)

  // ADICIONAR PRODUTO
  function addToCart(product) {
    setCartItems([...cartItems, product])
  }

  // FAVORITOS
function addToFavorites(product) {

  const alreadyExists =
    favoriteItems.some(
      item => item.id === product.id
    )

  if (alreadyExists) return

  setFavoriteItems([
    ...favoriteItems,
    product
  ])

}
  // REMOVER PRODUTO
  function removeFromCart(index) {
    const updatedCart = cartItems.filter(
      (_, i) => i !== index
    )

    setCartItems(updatedCart)
  }

  function removeFavorite(index) {

  const updatedFavorites =
    favoriteItems.filter(
      (_, i) => i !== index
    )

  setFavoriteItems(
    updatedFavorites
  )

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
  setIsFavoritesOpen={setIsFavoritesOpen}
/>

      <main className="main-below-fixed-nav page-horizontal-gutter">

  {!selectedProduct ? (

    <CategoryPage
      title={activeCategory}
      products={categories[activeCategory]}
      addToCart={addToCart}
      addToFavorites={addToFavorites}
      setSelectedProduct={setSelectedProduct}
      setIsFavoritesOpen={setIsFavoritesOpen}
    />

  ) : (

    <ProductPage
  product={selectedProduct}
  addToCart={addToCart}
  addToFavorites={addToFavorites}
  setSelectedProduct={setSelectedProduct}
/>

  )}

</main>

      {/* ESPAÇO EDITORIAL */}
      <div className="h-32 md:h-44 xl:h-48" />

      <FavoritesDrawer
  isFavoritesOpen={
    isFavoritesOpen
  }
  setIsFavoritesOpen={
    setIsFavoritesOpen
  }
  favoriteItems={
    favoriteItems
  }
  removeFavorite={
    removeFavorite
  }
/>

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

