import React from 'react';
import styles from './Intro.module.scss';

import { Button } from '../../components/Button';

export const Intro:React.FC = () => {
    return (
        <div className={styles.intro}>
            <h1 className={styles.title}>Quiz. What?</h1>
            <p className={styles.description}>
                Quiz. A quiz is a bla-bla-bla.
                <br /> good luck. no boring info
            </p>
            <Button placeholder={'start.'} link="filter" />
        </div>
    );
};
