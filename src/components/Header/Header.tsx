import styles from './Header.module.css';

// import logoGabriel from '../../assets/logo-gabriel.png';
import gitHub from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

export function Header() {
    return ( 
        <header className={styles.header}>
            <div>
                {/* <img src= { logoGabriel } alt="Logotipo Gabriel"/> */}
            </div>

            <div>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Skills</a>
                <a href="#">Portfólio</a>
                <a href="#">Carreira</a>
            </div>
            <div className={styles.redesSociais}>
                <a href="https://github.com/gwillms" target="_blank" rel="noopener noreferrer"><img src= { gitHub } alt="Github"/></a>
                <a href="https://www.linkedin.com/in/gwillms/" target="_blank" rel="noopener noreferrer"><img src= { linkedin } alt="Github"/></a>
            </div>
            <div className={styles.baixarCV}>
                <button><span>Baixar CV</span></button>
            </div>
                

        </header>
    )
}