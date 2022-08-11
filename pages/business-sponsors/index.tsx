import { Space, Text, Title } from '@mantine/core'
import { NextPage } from 'next'
import { Footer } from '../../components/shared/footer'
import { NavBar } from '../../components/shared/navbar'
import { dearPlayersStyles } from '../../styles/dear-players'
import { BusinessCard } from './businessCard'

const BusinessSponsors: NextPage = () => {
   const { classes } = dearPlayersStyles()
   return (
      <>
         <NavBar />

         <Space h='xl' />

         <div className={classes.container}>
            <Title>Our Business Sponsors</Title>

            <Text style={{ width: '90%' }}>
               {`What's a business sponsor? The following is a list of business sponsors who have committed to donating to our cause. Whether it be a percentage of sales or a donation every time someones uses a code at checkout, these businesses are choosing to make a difference in the lives of minor leaguers. (And many of them are owned by minor leaguers!)`}
            </Text>

            <BusinessCard
               href='https://www.entourageathletics.com/team'
               title='Entourage Sports'
               img={'/entourage-logo.png'}
               height='202'
               width='220'
               paragraph={`Through their mobile app, Entourage Sports provides minor leaguers the opportunity to do remote coaching with members of the baseball community both in and out of season! Sign up with an AaML sponsored player to support us!`}
            />
            <Space h='xl' />
            <BusinessCard
               href='https://orvilleandrew.com/'
               title='Orville Andrew'
               img={'/OA-icon.png'}
               height='198'
               width='140'
               paragraph={`Owned by St. Louis Cardinals farmhand Patrick Dayton and his brother, Glenn, Orville Andrew creates candles for all occassions. Their bountiful scents can add that extra ounce of cozy to your home or give your space at your office some character.`}
            />
            <Space h='xl' />
            <BusinessCard
               href='https://backwoodpine.darkroom.tech/'
               title='Backwood Pine'
               img={'/backwood-pine.jpeg'}
               height='140'
               width='237'
               paragraph={`Kyle Schmidt of the Minnesota Twins found a passion for photography during his years in college that has continued to this day. And he'll let his breathtaking photos be yours. USE THE CODE FOR A 25% DISCOUNT!`}
            />
         </div>

         <Footer />
      </>
   )
}

export default BusinessSponsors
