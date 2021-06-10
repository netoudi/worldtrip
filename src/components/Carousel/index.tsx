import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel: FunctionComponent = () => {
  return (
    <Box position="relative" height="100%">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <SwiperSlide key={item}>
              <Flex
                width="100%"
                height="100%"
                backgroundImage="url('/images/europa.jpg')"
                backgroundPosition="center"
                backgroundSize="cover"
              >
                <Flex
                  width="100%"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor={'rgba(0, 0, 0, 0.35)'}
                >
                  <Heading
                    color="gray.200"
                    fontSize={['24px', '48px']}
                    fontWeight="700"
                  >
                    Europa
                  </Heading>
                  <Text color="gray.300" fontSize={['14px', '24px']}>
                    O continente mais antigo.
                  </Text>
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
