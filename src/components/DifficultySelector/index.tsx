import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { setDifficulty } from '../../redux/Filter/slice';

import { TDifficulty } from '../../redux/Filter/types';

import styles from './DifficultySelector.module.scss';

export const DifficultySelector = () => {
    const difficultyDictionary = ['easy', 'medium', 'hard'];
    const difficulty = useAppSelector((state) => state.filter.difficulty);
    const dispatch = useAppDispatch();
    return (
        <div className={`${styles.difficulty} ${styles.selector}`}>
            <h2>choose difficulty.</h2>

            <ul className={`${styles.list}`}>
                {difficultyDictionary.map((element: TDifficulty, index) => (
                    <li
                        key={element}
                        className={
                            `${styles.item} ` + (difficulty === element ? `${styles.active}` : '')
                        }
                        onClick={() => dispatch(setDifficulty(element))}>
                        <div className={styles.circle}></div>
                        <span className={styles.number}>{index + 1}</span>
                        {element}
                    </li>
                ))}
            </ul>
        </div>
    );
};
