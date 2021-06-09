import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Image } from '@chakra-ui/react';

const Logo: FunctionComponent = () => {
  return (
    <Link href="/">
      <a>
        <Image
          boxSize={['80px', '185px']}
          objectFit="contain"
          src="/images/logo.svg"
          alt="WorldTrip"
        />
      </a>
    </Link>
  );
};

export default Logo;
