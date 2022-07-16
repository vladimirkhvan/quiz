import React from 'react';
import styles from './Button.module.scss';

interface PropsButton {
    placeholder: string;
}

export class Button extends React.Component<PropsButton> {
    placeholder: string;

    constructor(props:PropsButton){
        super(props);
        this.placeholder = this.props.placeholder;
    }

    render() {
        return <button className={styles.button}>{this.placeholder}</button>;
    }
}
