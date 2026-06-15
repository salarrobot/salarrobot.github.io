import { useLanguage } from '../i18n/LanguageContext.jsx';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data.js';
import { MailIcon, GitHubIcon, LinkedInIcon } from './Icons.jsx';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="navbar__logo">SML</span>
          <span>Salar Mokhtari Laleh</span>
        </div>
        <div className="footer__links">
          <a href={`mailto:${EMAIL}`} aria-label="Email">
            <MailIcon />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
        <p className="footer__rights">
          © {year} Salar Mokhtari Laleh. {t.footer.rights} · {t.footer.builtWith} ⚛️
        </p>
      </div>
    </footer>
  );
}
