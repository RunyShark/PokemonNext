import Head from 'next/head';
import { NavBar } from '../../';
interface PropsMainLayout {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const MainLayout = ({ children, title }: PropsMainLayout) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonAPP'}</title>
        <meta name='author' content='Sergio Dario' />
        <meta
          name='description'
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name='keywords' content={`${title},pokemon,pokedex`} />
      </Head>
      <NavBar />
      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
