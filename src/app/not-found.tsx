import Link from "next/link";
import Navbar from "@/components/navbar";

export default function NotFound() {
  return (
    <main className="explorer-page">
      <Navbar className="explorer-nav" />
      <section className="empty-state">
        <p className="eyebrow">404 · PÁGINA NO ENCONTRADA</p>
        <h1>No se encontró esta página.</h1>
        <p>La dirección puede haber cambiado o ya no estar disponible.</p>
        <Link className="reset-link" href="/">
          Volver al inicio <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}