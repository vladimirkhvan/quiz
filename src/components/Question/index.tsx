import React from 'react';

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
            (answer) => <li key={answer}>{this.htmlToText(answer)}</li>,
        );
    }

    htmlToText = (html) => {
        let tempDivElement = document.createElement("div");
        tempDivElement.innerHTML = html;

        return tempDivElement.textContent || tempDivElement.innerText || "";
    }

    render(): React.ReactNode {
        return (
            <div>
                <h3>{this.htmlToText(this.props.question)}</h3>

                <ul>{this.answers}</ul>
            </div>
        );
    }
}
