import { FunctionComponent } from 'react';
import { Box, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';

const TravelTypesLabel = {
  nightlife: 'vida noturna',
  beach: 'praia',
  modern: 'moderno',
  classic: 'clássico',
  more: 'e mais...',
};

export type TravelTypesProps = {
  type: 'nightlife' | 'beach' | 'modern' | 'classic' | 'more';
};

const TravelTypes: FunctionComponent<TravelTypesProps> = ({ type }) => {
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)');

  return (
    <Flex flexDirection="column" alignItems="center">
      {isLargerThan720 && (
        <Image
          boxSize="85"
          objectFit="contain"
          src={`/images/${type}.svg`}
          alt="WorldTrip"
          marginBottom="24px"
        />
      )}
      <Flex alignItems="center">
        {!isLargerThan720 && (
          <Box h="8px" w="8px" marginRight="8px" borderRadius="50%" backgroundColor="yellow" />
        )}
        <Text fontSize={['14px', '24px']} color="gray.600" fontWeight="500">{TravelTypesLabel[type]}</Text>
      </Flex>
    </Flex>
  );
};

export default TravelTypes;
