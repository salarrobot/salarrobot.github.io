import { useLanguage } from '../i18n/LanguageContext.jsx';
import { BookOpenIcon, CalendarIcon } from './Icons.jsx';

export default function Publications() {
  const { t } = useLanguage();

  return (
    <section id="publications" className="section">
      <div className="container">
        <h2 className="section__title">{t.publications.title}</h2>
        <div className="pub__list">
          {t.publications.items.map((pub) => (
            <div className="card pub__card" key={pub.title}>
              <div className="pub__icon">
                <BookOpenIcon />
              </div>
              <div className="pub__body">
                <span className="badge badge--type">{t.publications.typeLabel}</span>
                <h3 className="pub__title">{pub.title}</h3>
                <p className="pub__venue">{pub.venue}</p>
                <p className="pub__date">
                  <CalendarIcon /> {pub.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
