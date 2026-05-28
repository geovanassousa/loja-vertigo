import "../styles/home.css";

import heroImage from "../assets/casacos/moletom-azul.png";

export default function Home({ setShowHome }) {
  return (
    <div className="home-page">

      <section className="home-hero">

        {/* TEXTO */}
        <div className="home-hero-content">

          <span className="home-subtitle">
            COLEÇÃO • OUTONO 2026
          </span>

          <h2>
            Sofisticação <br />
            em cada detalhe.
          </h2>

          <p>
            Peças contemporâneas pensadas para durar.
            Tecidos nobres, caimento impecável e uma
            estética minimalista que atravessa estações.
          </p>

          <div className="home-buttons">

            <button
                className="btn-light"
                onClick={() => setShowHome(false)}
            >
                EXPLORAR COLEÇÃO →
            </button>

            <a href="#" className="btn-dark">
              SOBRE A MARCA
            </a>

          </div>

        </div>

        {/* IMAGEM */}
        <div className="home-hero-image">

            <img
                src={heroImage}
                alt="Moda masculina elegante"
            />

          <div className="home-editorial">

            <span>EDITORIAL</span>

            <h3>Quiet Tailoring</h3>

          </div>

        </div>

      </section>

    </div>
  )
}