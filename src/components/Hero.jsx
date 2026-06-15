import { useLanguage } from '../i18n/LanguageContext.jsx';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, CV_URL } from '../data.js';
import {
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
  RobotIcon,
  NetworkIcon,
  GamepadIcon,
  CpuIcon,
  DownloadIcon,
} from './Icons.jsx';

const TICKER_KEYWORDS = [
  'Reinforcement Learning',
  'Deep RL',
  'Humanoid Robotics',
  'SLAM',
  'Computer Vision',
  'Machine Learning',
  'NVIDIA Isaac Sim',
  'PPO',
  'LLMs',
];

const FLOAT_BADGES = [
  { icon: <RobotIcon />, label: 'Robotics', cls: 'hero__float--1' },
  { icon: <NetworkIcon />, label: 'Deep RL', cls: 'hero__float--2' },
  { icon: <GamepadIcon />, label: 'RL', cls: 'hero__float--3' },
  { icon: <CpuIcon />, label: 'AI', cls: 'hero__float--4' },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <a href="#contact" className="hero__badge">
            <span className="hero__badge-dot" />
            {t.hero.badge}
          </a>
          <p className="hero__greeting">{t.hero.greeting}</p>
          <h1 className="hero__name">{t.hero.name}</h1>
          <h2 className="hero__title">{t.hero.title}</h2>
          <p className="hero__subtitle">{t.hero.subtitle}</p>

          <div className="hero__actions">
            <a className="btn btn--dark" href={`mailto:${EMAIL}`}>
              <MailIcon /> {t.hero.emailBtn}
            </a>
            <a className="btn btn--outline" href={GITHUB_URL} target="_blank" rel="noreferrer">
              <GitHubIcon /> {t.hero.githubBtn}
            </a>
            <a className="btn btn--outline" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <LinkedInIcon /> {t.hero.linkedinBtn}
            </a>
            <a className="btn btn--cv" href={CV_URL} download>
              <DownloadIcon /> {t.hero.downloadBtn}
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          {FLOAT_BADGES.map((b) => (
            <span className={`hero__float ${b.cls}`} key={b.label}>
              {b.icon}
              <span className="hero__float-label">{b.label}</span>
            </span>
          ))}
          <div className="hero__photo-ring">
            <img src="/profile.jpg" alt={t.hero.name} className="hero__photo" />
          </div>
          <span className="hero__fig">FIG. 01 — HUMANOID ROBOTICS RESEARCH</span>
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...TICKER_KEYWORDS, ...TICKER_KEYWORDS].map((k, i) => (
            <span className="ticker__item" key={i}>
              {k} <span className="ticker__sep">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
