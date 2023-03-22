import '@/styles/globals.css';
import type { AppProps } from 'next/app';


import { useEffect } from 'react'
import { useRouter } from 'next/router'

// google analytics
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-68QG15FVMH";
ReactGA.initialize(TRACKING_ID);

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            // Send pageview with a custom path
            ReactGA.send({ hitType: "pageview", page: url });
        }
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, []);

    return <Component {...pageProps} />;
}
