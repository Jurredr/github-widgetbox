import { createTheme, NextUIProvider } from '@nextui-org/react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'windi.css'
import WebHead from '../components/WebHead'
import '@fontsource/roboto'

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
