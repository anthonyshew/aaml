import { Center, SimpleGrid, Text, Title } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { Url } from 'url'
import { businessSponsors } from '../../styles/businessSponsors'

interface CardProps {
   /* Title of card. */
   title?: string
   /* Image source. */
   img?: string | any
   /* Height of image. */
   height?: string | number | undefined
   /* Width of image. */
   width?: string | number | undefined
   /* Paragraph description of company. */
   paragraph?: string
   /* Link to sponsor page. */
   href: Url | any
}

export const BusinessCard: FunctionComponent<CardProps> = ({ title, img, height, width, paragraph, href }) => {
   const { classes } = businessSponsors()
   return (
      <div className={classes.card}>
         <Title style={{ fontSize: '40px', paddingTop: '10px' }}>{title}</Title>

         <SimpleGrid cols={2} className={classes.grid} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <Center>
               <Image src={img} alt='logo' layout='fixed' height={height} width={width} />
            </Center>

            <Text align='left'>{paragraph}</Text>
         </SimpleGrid>

         <div className={classes.bottomBanner}>
            <Link href={href} passHref>
               <a style={{ textDecoration: 'none' }}>
                  <Title order={2} style={{ color: 'white', fontWeight: 900 }}>
                     Visit
                  </Title>
               </a>
            </Link>
         </div>
      </div>
   )
}
