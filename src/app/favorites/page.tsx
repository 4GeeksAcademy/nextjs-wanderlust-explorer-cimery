"use client";

import Link from "next/link";
import ExperienceCard from "@/components/experience-card";
import { useFavorites } from "@/components/favorites-provider";
import Navbar from "@/components/navbar";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) =>
    favorites.includes(experience.id),
  );

  return (
    <main className="explorer-page">
      <Navbar className="explorer-nav" />
      <section className="explorer-intro">
        <p className="eyebrow">TU LISTA PERSONAL</p>
        <h1>Experiencias favoritas.</h1>
        <p>Guarda aquí los planes que quieras recordar.</p>
      </section>

      {favoriteExperiences.length ? (
        <>
          <p className="results-count favorites-count">
            {favoriteExperiences.length} {favoriteExperiences.length === 1 ? "guardada" : "guardadas"}
          </p>
          <div className="experience-grid">
            {favoriteExperiences.map((experience) => (
              <ExperienceCard
                experience={experience}
                favoriteIds={favorites}
                key={experience.id}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="empty-state">
          <p className="eyebrow">TODAVÍA NO HAY FAVORITOS</p>
          <h2>Guarda las experiencias que te llamen.</h2>
          <p>Las experiencias que marques aparecerán aquí.</p>
          <Link className="reset-link" href="/experiences">
            Explorar experiencias <span aria-hidden="true">↗</span>
          </Link>
        </div>
      )}
    </main>
  );
}