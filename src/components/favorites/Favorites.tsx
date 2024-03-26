import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fullHeart from "../../assets/fullHeart.png";
import emptyHeart from "../../assets/emptyHeart.png";
import { INYtimes } from "../../entities/INYtimes";
import NYtimesItem from "../news/items/NYtimesItem";
import setLike from "../../utils/helperFunctions/setLike";
import getNYTimesCategories from "../../utils/constants/getNYTimesCategories";
import getNYTimesSources from "../../utils/constants/getNYTimesSources";
import getNYTimesAuthors from "../../utils/constants/getNYTimesAuthors";
import fetchData from "../../utils/helperFunctions/fetchData";
import Loader from "../loader/Loader";
import "./favorites.css";

function Favorites() {
  const apiKey = process.env.REACT_APP_NY_TIMES_API_KEY;
  const [sources, setSources] = useState<any>(
    JSON.parse(localStorage.getItem("source") || "[]")
  );
  const [authors, setAuthors] = useState<any>(
    JSON.parse(localStorage.getItem("authors") || "[]")
  );

  const [categories, setCategories] = useState<any>(
    JSON.parse(localStorage.getItem("category") || "[]")
  );

  const { data, isError, error, status } = useQuery({
    queryKey: ["search", categories, sources, authors],
    queryFn: () =>
      fetchData(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${authors}&fq=source:("${sources}") AND news_desk:(${categories.map(
          (category: string) => `"${category}"`
        )})&api-key=${apiKey}`
      ),
  });

  if (status === "pending") return <Loader />;
  if (isError) return <div>Request failed {error.message}</div>;
  if (!data) return <div>Sorry! No news...</div>;

  const articles = (
    <div className="newsContainer">
      {data?.response?.docs?.map((article: INYtimes, index: number) => (
        <NYtimesItem key={index} article={article} />
      ))}
    </div>
  );

  return (
    <>
      <div className="favouriteTitle">Choose your favourite</div>
      <div className="selectedFavorites">
        Filtered by:
        <div className="categoriesSelected">
          {categories.map((element: string) => element + " ").join("")}
        </div>
        <div className="sourcesSelected">
          {sources.map((element: string) => element + " ").join("")}
        </div>
        <div className="authorsSelected">
          {authors.map((element: string) => element + " ").join("")}
        </div>
      </div>

      <div className="filtersContainer">
        <div>
          <p className="filtersTitle"> Choose category</p>
          <ul className="filtersContent">
            {getNYTimesCategories.map((categoryItem: string, index: number) => (
              <li value={categoryItem} key={index}>
                {categoryItem}
                <img
                  onClick={() =>
                    setLike(categories, categoryItem, setCategories, "category")
                  }
                  src={
                    categories?.includes(categoryItem) ? fullHeart : emptyHeart
                  }
                  alt=""
                ></img>
                <hr />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="filtersTitle"> Choose source</p>
          <ul className="filtersContent">
            {getNYTimesSources.map((sourceItem: string, index: number) => (
              <li value={sourceItem} key={index}>
                {sourceItem}
                <img
                  onClick={() =>
                    setLike(sources, sourceItem, setSources, "source")
                  }
                  src={sources?.includes(sourceItem) ? fullHeart : emptyHeart}
                  alt=""
                ></img>
                <hr />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="filtersTitle"> Choose author</p>
          <ul className="filtersContent">
            {getNYTimesAuthors.map((authorItem: string, index: number) => (
              <li value={authorItem} key={index}>
                {authorItem}
                <img
                  onClick={() =>
                    setLike(authors, authorItem, setAuthors, "authors")
                  }
                  src={authors?.includes(authorItem) ? fullHeart : emptyHeart}
                  alt=""
                ></img>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {articles}
    </>
  );
}

export default Favorites;
