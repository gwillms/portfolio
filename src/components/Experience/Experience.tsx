import styles from './Experience.module.css';
import { Bag } from 'phosphor-react';

export function Experience() {
    return (
        <section className={styles.experience}>
            <button><Bag size={21} color="#4831d4" /><span>Carreira</span></button>
            <h1>Trajetória até aqui</h1>

            <div className={ styles.expTemplate }>
            
                <ul>
                    <h2>Área Profissional</h2>
                    <li>
                        <h4>Jovem Aprendiz</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni inventore ab ea delectus quas adipisci repellat! 
                        Ratione distinctio aperiam sint exercitationem? Delectus minus pariatur officiis? Animi dolorem laboriosam voluptatum minima.</p>

                        <h5>Outubro 2016 - Dezembro/2017</h5>
                    </li>
                    <li>
                        <h4>Jovem Aprendiz</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni inventore ab ea delectus quas adipisci repellat! 
                        Ratione distinctio aperiam sint exercitationem? Delectus minus pariatur officiis? Animi dolorem laboriosam voluptatum minima.</p>
                        <h5>Outubro 2016 - Dezembro/2017</h5>
                    </li>
                </ul>

                <ul>
                    <h2>Acadêmica</h2>
                    <li>
                        <h4>Jovem Aprendiz</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni inventore ab ea delectus quas adipisci repellat! 
                        Ratione distinctio aperiam sint exercitationem? Delectus minus pariatur officiis? Animi dolorem laboriosam voluptatum minima.</p>
                        <h5>Outubro 2016 - Dezembro/2017</h5>
                    </li>
                    <li>
                        <h4>Jovem Aprendiz</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni inventore ab ea delectus quas adipisci repellat! 
                        Ratione distinctio aperiam sint exercitationem? Delectus minus pariatur officiis? Animi dolorem laboriosam voluptatum minima.</p>
                        <h5>Outubro 2016 - Dezembro/2017</h5>
                    </li>
                </ul>
            


            </div>
        </section>
    )
}