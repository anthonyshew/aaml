import { Button, Center, Space, Text, Title } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { useStyles } from '../styles/home'
import { SponsorCarousel } from './carousel'
import { DearMessages } from './dearMessages'
import { Footer } from './footer'
import { Media } from './media'
import { NavBar } from './navbar'
import { OurBlog } from './ourblog'
import { OurSponsors } from './oursponsors'
import { OurStory } from './ourstory'

export const Landing: FunctionComponent = () => {
   const { classes } = useStyles()

   return (
      <>
         {/* hero bg image */}
         <div className={classes.hero} />

         {/* navbar */}
         <NavBar />

         {/* hero banner */}
         <div className={classes.heroBanner}>
            <Title className={classes.bannerNumber} align='center'>
               806
            </Title>
            <Title className={classes.bannerTitle} order={2}>
               Players Sponsored through <br /> Adopt a Minor Leaguer
            </Title>
         </div>

         {/* dear player & sponsors */}
         <DearMessages />

         {/* sponsorship carousel */}
         <SponsorCarousel />

         <Space h='xl' />

         {/* our sponsors */}
         <OurSponsors />

         <Space h='xl' />

         {/* our story */}
         <OurStory />

         <Space h='xl' />
         <Space h='xl' />

         {/* media */}
         <Media />

         {/* our blog */}
         <OurBlog />

         <Footer />
      </>
   )
}
