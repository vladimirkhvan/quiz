import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Quiz.module.scss';

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { fetchQuestions } from '../../redux/Questions/asyncActions';
import { Status } from '../../redux/Questions/types';
import { completeQuiz, clearAnswers } from '../../redux/Answers/slice';

import Skeleton from '../../components/Skeleton';

export const Quiz: React.FC = () => {
    const dispatch = useAppDispatch();
    const { data: questions, status } = useAppSelector((state) => state.questions);
    const { completingStatus, answers } = useAppSelector((state) => state.answers);

    const [score, setScore] = React.useState(0);

    const resultSign = score >= questions.length*0.8 ? ':S' : ':F';

    function submitAnswers() {
        let score: number = 0;
        for (let i = 0; i < questions.length; i++) {
            if (answers[questions[i].question] === questions[i].correct_answer) {
                score++;
            }
        }
        dispatch(completeQuiz());
        setScore(score);
    }

    React.useEffect(() => {
        dispatch(fetchQuestions());

        return () => {
            dispatch(clearAnswers());
        };
    }, [dispatch]);

    return (
        <div className={styles.quiz}>
            <header>
                <Link to="/">
                    <span className={styles.arrow}>{'<-'}</span>
                </Link>
                <h2>{completingStatus === 'completed' ? resultSign : 'good luck.'}</h2>
                <time>10:00</time>
            </header>

            {completingStatus === 'completed' && <h1 className={styles.score}>{score} / {questions.length}</h1>}

            <main className={styles.main}>
                {status === Status.PENDING
                    ? [...Array(4)].map((elem, index) => <Skeleton key={index} />)
                    : questions.map((obj) => <Question key={obj.question} {...obj} />)}
            </main>

            {completingStatus === 'completed' ? (
                <Button placeholder="back" link="/" onClickHandler={submitAnswers} />
            ) : (
                <Button placeholder="Submit" link="" onClickHandler={submitAnswers} />
            )}
        </div>
    );
};
