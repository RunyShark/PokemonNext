import { NextPage } from 'next';
import { Button } from '@nextui-org/react';

const HomePage: NextPage = () => {
  return (
    <div>
      <h1>Hello Word</h1>
      <Button color={'error'} />
    </div>
  );
};

export default HomePage;
