export interface Quizzes{
id: number;
name: string;
questionList: [
    id: number,
    question: string,
    answerList: [
        id: number,
        answer: string,
        correct: boolean
    ]
]
}