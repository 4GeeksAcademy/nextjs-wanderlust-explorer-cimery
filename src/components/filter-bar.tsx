import SearchBar from "@/components/search-bar";

type FilterBarProps = {
  query: string;
  category: string;
  destination: string;
  categories: string[];
  onFilterChange: (key: string, value: string) => void;
  onClear: () => void;
};

export default function FilterBar({
  query,
  category,
  destination,
  categories,
  onFilterChange,
  onClear,
}: FilterBarProps) {
  return (
    <section className="filter-bar" aria-label="Filtros de experiencias">
      <SearchBar query={query} onQueryChange={(value) => onFilterChange("q", value)} />
      <label className="filter-field" htmlFor="category-filter">
        <span>Categoría</span>
        <select
          id="category-filter"
          onChange={(event) => onFilterChange("category", event.target.value)}
          value={category}
        >
          <option value="">Todas</option>
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="filter-field" htmlFor="destination-filter">
        <span>Destino</span>
        <input
          autoComplete="off"
          id="destination-filter"
          onChange={(event) => onFilterChange("destination", event.target.value)}
          placeholder="Ciudad o país"
          type="search"
          value={destination}
        />
      </label>
      <button className="filter-submit" onClick={onClear} type="button">
        Limpiar <span aria-hidden="true">↺</span>
      </button>
    </section>
  );
}