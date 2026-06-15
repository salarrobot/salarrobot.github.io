import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { MenuIcon, CloseIcon } from './Icons.jsx';
import { UsFlag, TrFlag } from './Flags.jsx';

const SECTION_IDS = [
  'home',
  'about',
  'education',
  'experience',
  'projects',
  'publications',
  'webinars',
  'posts',
  'certifications',
  'references',
  'contact',
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const links = SECTION_IDS.map((id) => ({ id, label: t.nav[id] }));

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__logo">SML</span>
          <span className="navbar__name">Salar Mokhtari</span>
        </a>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`navbar__link ${active === id ? 'navbar__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="lang-switch lang-switch--mobile">
            <button
              className={lang === 'en' ? 'lang-switch__btn lang-switch__btn--active' : 'lang-switch__btn'}
              onClick={() => setLang('en')}
            >
              <UsFlag width={18} height={12} /> EN
            </button>
            <button
              className={lang === 'tr' ? 'lang-switch__btn lang-switch__btn--active' : 'lang-switch__btn'}
              onClick={() => setLang('tr')}
            >
              <TrFlag width={18} height={12} /> TR
            </button>
          </div>
        </nav>

        <div className="navbar__right">
          <div className="lang-switch">
            <button
              className={lang === 'en' ? 'lang-switch__btn lang-switch__btn--active' : 'lang-switch__btn'}
              onClick={() => setLang('en')}
              aria-label="English"
            >
              <UsFlag width={18} height={12} /> EN
            </button>
            <button
              className={lang === 'tr' ? 'lang-switch__btn lang-switch__btn--active' : 'lang-switch__btn'}
              onClick={() => setLang('tr')}
              aria-label="Türkçe"
            >
              <TrFlag width={18} height={12} /> TR
            </button>
          </div>
          <button
            className="navbar__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
