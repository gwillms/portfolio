import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
// import { Experience } from './components/Experience';
// import { Contact } from './components/Contact';

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

          </div>
      </div>
    ) 
  }