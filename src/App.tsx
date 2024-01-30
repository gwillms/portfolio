import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer'

import styles from './App.module.css';

import './global.css';



export function App() {
    return(
      <div>
          <Header />
          <div>
            <div className={styles.wrapper}>
              <About />
            </div>
            <div className={styles.wrapper}>
              <Skills />
            </div>
            <div className={styles.wrapper}>
              <Projects />
            </div>
            <div className={styles.wrapper}>
              <Experience />
            </div>
            <div className={styles.wrapper}>
              <Contact />
            </div>
          <Footer />
          </div>
      </div>
    ) 
  }