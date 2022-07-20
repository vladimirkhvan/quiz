import React from 'react';

import styles from './InfoBlock.module.scss';

interface PropsInfoBlock {
    title: string;
    description?: string;
    img?: string;
}

export const InfoBlock: React.FC<PropsInfoBlock> = ({ title, description, img }) => {
    return (
        <div className={styles.info}>
            {img !== undefined && <img src={img} alt={title} />}
            <h1>{title}</h1>
            <p>{description !== undefined && description}</p>
        </div>
    );
};

export default InfoBlock;
