import Image from 'next/image';
import { NextPage, GetServerSideProps } from 'next';
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { pokemonApi } from '../api';
import { CardUi, MainLayout, Pokemons, Result } from '..';

interface PropsHomePage {
  pokemons: Result[];
}
const HomePage: NextPage<PropsHomePage> = ({ pokemons }) => {
  return (
    <MainLayout title='Home'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((data) => (
          <CardUi {...data} key={data.id} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    data: { results },
  } = await pokemonApi.get<Pokemons>('/pokemon/?limint=151');
  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/133.png
  const pokemons: Result[] = results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
      i + 1
    }.png`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
