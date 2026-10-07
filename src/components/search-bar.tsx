type SearchBarProps = {
  query: string;
  onQueryChange: (query: string) => void;
};

export default function SearchBar({ query, onQueryChange }: SearchBarProps) {
  return (
    <label className="filter-field search-field" htmlFor="experience-search">
      <span>Buscar por título</span>
      <input
        autoComplete="off"
        id="experience-search"
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Prueba “safari” o “Bali”"
        type="search"
        value={query}
      />
    </label>
  );
}