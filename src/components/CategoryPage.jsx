import { useEffect, useState } from "react"

import ProductCard from "./ProductCard"

import { Search } from "lucide-react"

export default function CategoryPage({
  title,
  products,
  addToCart,
  addToFavorites,
  setIsFavoritesOpen,
  setSelectedProduct
  
}) {

  const [search, setSearch] = useState("")

  useEffect(() => {
    setSearch("")
  }, [products])

  const filteredProducts = products.filter((product) => {

    const searchTerm = search.trim().toLowerCase()

    return (
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm) ||
      product.color.toLowerCase().includes(searchTerm)
    )

  })

  return (

    <section
      className="
        max-w-[1480px]
        mx-auto
        w-full

        pt-0
        pb-28
      "
    >

      {/* TOPO */}
      <div
        className="
          flex
          flex-col
          gap-8

          lg:flex-row
          lg:items-end
          lg:justify-between

          mb-28
        "
      >

        {/* TEXTOS */}
        <div className="max-w-[500px]">

          <span
            className="
              text-[10px]
              tracking-[0.45em]
              uppercase

              text-white/40
            "
          >
            Coleção
          </span>

          <h2
            className="
              mt-2

              text-[58px]
              leading-[0.95]

              font-serif
              text-white

              capitalize
            "
          >
            {title}
          </h2>

          <p
            className="
              mt-1

              text-[15px]
              text-white/45
            "
          >
            {filteredProducts.length} peças
          </p>

        </div>

        {/* BUSCA */}
        <div
          className="
            flex
            items-center

            h-[52px]
            min-w-[min(100%,22rem)]

            gap-4

            rounded-full
            border
            border-white/10

            bg-white/5

            pl-8
            pr-6

            sm:min-w-[20rem]
          "
        >

          <Search
            size={16}
            strokeWidth={1.8}
            className="
              shrink-0
              text-white/40
            "
          />

          <input
            type="search"
            placeholder="Buscar produtos"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              min-w-0
              flex-1

              bg-transparent
              outline-none

              text-[15px]
              text-white

              placeholder:text-white/30
            "
          />

        </div>

      </div>

      {/* ESPAÇO EDITORIAL */}
<div className="h-16 md:h-20" />

      {/* PRODUTOS */}
      <div
        className="
          grid

          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4

          gap-x-5
          gap-y-16

          xl:gap-x-6
          xl:gap-y-20

          pt-8 

        "
      >

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (
            
<ProductCard
  key={product.id}
  image={product.image}
  name={product.name}
  color={product.color}
  price={product.price}
  addToCart={addToCart}
  addToFavorites={addToFavorites}
  setIsFavoritesOpen={setIsFavoritesOpen}
  product={product}
  setSelectedProduct={setSelectedProduct}
/>

          ))

        ) : (

          <p className="col-span-full py-16 text-center text-white/45">
            Nenhum produto encontrado.
          </p>

        )}

      </div>

    </section>
  )

}