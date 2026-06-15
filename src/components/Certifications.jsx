import { useLanguage } from '../i18n/LanguageContext.jsx';
import { AwardIcon } from './Icons.jsx';

export default function Certifications() {
  const { t } = useLanguage();
  const { toefl, gre } = t.certifications;

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section__title">{t.certifications.title}</h2>
        <div className="certs__grid">
          {t.certifications.items.map((cert) => (
            <div className="card cert__card" key={cert.credential}>
              <div className="cert__icon">
                <AwardIcon />
              </div>
              <h3 className="cert__name">{cert.name}</h3>
              <p className="cert__issuer">{cert.issuer}</p>
              <p className="cert__credential">
                {t.certifications.credentialLabel}: <code>{cert.credential}</code>
              </p>
            </div>
          ))}
        </div>

        <h3 className="section__subtitle section__subtitle--spaced">
          {t.certifications.testsTitle}
        </h3>
        <div className="tests__grid">
          <div className="card test__card">
            <div className="test__head">
              <h4 className="test__name">{toefl.name}</h4>
              <span className="badge badge--period">{toefl.date}</span>
            </div>
            <div className="test__total">
              <span className="test__total-score">{toefl.total}</span>
              <span className="test__total-label">{toefl.totalLabel}</span>
            </div>
            <div className="test__parts">
              {toefl.parts.map((p) => (
                <div className="test__part" key={p.label}>
                  <span className="test__part-score">{p.score}</span>
                  <span className="test__part-label">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card test__card">
            <div className="test__head">
              <h4 className="test__name">{gre.name}</h4>
              <span className="badge badge--period">{gre.date}</span>
            </div>
            <div className="test__parts test__parts--three">
              {gre.parts.map((p) => (
                <div className="test__part" key={p.label}>
                  <span className="test__part-score">{p.score}</span>
                  <span className="test__part-label">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
