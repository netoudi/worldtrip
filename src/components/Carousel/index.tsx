import NextLink from 'next/link';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Highlights } from '../../utils/models';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export type CarouselProps = {
  highlights: Highlights[];
};

const Carousel: FunctionComponent<CarouselProps> = ({ highlights }) => {
  return (
    <Box position="relative" height="100%">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {highlights.map((highlight) => {
          return (
            <SwiperSlide key={highlight.title}>
              <Flex
                width="100%"
                height="100%"
                backgroundImage={`url('${highlight.image}')`}
                backgroundPosition="center"
                backgroundSize="cover"
              >
                <Flex
                  width="100%"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor={'rgba(0, 0, 0, 0.7)'}
                >
                  <NextLink href={`/continent/${highlight.slug}`} passHref>
                    <Link
                      maxWidth="60%"
                      textAlign="center"
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Heading
                        color="gray.200"
                        fontSize={['24px', '48px']}
                        fontWeight="700"
                      >
                        {highlight.title}
                      </Heading>
                      <Text color="gray.300" fontSize={['14px', '24px']}>
                        {highlight.subtitle}
                      </Text>
                    </Link>
                  </NextLink>
                </Flex>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Carousel;
