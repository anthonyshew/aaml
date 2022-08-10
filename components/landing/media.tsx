import { Button, Center, Space, Text, Title } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { useStyles } from '../../styles/home'

export const Media: FunctionComponent = () => {
   const { classes } = useStyles()
   return (
      <>
         <Title align='center'>Extra! Extra!</Title>
         <Center>
            <Text align='center' style={{ fontSize: '24px', fontWeight: 500, width: '90%' }}>
               {`We have gotten some really special attention recently - and we're proud.`}
            </Text>
         </Center>
         <Space h='xl' />
         <Center>
            <Link href='/media' passHref>
               <Button
                  component='a'
                  size='lg'
                  radius='lg'
                  rightIcon={<IconArrowRight />}
                  className={classes.dearButton}
               >
                  AaML in the Media
               </Button>
            </Link>
         </Center>
      </>
   )
}
