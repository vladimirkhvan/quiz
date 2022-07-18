import React from 'react';

import { Button } from '../../components/Button';
import { InfoBlock } from '../../components/InfoBlock';

import styles from './NotFound.module.scss';


export class NotFound extends React.Component {
    render(): React.ReactNode  {
        return (
            <div className={styles.notFound}>
                <InfoBlock
                    title="Page was not found :G"
                    description="Maybe you wanted to pass the quiz?"
                />
                <Button link='/' placeholder='back.'/>
            </div>
        );
    }
}
