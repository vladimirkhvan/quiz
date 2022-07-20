import React from 'react';
import { Link, Navigate } from 'react-router-dom';

import styles from './Quiz.module.scss';

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { fetchQuestions } from '../../redux/Questions/asyncActions';
import { Status } from '../../redux/Questions/types';
import { completeQuiz, clearAnswers } from '../../redux/Answers/slice';

import { categoryDictionary } from '../../components/CategorySelector';

import Skeleton from '../../components/Skeleton';
import Timer from '../../components/Timer';
import { resetQuestions } from '../../redux/Questions/slice';

export const Quiz: React.FC = () => {
    const dispatch = useAppDispatch();
    const { data: questions, status } = useAppSelector((state) => state.questions);
    const { completingStatus, answers } = useAppSelector((state) => state.answers);
    const { category, difficulty, type, numberOfQuestions } = useAppSelector(
        (state) => state.filter,
    );

    const [score, setScore] = React.useState(0);

    const resultSign = score >= questions.length * 0.8 ? ':S' : ':F';

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
        (async () => {
            await dispatch(
                fetchQuestions({
                    category: categoryDictionary[category],
                    difficulty,
                    type,
                    numberOfQuestions,
                }),
            );
        })();

        return () => {
            dispatch(clearAnswers());
            dispatch(resetQuestions());
        };
    }, [dispatch, category, difficulty, type, numberOfQuestions]);

    return (
        <div className={styles.quiz}>
            <header>
                <Link to="/filter">
                    <span className={styles.arrow}>{'<-'}</span>
                </Link>
                <h2>{completingStatus === 'completed' ? resultSign : 'good luck.'}</h2>
                {completingStatus === 'processing' ? (
                    <Timer time={60 * 10} />
                ) : (
                    <time>0:00:00</time>
                )}
            </header>

            {completingStatus === 'completed' && (
                <h1 className={styles.score}>
                    {score} / {questions.length}
                </h1>
            )}

            <main className={styles.main}>
                {status === Status.PENDING
                    ? [...Array(4)].map((elem, index) => <Skeleton key={index} />)
                    : questions.map((obj) => <Question key={obj.question} {...obj} />)}
                {questions.length === 0 && status === Status.FULFILLED && (
                    <Navigate to="/quizNotFound" replace={true} />
                )}
            </main>

            {completingStatus === 'completed' ? (
                <Button placeholder="go to main." link="/" onClickHandler={submitAnswers} />
            ) : (
                <Button placeholder="Submit" link="" onClickHandler={submitAnswers} />
            )}
        </div>
    );
};
