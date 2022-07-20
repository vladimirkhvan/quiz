import React from 'react';
import { useAppDispatch } from '../../redux/hooks';

import { setNumberOfQuestions } from '../../redux/Filter/slice';

import styles from './QuestionsNumberSelector.module.scss';

export const QuestionsNumberSelector:React.FC = () => {
    const dispatch = useAppDispatch();
    const [inputState, setInputState] = React.useState('');

    function setInputValue(inputValue: string) {
        const regexExp = /^[0-9]\d*$/;

        if (inputValue.length === 0) {
            dispatch(setNumberOfQuestions(5));
            setInputState('');
        }

        if (inputValue.length === 3) {
            return;
        }

        if (regexExp.test(inputValue[inputValue.length - 1])) {

            if(inputValue[0] === '0'){
                return;
            }

            if (+inputValue >= 50) {
                setInputState('50');
                dispatch(setNumberOfQuestions(50));
            } else {
                setInputState(inputValue);
                dispatch(setNumberOfQuestions(+inputValue));
            }
        }
    }

    return (
        <div className={styles.selector}>
            <label>
                number of questions:
                <input
                    type="text"
                    value={inputState}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
        </div>
    );
};
