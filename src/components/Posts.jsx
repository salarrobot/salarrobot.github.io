import { useLanguage } from '../i18n/LanguageContext.jsx';
import { LINKEDIN_URL } from '../data.js';
import { LinkedInIcon, CalendarIcon, ExternalLinkIcon } from './Icons.jsx';

export default function Posts() {
  const { t } = useLanguage();

  return (
    <section id="posts" className="section">
      <div className="container">
        <h2 className="section__title">{t.posts.title}</h2>

        <div className="posts__head">
          <p className="posts__subtitle">{t.posts.subtitle}</p>
          <a className="btn btn--dark" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <LinkedInIcon /> {t.posts.followBtn}
          </a>
        </div>

        <div className="posts__grid">
          {t.posts.items.map((post) => (
            <a
              className="card post__card"
              key={post.title}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              <div className="post__top">
                <span className="post__tag">{post.tag}</span>
                <LinkedInIcon className="post__brand" />
              </div>
              <h3 className="post__title">{post.title}</h3>
              <p className="post__excerpt">{post.excerpt}</p>
              <div className="post__foot">
                <span className="post__date">
                  <CalendarIcon /> {post.date}
                </span>
                <span className="post__read">
                  {t.posts.readBtn} <ExternalLinkIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
