import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Poke, pokemonApi, Pokemons, Result } from '../..';

const PagepokemonByName: NextPage = (data) => {
  console.log('data', data);

  return (
    <div>
      <h1>HI</h1>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const {
    data: { results },
  } = await pokemonApi.get<Pokemons>('/pokemon/?limit=151');

  return {
    paths: results.map(({ name }) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await pokemonApi.get<Poke>(`/pokemon/${name}`);
  const { id, sprites } = data;
  const pokemon = {
    id,
    name: data.name,
    img: sprites.front_default,
  };
  return {
    props: {
      pokemon,
    },
  };
};
export default PagepokemonByName;
