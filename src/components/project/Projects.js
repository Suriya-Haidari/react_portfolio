import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import FilterComponent from "./FilterComponent";
import { useTranslation } from "react-i18next";
import { GetProjectData } from "./ProjectsData";
import Autocomplete from "./Autocomplete";
import Rating from "./ProjectRating";
import "./projects.css";

export default function Portfolio() {
  // The displayed project in the first page number:

  const data = GetProjectData();
  const itemsPerPage = 2;

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Display 2 project in first page
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedQueries, setSuggestedQueries] = useState([]);

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const currentData = data
    .filter(
      (project) =>
        (selectedCategory === "all" || project.category === selectedCategory) &&
        project.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(0);

    // Auto compolete filter method
    const suggested = data
      .filter((project) =>
        project.title.toLowerCase().includes(value.toLowerCase())
      )
      .map((project) => project.title);
    setSuggestedQueries(suggested);
  };

  const handleAutocompleteSelect = (query) => {
    setSearchQuery(query);
    setCurrentPage(0);
    setSuggestedQueries([]);
  };
  const { t } = useTranslation("project");
  return (
    <section id="projects">
      <h5>{t("project.h1")}</h5>
      <h2>{t("project.h2")}</h2>

      {/* Filter component has 4 buttons to filter the projects */}
      <FilterComponent
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Autocomplete is the auto suggest list */}
      <div className="search-barr">
        <Autocomplete
          value={searchQuery}
          suggestions={suggestedQueries}
          handleChange={handleSearchChange}
          handleSelect={handleAutocompleteSelect}
          placeholder={t("project.SearchProject")}
        />
      </div>
      {/* Got the data dynamically from Data component */}
      <div className="container portfolio__container ">
        {currentData.map(({ id, image, title, text, github }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            {/* first attribute is the active stars by default */}
            <Rating initialValue={0} projectId={id} />
          </article>
        ))}

        <div className="paginationn">
          <ReactPaginate
            previousLabel={t("project.Previous")}
            nextLabel={t("project.Next")}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </section>
  );
}
