import Header from '../../components/Header';
import { Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import Container from '../../components/Container';
import { GetStaticPaths, GetStaticProps } from 'next';
import api from '../../services/api';
import { City, Continent } from '../../utils/models';

export type ContinentPageProps = {
  continent: Continent;
  cities: City[];
};

export default function ContinentPage({
  continent,
  cities,
}: ContinentPageProps) {
  return (
    <>
      <Header />
      <main>
        <Flex
          width="100%"
          maxWidth="1440"
          margin="auto"
          backgroundImage={`url('${continent.image}')`}
          backgroundPosition="center"
          backgroundSize="cover"
          height={[150, 500]}
        >
          <Flex
            width="100%"
            justifyContent={['center', 'flex-start']}
            alignItems={['center', 'flex-end']}
            backgroundColor={'rgba(0, 0, 0, 0.35)'}
            px={[0, '140px']}
            py={[0, '60px']}
          >
            <Heading
              color="gray.200"
              fontSize={['28px', '48px']}
              fontWeight="500"
            >
              {continent.name}
            </Heading>
          </Flex>
        </Flex>

        <Container>
          <Grid
            templateColumns={['1fr', '1fr 1fr']}
            gap="4"
            my={['20px', '80px']}
          >
            <Flex>
              <Text
                color="gray.600"
                fontSize={['18px', '24px']}
                fontWeight="400"
                lineHeight={['24px', '36px']}
              >
                {continent.description}
              </Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
              <Grid
                templateColumns="1fr 1fr 2fr"
                gap="10"
                my={['20px', '80px']}
              >
                <Flex flexDirection="column">
                  <Text
                    color="yellow"
                    fontSize={['24px', '48px']}
                    fontWeight="500"
                    lineHeight="1"
                    textAlign={['left', 'center']}
                  >
                    {continent.countries}
                  </Text>
                  <Text
                    color="gray.600"
                    fontSize={['18px', '28px']}
                    fontWeight="500"
                  >
                    países
                  </Text>
                </Flex>
                <Flex flexDirection="column">
                  <Text
                    color="yellow"
                    fontSize={['24px', '48px']}
                    fontWeight="500"
                    lineHeight="1"
                    textAlign={['left', 'center']}
                  >
                    {continent.languages}
                  </Text>
                  <Text
                    color="gray.600"
                    fontSize={['18px', '28px']}
                    fontWeight="500"
                  >
                    línguas
                  </Text>
                </Flex>
                <Flex flexDirection="column">
                  <Text
                    color="yellow"
                    fontSize={['24px', '48px']}
                    fontWeight="500"
                    lineHeight="1"
                    textAlign={['left', 'center']}
                  >
                    {cities.length}
                  </Text>
                  <Text
                    color="gray.600"
                    fontSize={['18px', '28px']}
                    fontWeight="500"
                  >
                    cidades +100
                  </Text>
                </Flex>
              </Grid>
            </Flex>
          </Grid>
        </Container>

        <Container>
          <Flex width="100%" flexDirection="column">
            <Heading
              color="gray.600"
              fontSize={['26px', '36px']}
              fontWeight="500"
            >
              Cidades +100
            </Heading>
            <Grid
              w="100%"
              gap={[4, 6]}
              templateColumns={[
                'repeat(auto-fill, minmax(1fr, 2fr))',
                'repeat(auto-fill, minmax(256px, 1fr))',
              ]}
              my={['20px', '40px']}
            >
              {cities.map((city) => {
                return (
                  <Flex
                    key={city.id}
                    background="white"
                    flexDirection="column"
                    borderRadius="md"
                    overflow="hidden"
                  >
                    <Image
                      boxSize="100%"
                      objectFit="contain"
                      src={city.image}
                      alt={`${city.name} / ${city.country}`}
                    />
                    <Flex
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                      padding="24px"
                      borderLeftColor="yellow"
                      borderRightColor="yellow"
                      borderBottomColor="yellow"
                      borderLeftWidth="1px"
                      borderRightWidth="1px"
                      borderBottomWidth="1px"
                      borderBottomRightRadius="md"
                      borderBottomLeftRadius="md"
                    >
                      <Flex flexDirection="column">
                        <Text
                          color="gray.600"
                          fontSize={['14px', '20px']}
                          fontWeight="500"
                        >
                          {city.name}
                        </Text>
                        <Text
                          color="gray.500"
                          fontSize={['14px', '16px']}
                          fontWeight="500"
                        >
                          {city.country}
                        </Text>
                      </Flex>
                      {city.flag && (
                        <Image
                          boxSize="30"
                          objectFit="cover"
                          src={city.flag}
                          alt={`Flag of ${city.country}`}
                          borderRadius="full"
                          borderWidth="1px"
                          borderColor="gray.300"
                          borderStyle="solid"
                        />
                      )}
                    </Flex>
                  </Flex>
                );
              })}
            </Grid>
          </Flex>
        </Container>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('/continents');

  const paths = response.data.map(({ id }) => ({
    params: { slug: id },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: continent } = await api.get(`/continents/${params.slug}`);

  if (!continent) {
    return {
      notFound: true,
    };
  }

  const { data: cities } = await api.get(`/cities?continentId=${continent.id}`);

  return {
    revalidate: 60 * 60, // 1 hour
    props: {
      continent,
      cities,
    },
  };
};
