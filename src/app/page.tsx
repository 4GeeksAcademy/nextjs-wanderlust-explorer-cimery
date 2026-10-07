import Link from "next/link";
import HomeInspirations from "@/components/home-inspirations";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="home-page">
      <Navbar />

      <section
        className="hero-section"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(14, 43, 40, .84) 0%, rgba(14, 43, 40, .56) 43%, rgba(14, 43, 40, .08) 100%), url(https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=2200&auto=format&fit=crop&q=88)",
        }}
      >
        <div className="hero-copy">
          <p className="eyebrow">VIAJA A TU MANERA · 2026</p>
          <h1>
            Tu próxima historia empieza <em>afuera.</em>
          </h1>
          <p className="hero-description">
            Encuentra experiencias para salir de la rutina y ver el mundo con
            otros ojos.
          </p>
          <Link className="primary-button" href="/experiences">
            Explorar experiencias <span aria-hidden="true">↗</span>
          </Link>
          <div className="hero-footnote">
            <span>100 experiencias</span>
            <span>·</span>
            <span>5 formas de explorar</span>
          </div>
        </div>
        <p className="hero-index" aria-hidden="true">
          <span>01</span> / 100
        </p>
      </section>
      <HomeInspirations />
    </main>
  );
}
