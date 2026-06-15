import { useLanguage } from '../i18n/LanguageContext.jsx';
import { MicIcon, CalendarIcon, GlobeIcon, UsersIcon } from './Icons.jsx';

export default function Webinars() {
  const { t } = useLanguage();

  return (
    <section id="webinars" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{t.webinars.title}</h2>
        <div className="webinar__list">
          {t.webinars.items.map((w) => (
            <div className="card webinar__card" key={w.title}>
              <div className="webinar__icon">
                <MicIcon />
              </div>
              <div className="webinar__body">
                <div className="webinar__head">
                  <h3 className="webinar__title">{w.title}</h3>
                  <span className="badge badge--type">{t.webinars.roleLabel}</span>
                </div>
                <p className="webinar__desc">{w.description}</p>
                <div className="webinar__meta">
                  <span>
                    <CalendarIcon /> {w.date}
                  </span>
                  <span>
                    <GlobeIcon /> {w.type}
                  </span>
                  <span>
                    <UsersIcon /> {w.participants}
                  </span>
                </div>
                <div className="chips">
                  {w.tags.map((tag) => (
                    <span className="chip chip--primary" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
