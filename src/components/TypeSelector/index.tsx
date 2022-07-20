import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { setType } from '../../redux/Filter/slice';

import { TType } from '../../redux/Filter/types';

import styles from './TypeSelector.module.scss';

export const TypeSelector:React.FC = () => {
    const typeDictionary = ['boolean', 'multiple'];

    const type = useAppSelector((state) => state.filter.type);
    const dispatch = useAppDispatch();
    return (
        <div className={`${styles.type}`}>
            <h2>choose type.</h2>

            <ul className={`${styles.list}`}>
                <li
                    className={
                        `${styles.item} ` + (type === typeDictionary[0] ? `${styles.active}` : '')
                    }
                    onClick={() => dispatch(setType(typeDictionary[0] as TType))}>
                    True / False
                </li>
                <li
                    className={
                        `${styles.item} ` + (type === typeDictionary[1] ? `${styles.active}` : '')
                    }
                    onClick={() => dispatch(setType(typeDictionary[1] as TType))}>
                    Multiple choice
                </li>
            </ul>
        </div>
    );
};
