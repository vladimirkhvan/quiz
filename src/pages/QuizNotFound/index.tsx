import React from 'react';

import { Button } from '../../components/Button';
import { InfoBlock } from '../../components/InfoBlock';

import styles from './QuizNotFound.module.scss';

export const QuizNotFound: React.FC = () => {
    return (
        <div className={styles.quizNotFound}>
            <InfoBlock
                title="We don't have enough questions :G"
                description="Try to require less quetions or choose different filtering settings :>"
            />
            <Button link="/filter" placeholder="back." />
        </div>
    );
};
