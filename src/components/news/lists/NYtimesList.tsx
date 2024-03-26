import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import NYtimesItem from "../items/NYtimesItem";
import { INYtimes } from "../../../entities/INYtimes";
import Loader from "../../loader/Loader";
import useDebounce from "../../../hooks/useDebounce";
import getNYTimesCategories from "../../../utils/constants/getNYTimesCategories";
import getNYTimesSources from "../../../utils/constants/getNYTimesSources";
import getOrderByDateNYTimes from "../../../utils/constants/getOrderByDateNYTimes";
import fetchData from "../../../utils/helperFunctions/fetchData";
import Filters from "../../filters/Filters";
import "./newsList.css";

function NYtimesList() {
  const apiKey = process.env.REACT_APP_NY_TIMES_API_KEY;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [sortByDate, setSortByDate] = useState("newest");
  const debouncedSearchTerm = useDebounce(search, 1000);

  const filterQueries =
    source && category
      ? `&fq=source:("${source}") AND news_desk:("${category}")`
      : source
      ? `&fq=source:("${source}")`
      : category
      ? `&fq=news_desk:("${category}")`
      : "";

  const { data, isError, error, isFetched, status } = useQuery({
    queryKey: ["search", debouncedSearchTerm, category, sortByDate, source],
    queryFn: () => {
      if (debouncedSearchTerm) setSearch(debouncedSearchTerm);
      return fetchData(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}${filterQueries}&sort=${sortByDate.toLowerCase()}&api-key=${apiKey}`
      );
    },
  });

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
            getCategories={getNYTimesCategories}
            source={source}
            setSource={setSource}
            getSources={getNYTimesSources}
            sortByDate={sortByDate}
            setSortByDate={setSortByDate}
            getOrderByDate={getOrderByDateNYTimes}
          />
          <div className="newsContainer">
            {data?.response?.docs?.map((article: INYtimes, index: number) => (
              <NYtimesItem key={index} article={article} />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default NYtimesList;
