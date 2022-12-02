import React, { FC } from 'react';

import { Grid, Card, Row, Text } from '@nextui-org/react';
import { Result } from '../../..';
import { useRouter } from 'next/router';

export const CardUi: FC<Result> = ({ id, img, name, url }): JSX.Element => {
  const router = useRouter();
  const onCLick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <>
      <Grid xs={6} sm={3} md={2} xl={1} key={id}>
        <Card isHoverable isPressable onClick={onCLick}>
          <Card.Body css={{ p: 1 }}>
            <Card.Image src={img} width='100%' height='140px' />
          </Card.Body>
          <Card.Footer>
            <Row justify='space-between'>
              <Text
                transform='capitalize'
                css={{ fontWeight: 'bold', letterSpacing: 1 }}
              >
                {name}
              </Text>
              <Text>#{id}</Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </>
  );
};
