import Link from 'next/link'
import React from 'react'
import logo from '../../public/logo/logo.png'
import Image from 'next/image';

export default function Footer() {
    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <footer className="bg-[#013220] text-white py-8">
            <div className="max-w-screen-xl mx-auto px-3 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link
                            href="/"
                            onClick={handleLogoClick}
                        >
                            <Image
                                src={logo}
                                width={500}
                                height={500}
                                alt="Henry Capital Logo"
                                className="h-8 w-auto mb-4 brightness-0 invert cursor-pointer"
                            />
                        </Link>
                        <p className="text-white text-sm">
                            <span className="font-sans">
                                {new Date().getFullYear()} Henry Capital Solutions Inc. All rights reserved.
                            </span>
                        </p>
                    </div>

                    <div className="flex space-x-6 md:-mt-4">
                        <a href="/terms" className="text-white text-[19px] hover:text-white transition-colors">
                            Terms
                        </a>
                        <a href="/privacy" className="text-white text-[19px] hover:text-white transition-colors">
                            Privacy
                        </a>
                    </div>
                </div>
                <div className="footer-divider"></div>
                <div className="mt-6">
                    <p className="text-white text-sm font-medium mb-2 font-sans">Disclosures</p>
                    <p className="text-sm text-white-500 mt-4 font-sans">
                        The products, services, information and/or materials contained within this web page do not constitute an offer to sell or the solicitation of an offer to buy any security or other financial instrument. Information on this site is proprietary and may not to be reproduced, transferred, or distributed in any form without prior written permission from <span className="henry-font">Henry Capital</span>. It is delivered on an "as is" basis without warranty or liability.
                    </p>
                </div>
            </div>
        </footer>
    )
}
