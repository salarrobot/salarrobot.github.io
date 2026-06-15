import { useLanguage } from '../i18n/LanguageContext.jsx';
import { EMAIL } from '../data.js';
import { MailIcon } from './Icons.jsx';

export default function Internship() {
  const { t } = useLanguage();

  return (
    <section className="internship">
      <div className="container">
        <div className="internship__panel">
          <h2 className="internship__title">{t.internship.title}</h2>
          <p className="internship__subtitle">{t.internship.subtitle}</p>
          <div className="internship__grid">
            {t.internship.areas.map((area) => (
              <div className="internship__card" key={area.title}>
                <span className="internship__emoji" role="img" aria-hidden="true">
                  {area.icon}
                </span>
                <h3 className="internship__card-title">{area.title}</h3>
                <p className="internship__card-desc">{area.desc}</p>
              </div>
            ))}
          </div>
          <a className="btn btn--light internship__cta" href={`mailto:${EMAIL}`}>
            <MailIcon /> {t.internship.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
