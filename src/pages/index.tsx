import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Header from '../components/Header';
import Banner from '../components/Banner';
import TravelTypes from '../components/TravelTypes';
import Container from '../components/Container';
import Carousel from '../components/Carousel';
import api from '../services/api';
import { Highlights } from '../utils/models';

export type HomeProps = {
  highlights: Highlights[];
};

export default function Home({ highlights }: HomeProps) {
  return (
    <>
      <Header />
      <main>
        <section>
          <Banner />
        </section>
        <Box
          as="section"
          marginTop={['20px', '80px']}
          marginBottom={['20px', '80px']}
        >
          <Container>
            <Grid
              w="100%"
              gap={[4, 6]}
              templateColumns={[
                'repeat(auto-fill, minmax(8rem, 1fr))',
                'repeat(auto-fill, minmax(12rem, 1fr))',
              ]}
            >
              <TravelTypes type="nightlife" />
              <TravelTypes type="beach" />
              <TravelTypes type="modern" />
              <TravelTypes type="classic" />
              <TravelTypes type="more" />
            </Grid>
          </Container>
        </Box>

        <Flex justifyContent="center" alignItems="center">
          <Center width={['60px', '90px']}>
            <Divider my={[2, 6]} borderColor="gray.600" />
          </Center>
        </Flex>

        <Container>
          <Flex w="100%" flexDirection="column" alignItems="center">
            <Heading
              color="gray.600"
              fontSize={['26px', '36px']}
              fontWeight="500"
            >
              Vamos nessa?
            </Heading>
            <Text color="gray.600" fontSize={['18px', '28px']} fontWeight="300">
              Então escolha seu continente
            </Text>
          </Flex>
        </Container>

        <Box
          width="100%"
          maxWidth="1240px"
          height={['250px', '450px']}
          margin="auto"
          marginY={['20px', '40px']}
        >
          <Carousel highlights={highlights} />
        </Box>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/highlights');

  return {
    revalidate: 60 * 60, // 1 hour
    props: {
      highlights: response.data,
    },
  };
};
