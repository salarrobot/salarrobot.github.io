import { useLanguage } from '../i18n/LanguageContext.jsx';
import { MailIcon } from './Icons.jsx';

const PHOTOS = ['/ref-baltes.jpg', '/ref-saeedvand.jpg'];

export default function References() {
  const { t } = useLanguage();

  return (
    <section id="references" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{t.references.title}</h2>
        <div className="refs__grid">
          {t.references.items.map((ref, i) => (
            <div className="card ref__card" key={ref.name}>
              <img className="ref__photo" src={PHOTOS[i]} alt={ref.name} />
              <h3 className="ref__name">{ref.name}</h3>
              <p className="ref__role">{ref.role}</p>
              <p className="ref__dept">{ref.dept}</p>
              <p className="ref__uni">{ref.uni}</p>
              <a className="btn btn--outline ref__contact" href={`mailto:${ref.email}`}>
                <MailIcon /> {t.references.contactBtn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
