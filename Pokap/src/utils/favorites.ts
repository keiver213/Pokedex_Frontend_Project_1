export const getFavorites = (): string[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export const toggleFavorite = (name: string) => {
  const favs = getFavorites();

  if (favs.includes(name)) {
    const updated = favs.filter(f => f !== name);
    localStorage.setItem("favorites", JSON.stringify(updated));
    return false;
  } else {
    const updated = [...favs, name];
    localStorage.setItem("favorites", JSON.stringify(updated));
    return true;
  }
};

export const isFavorite = (name: string) => {
  return getFavorites().includes(name);
};
