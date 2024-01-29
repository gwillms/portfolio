import styles from './Projects.module.css';
import { Link } from 'phosphor-react';

export function Projects() {
    return (
        <section className={styles.projects}>
            <div>
                <button><Link size={21} color="#4831d4" /><span>Portfólio</span></button>
                <h1>Projetos</h1>
                <ul>
                    <li>Move.it</li>
                    <li>Move.it</li>
                    <li>Move.it</li>
                </ul>
            </div>
            <div>

            </div>
        </section>
    )
}