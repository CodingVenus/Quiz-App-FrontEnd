import { Question } from "./question";

export interface Quiz {
    id: number;
    name: string;
    questionList: Question[]

}