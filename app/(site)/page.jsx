
import React from 'react'
import Banner from '../../components/banner/Banner'

export const metadata = {
  title: 'Home',
  description: 'Henry Capital provides flexible liquidity solutions for private equity investors and professionals. Access innovative financial solutions for your PE investments.',
  keywords: ['private equity', 'liquidity solutions', 'PE investments', 'fund management', 'capital solutions', 'Henry Capital'],
  openGraph: {
    title: 'Henry Capital | Private Equity Liquidity Solutions',
    description: 'Access innovative financial solutions for your PE investments',
  }
}

export default function Main() {
    return (
        <div>
            <Banner />
        </div>
    )
}
