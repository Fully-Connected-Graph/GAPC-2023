import { usePageViewEvent } from '@/components/utils/GoogleAnalytics';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextRouter, useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    usePageViewEvent(router);

    return <Component {...pageProps} />;
}
