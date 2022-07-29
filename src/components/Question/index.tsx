import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { setAnswer } from '../../redux/Answers/slice';

import styles from './Question.module.scss';

interface PropsQuestion {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export const Question: React.FC<PropsQuestion> = ({
    category,
    correct_answer,
    difficulty,
    incorrect_answers,
    question,
    type,
}) => {
    const dispatch = useAppDispatch();

    const completingStatus = useAppSelector((state) => state.answers.completingStatus);

    const htmlToText = (html: string) => {
        let tempDivElement = document.createElement('div');
        tempDivElement.innerHTML = html;

        return tempDivElement.textContent || tempDivElement.innerText || '';
    };

    const [chosenAnswer, setChosenAnswer] = React.useState<string>('');

    function chooseAnswer(answer: string) {
        setChosenAnswer(answer);
        dispatch(setAnswer({ answer, question }));
    }

    function shuffle(array: string[]) {
        let currentIndex = array.length;
        let randomIndex: number;
      
        while (currentIndex != 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    const answers = shuffle([...incorrect_answers, correct_answer]).map((answer) => {
        let style: string;

        if (completingStatus === 'completed') {
            style = `${styles.answer} ${styles.noHover} `;

            if (chosenAnswer === answer && answer !== correct_answer) {
                style += ` ${styles.incorrect} `;
            }

            if (answer === correct_answer) {
                style += ` ${styles.correct} `;
            }
        }

        if (completingStatus === 'processing') {
            style = `${styles.answer} ` + (chosenAnswer === answer ? `${styles.active}` : '');
        }

        return (
            <li
                key={answer}
                className={style}
                onClick={completingStatus === 'completed' ? () => {} : () => chooseAnswer(answer)}>
                {htmlToText(answer)}
            </li>
        );
    });

    return (
        <div className={styles.questionBlock}>
            <h3 className={styles.question}>{htmlToText(question)}</h3>

            <ul>{answers}</ul>
        </div>
    );
};
