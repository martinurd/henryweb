import React from 'react';
import RootLayout from '../../components/layout/Layout';
import { Analytics } from '@vercel/analytics/react';

export default function SiteLayout({ children }) {
    return (
        <div>
            <RootLayout>
                {children}
                <Analytics />
            </RootLayout>
        </div>
    );
}
