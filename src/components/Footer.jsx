import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-[#041120] text-white mt-28">

      {/* CONTEÚDO CENTRALIZADO */}
      <div className="max-w-7xl mx-auto px-24 py-16">
      <div className="flex flex-col md:flex-row justify-center items-start gap-24 mb-12 pl-8">
        

          {/* LOGO */}
          <div className="flex flex-col items-start gap-3 max-w-[300px]">

            <img
              src={logo}
              alt="Vertigo"
              className="w-48 object-contain"
            />

            <p className="text-gray-300 leading-8 text-sm">
              Moda contemporânea concebida para o cotidiano refinado.
              Peças atemporais, materiais nobres e design discreto.
            </p>

          </div>

          {/* NAVEGAÇÃO */}
          <div className="flex flex-col gap-5 pt-6">

            <div className="flex flex-col gap-3">

              <h3 className="text-xl font-semibold">
                Navegação
              </h3>

              <div className="w-12 h-[2px] bg-[#C8A96B] rounded-full"></div>

            </div>

            <div className="flex flex-col gap-3 text-gray-300 text-sm">

              <a
                href="#"
                className="hover:text-white transition duration-300"
              >
                Home
              </a>

              <a
                href="#contato"
                className="hover:text-white transition duration-300"
              >
                Contato
              </a>

              <a
                href="#"
                className="hover:text-white transition duration-300"
              >
                Favoritos
              </a>

            </div>
          </div>

          {/* CONTATO */}
          <div
            id="contato"
            className="flex flex-col gap-5"
          >

            <div className="flex flex-col gap-3">

              <h3 className="text-xl font-semibold">
                Contato
              </h3>

              <div className="w-12 h-[2px] bg-[#C8A96B] rounded-full"></div>

            </div>

            <div className="flex flex-col gap-4 text-gray-300 text-sm">

              <p>
                contato@vertigo.com
              </p>

              <p>
                +55 (89) 99999-9999
              </p>

              <p>
                Picos, Piauí
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* LINHA INFERIOR */}
      <div className="w-full border-t border-white/10">

        <div className="py-6">

          <p className="text-center text-gray-400 text-sm tracking-wide">
            © 2026 Vertigo. Todos os direitos reservados.
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;