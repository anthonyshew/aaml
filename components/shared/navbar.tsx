import { Burger, Button, Drawer, NavLink, SimpleGrid, Space, Switch, Title, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconBrandInstagram, IconBrandTwitter, IconBrandFacebook } from '@tabler/icons'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent, useState } from 'react'
import { useStyles } from '../../styles/home'

interface Props {
   // Url that will it will route to when clicked
   href: string
   // Text that you want the link to display
   text?: string
}

const NavBarLink: FunctionComponent<Props> = ({ href, text }) => {
   return (
      <Link href={href} passHref>
         <a style={{ textDecoration: 'none' }}>
            <Title order={3} sx={(theme) => ({ color: theme.colors.navy })}>
               {text}
            </Title>
         </a>
      </Link>
   )
}

const drawerData = [
   { title: 'Home', href: '/' },
   { title: 'Dear Players', href: '/dear-players' },
   { title: 'Dear Sponsors', href: '/dear-sponsors' },
   { title: 'About Us', href: '/about-us' },
   { title: 'Blog', href: '/blog' },
   { title: 'Business Sponsors', href: '/business-sponsors' },
   { title: 'Shop', href: 'https://promotionsetc.commonsku.com/shop/e5be5b9c-b850-4648-9d5f-830033b386b2' },
   { title: 'Donate', href: '/donate' },
]

interface DrawerProps {
   // Url that will it will route to when clicked
   href: string
   // Text that you want the link to display
   title?: string
}

const MantineNavLink: FunctionComponent<DrawerProps> = ({ href, title }) => {
   const theme = useMantineTheme()
   return (
      <Link href={href} passHref>
         <NavLink
            component='a'
            label={title}
            styles={{
               label: { color: title === 'Donate' ? theme.colors.orange : 'white', fontSize: '24px', fontWeight: 600 },
            }}
         />
      </Link>
   )
}

export const NavBar: FunctionComponent = () => {
   const { classes } = useStyles()
   const [lang, setLang] = useState(false)
   const smallScreen = useMediaQuery('(max-width: 768px)', false)
   const [opened, setOpened] = useState(false)
   const theme = useMantineTheme()

   return (
      <div className={classes.navBar}>
         <Link href='/' passHref>
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

         {!smallScreen && (
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
                  <Button component='a' className={classes.navButton} radius='md'>
                     Donate
                  </Button>
               </Link>
            </SimpleGrid>
         )}

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
                  paddingBottom: '10px',
               })}
            />
            <Space h={4} />
            {!smallScreen ? (
               <>
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
               </>
            ) : (
               <Burger
                  size='lg'
                  className={classes.burger}
                  color='red'
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
               />
            )}
            <Drawer
               styles={{
                  drawer: { backgroundColor: theme.colors.navy },
                  closeButton: {
                     color: theme.colors.red,
                  },
               }}
               position='right'
               opened={opened}
               onClose={() => setOpened(false)}
            >
               {drawerData.map((data, id) => (
                  <MantineNavLink key={id} href={data.href} title={data.title} />
               ))}
            </Drawer>
         </div>
      </div>
   )
}
