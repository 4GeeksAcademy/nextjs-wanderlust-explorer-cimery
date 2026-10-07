"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import { useFavorites } from "@/components/favorites-provider";

export default function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <main className="explorer-page">
      <Navbar className="explorer-nav" />
      <section className="explorer-intro">
        <p className="eyebrow">TU ESPACIO</p>
        <h1>Perfil de viajero.</h1>
        <p>Un resumen de tus planes y lugares por descubrir.</p>
      </section>

      <section className="profile-panel" aria-labelledby="profile-name">
        <div className="profile-identity">
          <div className="profile-avatar" aria-hidden="true">
            AR
          </div>
          <div>
            <p className="eyebrow">VIAJERO WANDERLUST</p>
            <h2 id="profile-name">Alex Rivera</h2>
            <p className="profile-location">Bogotá, Colombia</p>
          </div>
        </div>
        <div className="profile-stat">
          <span className="profile-stat-number">{favorites.length}</span>
          <span className="profile-stat-label">
            {favorites.length === 1 ? "favorito guardado" : "favoritos guardados"}
          </span>
        </div>
        <Link className="reset-link" href="/favorites">
          Ver mis favoritos <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}