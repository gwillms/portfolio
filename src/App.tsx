import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Courses } from './components/Courses/Courses';
import { Footer } from './components/Footer/Footer'
// import { Router } from './Router'

import styles from './App.module.css';

import './global.css';


export function App() {
    return(
      <div>
        {/* <Router /> */}
          <Header />
            <div>
              <section className={styles.wrapper} id='about'>
                <About />
              </section>
              <section className={styles.wrapper}>
                <Skills />
              </section>
              <section className={styles.wrapper}>
                <Projects />
              </section>
              <section className={styles.wrapper}>
                <Experience />
              </section>
              <section className={styles.wrapper}>
                <Courses />
              </section>
            <Footer />
            </div>
      </div>
    ) 
  }
