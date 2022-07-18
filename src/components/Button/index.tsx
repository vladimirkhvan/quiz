import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

interface PropsButton {
    placeholder: string;
    link: string;
}

export class Button extends React.Component<PropsButton> {
    placeholder: string;
    link: string;

    constructor(props: PropsButton) {
        super(props);
        this.placeholder = this.props.placeholder;
        this.link = this.props.link
    }

    render(): React.ReactNode  {
        return <Link to={this.link} className={styles.button}>{this.placeholder}</Link>;
    }
}
