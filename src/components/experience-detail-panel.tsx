"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Experience } from "@/data/experiences";
import FavoriteButton from "@/components/favorite-button";
import { useFavorites } from "@/components/favorites-provider";

export default function ExperienceDetailPanel({ experience }: { experience: Experience }) {
  const { favorites, toggleFavorite } = useFavorites();
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${experience.title} | Wanderlust`;

    return () => {
      document.title = previousTitle;
    };
  }, [experience.title]);

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(experience.price);

  return (
    <article className="detail-layout">
      <div className="detail-image-wrap">
        <Image
          alt={experience.title}
          className="detail-image"
          fill
          priority
          sizes="(max-width: 760px) 100vw, 55vw"
          src={experience.imageUrl}
        />
        <FavoriteButton
          className="detail-favorite-button"
          isFavorite={favorites.includes(experience.id)}
          onToggle={() => toggleFavorite(experience.id)}
        />
      </div>
      <div className="detail-content">
        <p className="eyebrow">{experience.category.toUpperCase()}</p>
        <h1>{experience.title}</h1>
        <p className="detail-location">{experience.destination}</p>
        <p className="detail-rating">
          <span aria-hidden="true">★</span> {experience.rating} · Experiencia destacada
        </p>
        <div className="detail-divider" />
        <h2>Sobre esta experiencia</h2>
        <p className="detail-description">{experience.description}</p>
        <div className="detail-booking-row">
          <p className="experience-price">
            {price} <span>/ persona</span>
          </p>
          <p className="detail-booking-note">Precio por persona</p>
        </div>
      </div>
    </article>
  );
}