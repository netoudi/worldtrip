import Header from '../../components/Header';
import { Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import Container from '../../components/Container';

export default function Continent() {
  return (
    <>
      <Header />
      <main>
        <Flex
          width="100%"
          maxWidth="1440"
          margin="auto"
          backgroundImage="url('/images/europa.jpg')"
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
              Europa
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
                A Europa é, por convenção, um dos seis continentes do mundo.
                Compreendendo a península ocidental da Eurásia, a Europa
                geralmente divide-se da Ásia a leste pela divisória de águas dos
                montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro
                a sudeste
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
                    50
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
                    60
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
                    27
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
              {[1, 2, 3, 4, 5, 6, 7, 8].map((city) => {
                return (
                  <Flex
                    key={city}
                    background="white"
                    flexDirection="column"
                    borderRadius="md"
                    overflow="hidden"
                  >
                    <Image
                      boxSize="100%"
                      objectFit="contain"
                      src={`https://source.unsplash.com/user/willianjusten/1042x58${city}`}
                      alt="WorldTrip"
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
                          Londres
                        </Text>
                        <Text
                          color="gray.500"
                          fontSize={['14px', '16px']}
                          fontWeight="500"
                        >
                          Reino Unido
                        </Text>
                      </Flex>
                      <Image
                        boxSize="30"
                        objectFit="cover"
                        src="/images/uk.svg"
                        alt="WorldTrip"
                        borderRadius="full"
                      />
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
