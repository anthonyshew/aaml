import { Button, Center, List, SimpleGrid, Space, Text, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useMediaQuery } from '@mantine/hooks'
import { NextPage } from 'next'
import { Footer } from '../../components/shared/footer'
import { NavBar } from '../../components/shared/navbar'
import { MantineSelect } from '../../components/shared/select'
import { MantineTextInput } from '../../components/shared/textinput'
import { dearPlayersStyles } from '../../styles/dear-players'

const TEAMS = [
   'Free Agent',
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

const DearPlayers: NextPage = () => {
   const { classes } = dearPlayersStyles()
   const form = useForm({
      initialValues: {
         first: '',
         last: '',
         org: '',
         email: '',
         phone: '',
      },
   })
   const smallScreen = useMediaQuery('(max-width: 800px)', false)

   return (
      <>
         <NavBar />

         <Space h='xl' />

         <div className={classes.container}>
            <Title>Dear Players,</Title>
            <div style={{ width: smallScreen ? '90%' : '60%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
               <Text>
                  {`You're here for some help and we will make sure you get it. `}
                  <b>{`Please read everything on this page before signing up so you know what to expect.`}</b>
               </Text>

               <Title order={2} className={classes.title}>
                  What is About to Happen
               </Title>

               <Text>
                  {`You're about to let us know that you would like to be sponsored. We will get your message, let our community know about your interest in being sponsored, and you will have a brand new, 1-to-1 relationship with a fellow baseball lover to help you on your way to The Show. This usually takes less than 48 hours.`}
               </Text>

               <Title order={2} className={classes.title}>
                  Our Responsibilities
               </Title>

               <List className={classes.lists}>
                  <List.Item>
                     <b>Anonymous:</b> We respect that some players will want to stay anonymous through this process.
                     The only person we will share your identity with is your sponsor. Your sponsor has received
                     instructions that they need to respect your anonymity as well.
                     <br />
                     <br />
                     {`If you choose, you can let your sponsor know that you don't mind if they share your identity with family and friends. Additionally, you can let us know at any point that you don't mind if we refer to your name (for social media posts, for example).`}
                  </List.Item>
                  <br />
                  <List.Item>
                     <b>Matchmaking: </b>
                     {`We usually match players to sponsors within 48 hours but we will be patient if it means waiting for the right fit. Some sponsors tell us that they only are interested in players from certain organizations or that have a certain set of financial needs. Therefore, if you don't fit with the sponsors that are available right now, we will wait until we find one that does fit with you.`}
                     <br />
                     <br />
                     {`Trust us: matching people up just for the sake of getting a match made isn't the way to go. We will make sure things are right, and, if at any point you belie
                     ve you aren't matched up well, let us know.`}
                  </List.Item>
               </List>

               <Title order={2} className={classes.title}>
                  Sponsor Responsibilities
               </Title>

               <List className={classes.lists}>
                  <List.Item>
                     <b>Anonymous: </b>As we have mentioned above, sponsors are instructed by us to keep your identity a
                     secret. However, if you are comfortable with them mentioning your name, you can let them know.
                  </List.Item>
                  <br />
                  <List.Item>
                     <b>Selflessness: </b>
                     {`Our sponsors are informed that they are not owed anything for their service to a player. They don't own a piece of your future salary, you aren't required to buy them tickets, and you don't owe them inside information about your club. They are helping you as an act of kindness and nothing more. (But you probably should say thank you.)`}
                  </List.Item>
                  <br />
                  <List.Item>
                     <b>Financial or Gifted Aid: </b>
                     We leave it up to each individual sponsor to decide how they want to help you. Typically, sponsors
                     help by sending care packages, restaurant or grocery gift cards, or, sometimes, Venmo payments. We
                     recommend to sponsors that the total dollar cost of what they give you end up somewhere near
                     $100-150 per month until the next Spring Training of the following year. Most of the time, though,
                     these relationships last far longer.
                  </List.Item>
               </List>

               <Title order={2} className={classes.title}>
                  Your Responsibility
               </Title>

               <List className={classes.lists}>
                  <List.Item>
                     <b>Gratefulness: </b>A baseball fan is about to help you purely out of passion for the game and
                     wanting to make a difference in your life as a baseball player. We know that minor league baseball
                     can be quite punishing but <b>someone wants to ease your burden - and we are thankful for them.</b>
                  </List.Item>
                  <br />
                  <List.Item>
                     <b>{`Don't Be Shy!`}</b>
                     {`Sometimes it is hard to ask for help even when you and everyone around you knows you need it. We understand how awkward it can be to say "I haven't been able to eat my favorite snack for a long time because they don't sell it in my team's town. Can you send me some?" But, please remember, your sponsor signed up for this exact reason. It is okay to ask for something (...within reason).`}
                     <br />
                     <br />
                     {`Also, `} <b>get to know your sponsor!</b>{' '}
                     {`If you don't know about their pets and kids, you're doing it wrong!`}
                  </List.Item>
                  <br />
                  <List.Item>
                     <b>Spread the Word: </b>
                     Odds are many of your teammates could use a sponsor, too. Feel free to spread the word around the
                     clubhouse about your sponsorship, our organization, and how we help out. You can also make a post
                     on social media about us if you feel strongly enough. Appreciation posts with care packages from
                     your sponsors are our favorite!
                  </List.Item>
                  <br />
                  <List.Item>
                     <b>If something is not right, tell us:</b>
                     {`We are here for you if something doesn't seem quite right with the relationship you are building with your sponsor. We will not hesitate to act if you indicate that there is a problem that needs fixing that is within our control.`}
                  </List.Item>
               </List>

               <Center>
                  <form
                     onSubmit={form.onSubmit((vals) => console.log(vals))}
                     style={{ width: smallScreen ? '90%' : '60%' }}
                  >
                     <SimpleGrid cols={1}>
                        <Title align='center'>Player Sign Up Form</Title>
                        <MantineTextInput required label='First Name' {...form.getInputProps('first')} />
                        <MantineTextInput required label='Last Name' {...form.getInputProps('last')} />
                        <MantineSelect data={TEAMS} required label='Organization' {...form.getInputProps('org')} />
                        <MantineTextInput required label='Email' {...form.getInputProps('email')} />
                        <MantineTextInput required label='Phone Number' {...form.getInputProps('phone')} />

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

export default DearPlayers
