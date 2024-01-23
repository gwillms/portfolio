import { Header } from './components/Header';
import { About } from './components/About';
// import { Skills } from './components/Skills';
// import { Projects } from './components/Projects';
// import { Experience } from './components/Experience';
// import { Contact } from './components/Contact';


import styles from './App.module.css';

import './global.css';


export function App() {
    return(
      <div>
          <Header />
          <About />
          <div className={styles.wrapper}>
          </div>
      </div>
    ) 
  }