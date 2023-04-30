import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme, Typography, Box } from '@mui/material';
import createEmotionCache from '@/utility/createEmotionCache';
import lightThemeOptions from '@/styles/theme/lightThemeOptions';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import "../styles/globals.css"
import Layout from '@/components/Layout';
import { Router } from 'next/router';
import Image from 'next/image';


interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {
          loading ? (
            <Box width="100vw" height="100vh" overflow="hidden" display="flex" alignItems={"center"} justifyContent="center" sx={{backgroundColor: "#0e4d65"}}>
              <Box width="16rem">
              <Image
                src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680450056/Boston%20Academy/boston-urban-academy-banner-logo_orig_1_pqaciq.png"
                alt={`BUA logo`}
                layout={"responsive"}
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
                width={0}
                height={0}
                priority={true}
              />
              </Box>
            </Box>
          ) : <Component {...pageProps} />
        }
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;