import React from 'react';
import styles from './Intro.module.scss';

import { Button } from '../../components/Button';

export class Intro extends React.Component {
    render(): React.ReactNode  {
        return (
            <div className={styles.intro}>
                <h1 className={styles.title}>Quiz. What?</h1>
                <p className={styles.description}>Quiz. A quiz is a bla-bla-bla.
                <br/> good luck. no boring info</p>
                <Button placeholder={"start."} link='quiz'/>
            </div>
        );
    }
}
