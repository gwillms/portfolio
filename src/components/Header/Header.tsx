import styles from './Header.module.css';
import gitHub from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import Curriculo from '../../assets/curriculo.pdf';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'phosphor-react'; // ou use react-icons se preferir

export function Header() {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(() => {
    // Lê do localStorage (opcional)
    return localStorage.getItem('theme') === 'dark';
  });

  function changeLanguage(lang: 'pt' | 'en') {
    i18n.changeLanguage(lang);
  }

  function toggleTheme() {
    setIsDark(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  }

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <header className={styles.header}>
      <div className={styles.menuNav}>
                <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          title="Alternar tema"
        >
          {isDark ? <Sun size={22} color="var(--green)" /> : <Moon size={22} color="var(--blue)" />}
        </button>
        <a href="#about">{t('menu.home')}</a>
        <a href="#skills">{t('menu.skills')}</a>
        <a href="#courses">{t('menu.courses')}</a>
      </div>

      <div className={styles.actions}>
        <div className={styles.icons}>
          <a
            href="https://github.com/gwillms"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHub} alt="Github" />
          </a>

          <a
            href="https://www.linkedin.com/in/gwillms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
        </div>

        <a href={Curriculo} download target="_blank">
          <button className={styles.buttonCV}>{t('cv')}</button>
        </a>

        <div className={styles.languageToggle}>
          <button onClick={() => changeLanguage('pt')} className="fi fi-br" title="Português"></button>
          <button onClick={() => changeLanguage('en')} className="fi fi-us" title="English"></button>
        </div>
      </div>
    </header>
  );
}
