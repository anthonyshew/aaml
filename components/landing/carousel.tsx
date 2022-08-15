import { Carousel } from '@mantine/carousel'
import { Center, Space, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Image from 'next/image'
import { FunctionComponent } from 'react'

export const SponsorCarousel: FunctionComponent = () => {
   const bigScreen = useMediaQuery('(min-width: 800px)', false)

   return (
      <>
         <Center>
            <Title align='center'>How A Sponsorship Happens</Title>
         </Center>

         <Space h='lg' />

         <Carousel mx='auto' withIndicators withControls={bigScreen} style={{ color: 'white' }} height={400}>
            <Carousel.Slide>
               <Title style={{ position: 'absolute', zIndex: 1, left: '10%', top: '2%' }}>Step 1</Title>
               <Text
                  style={{
                     fontSize: '24px',
                     fontWeight: 500,
                     position: 'absolute',
                     zIndex: 1,
                     right: '10%',
                     top: '30%',
                     width: '45%',
                     textAlign: 'right',
                  }}
               >
                  A player gets in touch with us that he would like to be sponsored.
               </Text>
               <Image alt='1' src={'/player-walking.jpeg'} layout='fill' objectFit='cover' objectPosition={'50% 70%'} />
            </Carousel.Slide>
            <Carousel.Slide>
               <div
                  style={{
                     alignItems: 'center',
                     display: 'flex',
                     flexDirection: 'column',
                     height: '100%',
                     justifyContent: 'space-around',
                     position: 'absolute',
                     textAlign: 'center',
                     width: '100%',
                     zIndex: 1,
                  }}
               >
                  <Title>Step 2</Title>
                  <Text style={{ fontSize: '24px', fontWeight: 500 }}>
                     We let our community know a player is up for sponsorship.
                  </Text>
               </div>
               <Image alt='2' src={'/stadium.jpeg'} layout='fill' objectFit='cover' objectPosition={'50% 90%'} />
            </Carousel.Slide>
            <Carousel.Slide>
               <Title sx={{ right: '35%', top: '2%', position: 'absolute', zIndex: 1 }}>Step 3</Title>
               <Text
                  sx={{
                     left: '10%',
                     top: '25%',
                     position: 'absolute',
                     width: '45%',
                     zIndex: 1,
                     fontSize: '24px',
                     fontWeight: 500,
                  }}
               >
                  We select a sponsor from the community for the player.
               </Text>
               <Image alt='3' src={'/ball-on-grass.jpeg'} layout='fill' objectFit='cover' objectPosition={'50% 90%'} />
            </Carousel.Slide>
            <Carousel.Slide>
               <Title sx={{ right: '10%', top: '2%', position: 'absolute', zIndex: 1 }}>Step 4</Title>
               <Text
                  sx={{
                     fontSize: '24px',
                     fontWeight: 500,
                     position: 'absolute',
                     top: '30%',
                     width: '45%',
                     right: '1rem',
                     zIndex: 1,
                  }}
               >
                  We put player and sponsor into contact and their relationship grows.
               </Text>
               <Image alt='4' src={'/gift.jpeg'} layout='fill' objectFit='cover' objectPosition={'50% 50%'} />
            </Carousel.Slide>
         </Carousel>
      </>
   )
}
