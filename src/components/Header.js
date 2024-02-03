function Header({ filteredLabels }) {
  return (
    <header className="header">
      {filteredLabels.length !== 0 && <FilteredBox labels={filteredLabels} />}
    </header>
  );
}

function FilteredBox({ labels }) {
  return (
    <div className="filter visible" aria-label="filterd badges">
      <div className="filter__container">
        {labels.map((label, i) => (
          <SelectedLabel key={i}>{label}</SelectedLabel>
        ))}
      </div>

      <button className="filter__clear" type="button">
        Clear
      </button>
    </div>
  );
}

function SelectedLabel({ children }) {
  return (
    <div className="filter__selected">
      <span className="filter__text">{children}</span>
      <button type="button" className="filter__delete">
        <svg
          className="filter__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
        >
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Header;
