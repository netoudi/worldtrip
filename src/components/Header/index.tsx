import { FunctionComponent } from 'react';
import { Flex } from '@chakra-ui/react';
import Logo from '../Logo';

const Header: FunctionComponent = () => {
  return (
    <Flex h={[50, 100]} justifyContent="center" alignItems="center">
      <Logo />
    </Flex>
  );
};

export default Header;
