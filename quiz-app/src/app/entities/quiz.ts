import { Question } from "./question";

export interface Quiz{
id: number;
name: string;
questionList: Question[]
 
//     id: number,
//     question: string,
//     answerList: [
//         id: number,
//         answer: string,
//         correct: boolean
//     ]
}