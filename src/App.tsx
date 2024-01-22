import { Header } from './components/Header';
// import { About } from './components/About';
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
  
          <div className={styles.wrapper}>
            <main>
                <p>Hello World</p>
            </main>
          </div>
      </div>
    ) 
  }