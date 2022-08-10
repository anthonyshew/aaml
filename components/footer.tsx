import { Center, NavLink, SimpleGrid, Space, Text, Title, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import { useStyles } from '../styles/home'

interface Props {
   href: string
   label?: string
   active?: boolean
}

const FooterNavLink: FunctionComponent<Props> = ({ href, label, active }) => {
   const theme = useMantineTheme()

   return (
      <Link href={href} passHref>
         <a style={{ textDecoration: 'none' }}>
            <Text
               sx={{
                  color: active ? theme.colors.orange : theme.colors.navy,
                  fontWeight: 700,
                  marginLeft: '10px',
                  marginBottom: '5px',
               }}
            >
               {label}
            </Text>
         </a>
      </Link>
   )
}

export const Footer: FunctionComponent = () => {
   const { classes } = useStyles()
   const { pathname } = useRouter()
   const smallScreen = useMediaQuery('(max-width: 800px)', false)

   return (
      <div className={classes.footer}>
         <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <div>
               <Title order={2} style={{ color: 'white' }}>
                  Pages
               </Title>

               <SimpleGrid cols={1} breakpoints={[{ maxWidth: 'sm', cols: 2 }]}>
                  <FooterNavLink href='/' label='Home' active={pathname === '/'} />
                  <FooterNavLink href='/dear-players' label='Dear Players' active={pathname === '/dear-players'} />
                  <FooterNavLink href='/dear-sponsors' label='Dear Sponsors' active={pathname === '/dear-sponsors'} />
                  <FooterNavLink href='/donate' label='Donate' active={pathname === '/donate'} />
                  <FooterNavLink href='/about-us' label='About Us' active={pathname === '/about-us'} />
                  <FooterNavLink href='/blog' label='Blog' active={pathname === '/blog'} />
                  <FooterNavLink
                     href='/business-sponsors'
                     label='Business Sponsors'
                     active={pathname === '/business-sponsors'}
                  />
                  <FooterNavLink
                     href='https://promotionsetc.commonsku.com/shop/e5be5b9c-b850-4648-9d5f-830033b386b2'
                     label='Shop'
                     active={
                        pathname === 'https://promotionsetc.commonsku.com/shop/e5be5b9c-b850-4648-9d5f-830033b386b2'
                     }
                  />
                  <FooterNavLink href='/contact-us' label='Contact Us' active={pathname === '/contact-us'} />
                  <FooterNavLink href='/media' label='Media' active={pathname === '/media'} />
                  <FooterNavLink
                     href='/terms-of-use'
                     label='Terms of Use'
                     active={pathname === '/legal/terms-of-use'}
                  />
                  <FooterNavLink
                     href='/legal/privacy-policy'
                     label='Privacy Policy'
                     active={pathname === '/legal/privacy-policy'}
                  />
               </SimpleGrid>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
               <Title>Connect With Us!</Title>
               <Space h='xl' />
               <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <Link href='https://facebook.com/groups/218122932877473/' passHref>
                     <a className={classes.anchor}>
                        <IconBrandFacebook size={50} />
                     </a>
                  </Link>
                  <Space w='md' />

                  <Link href='https://twitter.com/adoptmilbplayer' passHref>
                     <a className={classes.anchor}>
                        <IconBrandTwitter size={50} />
                     </a>
                  </Link>

                  <Space w='md' />
                  <Link href='https://instagram.com/adoptanmilbplayer/' passHref>
                     <a className={classes.anchor}>
                        <IconBrandInstagram size={50} />
                     </a>
                  </Link>
               </div>
            </div>

            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: smallScreen ? 'center' : 'flex-end',
               }}
            >
               <Image src='/AaML-logo.png' alt='AaMLlogo' layout='fixed' height='150px' width='150px' />
               <Space h='xl' />
               <Title order={2}>#StandWithMiLB</Title>
            </div>
         </SimpleGrid>
      </div>
   )
}
