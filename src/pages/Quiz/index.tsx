import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Quiz.module.scss';

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import axios from 'axios';

interface PropsQuiz {}

type TQuestion = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

interface StateQuiz {
    questions: TQuestion[];
}

export class Quiz extends React.Component<PropsQuiz, StateQuiz> {
    constructor(props: PropsQuiz) {
        super(props);
        this.state = {
            questions: [],
        };
    }

    componentDidMount(): void {
        axios
            .get('https://opentdb.com/api.php?amount=5')
            .then((res) => this.setState({questions: res.data.results}));
    }

    render(): React.ReactNode {
        return (
            <div className={styles.quiz}>
                <header>
                    <Link to="/">
                        <span className={styles.arrow}>{'<-'}</span>
                    </Link>
                    <h2>good luck.</h2>
                    <time>10:00</time>
                </header>

                <main>
                    {this.state.questions.map(obj => <Question key={obj.question} {...obj}/>)}
                </main>

                <Button placeholder="Submit" link="/" />
            </div>
        );
    }
}
