import { useState } from "react"
import { Heart } from "lucide-react"

export default function ProductCard({
  image,
  name,
  color,
  price,
  product,
  addToCart,
  addToFavorites,
  setIsFavoritesOpen,
  setSelectedProduct
}) {

  const [favorite, setFavorite] = useState(false)

  return (

    <div className="group w-full">

      {/* CARD */}
      <div
        onClick={(e) => {
          if (e.target.tagName !== "BUTTON") {
            setSelectedProduct(product)
          }
        }}
        className="
          relative
          bg-[#081426]
          rounded-[28px]
          overflow-hidden
        "
      >

        {/* ÁREA DA FOTO */}
        <div
          className="
            relative
            m-4

            overflow-hidden

            rounded-2xl
            md:rounded-3xl

            bg-[#0a1628]
          "
        >

          {/* FAVORITO */}
          <button
  type="button"
  onClick={(e) => {
    e.stopPropagation()
    addToFavorites(product)
     setFavorite(true)
     }}
            className="
              absolute
              top-5
              right-5
              z-20

              flex
              items-center
              justify-center

              w-9
              h-9

              rounded-full

              bg-black/30
              backdrop-blur-md

              transition-all
              duration-300

              hover:bg-black/40
            "
          >

            <Heart
              size={16}
              strokeWidth={1.8}
              className={`
                transition-all
                duration-300

                ${
                  favorite
                    ? "fill-white text-white"
                    : "text-white/85 hover:text-white"
                }
              `}
            />

          </button>

          {/* IMAGEM */}
          <div
            className="
              flex

              h-[290px]
              md:h-[268px]
              xl:h-[280px]

              items-center
              justify-center

              px-4
              py-3
            "
          >

            <img
              src={image}
              alt={name}
              className="
                max-h-full
                max-w-full

                object-contain

                rounded-xl
                md:rounded-2xl

                transition-all
                duration-500

                group-hover:scale-[1.02]
              "
            />

          </div>

        </div>

        {/* BOTÃO */}
        <div
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2

            opacity-0
            translate-y-3

            group-hover:opacity-100
            group-hover:translate-y-0

            transition-all
            duration-300
          "
        >

          <button
            type="button"
            onClick={(e) => {
            e.stopPropagation()
          addToCart(product) }}
            className="
              w-[min(92%,18.5rem)]
              min-w-[13.5rem]

              h-9
              px-6

              rounded-full

              bg-white
              text-black

              text-[10px]
              md:text-[11px]

              uppercase

              tracking-[0.18em]
              md:tracking-[0.2em]

              whitespace-nowrap

              flex
              items-center
              justify-center
            "
          >
            Adicionar à sacola
          </button>

        </div>

      </div>

      {/* INFORMAÇÕES */}
      <div className="mt-3 px-1">

        <div className="flex items-start justify-between gap-3">

          <div>

            <h3
              className="
                text-[14px]
                font-normal
                leading-tight

                text-white
              "
            >
              {name}
            </h3>

            <p
              className="
                mt-[2px]

                text-[12px]
                text-white/40
              "
            >
              {color}
            </p>

          </div>

          <p
            className="
              whitespace-nowrap

              text-[15px]
              font-normal

              text-white/90
            "
          >
            R$ {price}
          </p>

        </div>

      </div>

    </div>

  )

}