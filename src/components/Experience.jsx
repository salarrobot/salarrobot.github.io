import { useLanguage } from '../i18n/LanguageContext.jsx';
import { BriefcaseIcon, BookOpenIcon, MapPinIcon, ChalkboardIcon, CalendarIcon } from './Icons.jsx';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section__title">{t.experience.title}</h2>

        <h3 className="section__subtitle">{t.experience.researchTitle}</h3>
        <div className="timeline">
          {t.experience.research.map((job) => (
            <div className="timeline__item" key={job.role + job.org}>
              <div className="timeline__dot">
                <BriefcaseIcon />
              </div>
              <div className="card timeline__card">
                <div className="timeline__head">
                  <h3 className="timeline__role">{job.role}</h3>
                  <span className="badge badge--period">{job.period}</span>
                </div>
                <p className="timeline__org">{job.org}</p>
                <p className="timeline__location">
                  <MapPinIcon /> {job.location}
                </p>
                <ul className="timeline__points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h3 className="section__subtitle section__subtitle--spaced">{t.experience.teachingTitle}</h3>
        <p className="teaching__org">
          <BookOpenIcon /> {t.experience.teachingOrg}
        </p>
        <div className="teaching__list">
          {t.experience.teaching.map((ta) => (
            <div className="teaching__row" key={ta.course}>
              <span className="teaching__icon">
                <ChalkboardIcon />
              </span>
              <div className="teaching__info">
                <h4 className="teaching__course">{ta.course}</h4>
                <p className="teaching__lecturer">
                  {t.experience.lecturerLabel}: {ta.lecturer}
                </p>
                {ta.desc && <p className="teaching__desc">{ta.desc}</p>}
                {ta.location && (
                  <p className="teaching__meta">
                    <MapPinIcon /> {ta.location}
                  </p>
                )}
              </div>
              <span className="teaching__period">
                <CalendarIcon /> {ta.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
