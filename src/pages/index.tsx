import { Box, Grid } from '@chakra-ui/react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import TravelTypes from '../components/TravelTypes';
import Container from '../components/Container';

export default function Home() {
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
      </main>
    </>
  );
}
