import React from 'react'
import Faqs from '../../../components/faqs/Faqs'

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about Henry Capital\'s liquidity solutions, terms, and process for private equity investments.',
  keywords: ['FAQ', 'private equity FAQ', 'liquidity solutions FAQ', 'Henry Capital FAQ'],
  openGraph: {
    title: 'FAQ | Henry Capital',
    description: 'Find answers to common questions about Henry Capital\'s liquidity solutions',
  }
}

export default function Faq() {
  return (
    <div>
      <Faqs/>
    </div>
  )
}
