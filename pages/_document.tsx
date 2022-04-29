import { Children } from 'react'
import { CssBaseline } from '@nextui-org/react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import type { NextPage } from 'next'
import type {
  DocumentContext,
  DocumentInitialProps,
  DocumentProps
} from 'next/document'

const CustomDoc: NextPage<DocumentProps, DocumentInitialProps> = (
  props: DocumentProps
) => {
  const { locale } = props

  return (
    <Html dir="ltr" lang={locale}>
      <Head>{CssBaseline.flush()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

CustomDoc.getInitialProps = async (
  context: DocumentContext
): Promise<DocumentInitialProps> => {
  const initialProps = await Document.getInitialProps(context)

  return {
    ...initialProps,
    styles: [
      ...Children.toArray(initialProps.styles),
      ...Children.toArray(CssBaseline.flush())
    ]
  }
}

export default CustomDoc
