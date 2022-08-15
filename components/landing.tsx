import { Space, Title } from '@mantine/core'
import React, { FunctionComponent } from 'react'
import { useStyles } from '../styles/home'
import { Footer } from './shared/footer'
import { Media } from './landing/media'
import { NavBar } from './shared/navbar'
import { DearMessages } from './landing/dearMessages'
import { SponsorCarousel } from './landing/carousel'
import { OurSponsors } from './landing/oursponsors'
import { OurStory } from './landing/ourstory'
import { OurBlog } from './landing/ourblog'

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
