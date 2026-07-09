import AboutPage from "./aboutUs";
export const metadata = {
  title: "About Us | Bossdent Global",
  description:
    "Bossdent Global is a leading dental equipment supplier offering high-quality dental care, medical and clinic products. We provide advanced dental instruments, dentist tools, and healthcare solutions for modern dental clinics worldwide.",
  alternates: {
    canonical: "https://bossdentglobal.com/about-us",
  },
  openGraph: {
    title: "About Us | Bossdent Global",
    description:
      "Bossdent Global is a leading dental equipment supplier offering high-quality dental care, medical and clinic products. We provide advanced dental instruments, dentist tools, and healthcare solutions for modern dental clinics worldwide.",
    url: "https://bossdentglobal.com/about-us",
    siteName: "Bossdent Global",
    images: [
      {
        url: "/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Us Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <AboutPage />;
}
