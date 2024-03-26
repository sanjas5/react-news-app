const setLike = (
  favorites: Array<string>,
  item: string,
  setFavorites: any,
  key: string
) => {
  if (!!favorites?.includes(item)) {
    const filteredCategory = favorites.filter((e: string) => e !== item);
    localStorage.setItem(`${key}`, JSON.stringify([...filteredCategory]));
    setFavorites([...filteredCategory]);
  } else {
    localStorage.setItem(`${key}`, JSON.stringify([...favorites, item]));
    setFavorites([...favorites, item]);
  }
};

export default setLike;
