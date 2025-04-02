import styles from './Projects.module.css';
import { Link } from 'phosphor-react';


import nlwCopa from '../../assets/nlwcopa.svg'
import nlwHabits from '../../assets/nlw-habits.png'
import bikcraft from '../../assets/bikcraft.png'

export function Projects() {
    return (

        <section className={ styles.projects }>
            <div>
                <button><Link size={21} color="#4831d4" /><span>Projetos</span></button>
                
                <ul>
                    <li>
                        <h3>NLW Copa</h3>
                        <p>Projeto da Rocketseat, aplicação para participar de bolões da Copa do Mundo 2022.</p>
                        <button>Typescript</button>
                        <button>React JS</button>
                        <button>Vite</button>
                        <button>Tailwind</button>
                        <a href="https://github.com/gwillms/nlw-copa" target="_blank"><img src={ nlwCopa } alt="" /></a>
                    </li>

                    <li>
                        <h3>NLW Habits</h3>
                        <p>Projeto da Rocketseat, habits é um aplicativo para ajudar a gerenciar suas tarefas diárias</p>
                        <button>Typescript</button>
                        <button>React JS</button>
                        <button>Vite</button>
                        <button>Tailwind</button>
                        <a href="https://github.com/gwillms/nlw-habits" target="_blank"><img src={ nlwHabits } alt="" /></a>
                    </li>

                    <li>
                        <h3>Bikcraft</h3>
                        <p>Projeto desenvolvido no curso da origamid, design feito no figma e 100% responsivo</p>
                        <button>HTML</button>
                        <button>CSS</button>
                        <button>Javascript</button>
                        <button>Figma</button>
                        <a href="https://github.com/gwillms/nlw-copa" target="_blank"><img src={ bikcraft } alt="" /></a>
                    </li>
                </ul>
            </div>
        </section>
    )
}