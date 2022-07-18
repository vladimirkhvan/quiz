import React from 'react';

import styles from './Question.module.scss';

interface PropsQuestion {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export class Question extends React.Component<PropsQuestion> {
    answers: JSX.Element[];

    constructor(props: PropsQuestion) {
        super(props);
        this.answers = [...this.props.incorrect_answers, this.props.correct_answer].map(
            (answer) => <li key={answer} className={`${styles.answer}`}>{this.htmlToText(answer)}</li>,
        );
    }

    htmlToText = (html:string) => {
        let tempDivElement = document.createElement("div");
        tempDivElement.innerHTML = html;

        return tempDivElement.textContent || tempDivElement.innerText || "";
    }

    render(): React.ReactNode {
        return (
            <div className={styles.questionBlock}>
                <h3 className={styles.question}>{this.htmlToText(this.props.question)}</h3>

                <ul>{this.answers}</ul>
            </div>
        );
    }
}
