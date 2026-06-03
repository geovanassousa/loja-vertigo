import { useState } from "react"

export default function CartDrawer({
  isCartOpen,
  setIsCartOpen,
  cartItems,
  removeFromCart,
}) {

  const [mostrarFormulario, setMostrarFormulario] =
  useState(false)

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc +
      Number(
        String(item.price)
          .replace(",", ".")
      ),
    0
  )

  return (

    <>
      {isCartOpen && (

        <div
          className="
            fixed
            inset-0
            z-50

            bg-black/40
            backdrop-blur-sm
          "
        >

          {/* DRAWER */}
          <div
            className="
              fixed
              top-0
              right-0

              h-screen
              w-[420px]
              max-w-full

              bg-[#041120]

              border-l
              border-white/10

              flex
              flex-col
            "
          >

            {/* HEADER */}
            <div
              className="
                flex
                items-start
                justify-between

                px-8
                pt-14
                pb-8
              "
            >

              <h2
                className="
                  text-white
                  text-4xl
                  tracking-tight
                  leading-none
                  font-serif
                "
              >
                Sua sacola
              </h2>

              <button
                onClick={() => setIsCartOpen(false)}
                className="
                  text-white/70
                  hover:text-white

                  text-3xl
                  leading-none

                  transition
                "
              >
                ×
              </button>

            </div>

            {/* PRODUTOS */}
            <div
              className="
                flex-1
                overflow-y-auto

                px-8
                pb-6
                pr-6
              "
            >

              {/* ESPAÇO EDITORIAL */}
              <div className="h-8" />

              {cartItems.length === 0 ? (

                <div
                  className="
                    h-full

                    flex
                    items-center
                    justify-center
                  "
                >

                  <p className="text-white/50">
                    Sua sacola está vazia.
                  </p>

                </div>

              ) : (

                <div className="space-y-8">

                  {cartItems.map((item, index) => (

                    <div
                      key={index}
                      className="
                        flex
                        gap-5

                        pb-7
                      "
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          w-16
                          h-24

                          object-cover

                          rounded-xl

                          bg-[#0B1728]
                        "
                      />

                      <div className="flex-1">

                        <h3 className="text-white">
                          {item.name}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-white/40
                            text-sm
                          "
                        >
                          {item.color}
                        </p>

                        <p
                          className="
                            mt-3
                            text-white
                          "
                        >
                          R$ {item.price}
                        </p>

                      </div>

                      <button
                        onClick={() => removeFromCart(index)}
                        className="
                          text-white/40
                          hover:text-white

                          transition
                        "
                      >
                        ×
                      </button>

                    </div>

                  ))}

                </div>

              )}

            </div>

            {/* FOOTER */}
            <div
              className="
                border-t
                border-white/10

                px-8
                pt-16
                pb-10
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between

                  text-white

                  mb-10
                "
              >

                <span className="text-white/60">
                  Subtotal
                </span>

                <span>
                  R$ {subtotal.toFixed(2)}
                </span>

              </div>

              <div className="flex justify-center">

    <button
    onClick={() =>
    setMostrarFormulario(true)
  }
  className="
    w-[340px]

    h-10

    rounded-full

    bg-white
    text-black

    text-[11px]
    tracking-[0.25em]
    uppercase

    flex
    items-center
    justify-center

    transition-all
    duration-500

    hover:bg-[#F3F3F3]
  "
>
  Finalizar compra
</button>
              </div>

            </div>

          </div>

        </div>

      )}

{mostrarFormulario && (

  <div
    className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-[999]
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
          'Compra realizada com sucesso 🎉'
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

  </>

  )

}