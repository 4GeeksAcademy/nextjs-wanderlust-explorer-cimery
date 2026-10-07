"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ExperienceCard from "@/components/experience-card";
import FilterBar from "@/components/filter-bar";
import { useFavorites } from "@/components/favorites-provider";
import Navbar from "@/components/navbar";
import useExperiences from "@/hooks/use-experiences";
import { experiences } from "@/data/experiences";

export default function ExperiencesExplorer() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { favorites, toggleFavorite } = useFavorites();
  const query = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";
  const categories = [...new Set(experiences.map((experience) => experience.category))].sort();
  const filteredExperiences = useExperiences(experiences, { query, category, destination });

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  }

  return (
    <main className="explorer-page">
      <Navbar className="explorer-nav" />

      <section className="explorer-intro">
        <p className="eyebrow">EL MUNDO TE ESTÁ ESPERANDO</p>
        <h1>Encuentra tu próxima experiencia.</h1>
        <p>Planes extraordinarios, lugares inolvidables y nuevas formas de viajar.</p>
      </section>

      <FilterBar
        category={category}
        categories={categories}
        destination={destination}
        onClear={() => router.replace(pathname, { scroll: false })}
        onFilterChange={updateFilter}
        query={query}
      />

      <section className="results-section" aria-live="polite">
        <div className="results-heading">
          <div>
            <p className="eyebrow">TU SIGUIENTE AVENTURA</p>
            <h2>Experiencias para recordar</h2>
          </div>
          <p className="results-count">
            {filteredExperiences.length} de {experiences.length} experiencias
          </p>
        </div>

        {filteredExperiences.length ? (
          <div className="experience-grid">
            {filteredExperiences.map((experience) => (
              <ExperienceCard
                experience={experience}
                favoriteIds={favorites}
                key={experience.id}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p className="eyebrow">SIN RESULTADOS</p>
            <h2>No se encontraron resultados</h2>
            <p>Prueba con otra búsqueda, categoría o destino.</p>
            <Link className="reset-link" href="/experiences">
              Ver todas las experiencias <span aria-hidden="true">↗</span>
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}