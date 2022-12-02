import { NextPage, GetServerSideProps } from 'next';

import { MainLayout, apiPokemons, Pokemons } from '..';

const HomePage: NextPage = (props) => {
  console.log(props);

  return (
    <MainLayout title='Home'>
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log('strat');
  const { data } = await apiPokemons.get<Pokemons>('pokemon/?limint=151');
  return {
    props: {
      name: 'elRunys',
    },
  };
};

export default HomePage;
