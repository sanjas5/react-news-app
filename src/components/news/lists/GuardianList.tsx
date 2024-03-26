import { useInfiniteQuery } from "@tanstack/react-query";
import fetchData from "../../../utils/helperFunctions/fetchData";
import { useInView } from "react-intersection-observer";
import { IGuardianArticle } from "../../../entities/IGuardianArticle";
import GuardianItem from "../items/GuardianItem";
import Loader from "../../loader/Loader";
import { useEffect, useState } from "react";
import Filters from "../../filters/Filters";
import useDebounce from "../../../hooks/useDebounce";
import getOrderByDateGuardian from "../../../utils/constants/getOrderByDateGuardian";
import getGuardianCategories from "../../../utils/constants/getGuardianCategories";
import "./newsList.css";

function GuardianList() {
  const apiKey = process.env.REACT_APP_GUARDIAN_API_KEY;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [sortByDate, setSortByDate] = useState("newest");
  const debouncedSearchTerm = useDebounce(search, 1000);
  const { ref, inView } = useInView();

  const sectionName = category ? `&section=${category}` : "";
  const relevance =
    sortByDate.toLowerCase() === "relevance" && search
      ? "&order-by=relevance"
      : `&order-by=${sortByDate.toLowerCase()}`;

  const fetchItems = async ({ pageParam }: { pageParam: number }) => {
    if (debouncedSearchTerm) setSearch(debouncedSearchTerm);
    return fetchData(
      `https://content.guardianapis.com/search?page=${pageParam}&q=${search}${sectionName.toLowerCase()}${relevance}&api-key=${apiKey}`
    );
  };

  const {
    data,
    isFetched,
    isError,
    error,
    status,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["search", source, category, sortByDate, debouncedSearchTerm],
    queryFn: fetchItems,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!allPages) return;
      if (allPages?.length + 1 === lastPage?.response?.pages) return;
      return allPages?.length + 1;
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

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
            getCategories={getGuardianCategories}
            source={source}
            setSource={setSource}
            getSources={[]}
            sortByDate={sortByDate}
            setSortByDate={setSortByDate}
            getOrderByDate={getOrderByDateGuardian}
          />
          <div className="newsContainer">
            {data?.pages?.map((article: any, index: number) =>
              article?.response?.results?.map(
                (article: IGuardianArticle, index: number) => (
                  <GuardianItem key={index} article={article} />
                )
              )
            )}
            <button
              className="loadingTitle"
              ref={ref}
              disabled={!hasNextPage}
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage ? (
                <h2>Loading...</h2>
              ) : (
                <h3>Nothing to load</h3>
              )}
            </button>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default GuardianList;
