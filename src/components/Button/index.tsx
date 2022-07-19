import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

interface PropsButton {
    placeholder: string;
    link: string;
    onClickHandler?: () => void;
}

export const Button: React.FC<PropsButton> = ({ placeholder, link, onClickHandler }) => {
    return (
        <Link
            to={link}
            className={styles.button}
            onClick={onClickHandler ? onClickHandler : () => {}}>
            {placeholder}
        </Link>
    );
};
