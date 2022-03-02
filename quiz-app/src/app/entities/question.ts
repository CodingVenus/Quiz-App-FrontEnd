import { Answer } from "./answer";

export interface Question{
    id: number;
    question: string;
    quizName: string;
    categoryName: string;
    answerList: Answer[]
}

