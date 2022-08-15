import { Button, Center, List, SimpleGrid, Space, Text, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useMediaQuery } from '@mantine/hooks'
import { NextPage } from 'next'
import { Footer } from '../../components/shared/footer'
import { MantineMultiSelect } from '../../components/shared/multiselect'
import { NavBar } from '../../components/shared/navbar'
import { MantineTextInput } from '../../components/shared/textinput'
import { dearPlayersStyles } from '../../styles/dear-players'

const TEAMS = [
   'Any of them!',
   'Angels',
   'Astros',
   'Athletics',
   'Blue Jays',
   'Braves',
   'Brewers',
   'Cardinals',
   'Cubs',
   'Diamondbacks',
   'Dodgers',
   'Giants',
   'Guardians',
   'Mariners',
   'Marlins',
   'Mets',
   'Nationals',
   'Orioles',
   'Padres',
   'Pirates',
   'Phillies',
   'Rangers',
   'Rays',
   'Reds',
   'Red Sox',
   'Rockies',
   'Royals',
   'Tigers',
   'Twins',
   'White Sox',
   'Yankees',
]

const DearSponsors: NextPage = () => {
   const { classes } = dearPlayersStyles()
   const smallScreen = useMediaQuery('(max-width: 800px)', false)
   const form = useForm({
      initialValues: {
         first: '',
         last: '',
         email: '',
         phone: '',
         teams: [TEAMS[0]],
      },
   })

   return (
      <>
         <NavBar />

         <Space h='xl' />

         <div className={classes.container}>
            <Title>Dear Sponsors,</Title>

            <div style={{ width: smallScreen ? '90%' : '60%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
               <Text>
                  {`You're here to help a player in need and we couldn't be happier. `}
                  <b>{`Please read everything on this page before signing up so you know what to expect.`}</b>
               </Text>

               <Title order={2} className={classes.title}>
                  What is About to Happen
               </Title>

               <Text>
                  {`You're about to let us know that you would like to be a player sponsor. We will get your message, check out our list of players in need, and you will begin building your 1-to-1 relationship with your player. This usually takes less than 48 hours.`}
               </Text>

               <Title order={2} className={classes.title}>
                  Our Responsibilities
               </Title>

               <List className={classes.lists}>
                  <List.Item>
                     <b>Anonymity: </b>
                     {`Our organization is player-first. We know that some players want to remain anonymous about receiving outside financial help while they are a part of a professional baseball organization. We respect that and strictly require sponsors respect that as well.`}{' '}
                     <b>{`Make sure to ask your player if he wants to be anonymous. If you don't know, allow your player to be anonymous to everyone other than you.`}</b>
                  </List.Item>
                  <br />
                  <List.Item>
                     <b>Matchmaking: </b>
                     {`We usually match sponsors to players within 48 hours but we will be patient if it means waiting for the right fit. When we have reason to believe that a certain relationship may not be the best one for player, sponsor, or AaML, we may wait for a better one. For instance, if you are interested in a particular team(s), we'll wait to have a player from that organization.`}
                     <br />
                     <br />
                     {`Trust us: matching people up just for the sake of getting a match made isn't the way to go. We will make sure things are right, and, if at any point you believe you aren't matched up well, let us know.`}
                  </List.Item>
               </List>

               <Title order={2} className={classes.title}>
                  Player Responsibilities
               </Title>

               <List className={classes.lists}>
                  <List.Item>
                     <b>If something is not right, tell us: </b>
                     We will not hesitate to remove a sponsorship if a player asks us to. We are here for the players
                     and, if for any reason they ask us to terminate a sponsorship, we will.
                  </List.Item>
                  <br />
                  <List.Item>
                     <b>Reasonable Requests: </b>
                     We have never had an issue with this but we do believe it is worth stating: Our players are
                     required to be reasonable with their aid requests. If you, as a sponsor, believe your player is
                     asking for too much, please do not hesistate to let us know.
                  </List.Item>
                  <br />
                  <List.Item>
                     <b>{`Don't Be Shy! `}</b>
                     {`Sometimes it is hard to ask for help even when you and everyone around you knows you need it. We understand how awkward it can be to say "I haven't been able to eat my favorite snack for a long time because they don't sell it in my team's town. Can you send me some?" As a sponsor, do what you can to make your player comfortable and create a relationship where this becomes easier for a player.`}
                  </List.Item>
               </List>

               <Title order={2} className={classes.title}>
                  Your Responsibility
               </Title>

               <List className={classes.lists}>
                  <List.Item>
                     <b>Selflessness: </b>
                     {`Our sponsors act purely out of the well-being of the players they are sponsoring.`}
                     <b>{` Under no circumstance are sponsors owed anything by a player in return for being a part of this community. It's probably okay to expect a "thank you" - but asking for anything else back from your player is not allowed and grounds for termination of sponsorship.`}</b>
                  </List.Item>
                  <br />
                  <List.Item>
                     <b>Financial Standards: </b>
                     {`We ask for our sponsors to create a sponsorship that will last at least until the player's next Spring Training, whenever that is. About 95% of the time, though, you're about to create a life-long relationship.`}
                     <br />
                     <br />
                     We encourage sponsors to use about
                     <b> $100-150 per month on their player - </b>
                     {`but won't stop passionate sponsors from being more gracious. That dollar amount can take the shape of anything from care
                     packages, gift cards, equipment, grocery money, or many other options. `}
                     <br />
                     <br />
                     {`If at any time you feel your own finanical well-being is in danger because of your obligation to your player, please contact us`}
                     so we can help.
                  </List.Item>
                  <br />
                  <List.Item>
                     <b>If something is not right, tell us: </b>
                     {`We are here for you if something doesn't seem quite right with the relationship you are building with your player. We will not hesitate to act if you indicate that there is a problem that needs fixing that is within our control.`}
                  </List.Item>
               </List>

               <Center>
                  <form
                     onSubmit={form.onSubmit((vals) => console.log(vals))}
                     style={{ width: smallScreen ? '90%' : '60%' }}
                  >
                     <SimpleGrid cols={1}>
                        <Title align='center'>Sponsor Sign Up Form</Title>
                        <MantineTextInput required type='text' label='First Name' {...form.getInputProps('first')} />
                        <MantineTextInput required type='text' label='Last Name' {...form.getInputProps('last')} />
                        <MantineTextInput required type='email' label='Email' {...form.getInputProps('email')} />
                        <MantineTextInput required type='tel' label='Phone Number' {...form.getInputProps('phone')} />
                        <MantineMultiSelect
                           clearable
                           data={TEAMS}
                           required
                           label='Preferred Teams'
                           {...form.getInputProps('teams')}
                        />

                        <Button type='submit' radius='lg' size='lg' className={classes.formButton}>
                           Submit
                        </Button>
                     </SimpleGrid>
                  </form>
               </Center>
            </div>
         </div>

         <Footer />
      </>
   )
}

export default DearSponsors
