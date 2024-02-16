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
                        <h4>Encarregado de Sistemas</h4>
                        
                        <p>Como encarregado de sistemas, participo de todas as implementações do grupo,
                        desenvolvendo sistemas, apis, sendo responsável pela parte web, suporte ao ERP,
                        administração de e-mails, gerenciamento de firewall e infraestrutura de redes.</p>
                        <h5>Grupo Pegoraro - Novembro 2023/Atual</h5>
                    </li>
                    <li>
                        <h4>Encarregado de CPD</h4>
                        <p>Como encarregado de CPD, gerenciava uma equipe de 4 colaboradores, direcionando as
                        atividades para o funcionamento da empresa. Responsável pelo fluxo de
                        faturamento e suporte de TI aos colaboradores.
                        </p>
                        <h5>Grupo Pegoraro - Julho 2015/Novembro 2023</h5>
                    </li>
                </ul>

                <ul>
                    <h2>Acadêmica</h2>
                    <li>
                        <h4>Superior - Análise e Desenvolvimento de Sistemas</h4>
                        <p>Formado pela estácio no curso de Análise e Desenvolvimento de Sistemas na data de dezembro de 2023</p>
                        <h5>Estácio - Julho 2020/Dezembro 2023</h5>
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