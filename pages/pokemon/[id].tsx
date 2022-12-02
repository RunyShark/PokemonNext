import { GetServerSideProps, NextPage, GetStaticPaths } from 'next';

import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { MainLayout, Poke, pokemonApi } from '../..';

interface PropsPokemonPage {
  pokemon: Poke;
}

const PokemonPage: NextPage<PropsPokemonPage> = ({
  pokemon: {
    id,
    name,
    sprites: { other, front_default, back_default, back_female },
  },
}) => {
  const router = useRouter();

  return (
    <MainLayout>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={other?.dream_world.front_default as string}
                alt='img'
                width={'100%'}
                height='200px'
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text h1 transform='capitalize' css={{ fontWeight: 'bold' }}>
                {name}
              </Text>
              <Button color='gradient' ghost>
                Guardar en favorito
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction='row' display='flex'>
                <Image
                  src={front_default}
                  alt='pokle'
                  width={100}
                  height={100}
                />
                <Image
                  src={back_default}
                  alt='pokle'
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons = [...Array(10)].map((v, i) => `${i + 1}`);

  return {
    paths: pokemons.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  // const { id } = params as { id: string };
  // const {
  //   data: { results },
  // } = await pokemonApi.get<Pokemons>('/pokemon/?limint=151');
  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/133.png
  const { data } = await pokemonApi.get<Poke>(`/pokemon/${1}`);
  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/133.png

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
