import React from 'react';
import RootLayout from '../../components/layout/Layout';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";


export default function SiteLayout({ children }) {
    return (
        <div>
            <RootLayout>
                {children}
                <Analytics />
                <SpeedInsights />
            </RootLayout>
        </div>
    );
}
