import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../loader/Loader";
import useDebounce from "../../../hooks/useDebounce";
import Filters from "../../filters/Filters";
import fetchData from "../../../utils/helperFunctions/fetchData";
import getNewsSources from "../../../utils/constants/getNewsSources";
import getOrderByDateNews from "../../../utils/constants/getOrderByDateNews";
import getNewsCategories from "../../../utils/constants/getNewsCategories";
import { IArticle } from "../../../entities/IArticle";
import NewsItem from "../items/NewsItem";
import "./newsList.css";

function NewsList() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [sortByDate, setSortByDate] = useState("");
  const debouncedSearchTerm = useDebounce(search, 1000);

  const sourceFormated = source
    ? `&sources=${source.toLowerCase().replace(/\s+/g, "-")}`
    : "";
  const categoryCondition = category.toLowerCase()
    ? `&category=${category.toLowerCase()}`
    : "";
  const sortByDateCondition = sortByDate.toLowerCase()
    ? `&sortBy=${sortByDate.toLowerCase()}`
    : "&sortBy=publishedAt";
  const qParameter = search ? `q=${search}` : "q=search";

  const { data, isError, error, isFetched, status } = useQuery({
    queryKey: ["news", category, source, debouncedSearchTerm, sortByDate],

    queryFn: () => {
      if (debouncedSearchTerm) setSearch(debouncedSearchTerm);
      return fetchData(
        `https://newsapi.org/v2/top-headlines?${qParameter}${sourceFormated}${categoryCondition}${sortByDateCondition}&apiKey=${apiKey}`
      );
    },
  });

  if (!!source && !!category) {
    setCategory("");
    setSource("");
  }

  if (status === "pending") return <Loader />;
  if (isError) return <div>Request failed {error.message}</div>;
  if (!data) return <div>Sorry! No news...</div>;

  return (
    <>
      {isFetched ? (
        <>
          <Filters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            getCategories={getNewsCategories}
            source={source}
            setSource={setSource}
            getSources={getNewsSources}
            sortByDate={sortByDate}
            setSortByDate={setSortByDate}
            getOrderByDate={getOrderByDateNews}
          />
          <p className="alertSentence">
            Please do not mix the sources parameter with the category parameters
            !!!
          </p>
          <div>
            <div className="newsContainer">
              {data?.articles?.map((article: IArticle, index: number) => (
                <NewsItem key={index} article={article} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default NewsList;
