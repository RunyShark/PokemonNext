export const toggleFavorite = (id: number) => {
  console.log('toggleFavorite call');
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorite') || '[]'
  );
  if (favorites.includes(id)) {
    favorites = favorites.filter((poke) => poke !== id);
  } else {
    favorites.push(id);
    localStorage.setItem('favorite', JSON.stringify(favorites));
  }
};
