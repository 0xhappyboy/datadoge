import { Metadata } from 'next';
import Layout from '../../layout/layout';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Datadoge',
    description: 'Datadoge',
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: 'Datadoge',
        url: '',
        description: 'Datadoge',
        images: [''],
        ttl: 604800
    },
    icons: {
        icon: '/favicon.ico'
    }
};

export default function AppLayout({ children }: AppLayoutProps) {
    return <>
        <Layout>
            {children}
        </Layout>
    </>;
}
