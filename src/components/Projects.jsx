import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { GITHUB_API, GITHUB_URL, GITHUB_URL_2, GITHUB_USER, LANGUAGE_COLORS } from '../data.js';
import {
  GitHubIcon,
  StarIcon,
  ForkIcon,
  ExternalLinkIcon,
  PlusIcon,
  ArrowRightIcon,
} from './Icons.jsx';

const INITIAL_COUNT = 6;

export default function Projects() {
  const { t, lang } = useLanguage();
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(GITHUB_API)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const sorted = [...data].sort(
          (a, b) =>
            b.stargazers_count - a.stargazers_count ||
            new Date(b.pushed_at) - new Date(a.pushed_at)
        );
        setRepos(sorted);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  const truncate = (text, n = 80) =>
    text && text.length > n ? `${text.slice(0, n).trimEnd()}...` : text;

  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{t.projects.title}</h2>

        <div className="projects__head">
          <p className="projects__subtitle">
            {t.projects.subtitle} —{' '}
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="projects__handle">
              github.com/{GITHUB_USER}
            </a>
          </p>
          <a className="btn btn--dark" href={GITHUB_URL} target="_blank" rel="noreferrer">
            <GitHubIcon /> {t.projects.viewProfile}
          </a>
        </div>

        {status === 'loading' && (
          <div className="projects__grid">
            {[...Array(4)].map((_, i) => (
              <div className="card repo-card repo-card--skeleton" key={i}>
                <div className="skeleton skeleton--title" />
                <div className="skeleton skeleton--line" />
                <div className="skeleton skeleton--line skeleton--short" />
              </div>
            ))}
          </div>
        )}

        {status === 'error' && (
          <div className="card projects__error">
            <p>{t.projects.error}</p>
            <a className="btn btn--primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
              <GitHubIcon /> github.com/{GITHUB_USER}
            </a>
          </div>
        )}

        {status === 'ready' && (
          <>
          <div className="projects__grid">
            {(showAll ? repos : repos.slice(0, INITIAL_COUNT)).map((repo) => (
              <a
                className="card repo-card"
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="repo-card__head">
                  <GitHubIcon className="repo-card__gh" />
                  <h3 className="repo-card__name">{repo.name}</h3>
                  <ExternalLinkIcon className="repo-card__ext" />
                </div>
                <p className="repo-card__desc">
                  {repo.description ? truncate(repo.description) : t.projects.noDesc}
                </p>
                <div className="repo-card__meta">
                  {repo.language && (
                    <span className="repo-card__lang">
                      <span
                        className="repo-card__lang-dot"
                        style={{ background: LANGUAGE_COLORS[repo.language] || '#8b949e' }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="repo-card__stat">
                    <StarIcon /> {repo.stargazers_count}
                  </span>
                  <span className="repo-card__stat">
                    <ForkIcon /> {repo.forks_count}
                  </span>
                  <span className="repo-card__updated">
                    {t.projects.updated} {formatDate(repo.pushed_at)}
                  </span>
                </div>
              </a>
            ))}
          </div>
          {repos.length > INITIAL_COUNT && (
            <div className="projects__more-wrap">
              <button className="btn btn--readmore" onClick={() => setShowAll((v) => !v)}>
                {showAll ? (
                  t.projects.showLess
                ) : (
                  <>
                    {t.projects.readMore} <PlusIcon />{' '}
                    <span className="btn__count">{repos.length - INITIAL_COUNT}</span>
                  </>
                )}
              </button>
            </div>
          )}
          </>
        )}

        <h3 className="section__subtitle section__subtitle--spaced">{t.projects.moreTitle}</h3>
        <table className="more-table">
          <tbody>
            {t.projects.more.map((p, i) => (
              <tr key={p.name}>
                <td className="more-table__idx">{String(i + 1).padStart(2, '0')}</td>
                <td className="more-table__name">
                  <span className="more-table__title">{p.name}</span>
                  <span className="more-table__desc">{p.desc}</span>
                </td>
                <td className="more-table__tag">{p.tech}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a className="btn btn--dark projects__explore" href={GITHUB_URL_2} target="_blank" rel="noreferrer">
          <GitHubIcon /> {t.projects.exploreMore} <ArrowRightIcon />
        </a>
      </div>
    </section>
  );
}
