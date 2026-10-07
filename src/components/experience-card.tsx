"use client";

import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/data/experiences";
import FavoriteButton from "@/components/favorite-button";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function ExperienceCard({
  experience,
  favoriteIds,
  onToggleFavorite,
}: {
  experience: Experience;
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
}) {
  return (
    <article className="experience-card">
      <div className="experience-image-wrap">
        <Link
          aria-label={`Ver experiencia: ${experience.title}`}
          className="experience-image-link"
          href={`/experiences/${experience.id}`}
        >
          <Image
            className="experience-image"
            src={experience.imageUrl}
            alt={experience.title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, (max-width: 1400px) 33vw, 25vw"
          />
          <span className="category-tag">{experience.category}</span>
          <span className="rating-tag" aria-label={`Calificación ${experience.rating} de 5`}>
            <span aria-hidden="true">★</span> {experience.rating}
          </span>
        </Link>
        <FavoriteButton
          className="card-favorite-button"
          isFavorite={favoriteIds.includes(experience.id)}
          onToggle={() => onToggleFavorite(experience.id)}
        />
      </div>
      <div className="experience-details">
        <p className="experience-destination">{experience.destination}</p>
        <h3>
          <Link href={`/experiences/${experience.id}`}>{experience.title}</Link>
        </h3>
        <p className="experience-description">{experience.description}</p>
        <p className="experience-price">
          {priceFormatter.format(experience.price)} <span>/ persona</span>
        </p>
      </div>
    </article>
  );
}