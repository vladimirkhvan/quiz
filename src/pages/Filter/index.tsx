import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import {
    setCategory,
    setDifficulty,
    setType,
    setNumberOfQuestions,
} from '../../redux/Filter/slice';

import styles from './Filter.module.scss';
import { Button } from '../../components/Button';
import { TCategory, TDifficulty, TType } from '../../redux/Filter/types';
import { Link } from 'react-router-dom';

export const categoryDictionary = {
    Politics: 0,
    'General Knowledge': 9,
    'Entertainment: Books': 10,
    'Entertainment: Film': 11,
    'Entertainment: Music': 12,
    'Entertainment: Musicals & Theatres': 13,
    'Entertainment: Television': 14,
    'Entertainment: Video Games': 15,
    'Entertainment: Board Games': 16,
    'Science & Nature': 17,
    'Science: Computers': 18,
    'Science: Mathematics': 19,
    Mythology: 20,
    Sports: 21,
    Geography: 22,
    History: 23,
    Art: 25,
    Celebrities: 26,
    Animals: 27,
    Vehicles: 28,
    'Entertainment: Comics': 29,
    'Science: Gadgets': 30,
    'Entertainment: Japanese Anime & Manga': 31,
    'Entertainment: Cartoon & Animations': 32,
};

export const Filter: React.FC = () => {
    const difficultyDictionary = ['random', 'easy', 'medium', 'hard'];
    const typeDictionary = ['random', 'boolean', 'multiple'];

    const { difficulty, category, type, numberOfQuestions } = useAppSelector(
        (state) => state.filter,
    );
    const dispatch = useAppDispatch();

    return (
        <div className={styles.filter}>
            <header>
                <Link to="/" className={styles.arrowContainer}>
                    <span className={styles.arrow}>{'<-'}</span>
                </Link>
                <h2>choose quiz.</h2>
                <Link to="/quiz" className={styles.smile}>
                    {':>'}
                </Link>
            </header>

            <label>
                number of questions:
                <input type="text" />
            </label>

            <ul className={styles.category}>
                {Object.keys(categoryDictionary).map((element: TCategory) => (
                    <li
                        className={
                            `${styles.boxItem} ` + (category === element ? `${styles.active}` : '')
                        }
                        onClick={()=>dispatch(setCategory(element))}>
                        <span>{element}</span>
                    </li>
                ))}
            </ul>

            {/* <label>
                category
                <select name="category" value={Object.keys(categoryDictionary)[0]}>
                    {Object.keys(categoryDictionary).map((element) => (
                        <option value={element}>{element}</option>
                    ))}
                </select>
            </label> */}

            <label>
                difficulty:
                <ul className={`${styles.difficulty} ${styles.pillSelect}`}>
                    {difficultyDictionary.map((element: TDifficulty) => (
                        <li
                            className={
                                `${styles.pillItem} ` +
                                (difficulty === element ? `${styles.active}` : '')
                            }
                            onClick={() => dispatch(setDifficulty(element))}>
                            {element}
                        </li>
                    ))}
                </ul>
            </label>

            <label>
                question type:
                <ul className={`${styles.type} ${styles.pillSelect}`}>
                    {typeDictionary.map((element: TType) => (
                        <li
                            className={
                                `${styles.pillItem} ` + (type === element ? `${styles.active}` : '')
                            }
                            onClick={() => dispatch(setType(element))}>
                            {element}
                        </li>
                    ))}
                </ul>
            </label>

            <Button link="/quiz" placeholder="select." />
        </div>
    );
};

export default Filter;
