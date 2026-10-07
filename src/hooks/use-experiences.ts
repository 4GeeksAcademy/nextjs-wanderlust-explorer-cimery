import type { Experience } from "@/data/experiences";

type ExperienceFilters = {
  query: string;
  category: string;
  destination: string;
};

function createTitlePattern(term: string) {
  if (!term) return null;

  try {
    return new RegExp(term, "i");
  } catch {
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(escapedTerm, "i");
  }
}

export default function useExperiences(
  experiences: Experience[],
  { query, category, destination }: ExperienceFilters,
) {
  const titlePattern = createTitlePattern(query);
  const normalizedDestination = destination.toLocaleLowerCase("es");

  return experiences.filter((experience) => {
    const matchesTitle = !titlePattern || titlePattern.test(experience.title);
    const matchesCategory = !category || experience.category === category;
    const matchesDestination =
      !normalizedDestination ||
      experience.destination.toLocaleLowerCase("es").includes(normalizedDestination);

    return matchesTitle && matchesCategory && matchesDestination;
  });
}