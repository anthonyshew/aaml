import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <MantineProvider
         withGlobalStyles
         withNormalizeCSS
         theme={{
            fontFamily: 'Raleway, sans-serif',
            headings: { fontFamily: 'Raleway, sans-serif' },
            colors: { navy: '#00235b', orange: '#f39116' },
         }}
      >
         <Component {...pageProps} />
      </MantineProvider>
   )
}

export default MyApp
