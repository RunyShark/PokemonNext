import React, { FC } from 'react';
import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';

export const CardFavorite: FC<{ id: number }> = ({ id }) => {
  const router = useRouter();
  const onCLick = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable css={{ padding: 10 }} onClick={onCLick}>
        <Card.Image
          width={'100%'}
          height={'140px'}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        />
      </Card>
    </Grid>
  );
};
