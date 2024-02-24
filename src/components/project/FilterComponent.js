import React from "react";
import { useTranslation } from "react-i18next";
import "./FilterComponent.css";
const FilterComponent = ({ selectedCategory, setSelectedCategory }) => {
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };
  const { t } = useTranslation("project");
  return (
    <div id="filter">
      <div className="filter__container">
        <button
          className={`filter__option ${
            selectedCategory === "all" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("all")}
        >
          {t("project.All")}
        </button>
        <button
          className={`filter__option ${
            selectedCategory === "HTML" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("HTML")}
        >
          HTML
        </button>
        <button
          className={`filter__option ${
            selectedCategory === "Java Script" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("Java Script")}
        >
          JS
        </button>
        <button
          className={`filter__option ${
            selectedCategory === "React" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("React")}
        >
          React
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
