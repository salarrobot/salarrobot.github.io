import { useLanguage } from '../i18n/LanguageContext.jsx';
import { ERC_URL } from '../data.js';
import { GlobeIcon, ExternalLinkIcon } from './Icons.jsx';
import { LangFlag } from './Flags.jsx';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">{t.about.title}</h2>
        <div className="about">
          <p className="about__bio">{t.about.bio}</p>

          <a className="about__erc" href={ERC_URL} target="_blank" rel="noreferrer">
            <span className="about__erc-dot" />
            {t.about.affiliation}
            <span className="about__erc-link">
              {t.about.ercLink} <ExternalLinkIcon />
            </span>
          </a>

          <h3 className="about__card-title about__card-title--block">{t.about.interestsTitle}</h3>
          <div className="interests-grid">
            {t.about.interests.map((area, i) => (
              <div className="interests-grid__item" key={area}>
                <span className="interests-grid__idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="interests-grid__area">{area}</span>
              </div>
            ))}
          </div>

          <div className="about__grid">
            <div className="card about__card">
              <h3 className="about__card-title">
                <GlobeIcon /> {t.about.languagesTitle}
              </h3>
              <div className="chips">
                {t.about.languages.map((item, i) => (
                  <span className="chip chip--flag" key={item}>
                    <LangFlag index={i} /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card about__card">
              <h3 className="about__card-title">{t.about.hobbiesTitle}</h3>
              <div className="chips">
                {t.about.hobbies.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
