import React from 'react';

import styles from './InfoBlock.module.scss';

interface PropsInfoBlock {
    title: string;
    description?: string;
    img?: string;
}

export class InfoBlock extends React.Component<PropsInfoBlock> {
    render(): React.ReactNode  {
        return (
            <div className={styles.info}>
                {this.props.img !== undefined && <img src={this.props.img} alt={this.props.title}/>}
                <h1>{this.props.title}</h1>
                <p>{this.props.description !== undefined && this.props.description}</p>
            </div>
        );
    }
}
