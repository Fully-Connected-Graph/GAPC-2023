
import { useEffect } from 'react'
import { NextRouter } from 'next/router'

// google analytics
import ReactGA from 'react-ga4';
import config from '@/configuration';

ReactGA.initialize(config.tracking_id);

function usePageViewEvent(router: NextRouter) {
    return useEffect(() => {
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
}

function useClickSponsorEvent(e: Event) {
    console.log(e)

    // return ReactGA.event({
    //     action: 'Click Sponsor',
    //     category: e.target.sponsor,
    //     label: 'real',
    // });
}

export {
    usePageViewEvent,
    useClickSponsorEvent,
};