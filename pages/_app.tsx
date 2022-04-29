import { createTheme, NextUIProvider } from '@nextui-org/react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import WebHead from '../components/WebHead'

// NextUI theme
const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
    space: {},
    fonts: {
      montserrat: 'Roboto'
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <WebHead />
      <div className="relative h-screen w-screen">
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  )
}

export default MyApp
