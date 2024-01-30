import styles from './Projects.module.css';
import { Link } from 'phosphor-react';

export function Projects() {
    return (
        <section className={styles.projects}>
            <div>
                <button><Link size={21} color="#4831d4" /><span>Portfólio</span></button>
                <h1>Projetos</h1>
                <ul>
                    <li>
                        <h3>NLW Copa</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum aut obcaecati accusantium eius adipisci earum reprehenderit, 
                            perferendis ab! Et corrupti tenetur expedita recusandae! Nam quae inventore architecto! Minima, id?</p>
                            <button>React JS</button>
                            <button>Typescript</button>
                            <a href="https://github.com/gwillms/nlw-copa" target="_blank"><img src="/src/assets/nlw-copa.svg" alt="" /></a>
                    </li>
                    <li>
                        <h3>Move.it</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum aut obcaecati accusantium eius adipisci earum reprehenderit, 
                            perferendis ab! Et corrupti tenetur expedita recusandae! Nam quae inventore architecto! Minima, id?</p>
                            <button>React JS</button>
                            <button>Typescript</button>
                            <a href="https://github.com/gwillms/nlw-copa" target="_blank"><img src="/src/assets/nlw-copa.svg" alt="" /></a>
                    </li>
                    <li>
                        <h3>Move.it</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum aut obcaecati accusantium eius adipisci earum reprehenderit, 
                            perferendis ab! Et corrupti tenetur expedita recusandae! Nam quae inventore architecto! Minima, id?</p>
                            <button>React JS</button>
                            <button>Typescript</button>
                            <a href="https://github.com/gwillms/nlw-copa" target="_blank"><img src="/src/assets/nlw-copa.svg" alt="" /></a>
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </section>
    )
}