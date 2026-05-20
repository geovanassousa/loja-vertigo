import logo from "../assets/logo.png"

import {
  Heart,
  ShoppingBag
} from "lucide-react"

export default function Navbar() {

  return (

    <header
      className="
        fixed
        top-0
        left-0

        z-50

        w-full
        h-20

        border-b
        border-white/5

        bg-[#041120]/65
        backdrop-blur-xl
      "
    >

      <div
        className="
          navbar-shell

          mx-auto

          flex
          h-full
          w-full
          max-w-[1600px]

          min-w-0
          items-center
        "
      >

        <div
          className="
            relative

            flex
            h-20
            w-full

            min-w-0
            items-center
            justify-between
          "
        >

          {/* LOGO */}
          <div
            className="
              relative
              z-20

              flex
              shrink-0
              items-center
            "
          >

            <img
              src={logo}
              alt="Vertigo"
              className="
                h-20
                w-auto

                cursor-pointer
                object-contain
              "
            />

          </div>

          {/* MENU */}
          <nav
            aria-label="Menu principal"
            className="
              pointer-events-none

              absolute
              inset-0

              flex
              items-center
              justify-center
            "
          >

            <div
              className="
                pointer-events-auto

                flex
                max-w-full
                flex-nowrap

                items-center
                justify-center

                gap-4
                md:gap-6
                lg:gap-8

                overflow-x-auto

                [scrollbar-width:none]
                [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden

                px-2

                text-[14px]
                md:text-[15px]

                tracking-[0.08em]

                text-white/55
              "
            >

              <a
                href="#"
                className="
                  shrink-0

                  transition
                  duration-300

                  hover:text-white
                "
              >
                Home
              </a>

              <a
                href="#"
                className="
                  shrink-0

                  transition
                  duration-300

                  hover:text-white
                "
              >
                Casacos
              </a>

              <a
                href="#"
                className="
                  shrink-0
                  text-white
                "
              >
                Camisas
              </a>

              <a
                href="#"
                className="
                  shrink-0

                  transition
                  duration-300

                  hover:text-white
                "
              >
                Calças
              </a>

              <a
                href="#"
                className="
                  shrink-0

                  transition
                  duration-300

                  hover:text-white
                "
              >
                Shorts
              </a>

              <a
                href="#"
                className="
                  shrink-0

                  transition
                  duration-300

                  hover:text-white
                "
              >
                Acessórios
              </a>

            </div>

          </nav>

          {/* FAVORITOS + SACOLA */}
          <div
            className="
              relative
              z-20

              flex
              shrink-0
              items-center

              gap-5
              md:gap-6

              text-white/70
            "
          >

            {/* FAVORITOS */}
            <button
              type="button"
              className="
                transition-all
                duration-300

                hover:scale-105
                hover:text-white
              "
            >

              <Heart
                size={21}
                strokeWidth={1.8}
              />

            </button>

            {/* SACOLA */}
            <button
              type="button"
              className="
                transition-all
                duration-300

                hover:scale-105
                hover:text-white
              "
            >

              <ShoppingBag
                size={21}
                strokeWidth={1.8}
              />

            </button>

          </div>

        </div>

      </div>

    </header>

  )

}