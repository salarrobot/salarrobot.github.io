import { useLanguage } from '../i18n/LanguageContext.jsx';
import { GlobeIcon } from './Icons.jsx';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">{t.about.title}</h2>
        <div className="about">
          <p className="about__bio">{t.about.bio}</p>

          <div className="about__grid">
            <div className="card about__card">
              <h3 className="about__card-title">{t.about.interestsTitle}</h3>
              <div className="chips">
                {t.about.interests.map((item) => (
                  <span className="chip chip--primary" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card about__card">
              <h3 className="about__card-title">
                <GlobeIcon /> {t.about.languagesTitle}
              </h3>
              <div className="chips">
                {t.about.languages.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <h3 className="about__card-title about__card-title--spaced">{t.about.hobbiesTitle}</h3>
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
