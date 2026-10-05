import Link from "next/link";
import { sampleBlogs, getBlogDate, getReadingTime } from "./blog-data";

const categories = [
  "All Articles",
  "Digital Dentistry",
  "Dental Equipment",
  "Clinical Best Practices",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BlogImage({ blog, featured = false }) {
  return (
    <div className={`blog-image ${featured ? "blog-image-featured" : ""}`}>
      {/* Plain img avoids requiring remote image configuration in next.config.js */}
      <img src={blog.coverImage} alt={blog.title} />
      <span className="blog-image-overlay" />
      <span className="blog-image-category">{blog.category}</span>
    </div>
  );
}

export default function BlogsPage() {
  const featuredBlog = sampleBlogs[0];
  const otherBlogs = sampleBlogs.filter((blog) => blog.slug !== featuredBlog.slug);

  return (
    <main className="blogs-page">
      <section className="blogs-hero">
        <div className="blogs-container">
          <div className="blogs-eyebrow">
            <span className="eyebrow-line" />
            THE BOSSDENT JOURNAL
          </div>

          <div className="blogs-hero-layout">
            <div className="blogs-hero-copy">
              <h1>
                Ideas that move
                <br />
                <span>dentistry forward.</span>
              </h1>

              <p>
                Insights, practical guidance, and emerging ideas for the dental professionals
                shaping better care.
              </p>

              <a href="#latest-articles" className="blogs-primary-link">
                Explore the journal <ArrowIcon />
              </a>
            </div>

            <div className="blogs-hero-note">
              <span className="note-number">01 / JOURNAL</span>
              <p>
                Knowledge for a changing industry.
                <br />
                Perspectives for what comes next.
              </p>
              <span className="note-decoration">B.</span>
            </div>
          </div>

          <div className="blogs-hero-bottom">
            <span>RESEARCH · INNOVATION · PRACTICE</span>
            <span>{String(sampleBlogs.length).padStart(2, "0")} ARTICLES</span>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="blogs-container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">EDITOR'S PICK</span>
              <h2>Worth your time.</h2>
            </div>
            <span className="section-index">01 — FEATURED STORY</span>
          </div>

          <article className="featured-article">
            <Link
              href={`/blogs/${featuredBlog.slug}`}
              className="featured-image-link"
              aria-label={`Read ${featuredBlog.title}`}
            >
              <BlogImage blog={featuredBlog} featured />
            </Link>

            <div className="featured-content">
              <div className="article-meta">
                <span>{featuredBlog.category}</span>
                <span className="meta-dot" />
                <time dateTime={featuredBlog.createdAt}>{getBlogDate(featuredBlog.createdAt)}</time>
              </div>

              <h3>
                <Link href={`/blogs/${featuredBlog.slug}`}>{featuredBlog.title}</Link>
              </h3>

              <p className="featured-excerpt">{featuredBlog.excerpt}</p>

              <div className="featured-footer">
                <span>{getReadingTime(featuredBlog)}</span>
                <Link href={`/blogs/${featuredBlog.slug}`} className="article-read-link">
                  Read the story <ArrowIcon />
                </Link>
              </div>

              <div className="featured-author">
                <span className="author-mark">B.</span>
                <div>
                  <strong>{featuredBlog.author}</strong>
                  <span>Editorial desk</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="latest-section" id="latest-articles">
        <div className="blogs-container">
          <div className="section-heading latest-heading">
            <div>
              <span className="section-kicker">THE LATEST</span>
              <h2>More to discover.</h2>
              <p>Ideas, perspectives, and practical knowledge for your work.</p>
            </div>
            <span className="section-index">
              02 — ARTICLES ({String(otherBlogs.length).padStart(2, "0")})
            </span>
          </div>

          <div className="blog-category-list" aria-label="Article categories">
            {categories.map((category, index) => (
              <span className={`blog-category-pill ${index === 0 ? "active" : ""}`} key={category}>
                {category}
              </span>
            ))}
          </div>

          <div className="blogs-grid">
            {otherBlogs.map((blog, index) => (
              <article className="blog-card" key={blog.slug}>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="blog-card-image-link"
                  aria-label={`Read ${blog.title}`}
                >
                  <BlogImage blog={blog} />
                </Link>

                <div className="blog-card-content">
                  <div className="article-meta">
                    <span>{blog.category}</span>
                    <span className="meta-dot" />
                    <time dateTime={blog.createdAt}>{getBlogDate(blog.createdAt)}</time>
                  </div>

                  <h3>
                    <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </h3>

                  <p>{blog.excerpt}</p>

                  <div className="blog-card-footer">
                    <span>{getReadingTime(blog)}</span>
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="blog-card-arrow"
                      aria-label={`Read ${blog.title}`}
                    >
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="blogs-bottom-note">
            <span className="bottom-note-mark">B.</span>
            <p>
              Better knowledge. Better conversations.
              <br />A more informed future for dentistry.
            </p>
            <span className="bottom-note-caption">BOSSDENT GLOBAL</span>
          </div>
        </div>
      </section>

      <style>{`
        .blogs-page {
          --blog-ink: #182b35;
          --blog-muted: #6d7b81;
          --blog-accent: #b77b55;
          --blog-line: #e5e8e7;
          color: var(--blog-ink);
          background: #fff;
          font-family: Arial, Helvetica, sans-serif;
        }

        .blogs-container {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        .blogs-hero {
          background: #f5f4f0;
          padding: 76px 0 25px;
          overflow: hidden;
        }

        .blogs-eyebrow, .section-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #8b6a53;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.2px;
        }

        .eyebrow-line {
          width: 28px;
          height: 1px;
          background: var(--blog-accent);
        }

        .blogs-hero-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(220px, .65fr);
          align-items: end;
          gap: 60px;
          padding: 52px 0 48px;
        }

        .blogs-hero-copy h1 {
          margin: 0;
          max-width: 800px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 7vw, 86px);
          font-weight: 400;
          letter-spacing: -4px;
          line-height: .99;
        }

        .blogs-hero-copy h1 span {
          color: #9c6b4d;
          font-style: italic;
        }

        .blogs-hero-copy > p {
          max-width: 480px;
          margin: 28px 0;
          color: #65747b;
          font-size: 16px;
          line-height: 1.85;
        }

        .blogs-primary-link, .article-read-link {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          color: var(--blog-ink);
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
        }

        .blogs-primary-link {
          border-bottom: 1px solid #b8a18e;
          padding: 0 0 12px;
        }

        .blogs-primary-link svg, .article-read-link svg,
        .blog-card-arrow svg {
          width: 18px;
          height: 18px;
          transition: transform .2s ease;
        }

        .blogs-primary-link:hover svg,
        .article-read-link:hover svg,
        .blog-card-arrow:hover svg {
          transform: translateX(4px);
        }

        .blogs-hero-note {
          position: relative;
          min-height: 190px;
          padding: 25px 0 0 25px;
          border-left: 1px solid #d8d8d0;
          overflow: hidden;
        }

        .note-number, .section-index, .bottom-note-caption {
          color: #7b8586;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.6px;
        }

        .blogs-hero-note p {
          position: relative;
          z-index: 1;
          margin-top: 26px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
          line-height: 1.55;
        }

        .note-decoration {
          position: absolute;
          right: -5px;
          bottom: -58px;
          color: #e9e4dc;
          font-family: Georgia, serif;
          font-size: 180px;
          line-height: 1;
        }

        .blogs-hero-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid #dedfd9;
          padding-top: 17px;
          color: #78827f;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .featured-section {
          padding: 92px 0 86px;
        }

        .section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 34px;
        }

        .section-heading h2 {
          margin: 12px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 49px);
          font-weight: 400;
          letter-spacing: -1.7px;
        }

        .featured-article {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          min-height: 425px;
          background: #f7f6f3;
        }

        .featured-image-link {
          display: block;
          min-width: 0;
          min-height: 360px;
          overflow: hidden;
        }

        .blog-image {
          position: relative;
          height: 100%;
          min-height: 245px;
          overflow: hidden;
          background: #e9e6e0;
        }

        .blog-image img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: inherit;
          object-fit: cover;
          transition: transform .65s cubic-bezier(.2,.7,.2,1);
        }

        .featured-image-link:hover img,
        .blog-card-image-link:hover img {
          transform: scale(1.045);
        }

        .blog-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 45%, rgba(15, 30, 35, .38));
          pointer-events: none;
        }

        .blog-image-category {
          position: absolute;
          bottom: 20px;
          left: 20px;
          padding: 9px 12px;
          background: rgba(255,255,255,.94);
          color: #35464b;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .8px;
          text-transform: uppercase;
        }

        .featured-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: clamp(25px, 4vw, 48px);
        }

        .article-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          color: #778187;
          font-size: 10px;
        }

        .article-meta > span:first-child {
          color: #9a6a4b;
          font-weight: 700;
        }

        .meta-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #b2b9b8;
        }

        .featured-content h3 {
          margin: 24px 0 16px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(27px, 3vw, 38px);
          font-weight: 400;
          letter-spacing: -.9px;
          line-height: 1.2;
        }

        .featured-content h3 a, .blog-card h3 a {
          color: inherit;
          text-decoration: none;
        }

        .featured-content h3 a:hover, .blog-card h3 a:hover {
          color: #9c6b4d;
        }

        .featured-excerpt {
          margin: 0;
          color: #68767b;
          font-size: 13px;
          line-height: 1.9;
        }

        .featured-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          width: 100%;
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid #e1e2de;
          color: #778187;
          font-size: 10px;
        }

        .featured-author {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
          padding-top: 28px;
        }

        .author-mark, .bottom-note-mark {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border: 1px solid #d8c9bb;
          border-radius: 50%;
          color: #9c6b4d;
          font-family: Georgia, serif;
          font-size: 18px;
        }

        .featured-author div {
          display: grid;
          gap: 4px;
        }

        .featured-author strong {
          font-size: 10px;
        }

        .featured-author div span {
          color: #7b8586;
          font-size: 10px;
        }

        .latest-section {
          padding: 78px 0 55px;
          background: #f8f8f6;
        }

        .latest-heading {
          margin-bottom: 27px;
        }

        .latest-heading p {
          margin: 12px 0 0;
          color: #6d7b81;
          font-size: 13px;
          line-height: 1.7;
        }

        .blog-category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 34px;
        }

        .blog-category-pill {
          padding: 10px 14px;
          border: 1px solid #e1e4e1;
          border-radius: 2px;
          color: #65747b;
          font-size: 10px;
        }

        .blog-category-pill.active {
          border-color: #243941;
          background: #243941;
          color: #fff;
        }

        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 32px;
        }

        .blog-card {
          min-width: 0;
          background: #fff;
        }

        .blog-card-image-link {
          display: block;
          height: 290px;
          overflow: hidden;
        }

        .blog-card-content {
          padding: 26px 26px 23px;
        }

        .blog-card h3 {
          margin: 17px 0 12px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(23px, 2.7vw, 31px);
          font-weight: 400;
          letter-spacing: -.6px;
          line-height: 1.3;
        }

        .blog-card-content > p {
          min-height: 66px;
          margin: 0;
          color: #6d7b81;
          font-size: 12px;
          line-height: 1.85;
        }

        .blog-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 22px;
          padding-top: 17px;
          border-top: 1px solid #eceeeb;
          color: #778187;
          font-size: 10px;
        }

        .blog-card-arrow {
          display: grid;
          place-items: center;
          width: 36px;
          height: 36px;
          border: 1px solid #e0e3df;
          border-radius: 50%;
          color: #263d45;
        }

        .blogs-bottom-note {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 70px;
          padding: 25px 0 0;
          border-top: 1px solid #e1e4e0;
        }

        .bottom-note-mark {
          flex: 0 0 auto;
        }

        .blogs-bottom-note p {
          margin: 0;
          color: #65747b;
          font-family: Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
        }

        .bottom-note-caption {
          margin-left: auto;
          text-align: right;
        }

        @media (min-width: 900px) {
          .blogs-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .blogs-container {
            width: min(100% - 36px, 560px);
          }

          .blogs-hero {
            padding-top: 48px;
          }

          .blogs-hero-layout {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 42px 0 35px;
          }

          .blogs-hero-copy h1 {
            font-size: clamp(46px, 10vw, 68px);
            letter-spacing: -2.5px;
          }

          .blogs-hero-note {
            min-height: 120px;
          }

          .blogs-hero-note p {
            margin-top: 17px;
            font-size: 17px;
          }

          .note-decoration {
            right: 20px;
            bottom: -48px;
            font-size: 135px;
          }

          .featured-section {
            padding: 60px 0;
          }

          .section-heading {
            align-items: flex-start;
          }

          .section-index {
            max-width: 110px;
            text-align: right;
            line-height: 1.7;
          }

          .featured-article {
            grid-template-columns: 1fr;
          }

          .featured-image-link {
            min-height: 280px;
          }

          .featured-content {
            min-height: 370px;
          }

          .latest-section {
            padding-top: 60px;
          }

          .blogs-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .blog-card-image-link {
            height: 270px;
          }

          .blogs-bottom-note {
            flex-wrap: wrap;
            margin-top: 45px;
          }

          .bottom-note-caption {
            width: 100%;
            margin-left: 56px;
            text-align: left;
          }
        }

        @media (max-width: 420px) {
          .blogs-hero-bottom {
            font-size: 8px;
            letter-spacing: .8px;
          }

          .featured-footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .featured-content {
            padding: 25px 20px;
          }

          .blog-card-content {
            padding: 22px 18px;
          }

          .blog-card-image-link {
            height: 230px;
          }
        }
      `}</style>
    </main>
  );
}
