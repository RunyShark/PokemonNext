import Image from 'next/image';
import { useTheme, Text, Spacer, Link } from '@nextui-org/react';
import NextiLink from 'next/link';

export const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        background: theme?.colors.gray400.value,
      }}
    >
      <Image
        src={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        }
        alt='icono'
        width={70}
        height={70}
      />
      <NextiLink href='/' passHref>
        <Link>
          <Text color='#fff' h2>
            P
          </Text>
          <Text color='#fff' h3>
            okemon
          </Text>
        </Link>
      </NextiLink>
      <NextiLink href='/favorite' passHref>
        <Link>
          <Spacer css={{ flex: 1 }} />
          <Text color='#fff'>Favoritos</Text>
        </Link>
      </NextiLink>
    </div>
  );
};
