import { Card, Grid } from '@nextui-org/react';
import React, { FC } from 'react';

interface PropsFavorite {
  favoritePokmos: number[];
}

export const Favorite: FC<PropsFavorite> = ({ favoritePokmos }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favoritePokmos.map((id) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <Card isHoverable isPressable css={{ padding: 10 }}>
            <Card.Image
              width={'100%'}
              height={'140px'}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            />
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};
