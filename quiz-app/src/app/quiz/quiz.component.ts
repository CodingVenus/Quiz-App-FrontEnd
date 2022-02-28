import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Question } from '../entities/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
public questionsList: Question[] = [];
public score: number = 0;
public thisQuestion: number = 0;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  
  public getQuestions(): void {
    this.questionService.getQuestions().subscribe(
      (response: Question[]) => {
        this.questionsList = response;
        console.log(this.questionsList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

    next() {
      this.thisQuestion++;
    }

    previous() {
      this.thisQuestion--;
    }

    chooseRightAnswer(thisQuestion: number, answer: any ){
      if(answer.isCorrect.true){
      this.score+= 20;
      this.thisQuestion++
      }

    }
  

}

