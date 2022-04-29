import Head from 'next/head'

const WebHead: React.FC = () => {
  return (
    <Head>
      {/* Base configuration */}
      <title>
        GitHub Widgetbox - Beautiful &amp; dynamic widgets for readme&apos;s
      </title>
      <link rel="icon" href="/favicon.ico" />

      {/* SEO configuration */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta
        name="description"
        content="Beautiful and dynamic widgets for GitHub Readme pages"
      />
      <meta
        name="keywords"
        content="GitHub, Readme, Widgets, Statistics, Stats, Skills"
      />
      <meta name="subject" content="GitHub Widgets" />
      <meta name="copyright" content="GitHub Widgetbox" />
      <meta name="language" content="EN" />
      <meta name="robots" content="index,follow" />
      <meta name="url" content="https://github-widgetbox.vercel.app/" />
      <meta
        name="identifier-URL"
        content="https://github-widgetbox.vercel.app/"
      />
      <meta name="theme-color" content="#00ccf4" />
      <link rel="canonical" href="https://github-widgetbox.vercel.app/" />

      {/* OpenGraph tags */}
      <meta
        property="og:title"
        content="GitHub Widgetbox - Beautiful & dynamic widgets for readme's"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Beautiful and dynamic widgets for GitHub Readme pages"
      />
      <meta
        property="og:image"
        content="https://github-widgetbox.vercel.app/web-banner.png"
      />
      <meta
        property="og:image:url"
        content="https://github-widgetbox.vercel.app/web-banner.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://github-widgetbox.vercel.app/web-banner.png"
      />
      <meta property="og:url" content="https://github-widgetbox.vercel.app/" />
      <meta property="og:site_name" content="GitHub Widgetbox" />
      <meta property="og:email" content="github@jurre.me" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="GitHub Widgetbox" />
      <meta
        name="twitter:description"
        content="Beautiful and dynamic widgets for GitHub Readme pages"
      />
      <meta
        name="twitter:image"
        content="https://github-widgetbox.vercel.app/web-banner.png"
      />
      <meta name="twitter:site" content="@JurredeRuiter" />
      <meta name="twitter:creator" content="@JurredeRuiter" />
    </Head>
  )
}

export default WebHead
