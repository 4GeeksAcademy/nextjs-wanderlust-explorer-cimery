import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experiences";

const inspirationGroups = [
  {
    label: "PARA SUBIR LA ADRENALINA",
    title: "Aventuras que te despiertan",
    category: "Adventure",
    description: "Sal de tu zona conocida y mira el mundo desde otra altura.",
  },
  {
    label: "PORQUE TE INTERESA",
    title: "Historias de cada lugar",
    category: "Culture",
    description: "Conoce las tradiciones que hacen único cada destino.",
  },
  {
    label: "SABORES PARA RECORDAR",
    title: "Una mesa en el mundo",
    category: "Food",
    description: "Prueba nuevos sabores y descubre su historia de origen.",
  },
  {
    label: "AIRE LIBRE, MENTE ABIERTA",
    title: "Naturaleza sin prisa",
    category: "Nature",
    description: "Encuentra senderos, paisajes y espacio para respirar.",
  },
  {
    label: "UN RESPIRO PARA TI",
    title: "Haz espacio para el bienestar",
    category: "Wellness",
    description: "Regálate una pausa que se sienta como parte del viaje.",
  },
  {
    label: "TU PRÓXIMO GRAN PLAN",
    title: "100 formas de explorar",
    category: "",
    description: "Compara destinos y encuentra una experiencia a tu medida.",
  },
];

export default function HomeInspirations() {
  const cards = inspirationGroups.map((group, index) => ({
    ...group,
    experience: group.category
      ? experiences.find((experience) => experience.category === group.category) ?? experiences[index]
      : experiences[5],
  }));

  return (
    <section className="home-inspirations" aria-labelledby="home-inspirations-title">
      <div className="inspiration-heading">
        <div>
          <p className="eyebrow">UN BUEN VIAJE EMPIEZA CON UNA IDEA</p>
          <h2 id="home-inspirations-title">Encuentra tu forma de explorar.</h2>
        </div>
        <Link className="inspiration-all-link" href="/experiences">
          Ver las 100 experiencias <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="inspiration-grid">
        {cards.map(({ label, title, category, description, experience }) => (
          <Link
            className="inspiration-card"
            href={category ? `/experiences?category=${category}` : "/experiences"}
            key={label}
          >
            <p className="inspiration-card-label">{label}</p>
            <h3>{title}</h3>
            <div className="inspiration-image-wrap">
              <Image
                alt={experience.title}
                className="inspiration-image"
                height={180}
                src={experience.imageUrl}
                width={260}
              />
            </div>
            <p className="inspiration-description">{description}</p>
            <span className="inspiration-card-link">
              {category ? `Explorar ${category.toLowerCase()}` : "Explorar destinos"}
              <span aria-hidden="true">↗</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}