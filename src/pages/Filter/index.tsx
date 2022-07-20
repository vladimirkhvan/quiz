import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { CategorySelector } from '../../components/CategorySelector';
import { DifficultySelector } from '../../components/DifficultySelector';
import { TypeSelector } from '../../components/TypeSelector';
import { QuestionsNumberSelector } from '../../components/QuestionsNumberSelector';

import styles from './Filter.module.scss';

export const Filter: React.FC = () => {
    return (
        <div className={styles.filter}>
            <header>
                <Link to="/" className={styles.arrowContainer}>
                    <span className={styles.arrow}>{'<-'}</span>
                </Link>
                <h2>choose quiz.</h2>
                <Link to="/quiz" className={styles.smile}>
                    {':>'}
                </Link>
            </header>

            <main className={styles.container}>
                <QuestionsNumberSelector />

                <CategorySelector />
                <DifficultySelector />

                <TypeSelector />
                
                <div className={styles.button}>
                    <Button link="/quiz" placeholder="select." />
                </div>
            </main>
        </div>
    );
};

export default Filter;
