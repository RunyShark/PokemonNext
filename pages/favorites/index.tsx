import { useEffect, useState } from 'react';
import { Favorite, MainLayout, NoFavorites, pokemons } from '../../index';

const FavoritesPage = () => {
  const [favoritePokmos, setFavoritePokmos] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokmos(pokemons);
  }, []);
  return (
    <MainLayout title='Pokémons- Favoritos'>
      {favoritePokmos.length === 0 ? (
        <NoFavorites />
      ) : (
        <Favorite favoritePokmos={favoritePokmos} />
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
