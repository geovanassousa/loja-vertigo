import logo from "../assets/logo.png"
import { Heart, ShoppingBag } from "lucide-react"

export default function Navbar({
  activeCategory,
  setActiveCategory,
  setIsCartOpen,
  setIsFavoritesOpen,
  goHome,
  setSelectedProduct,
  setIsHome
}) {

  const categories = [
    { label: "Casacos", value: "casacos" },
    { label: "Camisas", value: "camisas" },
    { label: "Calças", value: "calcas" },
    { label: "Shorts", value: "shorts" },
    { label: "Acessórios", value: "acessorios" },
  ]

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-20 bg-[#041120]/65">

      <div className="flex items-center justify-between h-full px-6">

        {/* LOGO */}
        <img
          src={logo}
          alt="logo"
          className="h-16 cursor-pointer"
          onClick={goHome}
        />

        {/* MENU */}
        <div className="flex gap-6">

          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => {
                setActiveCategory(category.value)
                setSelectedProduct(null)
                setIsHome(false)
              }}
              className={
                activeCategory === category.value
                  ? "text-white"
                  : "text-white/50"
              }
            >
              {category.label}
            </button>
          ))}

        </div>

        {/* ICONS */}
        <div className="flex gap-4">

          <button onClick={() => setIsFavoritesOpen(true)}>
            <Heart />
          </button>

          <button onClick={() => setIsCartOpen(true)}>
            <ShoppingBag />
          </button>

        </div>

      </div>
    </header>
  )
}