export default function FavoritesDrawer({
  isFavoritesOpen,
  setIsFavoritesOpen,
  favoriteItems,
  removeFavorite,
}) {

  return (

    <>
      {isFavoritesOpen && (

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
                Favoritos
              </h2>

              <button
                onClick={() =>
                  setIsFavoritesOpen(false)
                }
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

              <div className="h-8" />

              {favoriteItems.length === 0 ? (

                <div
                  className="
                    h-full

                    flex
                    items-center
                    justify-center
                  "
                >

                  <p className="text-white/50">
                    Nenhum favorito ainda ❤️
                  </p>

                </div>

              ) : (

                <div className="space-y-8">

                  {favoriteItems.map(
                    (item, index) => (

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
                        onClick={() =>
                          removeFavorite(index)
                        }
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

          </div>

        </div>

      )}
    </>

  )

}