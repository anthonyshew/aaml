import { BackgroundImage, SimpleGrid, Space, Text, ThemeIcon, Title, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconBallBaseball, IconBellRinging2, IconScale, IconSquareCheck } from '@tabler/icons'
import { NextPage } from 'next'
import { Footer } from '../../components/shared/footer'
import { NavBar } from '../../components/shared/navbar'
import { aboutUsStyles } from '../../styles/aboutUs'

export const AboutUs: NextPage = () => {
   const { classes } = aboutUsStyles()
   const theme = useMantineTheme()
   const bigScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`, false)

   console.log(theme.colors.red)
   return (
      <>
         <NavBar />

         <Space h='xl' />
         <div className={classes.container}>
            <BackgroundImage src='/about-banner.jpg' className={classes.bgImage}>
               <Title align='center' className={classes.bannerTitle}>
                  About Us
               </Title>
            </BackgroundImage>

            <div className='under-banner'>
               <Title align={bigScreen ? 'left' : 'center'} order={2}>
                  Mission Statement
               </Title>
               <Text align={bigScreen ? 'left' : 'center'} className='statement-text'>
                  To make the lives of minor league baseball players more fulfilling.
               </Text>

               <Title align={bigScreen ? 'left' : 'center'} order={2}>
                  Our Values
               </Title>
            </div>

            <SimpleGrid cols={2} className='values-grid' breakpoints={[{ maxWidth: theme.breakpoints.sm, cols: 1 }]}>
               <div className={classes.valueContainer}>
                  <Title order={3}>Player Committed</Title>
                  <IconBallBaseball height='150px' width='150px' color={theme.colors.red[8] as any} />
               </div>

               <Text color={bigScreen ? 'white' : ''}>
                  {`In our work, players come first and foremost. Any time we feel like we can't make a decision easily, 
                  we ask ourselves "How would players benefit the most?" That usually leads us to where we need to go pretty 
                  quickly.`}
               </Text>

               <div className={classes.valueContainer}>
                  <Title order={3}>Service</Title>
                  <IconBellRinging2 height='150px' width='150px' color={theme.colors.red[8] as any} />
               </div>

               <Text color={bigScreen ? 'white' : ''}>
                  {`If we as an organization are to execute our mission statement, we must act from a place of altruism. Our goals are to improve the lives of others and we mean to put them first whenever we can.`}
               </Text>

               <div className={classes.valueContainer}>
                  <Title order={3}>Integrity</Title>
                  <IconScale height='150px' width='150px' color={theme.colors.red[8] as any} />
               </div>

               <Text color={bigScreen ? 'white' : ''}>
                  {`We will let the dictionary speak for itself here. Definition #1: the quality of being honest and having strong moral principles. Definition #2: the state of being whole and undivided.`}
               </Text>

               <div className={classes.valueContainer}>
                  <Title order={3}>Accountability</Title>
                  <IconSquareCheck height='150px' width='150px' color={theme.colors.red[8] as any} />
               </div>

               <Text color={bigScreen ? 'white' : ''}>
                  {`We strongly believe that staying accountable is the only way that we can run our non-profit properly. We want to remain transparent with our work and become a trustworthy and reputable member of the baseball commnity.`}
               </Text>
            </SimpleGrid>

            <Title align={bigScreen ? 'left' : 'center'} order={2}>
               Our People
            </Title>

            <SimpleGrid cols={2} breakpoints={[{ maxWidth: theme.breakpoints.sm, cols: 1 }]}>
               {/* Michael Rivers */}
               <div className='people-icons'>
                  <svg
                     aria-hidden='true'
                     focusable='false'
                     data-prefix='fas'
                     data-icon='user-tie'
                     role='img'
                     viewBox='0 0 448 512'
                     height='150'
                     width='150'
                  >
                     <path
                        fill='currentColor'
                        d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z'
                     ></path>
                  </svg>
               </div>

               <SimpleGrid cols={1}>
                  <Title align='center' order={3}>
                     Michael Rivers
                  </Title>
                  <div style={{ padding: '0 2rem' }}>
                     <Text>Principal Founder</Text>
                     <Text>Chairman of the Board</Text>
                     <Text>Executive Chair</Text>
                     <Text>President</Text>
                  </div>
               </SimpleGrid>

               {/* Anthony Shew */}
               <div className='people-icons'>
                  <svg
                     aria-hidden='true'
                     focusable='false'
                     data-prefix='fas'
                     data-icon='user-cog'
                     role='img'
                     viewBox='0 0 640 512'
                     height='150'
                     width='150'
                  >
                     <path
                        fill='currentColor'
                        d='M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z'
                     ></path>
                  </svg>
               </div>

               <SimpleGrid cols={1}>
                  <Title align='center' order={3}>
                     Anthony Shew
                  </Title>
                  <div style={{ padding: '0 2rem' }}>
                     <Text>Co-Founder</Text>
                     <Text>Board Member, Player Representative</Text>
                     <Text>Secretary</Text>
                     <Text>Software Engineer</Text>
                  </div>
               </SimpleGrid>

               {/* Mariana Guzman */}
               <div className='people-icons'>
                  <svg
                     aria-hidden='true'
                     focusable='false'
                     data-prefix='fas'
                     data-icon='user-plus'
                     role='img'
                     viewBox='0 0 640 512'
                     height='150'
                     width='150'
                  >
                     <path
                        fill='currentColor'
                        d='M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'
                     ></path>
                  </svg>
               </div>

               <SimpleGrid cols={1}>
                  <Title align='center' order={3}>
                     Mariana Guzman
                  </Title>
                  <div style={{ padding: '0 2rem' }}>
                     <Text>Co-Founder</Text>
                     <Text>Board Member, Latin Affairs</Text>
                     <Text>Head of Sponsor Relations</Text>
                     <Text>Head of Latin Communications</Text>
                  </div>
               </SimpleGrid>
            </SimpleGrid>
         </div>
         <Footer />
      </>
   )
}

export default AboutUs
