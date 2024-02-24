import React from "react";

function Autocomplete({
  value,
  suggestions,
  handleChange,
  handleSelect,
  placeholder,
}) {
  const handleInputChange = (event) => {
    handleChange(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    handleSelect(suggestion);
  };

  const filteredSuggestions = [...new Set(suggestions)];

  return (
    // This function will return the search bar and it's auto the complete list

    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="searchbar-input"
      />

      {filteredSuggestions.length > 0 && (
        <ul className="autocomplete-list">
          {filteredSuggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;
