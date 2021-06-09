import { FunctionComponent, ReactNode } from 'react';
import { Flex, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react';

export type ContainerProps = {
  children: ReactNode;
};

const Container: FunctionComponent = ({ children }) => {
  return (
    <Flex
      width="100%"
      maxWidth="1160"
      margin="auto"
      justifyContent="space-between"
      alignItems="center"
      padding="4"
    >
      {children}
    </Flex>
  );
};

export default Container;
