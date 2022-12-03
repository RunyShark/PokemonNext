export const toggleFavorite = (id: number) => {
  console.log('toggleFavorite call', id);
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorite') || '[]'
  );
  if (favorites.includes(id)) {
    favorites = favorites.filter((poke) => poke !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('favorite', JSON.stringify(favorites));
};

export const existsPokemonInFavorite = (id: number): boolean => {
  if (typeof window === 'undefined') return false;
  const favorites: number[] = JSON.parse(
    localStorage.getItem('favorite') || '[]'
  );
  return favorites.includes(id);
};
export const pokemons = (): number[] =>
  JSON.parse(localStorage.getItem('favorite') || '[]');
