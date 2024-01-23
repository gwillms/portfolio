import styles from './About.module.css';
import { Cookie } from 'phosphor-react';

import fotoProfile from '../assets/profile.png';

export function About() {
    return (
        <section className={styles.about}>
                <div>
                    <img src= { fotoProfile } alt="Foto de Perfil"/>
                    </div>
                <div>
                    <span><Cookie />Sobre mim</span>
                    <h1>Gabriel de Oliveira Willms</h1>
                    <p>Olá, me chamo Gabriel, tenho 31 anos!</p>
                    &nbsp;
                    <p>
                    Formado em Análise e Desenvolvimento de Sistemas. Minha jornada profissional é uma busca constante 
                    por desafios que me permitam aplicar e aprimorar minhas habilidades.Atualmente, meu foco está em desenvolvimento 
                    web, e estou dedicando tempo ao estudo contínuo das tecnologias que impulsionam essa área. Tenho aprofundado meus 
                    conhecimentos em React, JavaScript, PHP e Laravel, buscando integrá-las de maneira eficiente em projetos práticos.
                    </p>
                </div>
        </section>
    )
}