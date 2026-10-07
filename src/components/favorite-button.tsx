"use client";

export default function FavoriteButton({
  isFavorite,
  onToggle,
  className = "",
}: {
  isFavorite: boolean;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
      aria-pressed={isFavorite}
      className={`favorite-button ${isFavorite ? "is-favorite" : ""} ${className}`}
      onClick={onToggle}
      type="button"
    >
      <span aria-hidden="true">♥</span>
    </button>
  );
}