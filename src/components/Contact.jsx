import { useLanguage } from '../i18n/LanguageContext.jsx';
import { EMAIL, GITHUB_URL, GITHUB_USER, LINKEDIN_URL } from '../data.js';
import { MailIcon, GitHubIcon, LinkedInIcon } from './Icons.jsx';

export default function Contact() {
  const { t } = useLanguage();

  const items = [
    {
      icon: <MailIcon />,
      label: t.contact.emailLabel,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: <LinkedInIcon />,
      label: t.contact.linkedinLabel,
      value: 'salar-mokhtari-laleh',
      href: LINKEDIN_URL,
    },
    {
      icon: <GitHubIcon />,
      label: t.contact.githubLabel,
      value: GITHUB_USER,
      href: GITHUB_URL,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section__title">{t.contact.title}</h2>
        <p className="contact__subtitle">{t.contact.subtitle}</p>
        <div className="contact__grid">
          {items.map((item) => (
            <a
              className="card contact__card"
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="contact__icon">{item.icon}</span>
              <span className="contact__label">{item.label}</span>
              <span className="contact__value">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
