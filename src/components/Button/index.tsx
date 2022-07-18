import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

interface PropsButton {
    placeholder: string;
    link: string;
}

export const Button: React.FC<PropsButton> = ({ placeholder, link }) => {
    return (
        <Link to={link} className={styles.button}>
            {placeholder}
        </Link>
    );
};
