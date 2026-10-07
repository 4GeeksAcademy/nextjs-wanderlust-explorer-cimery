import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ExperienceDetailPanel from "@/components/experience-detail-panel";
import Navbar from "@/components/navbar";
import { experiences } from "@/data/experiences";

async function ExperienceDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === Number(id));

  if (!experience) {
    notFound();
  }

  return (
    <main className="explorer-page detail-page">
      <Navbar className="explorer-nav" />
      <Link className="reset-link detail-back-link" href="/experiences">
        <span aria-hidden="true">←</span> Volver a experiencias
      </Link>
      <ExperienceDetailPanel experience={experience} />
    </main>
  );
}

export default function ExperiencePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="explorer-page">
          <p className="eyebrow">CARGANDO EXPERIENCIA</p>
        </main>
      }
    >
      <ExperienceDetails params={params} />
    </Suspense>
  );
}