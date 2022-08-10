import { Select, useMantineTheme } from '@mantine/core'
import { FunctionComponent } from 'react'

export const MantineSelect: FunctionComponent = (props) => {
   const theme = useMantineTheme()
   return (
      <Select
         data={[]}
         radius='lg'
         size='md'
         searchable
         styles={{
            label: { fontWeight: 700, fontSize: '20px' },
            input: {
               backgroundColor: '#f2f2f2',
               borderWidth: '3px',
               borderColor: theme.colors.navy,
               ':focus': { borderColor: theme.colors.navy },
            },
         }}
         {...props}
      />
   )
}
