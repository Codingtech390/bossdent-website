import React from "react";

export default function WriteForUs() {
  return (
    <main className="bg-white min-h-screen text-black">
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="text-black text-sm tracking-widest uppercase mb-3">
            Guest Posting Opportunities
          </p>
          <h1 className="text-black text-3xl md:text-5xl font-bold">
            Write for Us
          </h1>
          <p className="text-blue-600 mt-2 text-base md:text-lg">
            Dental Equipment • Oral Health • Dentistry Insights
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 pb-12">
        <p className="mb-4">
          Are you a dental professional, healthcare writer, or someone with
          genuine knowledge of dentistry and dental equipment? If you are
          looking for an opportunity to contribute to a trusted dental platform
          like ours at{" "}
          <a
            href="https://bossdentglobal.com/"
            className="underline text-black"
          >
            bossdentglobal.com
          </a>
          , then you have come to the right place. We want to hear from you.
        </p>

        <p className="mb-6">
          We encourage you to go through the articles already on our blog to get
          a sense of the topics we cover and the tone and format we use before
          submitting your piece.
        </p>

        <h2 className="text-xl font-bold mb-3">The Details</h2>
        <p className="mb-4">
          We only accept high-quality, original content. The article you submit
          must be at least 750 words. In return, we will give you 5 exclusive
          discount coupons and a Dofollow backlink to your website.
        </p>

        <h2 className="text-xl font-bold mb-3">Topics We Accept</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Dental equipment reviews and buying guides</li>
          <li>Endodontic files, handpieces, and rotary systems</li>
          <li>Dental magnification and loupes insights</li>
          <li>Oral health tips for patients and professionals</li>
          <li>Dental clinic setup and equipment management</li>
          <li>Latest trends and innovations in dentistry</li>
          <li>Dental materials, accessories, and consumables</li>
          <li>ISO standards and quality assurance in dental products</li>
        </ul>

        <h2 className="text-xl font-bold mb-3">Before You Submit</h2>
        <p className="mb-3">
          We encourage you to answer these questions before writing your
          article:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Who is your audience?</li>
          <li>What will readers get out of your article?</li>
          <li>Why should someone read your article?</li>
          <li>How will readers act on your article?</li>
        </ul>
        <p className="mb-6">
          Write in a casual, personal, yet knowledgeable style. Aim for clarity
          and make sure the key takeaways are easy to spot. Use subheadings,
          lists, and bullet points as you see fit.
        </p>

        <h2 className="text-xl font-bold mb-3">Content Guidelines</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Original and unpublished — not posted anywhere else</li>
          <li>Minimum 750 words</li>
          <li>Factually accurate with sources cited where needed</li>
          <li>No AI-generated or spun content</li>
          <li>No more than 2 outbound links in the article</li>
          <li>No promotional content disguised as editorial</li>
        </ul>

        <h2 className="text-xl font-bold mb-3">Rewards</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>5 exclusive discount coupons on dental products</li>
          <li>Exclusive access to Bossdent Global loyalty program</li>
          <li>Social media feature on our channels</li>
          <li>2% commission on every purchase through your link</li>
          <li>Dofollow backlink to your website</li>
        </ul>

        <h2 className="text-xl font-bold mb-3">Getting in Touch</h2>
        <p className="mb-2">
          We look forward to working with you. If you have any questions or
          would like to submit your article, get in touch with us at:
        </p>
        <p className="mb-1">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:sales@bossdentglobal.com"
            className="underline text-black"
          >
            sales@bossdentglobal.com
          </a>
        </p>
        <p className="text-sm text-gray-600 mt-3">
          Subject line: "Guest Post – [Your Article Title]" · We respond within
          5–7 working days.
        </p>
      </div>
    </main>
  );
}
