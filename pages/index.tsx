import { NextPage } from 'next';
import { Button } from '@nextui-org/react';
import { MainLayout } from '..';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <h1>Hello Word</h1>
      <Button color={'error'} />
    </MainLayout>
  );
};

export default HomePage;
