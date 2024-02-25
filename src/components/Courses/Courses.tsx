import styles from './Courses.module.css';
import { Code } from 'phosphor-react';

export function Courses() {
    return (
        <section className={styles.courses}>
            <div className={styles.divider}>
            </div>
            <div>
                <button><Code size={21} color="#4831d4" /><span>Cursos</span></button>
            </div>
            <div>
                <ul>
                    <li>
                        <h4>Rockeatseat</h4>
                        <a href="#" target="_blank">Ignite</a>
                    </li>
                    <li>
                        <h4>Origamid</h4>
                        <a href="https://www.origamid.com/certificate/0a9ba784" target="_blank">Javascript</a>
                    </li>
                    <li>
                        <h4>Origamid</h4>
                        <a href="https://www.origamid.com/certificate/2ff35776" target="_blank">HTML E CSS</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                <li>
                        <h4>Udemy</h4>
                        <a href="https://www.udemy.com/certificate/UC-4cbe649a-e180-4377-8219-98814571288a/" target="_blank">Linux</a>
                    </li>
                    <li>
                        <h4>Udemy</h4>
                        <a href="https://www.udemy.com/certificate/UC-4cbe649a-e180-4377-8219-98814571288a/" target="_blank">Git e Github</a>
                    </li>
                    <li>
                        <h4>EF Stardard</h4>
                        <a href="https://www.efset.org/cert/USz8Qa" target="_blank">English Certicate</a>
                    </li>
                </ul>
            </div>

        </section>
    )
}