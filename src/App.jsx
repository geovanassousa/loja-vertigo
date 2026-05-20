import Navbar from "./components/Navbar"
import CategoryPage from "./components/CategoryPage"

export default function App() {
  return (
    <div className="min-h-screen bg-[#06152B] text-white">

      <Navbar />

      <main className="main-below-fixed-nav page-horizontal-gutter">
        <CategoryPage />
      </main>

    </div>
  )
}