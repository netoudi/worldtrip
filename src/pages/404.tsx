import Head from 'next/head';
import Link from 'next/link';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Header from '../components/Header';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | WorldTrip</title>
      </Head>
      <Header />
      <Flex
        w="100%"
        h="60vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Heading color="gray.600" fontSize={['26px', '36px']} fontWeight="500">
          Ops!
        </Heading>
        <Text color="gray.600" fontSize={['18px', '28px']} fontWeight="300">
          Página não encontrada,{' '}
          <strong>
            <Link href="/">voltar para home.</Link>
          </strong>
        </Text>
      </Flex>
    </>
  );
}
