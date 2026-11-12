import localFont from "next/font/local";
import "./globals.css";
import MainNav from "./components/mainNav";
import Footer from "./components/footer";
import Script from "next/script";

const goodAvocado = localFont({
  src: "./fonts/5239Good-Avocado.woff2",
  variable: "--font-good-avocado",
  display: "swap",
});

const bubblegum = localFont({
  src: "./fonts/1191Bubblegum-Script.woff2",
  variable: "--font-bubblegum",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: "sGAfSJUMIixfKcPstyHPcjTLai7xQ1aAPbXKzGtG-hQ",
  },

  title: {
    default: "N Is for Nature Play",
    template: "%s | N Is for Nature Play",
  },

  description:
    "Nature play consulting, sensory garden design, outdoor learning resources, courses, and ebooks for parents, educators, and early childhood programs.",

  applicationName: "N Is for Nature Play",

  keywords: [
    "nature play",
    "nature play ideas",
    "outdoor sensory play",
    "sensory garden design",
    "natural playground design",
    "outdoor classroom design",
    "nature-based learning",
  ],

  authors: [
    {
      name: "N Is for Nature Play",
      url: siteUrl,
    },
  ],

  creator: "N Is for Nature Play",
  publisher: "N Is for Nature Play",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "N Is for Nature Play",
    title: "N Is for Nature Play",
    description:
      "Nature play consulting, sensory garden design, outdoor learning resources, courses, and ebooks.",
    images: [
      {
        url: "/images/nature-play-og.jpg",
        width: 1200,
        height: 630,
        alt: "Children exploring a thoughtfully designed nature play space",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "N Is for Nature Play",
    description:
      "Nature play consulting, sensory garden design, outdoor learning resources, courses, and ebooks.",
    images: ["/images/nature-play-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${goodAvocado.variable} ${bubblegum.variable}`}>
      <body>
        <MainNav />

        {children}

        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LWYNZB881B"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LWYNZB881B');
          `}
        </Script>
      </body>
    </html>
  );
}
