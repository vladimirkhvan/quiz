import React from 'react';
import styles from './App.module.scss'
import { Intro } from './pages/Intro';

class App extends React.Component{
    render(){
        return (
            <div className={styles.container}>
                <Intro />
            </div>
        );
    }
}

export default App;
