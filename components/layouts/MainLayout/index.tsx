import Head from 'next/head';

interface PropsMainLayout {
  children: JSX.Element | JSX.Element[];
}

export const MainLayout = ({ children }: PropsMainLayout) => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name='author' content='Sergio Dario' />
        <meta name='description' content='information pokemon' />
        <meta name='keywords' content='xxx,pokemon, pokedex' />
      </Head>
      {/*navbar*/}
      <main>{children}</main>
    </>
  );
};
