import React, { useEffect, useState } from 'react';

const ReactQueryDevtoolsProduction = React.lazy(() => import('@tanstack/react-query-devtools').then(d => ({
    default: d.ReactQueryDevtools
})));

export const ReactQueryDevtools: React.FC = () => {
    const [showDevtools, setShowDevtools] = useState(false);

    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            setShowDevtools(true);
        }
    }, [process.env.NODE_ENV]);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.DI = {
            toggleDevtools: () => {
                setShowDevtools(old => !old);
                return 'Toggled React Query DevTools';
            }
        };
    });

    return showDevtools ? (
        <React.Suspense fallback={ null }>
            <ReactQueryDevtoolsProduction />
        </React.Suspense>
    ) : null;
};
