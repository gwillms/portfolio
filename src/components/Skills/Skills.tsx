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


export function Skills() {
    return (
        <section className={styles.skills}>
            <div>
                <button><Laptop size={21} color="#4831d4" /><span>Skills</span></button>
            </div>

            <h1>Tecnologias e Habilidades</h1>
            <p>Conhecimentos</p>
            <div>
                <img src= { react } alt="React"/>
                <img src= { javascript } alt="Javascript"/>
                <img src= { laravel } alt="Laravel"/>
                <img src= { php } alt="PHP"/>

            </div>
            <div>
                <img src= { typescript } alt="Typescript"/>
                <img src= { html } alt="HTML"/>
                <img src= { css } alt="CSS"/>
                <img src= { postgresqp } alt="PostgreSQL"/>
            </div>
        </section>
    )
}