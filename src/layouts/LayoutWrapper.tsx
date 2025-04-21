import React from 'react';

interface LayoutWrapperProps {
    Component: any;
    pageProps: any;
}

const DefaultLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => <>{children}</>;

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || ((page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>);
    return getLayout(<Component {...pageProps} />);
};