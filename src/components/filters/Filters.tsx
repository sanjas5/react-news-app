import React from "react";
import "./filters.css";

interface IFiltersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<any>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<any>>;
  getCategories: string[];
  source: string;
  setSource: React.Dispatch<React.SetStateAction<any>>;
  getSources: string[];
  sortByDate: string;
  setSortByDate: React.Dispatch<React.SetStateAction<any>>;
  getOrderByDate: string[];
}

function Filters({
  search,
  setSearch,
  category,
  setCategory,
  getCategories,
  source,
  setSource,
  getSources,
  sortByDate,
  setSortByDate,
  getOrderByDate,
}: IFiltersProps) {
  return (
    <>
      <div className="searchBtnContainer">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="searchBtn"
          placeholder="Search"
        />
      </div>

      <div className="filtersContainer">
        <select
          value={category}
          name="articleCategories"
          className="categorySelectBtn"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option hidden>Choose category</option>
          {getCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        {window.location.pathname === "/guardian-news" ? (
          ""
        ) : (
          <select
            value={source}
            name="articleSource"
            className="categorySelectBtn"
            onChange={(e) => setSource(e.target.value)}
          >
            <option hidden>Choose source</option>
            {getSources.map((s, index) => (
              <option key={index} value={s}>
                {s}
              </option>
            ))}
          </select>
        )}

        <select
          value={sortByDate}
          name="sortArticles"
          className="categorySelectBtn"
          onChange={(e) => setSortByDate(e.target.value)}
        >
          <option hidden>Sort news</option>
          {getOrderByDate.map((date, index) => (
            <option key={index} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Filters;
