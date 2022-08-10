import { Button, Center, SimpleGrid, Space, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties, FunctionComponent } from 'react'
import { useStyles } from '../../styles/home'

interface IconBoxProps {
   src: string
   text?: string
   style?: CSSProperties
}

const IconBox: FunctionComponent<IconBoxProps> = ({ src, text, style, ...props }) => {
   const { classes } = useStyles()

   return (
      <div className={classes.iconBox} style={style} {...props}>
         <Image alt='logo' src={src} layout='fixed' height={100} width={100} style={{ borderRadius: '100%' }} />
         <Text weight='bolder' style={{ width: '75%' }}>
            {text}
         </Text>
      </div>
   )
}

const SUBTEXTWIDTH = '40%'

export const OurStory: FunctionComponent = () => {
   const { classes } = useStyles()
   const bigScreen = useMediaQuery('(min-width: 960px)', false)

   return (
      <>
         <Title align='center'>Our Story</Title>

         <Space h='xl' />
         <Space h='xl' />

         <Center>
            <div className={classes.ourStoryContainer}>
               <Title
                  align={!bigScreen ? 'center' : 'left'}
                  order={3}
                  style={{ maxWidth: !bigScreen ? '100%' : '50%' }}
               >
                  Making baseball happen through pure goodwill.
               </Title>

               <Space h='lg' />

               <div className={classes.subText}>
                  <Title
                     align={!bigScreen ? 'center' : 'left'}
                     order={4}
                     style={{ maxWidth: !bigScreen ? '100%' : SUBTEXTWIDTH }}
                  >
                     We connected a player with a sponsor.
                  </Title>
                  <Title
                     align={!bigScreen ? 'center' : 'left'}
                     order={4}
                     style={{ maxWidth: !bigScreen ? '100%' : SUBTEXTWIDTH }}
                  >
                     Then, we did it again.
                  </Title>
                  <Title
                     align={!bigScreen ? 'center' : 'left'}
                     order={4}
                     style={{ maxWidth: !bigScreen ? '100%' : SUBTEXTWIDTH }}
                  >
                     Then, we did it again...
                  </Title>
               </div>

               <Space h='lg' />

               <Center inline={bigScreen}>
                  <Link href='/about-us' passHref>
                     <Button component='a' radius='lg' size='lg' className={classes.dearButton}>
                        About Us
                     </Button>
                  </Link>
               </Center>

               {!bigScreen ? (
                  <>
                     <Space h='lg' />
                     <Center>
                        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                           <IconBox src='/anthony-shew.png' text='Anthony Shew, Player' />
                           <IconBox src='/the-corrins.png' text='The Corrins, Sponsor' />
                           <IconBox src='/aaml-logo.png' text='AaML, Matchmaker' />
                        </SimpleGrid>
                     </Center>
                  </>
               ) : (
                  <>
                     <IconBox
                        src='/anthony-shew.png'
                        text='Anthony Shew, Player'
                        style={{ position: 'absolute', top: '-50px', right: '20%' }}
                     />
                     <IconBox
                        src='/the-corrins.png'
                        text='The Corrins, Sponsor'
                        style={{ position: 'absolute', bottom: '-50px', right: '5%' }}
                     />
                     <IconBox
                        src='/aaml-logo.png'
                        text='AaML, Matchmaker'
                        style={{ position: 'absolute', bottom: '30px', right: '40%' }}
                     />
                  </>
               )}
            </div>
         </Center>
      </>
   )
}
