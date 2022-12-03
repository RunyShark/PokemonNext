import React, { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { CardFavorite } from '..';

interface PropsFavorite {
  favoritePokmos: number[];
}

export const Favorite: FC<PropsFavorite> = ({ favoritePokmos }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favoritePokmos.map((id) => (
        <CardFavorite id={id} key={id} />
      ))}
    </Grid.Container>
  );
};
