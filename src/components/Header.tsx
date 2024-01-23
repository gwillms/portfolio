import styles from './Header.module.css';

import logoGabriel from '../assets/logo-gabriel.png';

export function Header() {
    return ( 
        <header className={styles.header}>
            <div>
                <img src= { logoGabriel } alt="Logotipo Gabriel"/>
            </div>

            <div>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Skills</a>
                <a href="#">Portfólio</a>
                <a href="#">Carreira</a>
                <a href="#">Contato</a>
            </div>
                <button>Baixar CV</button>
        </header>
    )
}