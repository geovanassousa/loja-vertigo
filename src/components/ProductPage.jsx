import { useState } from "react"
import { Heart } from "lucide-react"

export default function ProductPage({
  product,
  addToCart,
  addToFavorites,
  setSelectedProduct
}) {

  const [imagemAtual, setImagemAtual] =
    useState(product.image)

  const [tamanhoSelecionado,
    setTamanhoSelecionado] =
    useState("")
    const [mostrarFormulario,
  setMostrarFormulario] =
  useState(false)

  function adicionarCarrinho() {

    if (!tamanhoSelecionado) {
      alert("Escolha um tamanho!")
      return
    }

    addToCart({
      ...product,
      tamanho: tamanhoSelecionado
    })

    alert("Produto adicionado!")
  }

  return (

  <section className="text-white pt-10">

    <button
  onClick={() =>
    setSelectedProduct(null)
  }
  className="
    mb-10

    flex
    items-center
    gap-3

    px-7
    h-12

    rounded-full

    bg-[#0D1D34]
    border
    border-white/10

    text-white/85
    text-[13px]
    tracking-[0.12em]
    uppercase

    transition-all
    duration-300

    hover:bg-white
    hover:text-black
    hover:scale-[1.02]

    shadow-[0_0_25px_rgba(255,255,255,0.03)]
  "
>
  <span className="text-lg">
    ←
  </span>

  Continuar comprando
</button>

    <div
      className="
        flex
        flex-col
        lg:flex-row
        gap-16
        items-start
      "
    >

      {/* LADO ESQUERDO */}
      <div className="flex-1">

        <div
          className="
            bg-[#081426]
            rounded-[35px]
            p-8
          "
        >
          <img
            src={imagemAtual}
            alt={product.name}
            className="
              w-full
              max-w-[700px]
              mx-auto
              object-contain
            "
          />
        </div>

        {/* MINIATURA */}
        <div className="flex gap-4 mt-5">

          <img
            src={product.image}
            alt=""
            onClick={() =>
              setImagemAtual(product.image)
            }
            className="
              w-24
              h-24
              object-cover
              rounded-2xl
              cursor-pointer
              border
              border-white/20
              hover:scale-105
              transition-all
            "
          />

        </div>

      </div>

      {/* LADO DIREITO */}
      <div className="flex-1 max-w-[500px]">

        <p className="text-white/50 mb-2">
          {product.color}
          <p className="mt-4 text-white/70 text-sm">
  ⭐ 4.8 (120 avaliações)
</p>
        </p>

        <div className="flex items-start justify-between gap-4">

  <h1
    className="
      text-4xl
      lg:text-5xl
      font-semibold
      leading-tight
    "
  >
    {product.name}
  </h1>

  <button
    onClick={() => {
  console.log("clicou")

  addToFavorites(product)

  alert("Adicionado aos favoritos ❤️")
}}
    className="


      w-14
      relative
      z-50
      h-14
      rounded-full
      border
      border-white/20

      flex
      items-center
      justify-center

      hover:bg-white
      hover:text-black

      transition-all
    "
  >
    <Heart size={24} />
  </button>

</div>

        <div className="mt-6">

          <h2 className="text-4xl font-bold">
            R$ {product.price}
          </h2>

          <p className="text-white/50 mt-1">
            3x sem juros
          </p>

        </div>

        <div className="mt-10">

          <h3 className="mb-4 text-lg">
            Tamanho
          </h3>

          <div className="flex gap-3 flex-wrap">

            {product.sizes?.map(
              (size) => (

              <button
                key={size}
                onClick={() =>
                  setTamanhoSelecionado(size)
                }
                className={`
                  w-16
                  h-16
                  rounded-2xl
                  border
                  text-lg
                  transition-all

                  ${
                    tamanhoSelecionado === size
                    ? "bg-white text-black"
                    : "border-white/20 hover:border-white"
                  }
                `}
              >
                {size}
              </button>

            ))}

          </div>

        </div>

        <div
          className="
            flex
            flex-col
            gap-4
            mt-12
          "
        >

          <button
            onClick={adicionarCarrinho}
            className="
              h-16
              rounded-full
              bg-white
              text-black
              text-lg
              font-medium
              hover:scale-[1.02]
              transition-all
            "
          >
            Adicionar ao carrinho
          </button>

          <button
  onClick={() =>
    setMostrarFormulario(true)
  }
  className="
    h-16
    rounded-full
    border
    border-white/20
    text-lg
    hover:bg-white
    hover:text-black
    transition-all
  "
>
  Finalizar compra
</button>

        </div>

      </div>

    </div>  

    {mostrarFormulario && (

  <div
    className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-50
      px-4
    "
  >

    <div
  className="
    bg-[#081426]
    px-8
    py-10
    rounded-[28px]
    w-full
    max-w-[650px]
    border
    border-white/10
  "
>

      <h2 className="text-4xl font-bold mb-8 text-center">
        Finalizar Compra
      </h2>

      <div className="flex flex-col gap-5 w-full mt-4 px-2">

        <input
          type="text"
          placeholder="Nome completo"
          className="
  w-full
  h-14
  rounded-[20px]
  bg-[#0D1D34]
  px-6
  outline-none
  border
  border-white/10
"
        />

        <input
          type="email"
          placeholder="Seu e-mail"
          className="
  w-full
  h-14
  rounded-[20px]
  bg-[#0D1D34]
  px-6
  outline-none
  border
  border-white/10
"
        />

        <input
          type="text"
          placeholder="Telefone"
          className="
  w-full
  h-14
  rounded-[20px]
  bg-[#0D1D34]
  px-6
  outline-none
  border
  border-white/10
"
        />

        <input
          type="text"
          placeholder="CEP"
          className="
  w-full
  h-14
  rounded-[20px]
  bg-[#0D1D34]
  px-6
  outline-none
  border
  border-white/10
"
        />

        <input
          type="text"
          placeholder="Endereço"
          className="
  w-full
  h-14
  rounded-[20px]
  bg-[#0D1D34]
  px-6
  outline-none
  border
  border-white/10
"
        />

      </div>

     <div className="flex gap-4 mt-10 px-2">

        <button
          onClick={() =>
            setMostrarFormulario(false)
          }
          className="
            flex-1
            h-14
            rounded-full
            border
            border-white/20
          "
        >
          Cancelar
        </button>

        <button
          onClick={() => {

            alert(
              "Compra realizada com sucesso 🎉"
            )

            setMostrarFormulario(false)

          }}
          className="
            flex-1
            h-14
            rounded-full
            bg-white
            text-black
            font-semibold
          "
        >
          Confirmar Compra
        </button>

      </div>

    </div>

  </div>

)}

  </section>


  )
}