// Vendor
import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from '@dmgincs/utils';

import './../styles/style.scss';

// Context
import { wrapper } from 'ducks/wrapper';

// Components
import PageLayout from 'components/templates/PageLayout';
import Head from 'components/atoms/Head';
import { ReduxAuthUserSync } from 'components/atoms/ReduxAuthUserSync';
import { GlobalErroModal } from 'components/modals/GlobalModal';
import { ReactQueryDevtools } from 'components/atoms/ReactQueryDevtools';

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: object }>) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={ queryClient }>
            <Hydrate state={ pageProps.dehydratedState }>
                <Head />
                <UserProvider>
                    <ReduxAuthUserSync />
                    <GlobalErroModal />

                    <PageLayout>
                        <div className="app_pagelayout">
                            <Component { ...pageProps } />
                        </div>
                    </PageLayout>
                </UserProvider>
            </Hydrate>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default wrapper.withRedux(MyApp);
