import React, { useState } from 'react';
import Quiz from '../Quiz/Quiz';

const Questions = () => {

    const [question, setQuestion] = useState(0);

    interface quiz{
        question: string;
        options: [string, string, string, string];
        ans: string
    }

    const questionsCollection: quiz[] = [
        {
            question : "React is mainly used for building ___.",
            options: ["Database",  "Connectivity", "User interface", " Design Platform"],
            ans: "User interface"
        },
        {
            question : "The lifecycle methods are mainly used for ___.",
            options: ["keeping track of event history",  "enhancing components", " none of the above", "freeing up resources"],
            ans: "freeing up resources"
        },
        {
            question : "Which is the right way of accessing a function fetch() from an h1 element in JSX?",
             options: ["<h1>{fetch()}</h1>",  "<h1>${fetch()}</h1>", "<h1>{fetch}</h1>", "<h1>${fetch}</h1>"],
             ans: "<h1>{fetch}</h1>"
        },
        {
            question : "The lifecycle methods are mainly used for ___.",
            options: ["keeping track of event history", "freeing up resources",  "enhancing components", " none of the above"],
            ans: "freeing up resources"
        },
        {
            question : "React is mainly used for building ___.",
            options: ["Database",  "Connectivity", "User interface", " Design Platform"],
            ans: "User interface"
        },
        {
            question : "Which is the right way of accessing a function fetch() from an h1 element in JSX?",
            options: ["<h1>{fetch}</h1>", "<h1>{fetch()}</h1>",  "<h1>${fetch()}</h1>", "<h1>${fetch}</h1>"],
            ans: "<h1>{fetch}</h1>"
        },
    ]

    const handleNextBtn = () => {
        question < 5 ? setQuestion(question + 1) : setQuestion(0)
    }

    return (
        <div>
            <Quiz handleNextBtn={handleNextBtn} questionsCollection={questionsCollection[question]}></Quiz>
        </div>
    );
};

export default Questions;