import styles from './About.module.css';
import { Cookie } from 'phosphor-react';
import fotoProfile from '../../assets/profile.png';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.about}>
      <div>
        <img src={fotoProfile} alt="Foto de Perfil" />
      </div>

      <div>
        <button>
          <Cookie size={32} color="#4831d4" />
          <span>{t('about.button')}</span>
        </button>

        <h1>{t('about.name')}</h1>

        <p>{t('about.description')}</p>
      </div>
    </section>
  );
}
