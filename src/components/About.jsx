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
          <table className="interests-table">
            <thead>
              <tr>
                <th className="interests-table__idx">#</th>
                <th>{t.about.interestsCols.area}</th>
                <th>{t.about.interestsCols.focus}</th>
              </tr>
            </thead>
            <tbody>
              {t.about.interests.map((it, i) => (
                <tr key={it.area}>
                  <td className="interests-table__idx">{String(i + 1).padStart(2, '0')}</td>
                  <td className="interests-table__area">{it.area}</td>
                  <td className="interests-table__focus">{it.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>

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
