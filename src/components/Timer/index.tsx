import React from 'react';
import { useAppDispatch } from '../../redux/hooks';

import styles from './Timer.module.scss';

import { completeQuiz } from '../../redux/Answers/slice';

interface ITimer {
    time: number;
}

export const Timer: React.FC<ITimer> = ({ time }) => {
    const dispatch = useAppDispatch();

    const [timer, setTimer] = React.useState(time);

    const minutes: number = Math.floor(timer / 60);
    const minutesDisplay: string = minutes < 10 ? '0' + minutes : '' + minutes;

    const seconds: number = timer % 60;
    const secondsDisplay: string = seconds < 10 ? '0' + seconds : '' + seconds;

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(completeQuiz());
            clearInterval(timerInterval);
        }, time * 1000 + 1000);
        const timerInterval = setInterval(() => setTimer((prevTimer) => prevTimer - 1), 1000);

        return () => {
            clearTimeout(timeout);
            clearInterval(timerInterval);
        };
    }, []);

    return (
        <time className={styles.timer}>
            {Math.floor(timer / 3600)}:{minutesDisplay}:{secondsDisplay}
        </time>
    );
};

export default Timer;
