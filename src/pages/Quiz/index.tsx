import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Quiz.module.scss';

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchQuestions } from '../../redux/Questions/asyncActions';

export const Quiz: React.FC = () => {
    const dispatch = useAppDispatch();
    const questions = useAppSelector((state) => state.questions.data);

    React.useEffect(() => {
        dispatch(fetchQuestions());
    }, [dispatch]);

    return (
        <div className={styles.quiz}>
            <header>
                <Link to="/">
                    <span className={styles.arrow}>{'<-'}</span>
                </Link>
                <h2>good luck.</h2>
                <time>10:00</time>
            </header>

            <main>
                {questions.map((obj) => (
                    <Question key={obj.question} {...obj} />
                ))}
            </main>

            <Button placeholder="Submit" link="/" />
        </div>
    );
};
