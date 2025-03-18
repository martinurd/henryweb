'use client'
import Link from 'next/link';
import React from 'react'
import { trackEvent } from '../../firebase';

export default function Faqs() {
    const faqs = [
        {
            id: 'faq1',
            question: 'What types of assets do you accept as collateral?',
            answer: 'We accept a wide range of private equity assets including fund interests, GP commitments, management company interests, and carried interest. We focus on high-quality PE, RE, and Infrastructure assets.'
        },
        {
            id: 'faq2',
            question: 'What is your typical check size?',
            answer: 'Our typical check size ranges from $250,000 to $15 million, though we can be flexible based on the specific situation and assets involved.'
        },
        {
            id: 'faq3',
            question: 'How long does the process take?',
            answer: 'Once we receive all necessary documentation, we can typically close within 2-3 weeks. We pride ourselves on being responsive and efficient throughout the process.'
        },
        {
            id: 'faq4',
            question: 'Do you require personal guarantees?',
            answer: 'No, we do not require personal guarantees. Our lending is based on the quality and value of the underlying assets.'
        },
        {
            id: 'faq5',
            question: 'What are your typical terms?',
            answer: 'Our terms are flexible and tailored to each situation. We typically offer 2-5 year terms with interest-only payments and no amortization requirements.'
        },
        {
            id: 'faq6',
            question: 'Do you require board or LP approval?',
            answer: 'No, our structures are typically designed to work within existing LPA frameworks without requiring special approvals.'
        },
        {
            id: 'faq7',
            question: 'Why would a GP want to use this?',
            answer: 'Liquidity without giving up any upside, and with an option to defer all cash interest until a sale. No personal guarantees, no control rights and LPA-friendly.'
        },
        {
            id: 'faq8',
            question: 'What are the main use cases?',
            answer: 'Some common use cases include add-ons, new platform acquisitions, GP capital commitments, working capital or managing liquidity in general.'
        },
        {
            id: 'faq9',
            question: 'Size of loans can you facilitate?',
            answer: 'From $250k to $25m+. We can work with individuals or entire partnerships.'
        },
        {
            id: 'faq10',
            question: 'Do you consider collateral outside of GP or LP positions?',
            answer: 'Yes, we can consider other assets such as private investments from different funds, GPs, or strategies, or personal real estate.'
        },
        {
            id: 'faq11',
            question: 'Is there a prepayment penalty?',
            answer: 'We require a minimum return of one year of interest regardless of when we are repaid. There are no penalties for short-term repayments.'
        },
        {
            id: 'faq12',
            question: 'What is required for diligence / term sheet?',
            answer: 'Standard fund docs, valuation reports, capital accounts and other information such as audits if already available.'
        },
        {
            id: 'faq13',
            question: 'What regions do you focus on?',
            answer: 'We don’t have geographic restrictions'
        },
        {
            id: 'faq14',
            question: 'How are the loans structured?',
            answer: 'They can be structured as a revolver with a commitment amount or as a term loan with the full draw upfront'
        },
        {
            id: 'faq15',
            question: 'Who are the parties to the agreement?',
            answer: 'We can make the agreements between Henry Capital and individuals, or between Henry Capital and the SPVs or partnerships that make the most sense for the transaction. We make sure to avoid getting unnecessary parties involved.'
        }
    ];
    return (
        <main className="min-h-screen bg-[#EEECE3] font-cormorant-garamond">
            <div className="container mx-auto px-4 xl:px-0 py-24">
                <div data-aos="fade-up" className="text-center mb-12">
                    <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-[700] text-[#013220] mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-[15px] font-[600] sm:text-[16px] md:text-[18px] text-gray-700">
                        Find answers to common questions about our terms and process
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {faqs.map((faq) => (
                        <div key={faq.id}
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="h-full"
                        >
                            <div
                                id={faq.id}
                                className="faq-item bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8 h-full flex flex-col"
                            >
                                <div className="relative">
                                    <div className="group hover:bg-[#f7fafc] rounded-lg cursor-pointer transform duration-300 px-4 py-2 mb-4">
                                        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-[700] text-[#013220] group-hover:text-[#024c30] transition-colors">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 border-b border-gray-300 "></div>
                                </div>
                                <div className="flex-grow px-4 mt-5">
                                    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[600] text-gray-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div data-aos="fade-up" className="text-center">
                    <p className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-700 mb-6">
                        Don't see your question here? Feel free to reach out to us directly.
                    </p>
                    <Link
                        href="/contact-us"
                        onClick={() => {
                            if (typeof window !== 'undefined') {
                                trackEvent('contact_click', {
                                    location: 'faqs_page',
                                    action: 'application_form'
                                });
                            }
                        }}
                        className="inline-block px-6 py-3 bg-[#013220] text-white text-[16px] sm:text-[18px] rounded-lg hover:bg-[#024c30] transition-all duration-300 hover:scale-110 transform"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

        </main>
    )
}
