import styles from './Skills.module.css';
import { Laptop } from 'phosphor-react';

import react from '../../assets/react.svg';
import laravel from '../../assets/laravel.svg';
import javascript from '../../assets/javascript.svg';
import php from '../../assets/php.svg';
import typescript from '../../assets/typescript.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import postgresqp from '../../assets/postgresql.svg';
import mysql from '../../assets/mysql.svg';


export function Skills() {
    return (
        <section className={ styles.skills }>
            <div className={ styles.divider }>
            </div>
            <div>
                <button><Laptop size={32} color="#4831d4" /><span>Skills</span></button>
            </div>

            <h1>Tecnologias e Habilidades</h1>
            <div className={styles.skillsGrid}>
            <img src={laravel} alt="Laravel" />
            <img src={react} alt="React" />
            <img src={php} alt="PHP" />
            <img src={javascript} alt="Javascript" />
            <img src={typescript} alt="Typescript" />
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={postgresqp} alt="PostgreSQL" />
            <img src={mysql} alt="MySQL" />
            </div>

        </section>
    )
}