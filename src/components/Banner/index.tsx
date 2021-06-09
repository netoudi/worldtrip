import { FunctionComponent } from 'react';
import { Flex, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react';

const Banner: FunctionComponent = () => {
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)');

  return (
    <Flex
      width="100%"
      maxWidth="2000"
      margin="auto"
      backgroundImage="url('/images/banner.jpg')"
      backgroundSize="cover"
      height={[170, 335]}
    >
      <Flex
        width="100%"
        maxWidth="1160"
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
        padding="4"
      >
        <Flex maxWidth="500" flexDir="column">
          <Heading
            as="h1"
            fontSize={['20px', '36px']}
            color="gray.200"
            fontWeight="500"
            lineHeight={['28px', '46px']}
            marginBottom={[2, 4]}
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text fontSize={['14px', '20px']} color="gray.300">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
          </Text>
        </Flex>
        <Flex>
          {isLargerThan720 && (
            <Image
              objectFit="contain"
              src="/images/airplane.svg"
              alt="WorldTrip"
              marginBottom="-100px"
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;
