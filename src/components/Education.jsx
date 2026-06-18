import { useLanguage } from '../i18n/LanguageContext.jsx';
import { UNI_LOGOS } from '../data.js';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{t.education.title}</h2>
        <div className="timeline">
          {t.education.items.map((item, i) => (
            <div className="timeline__item" key={item.degree}>
              <div className="timeline__dot timeline__dot--logo">
                <img src={UNI_LOGOS[i]} alt={item.school} />
              </div>
              <div className="card timeline__card">
                <div className="timeline__head">
                  <h3 className="timeline__role">{item.degree}</h3>
                  <span className="badge badge--period">{item.period}</span>
                </div>
                <p className="timeline__org">{item.school}</p>
                {item.details.length > 0 && (
                  <ul className="timeline__points">
                    {item.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
