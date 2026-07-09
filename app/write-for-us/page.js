import WriteForUs from "./WriteForUs";

export const metadata = {
  title:
    "Write for Us | Guest Post on Dental Equipment & Oral Health | Bossdent Global",
  description:
    "Share your knowledge on dental equipment, endodontics, oral health & dentistry trends. Submit a free guest post on Bossdent Global and get a dofollow backlink + exclusive rewards.",
  alternates: {
    canonical: "https://www.bossdentglobal.com/write-for-us",
  },
  openGraph: {
    title:
      "Write for Us | Guest Post on Dental Equipment & Oral Health | Bossdent Global",
    description:
      "Share your knowledge on dental equipment, endodontics, oral health & dentistry trends. Submit a free guest post on Bossdent Global and get a dofollow backlink + exclusive rewards.",
    url: "https://www.bossdentglobal.com/write-for-us",
    siteName: "Bossdent Global",
    images: [
      {
        url: "/write-for-us-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Write for Us - Bossdent Global",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WriteForUsPage() {
  return <WriteForUs />;
}
