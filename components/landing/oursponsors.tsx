import { Button, Center, Grid, Space, Text, Title, useMantineTheme } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { IconArrowRight } from '@tabler/icons'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { useStyles } from '../../styles/home'

export const OurSponsors: FunctionComponent = () => {
   const { classes } = useStyles()
   const { width } = useViewportSize()
   const theme = useMantineTheme()

   return (
      <>
         <Title align='center'>Shop Our Sponsors</Title>
         <Text align='center' size={'24px' as any} style={{ padding: '0 5%' }}>
            Shop with our business sponsors to support minor leaguers that own businesses - and us!
         </Text>

         <Grid grow>
            <Grid.Col span={4}>
               <Center>
                  <Image alt='entourage' src='/entourage-logo.png' layout='fixed' height='100px' width='110px' />
               </Center>
            </Grid.Col>

            <Grid.Col span={4}>
               <Center>
                  <Image alt='oa' src='/OA-icon.png' layout='fixed' height='99px' width='70px' />
               </Center>
            </Grid.Col>

            <Grid.Col span={4}>
               <Center>
                  <Image alt='backwood-pine' src='/backwood-pine.jpeg' layout='fixed' height='70px' width='118px' />
               </Center>
            </Grid.Col>
         </Grid>

         <Space h='xl' />

         <Center>
            <Link href='/business-sponsors' passHref>
               <Button
                  component='a'
                  radius='lg'
                  size='lg'
                  rightIcon={<IconArrowRight />}
                  className={classes.dearButton}
               >
                  Shop
               </Button>
            </Link>
         </Center>
      </>
   )
}
