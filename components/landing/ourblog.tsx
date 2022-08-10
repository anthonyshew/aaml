import { Button, Center, Space, Text, Title } from '@mantine/core'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { useStyles } from '../../styles/home'

export const OurBlog: FunctionComponent = () => {
   const { classes } = useStyles()

   return (
      <>
         <Space h='xl' />

         <Title align='center'>Our Blog</Title>

         <Center>
            <div style={{ width: '80%' }}>
               <Title order={2} style={{ fontWeight: 900 }}>
                  Burritos for the Boys - Part 2!
               </Title>
               <Title order={5} style={{ fontWeight: 900, color: 'gray' }}>
                  May 26, 2022
               </Title>
               <Text style={{ fontWeight: 500 }}>
                  {`Funded by the minor league community once again, AaML is proud to announce that we're helping players where they enjoy it the most: their stomachs!`}
               </Text>

               <Title order={2} style={{ fontWeight: 900 }}>
                  Somerset Patriots Hurricane Ida Relief Project
               </Title>
               <Title order={5} style={{ fontWeight: 900, color: 'gray' }}>
                  September 20, 2021
               </Title>
               <Text style={{ fontWeight: 500 }}>
                  {`Stadium? Flooded. Cars full of players' belongings? Flooded. Our donation box when we said we wanted to help these guys? Also flooded.`}
               </Text>

               <Space h='xl' />

               <Center>
                  <Link href='/' passHref>
                     <Button component='a' size='lg' radius='lg' className={classes.dearButton}>
                        Visit All Posts
                     </Button>
                  </Link>
               </Center>
            </div>
         </Center>

         <Space h='xl' />
      </>
   )
}
