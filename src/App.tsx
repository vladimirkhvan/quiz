import React from 'react';
import styles from './App.module.scss'
import { Intro } from './pages/Intro';

function App() {
    return (
        <div className={styles.container}>
            <Intro />
        </div>
    );
}

export default App;
