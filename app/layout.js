import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyContact from "@/components/StickyContact";
import QuoteModal from "@/components/QuoteModal";
import { QuoteModalProvider } from "@/context/QuoteModalContext";

import Script from "next/script";

//  Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//  GLOBAL SEO METADATA
export const metadata = {
  metadataBase: new URL("https://bossdentglobal.com"),

  title: {
    default: "Bossdent Global - Premium Dental Equipment & Solutions",
    template: "%s | Bossdent Global",
  },

  description:
    "Leading provider of premium dental equipment and solutions. Trusted by dental professionals worldwide for quality, innovation, and reliability.",

  keywords: [
    "dental equipment",
    "dental solutions",
    "bossdent",
    "dental supplies",
    "dental instruments",
    "dental technology",
  ],

  authors: [{ name: "Bossdent Global" }],

  creator: "Bossdent Global",

  publisher: "Bossdent Global",

  icons: {
    icon: "/images/products/bossdentLogo.jpeg",
  },

  verification: {
    google: "r_qpZke14sdp31pORd8VLQk3x5K-_Fmpx-kOjwZhVtY",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bossdentglobal.com",
    siteName: "Bossdent Global",
    title: "Bossdent Global - Premium Dental Equipment & Solutions",
    description:
      "Leading provider of premium dental equipment and solutions. Trusted by dental professionals worldwide.",
    images: [
      {
        url: "/images/og-image.jpg", // Ye image banani padegi
        width: 1200,
        height: 630,
        alt: "Bossdent Global - Dental Equipment",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bossdent Global - Premium Dental Equipment",
    description: "Leading provider of premium dental equipment and solutions.",
    images: ["/images/twitter-image.jpg"], // Ye image banani padegi
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://bossdentglobal.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*  Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5JZQG6P8');
          `}
        </Script>

        {/* JSON-LD Structured Data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bossdent Global",
              url: "https://bossdentglobal.com",
              logo: "https://bossdentglobal.com/images/logo.png",
              description:
                "Leading provider of premium dental equipment and solutions",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-919810768600",
                email: "bossdentglobal@gmail.com",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                // Social media links add karo
                "https://www.facebook.com/bossdentfor",
                "https://www.instagram.com/bossdentglobalindiapvtltd",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*  Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JZQG6P8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <QuoteModalProvider>
          <Navbar />
          {children}
          <StickyContact />
          <QuoteModal />
          <Footer />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
