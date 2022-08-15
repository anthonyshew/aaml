import { Button, SimpleGrid, Stack, Text, Title, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { useStyles } from '../../styles/home'

export const DearMessages: FunctionComponent = () => {
   const { classes } = useStyles()
   const theme = useMantineTheme()

   return (
      <SimpleGrid
         cols={2}
         breakpoints={[{ maxWidth: theme.breakpoints.sm, cols: 1 }]}
         sx={(theme) => ({ color: theme.colors.navy, padding: '5% 7%' })}
         spacing='xl'
      >
         <Stack spacing='xl' className={classes.dearStack}>
            <Title>Dear Player,</Title>
            <Text className={classes.dearText}>
               {`You have a certain set of needs unlike any other. You're in the top .0001% of people who do what you do and you're a part of a multi-billion dollar industry. But it probably doesn't feel like it financially. Adopt a Minor Leaguer and our sponsor network are here to help you achieve your goals and provide a little more comfort along the way. Our confidential process gets you the help you deserve.`}
            </Text>
            <Link href='/dear-players' passHref>
               <Button component='a' size='xl' className={classes.dearButton} radius='lg'>
                  More Info & <br /> Player Sign-Up
               </Button>
            </Link>
         </Stack>
         <Stack spacing='xl' className={classes.dearStack}>
            <Title>Dear Sponsor,</Title>
            <Text className={classes.dearText}>
               {`You love baseball and you know about the controversial treatment that minor leaguers receive. But here's the good part: You have the opportunity to help these young men achieve their dreams. By becoming a sponsor, you can impact a minor leaguer's life with a 1-to-1 relationship that he will remember forever. Have an impact on your favorite team and your new favorite player today.`}
            </Text>
            <Link href='/dear-sponsors' passHref>
               <Button component='a' size='xl' className={classes.dearButton} radius='lg'>
                  More Info & <br /> Sponsor Registration
               </Button>
            </Link>
         </Stack>
      </SimpleGrid>
   )
}
