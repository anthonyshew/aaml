import { Button, Center, Grid, SimpleGrid, Space, Switch, ThemeIcon, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons'
import Image from 'next/image'
import Link from 'next/link'
import React, { Component, forwardRef, useState } from 'react'
import { useStyles } from '../styles/home'

const NavBarLink: Component = ({ href, text }) => {
   return (
      <Link href={href} passHref>
         <a
            style={{
               textDecoration: 'none',
            }}
         >
            <Title order={3} sx={(theme) => ({ color: theme.colors.navy })}>
               {text}
            </Title>
         </a>
      </Link>
   )
}

export const Landing: Component = () => {
   const { classes } = useStyles()
   const matches = useMediaQuery('(min-width: 995px)')
   const [lang, setLang] = useState(false)

   return (
      <>
         {/* hero bg image */}
         <div className={classes.hero} />

         {/* navbar */}
         <div className={classes.navBar}>
            <Link href='/about' passHref>
               <a>
                  <Image
                     alt='logo'
                     src='/aaml-logo.png'
                     width='150'
                     height='150'
                     style={{ cursor: 'pointer', borderRadius: '10px' }}
                  />
               </a>
            </Link>

            <Space w='xl' />

            <SimpleGrid cols={2}>
               <NavBarLink href='/dear-players' text='Dear Players' />
               <NavBarLink href='/about-us' text='About Us' />
               <NavBarLink
                  href='https://promotionsetc.commonsku.com/shop/e5be5b9c-b850-4648-9d5f-830033b386b2'
                  text='Shop'
               />
               <NavBarLink href='/dear-sponsors' text='Dear Sponsors' />
               <NavBarLink href='/blog' text='Blog' />

               <Link href='/donate' passHref>
                  <a>
                     <Button
                        sx={(theme) => ({
                           backgroundColor: theme.colors.navy,
                           color: theme.colors.orange,
                           fontSize: '22px',
                           fontWeight: 800,
                           ':hover': { backgroundColor: 'navy' },
                        })}
                        radius='md'
                     >
                        Donate
                     </Button>
                  </a>
               </Link>
            </SimpleGrid>

            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  right: '20px',
                  top: '20px',
                  alignItems: 'center',
               }}
            >
               <Switch
                  checked={lang}
                  onChange={(event) => setLang(event.currentTarget.checked)}
                  size='lg'
                  offLabel='EN'
                  onLabel='SP'
                  color='navy'
                  sx={(theme) => ({
                     input: { backgroundColor: theme.colors.navy },
                     label: { backgroundColor: theme.colors.navy },
                  })}
               />
               <Space h={4} />
               <Link href='https://www.instagram.com/adoptanmilbplayer/' passHref>
                  <a>
                     <IconBrandInstagram size={36} color='navy' />
                  </a>
               </Link>
               <Link href='https://twitter.com/adoptmilbplayer' passHref>
                  <a>
                     <IconBrandTwitter size={36} color='navy' />
                  </a>
               </Link>
               <Link href='https://www.facebook.com/groups/218122932877473/' passHref>
                  <a>
                     <IconBrandFacebook size={36} color='navy' />
                  </a>
               </Link>
            </div>
         </div>

         {/* hero banner */}
         <Grid className={classes.heroBanner} justify='center'>
            <Grid.Col md={6}>
               <Title style={{ fontSize: '8rem', fontFamily: 'PassionOne' }} align={!matches && 'center'}>
                  806
               </Title>
            </Grid.Col>
            <Grid.Col md={6}>
               <Title style={{ fontSize: '2.5rem', fontWeight: 800 }} order={2} align={matches ? 'right' : 'center'}>
                  Players Sponsored through Adopt a Minor Leaguer
               </Title>
            </Grid.Col>
         </Grid>
      </>
   )
}
