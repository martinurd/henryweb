
import React from 'react'
import Banner from '../../components/banner/Banner'

export const metadata = {
  title: 'Henry Capital | Liquidity Solutions for Private Equity Investors',
  description: 'Flexible liquidity solutions for private equity investors and professionals. Access innovative financial solutions for your PE investments.',
  keywords: ['private equity', 'leverage for private shares', 'GP commit loan', 'fund finance', 'GP commit financing', 'Henry Capital'],
  openGraph: {
    title: 'Henry Capital | Private Equity Liquidity Solutions',
    description: 'Innovative loans against the value of your PE investments',
  }
}

export default function Main() {
    return (
        <div>
            <Banner />
        </div>
    )
}
