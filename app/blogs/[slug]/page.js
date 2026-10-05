import Link from "next/link";
import { notFound } from "next/navigation";
import { sampleBlogs, getBlogBySlug, getBlogDate, getReadingTime } from "../blog-data";

export function generateStaticParams() {
  return sampleBlogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  const headings = blog.content.filter((block) => block.type === "heading");

  const relatedBlogs = sampleBlogs.filter((item) => item.slug !== blog.slug).slice(0, 2);

  return (
    <main className="article-page">
      <div className="article-container">
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/blogs">Journal</Link>
          <span>/</span>
          <span className="breadcrumb-current">Article</span>
        </nav>

        <header className="article-header">
          <Link href="/blogs" className="article-back-link">
            <span aria-hidden="true">←</span> Back to the journal
          </Link>

          <div className="article-category-label">{blog.category}</div>

          <h1>{blog.title}</h1>

          <p className="article-standfirst">{blog.excerpt}</p>

          <div className="article-byline">
            <div className="article-author-avatar">B.</div>

            <div className="article-author-info">
              <strong>{blog.author}</strong>
              <span>Bossdent Global · Editorial</span>
            </div>

            <span className="byline-divider" />

            <div className="article-published">
              <span>Published</span>
              <time dateTime={blog.createdAt}>{getBlogDate(blog.createdAt)}</time>
            </div>

            <span className="byline-divider" />

            <span className="article-reading-time">{getReadingTime(blog)}</span>
          </div>
        </header>

        <figure className="article-cover">
          <img src={blog.coverImage} alt={blog.title} />
          <figcaption>Insights and perspectives from the Bossdent Global journal.</figcaption>
        </figure>

        <div className="article-body-layout">
          <aside className="article-sidebar">
            <div className="article-toc">
              <span className="toc-label">IN THIS ARTICLE</span>

              <ol>
                {headings.map((heading, index) => (
                  <li key={heading.id}>
                    <a href={`#${heading.id}`}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="article-sidebar-note">
              <span className="sidebar-note-mark">B.</span>
              <p>Knowledge for a changing dental industry.</p>
              <Link href="/blogs">Explore all articles ↗</Link>
            </div>
          </aside>

          <article className="article-content">
            <div className="article-introduction">
              <span className="intro-dropcap">
                {blog.content.find((block) => block.type === "paragraph")?.text?.charAt(0) ?? "B"}
              </span>

              <p>
                {blog.content.find((block) => block.type === "paragraph")?.text ?? blog.excerpt}
              </p>
            </div>

            {blog.content
              .filter((block, index) => {
                const firstParagraphIndex = blog.content.findIndex(
                  (item) => item.type === "paragraph",
                );
                return index !== firstParagraphIndex;
              })
              .map((block, index) => {
                if (block.type === "heading") {
                  const headingNumber = headings.findIndex((heading) => heading.id === block.id);

                  return (
                    <section className="article-section" id={block.id} key={block.id}>
                      <span className="article-section-number">
                        {String(headingNumber + 1).padStart(2, "0")}
                      </span>
                      <h2>{block.text}</h2>
                    </section>
                  );
                }

                if (block.type === "paragraph") {
                  return <p key={`paragraph-${index}`}>{block.text}</p>;
                }

                if (block.type === "list") {
                  return (
                    <ul className="article-list" key={`list-${index}`}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "callout") {
                  return (
                    <aside className="article-callout" key={`callout-${index}`}>
                      <span className="callout-label">A NOTE FROM THE EDITORS</span>
                      <h3>{block.title}</h3>
                      <p>{block.text}</p>
                    </aside>
                  );
                }

                return null;
              })}

            <div className="article-endmark">
              <span />
              <strong>B.</strong>
              <span />
            </div>

            <div className="article-end-note">
              <p>
                Thank you for reading the Bossdent Global journal. Explore more perspectives and
                practical ideas for the dental industry.
              </p>
              <Link href="/blogs">Discover more articles ↗</Link>
            </div>
          </article>
        </div>

        <section className="related-section">
          <div className="related-heading">
            <div>
              <span className="related-kicker">CONTINUE READING</span>
              <h2>More from the journal.</h2>
            </div>
            <Link href="/blogs">All articles ↗</Link>
          </div>

          <div className="related-grid">
            {relatedBlogs.map((item) => (
              <Link href={`/blogs/${item.slug}`} className="related-card" key={item.slug}>
                <div className="related-image">
                  <img src={item.coverImage} alt="" />
                </div>

                <span className="related-category">{item.category}</span>
                <h3>{item.title}</h3>
                <span className="related-read">
                  {getReadingTime(item)} <span>↗</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .article-page {
          --article-ink: #1c3038;
          --article-muted: #697980;
          --article-accent: #a77353;
          --article-line: #e5e8e5;
          color: var(--article-ink);
          background: #fff;
          font-family: Arial, Helvetica, sans-serif;
        }

        .article-container {
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
        }

        .article-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          padding: 28px 0;
          color: #8b9698;
          font-size: 10px;
        }

        .article-breadcrumb a {
          color: #66767b;
          text-decoration: none;
        }

        .article-breadcrumb a:hover {
          color: var(--article-accent);
        }

        .breadcrumb-current {
          color: #263b42;
        }

        .article-header {
          max-width: 900px;
          margin: 32px auto 42px;
          text-align: center;
        }

        .article-back-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 38px;
          color: #6f7d81;
          font-size: 11px;
          text-decoration: none;
        }

        .article-back-link:hover {
          color: var(--article-accent);
        }

        .article-category-label {
          color: var(--article-accent);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .article-header h1 {
          max-width: 880px;
          margin: 22px auto;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 5.6vw, 68px);
          font-weight: 400;
          letter-spacing: -2.4px;
          line-height: 1.09;
        }

        .article-standfirst {
          max-width: 700px;
          margin: 0 auto;
          color: #697980;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(16px, 2vw, 19px);
          line-height: 1.8;
        }

        .article-byline {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 32px;
        }

        .article-author-avatar {
          display: grid;
          place-items: center;
          width: 39px;
          height: 39px;
          border: 1px solid #d7c8b9;
          border-radius: 50%;
          color: #9c6b4d;
          font-family: Georgia, serif;
          font-size: 19px;
        }

        .article-author-info, .article-published {
          display: grid;
          gap: 5px;
          text-align: left;
        }

        .article-author-info strong {
          font-size: 10px;
        }

        .article-author-info span,
        .article-published span {
          color: #849094;
          font-size: 9px;
        }

        .article-published time {
          color: #42565d;
          font-size: 10px;
        }

        .byline-divider {
          width: 1px;
          height: 28px;
          background: #e0e4e1;
        }

        .article-reading-time {
          color: #697980;
          font-size: 10px;
        }

        .article-cover {
          margin: 0;
        }

        .article-cover img {
          display: block;
          width: 100%;
          max-height: 570px;
          aspect-ratio: 2 / 1;
          object-fit: cover;
          background: #f1f0ec;
        }

        .article-cover figcaption {
          padding-top: 12px;
          color: #8a9698;
          font-size: 10px;
          text-align: right;
        }

        .article-body-layout {
          display: grid;
          grid-template-columns: 230px minmax(0, 700px);
          justify-content: center;
          align-items: start;
          gap: clamp(40px, 7vw, 100px);
          margin: 82px 0 90px;
        }

        .article-sidebar {
          position: sticky;
          top: 24px;
        }

        .article-toc {
          padding-bottom: 28px;
          border-bottom: 1px solid var(--article-line);
        }

        .toc-label, .callout-label, .related-kicker {
          color: #9a6b4e;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        .article-toc ol {
          display: grid;
          gap: 18px;
          margin: 24px 0 0;
          padding: 0;
          list-style: none;
        }

        .article-toc li a {
          display: grid;
          grid-template-columns: 23px 1fr;
          gap: 8px;
          color: #64747a;
          font-size: 10px;
          line-height: 1.65;
          text-decoration: none;
        }

        .article-toc li a span {
          color: #b19a87;
          font-size: 9px;
        }

        .article-toc li a:hover {
          color: #9c6b4d;
        }

        .article-sidebar-note {
          margin-top: 26px;
          padding: 23px;
          background: #f6f5f1;
        }

        .sidebar-note-mark {
          color: #a77353;
          font-family: Georgia, serif;
          font-size: 30px;
        }

        .article-sidebar-note p {
          margin: 12px 0;
          color: #637278;
          font-family: Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
        }

        .article-sidebar-note a {
          color: #263d45;
          font-size: 10px;
          text-decoration: none;
        }

        .article-content {
          min-width: 0;
          color: #495c63;
          font-size: 14px;
          line-height: 2;
          overflow-wrap: anywhere;
        }

        .article-content > p {
          margin: 0 0 25px;
        }

        .article-introduction {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 15px;
          align-items: start;
          margin-bottom: 35px;
          color: #334950;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
          line-height: 1.85;
        }

        .article-introduction p {
          margin: 0;
        }

        .intro-dropcap {
          color: #a77353;
          font-family: Georgia, serif;
          font-size: 65px;
          line-height: 1;
        }

        .article-section {
          scroll-margin-top: 30px;
          margin: 57px 0 19px;
        }

        .article-section-number {
          color: #a77353;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .article-section h2 {
          margin: 9px 0 0;
          color: #1c3038;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(26px, 3vw, 35px);
          font-weight: 400;
          letter-spacing: -.7px;
          line-height: 1.3;
        }

        .article-list {
          display: grid;
          gap: 13px;
          margin: 20px 0 30px;
          padding: 0;
          list-style: none;
        }

        .article-list li {
          position: relative;
          padding-left: 25px;
        }

        .article-list li::before {
          position: absolute;
          top: 0;
          left: 2px;
          color: #ad805e;
          content: "↗";
        }

        .article-callout {
          margin: 42px 0;
          padding: 30px;
          border-left: 3px solid #ae7b59;
          background: #f6f5f1;
        }

        .article-callout h3 {
          margin: 12px 0 8px;
          color: #233840;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          font-weight: 400;
        }

        .article-callout p {
          margin: 0;
          color: #65757a;
          font-size: 13px;
          line-height: 1.9;
        }

        .article-endmark {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin: 55px 0 35px;
        }

        .article-endmark span {
          width: 55px;
          height: 1px;
          background: #d8c5b4;
        }

        .article-endmark strong {
          color: #a77353;
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 400;
        }

        .article-end-note {
          padding: 24px;
          background: #f7f6f2;
          text-align: center;
        }

        .article-end-note p {
          margin: 0 auto 15px;
          color: #66777c;
          font-family: Georgia, serif;
          font-size: 16px;
          line-height: 1.8;
        }

        .article-end-note a {
          color: #986a4c;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
        }

        .related-section {
          padding: 55px 0 80px;
          border-top: 1px solid var(--article-line);
        }

        .related-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 20px;
          margin-bottom: 30px;
        }

        .related-heading h2 {
          margin: 12px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(30px, 4vw, 42px);
          font-weight: 400;
          letter-spacing: -1px;
        }

        .related-heading > a {
          color: #9c6b4d;
          font-size: 11px;
          text-decoration: none;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .related-card {
          display: block;
          min-width: 0;
          padding-bottom: 24px;
          color: inherit;
          text-decoration: none;
        }

        .related-image {
          height: 230px;
          margin-bottom: 20px;
          overflow: hidden;
          background: #f1f0ec;
        }

        .related-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }

        .related-card:hover .related-image img {
          transform: scale(1.04);
        }

        .related-category {
          color: #a77353;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .related-card h3 {
          margin: 12px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          font-weight: 400;
          line-height: 1.35;
        }

        .related-read {
          display: flex;
          justify-content: space-between;
          color: #7a878a;
          font-size: 10px;
        }

        .related-read span {
          color: #9c6b4d;
        }

        @media (max-width: 850px) {
          .article-body-layout {
            grid-template-columns: minmax(0, 700px);
            gap: 35px;
            margin-top: 55px;
          }

          .article-sidebar {
            position: static;
          }

          .article-toc {
            padding: 23px;
            border: 1px solid var(--article-line);
          }

          .article-toc ol {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px 22px;
          }

          .article-sidebar-note {
            display: none;
          }
        }

        @media (max-width: 560px) {
          .article-container {
            width: calc(100% - 36px);
          }

          .article-breadcrumb {
            padding: 20px 0;
          }

          .article-header {
            margin-top: 20px;
          }

          .article-back-link {
            margin-bottom: 30px;
          }

          .article-header h1 {
            font-size: clamp(35px, 10vw, 48px);
            letter-spacing: -1.5px;
          }

          .article-byline {
            gap: 12px;
          }

          .article-cover img {
            aspect-ratio: 4 / 3;
          }

          .article-body-layout {
            margin: 48px 0 60px;
          }

          .article-toc ol {
            grid-template-columns: 1fr;
          }

          .article-content {
            font-size: 13px;
            line-height: 1.9;
          }

          .article-introduction {
            grid-template-columns: 36px 1fr;
            gap: 10px;
            font-size: 17px;
          }

          .intro-dropcap {
            font-size: 48px;
          }

          .article-section {
            margin-top: 42px;
          }

          .article-callout {
            padding: 23px;
          }

          .related-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .related-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .related-image {
            height: 230px;
          }
        }
      `}</style>
    </main>
  );
}
