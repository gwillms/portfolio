import styles from './About.module.css';
import { Cookie } from 'phosphor-react';

import fotoProfile from '../../assets/profile.png';

export function About() {
    return (
        <section className={ styles.about }>
                <div>
                    <img src= { fotoProfile } alt="Foto de Perfil"/>
                    </div>
                <div>
                    <button>
                        <Cookie size={32} color="#4831d4"/>
                        <span>Sobre mim</span> 
                    </button>
                    <h1>Gabriel de Oliveira Willms</h1>
                    <p>

                    <br></br>
                    <br></br>
                    Desenvolvedor Full Stack com experiência em desenvolvimento de sistemas e especialização em
                    desenvolvimento web. Ao longo da minha trajetória profissional, adquiri habilidades em linguagens e
                    frameworks como Laravel, React.JS, Python, PHP e JavaScript, além de experiência prática com bancos de
                    dados como MySQL e PostgreSQL.
                    </p>
                </div>
        </section>
    )
}