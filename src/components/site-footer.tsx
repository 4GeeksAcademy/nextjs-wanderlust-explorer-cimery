import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <Link className="brand footer-brand" href="/">
            WANDERLUST<span>.</span>
          </Link>
          <p>Experiencias para descubrir el mundo con curiosidad.</p>
        </div>

        <nav className="footer-navigation" aria-label="Enlaces del pie de página">
          <Link href="/experiences">Explorar experiencias</Link>
          <Link href="/favorites">Favoritos</Link>
          <Link href="/profile">Perfil</Link>
        </nav>

        <div className="footer-company">
          <p className="footer-company-name">Wanderlust Travel Co.</p>
          <p>Plataforma de inspiración y experiencias de viaje.</p>
          <small>© 2026 Wanderlust. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
}