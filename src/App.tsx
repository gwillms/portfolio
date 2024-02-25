import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Courses } from './components/Courses/Courses';
import { Footer } from './components/Footer/Footer'


import styles from './App.module.css';

import './global.css';


export function App() {

    return(
      <div>
          <Header />
            <div>
              <section className={styles.wrapper} id='about'>
                <About />
              </section>
              <section className={styles.wrapper} id='skills'>
                <Skills />
              </section>
              <section className={styles.wrapper} id='projects'>
                <Projects />
              </section>
              <section className={styles.wrapper} id='courses'>
                <Courses />
              </section>
            <Footer />
            </div>
      </div>
    ) 
  }
