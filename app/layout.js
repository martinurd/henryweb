import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://henrycap.com'),
  title: {
    default: "Henry Capital | Flexible Liquidity Solutions for PE Investments",
    template: "%s | Henry Capital"
  },
  description: "Liquidity Solutions for Private Equity Investors & Professionals",
  keywords: ["private equity", "liquidity solutions", "PE investments", "fund management", "capital solutions", "Herny cap", "Henry Capital" ],
  openGraph: {
    title: "Henry Capital | Flexible Liquidity Solutions for PE Investments",
    description: "Liquidity Solutions for Private Equity Investors & Professionals",
    url: 'https://henrycap.com',
    siteName: 'Henry Capital',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henry Capital',
    description: 'Liquidity Solutions for Private Equity Investors & Professionals',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cormorantGaramond.variable}>
      <head>
        <link rel="icon" href="/logo/log.png" sizes="32x32" />
      </head>
      <body className="antialiased font-cormorant-garamond">
        <Script id="rb2b-script" strategy="afterInteractive">
          {`!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("VN080HXPQJ6J");`}
        </Script>
        {children}
      </body>
    </html>
  );
}
