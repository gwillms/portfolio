import styles from './Header.module.css';
import gitHub from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import Curriculo from '../../assets/curriculo.pdf'


export function Header() {
    return ( 
        <header className={ styles.header }>

            <div className={styles.menuNav}>
              <a href='#about' >Home</a>
              <a href='#skills' >Habilidades</a>
              <a href='#projects' >Projetos</a>
              <a href='#courses' >Cursos</a>
            </div>
            

            <div className= {styles.redesSociais}>
              <a 
              href="https://github.com/gwillms" 
              target="_blank" 
              rel="noopener noreferrer"
              >
                <img src= { gitHub } alt="Github"/>
              </a>

              <a
              href="https://www.linkedin.com/in/gwillms/" 
              target="_blank" 
              rel="noopener noreferrer">
                <img src= { linkedin } alt="Linkedin"/>
              </a>

              <div>
                <a href={ Curriculo }
                download
                target='_blank'
                >
                <button
                className={ styles.buttonCV }>
                Baixar CV
                </button>
                </a>
              </div>
            </div>
              
            

        </header>
    )
}