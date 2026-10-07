import { Suspense } from "react";
import ExperiencesExplorer from "@/components/experiences-explorer";

export default function ExperiencesPage() {
  return (
    <Suspense
      fallback={
        <main className="explorer-page">
          <p className="eyebrow">CARGANDO EXPERIENCIAS</p>
        </main>
      }
    >
      <ExperiencesExplorer />
    </Suspense>
  );
}
