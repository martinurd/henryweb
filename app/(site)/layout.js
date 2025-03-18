import React from 'react'
import RootLayout from '../../components/layout/Layout';

export default function SiteLayout({ children }) {
    return (
        <div>
            <RootLayout>
                {children}
            </RootLayout>
        </div>
    )
}
