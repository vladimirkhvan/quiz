import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';

import { Intro } from './pages/Intro';
import { NotFound } from './pages/NotFound';
import { Quiz } from './pages/Quiz';

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <Routes>
                        <Route path="" element={<Intro />} />
                        <Route path="quiz" element={<Quiz />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;
