 import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
public clicked = false;


public quizId: any;

  constructor(private questionService: QuestionService, private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.quizId = this.route.snapshot.paramMap.get('id');

    this.getQuestionsByQuizId(this.quizId);
  }

  // public getQuestions(): void {
  //   this.questionService.getQuestions().subscribe(
  //     (response: Question[]) => {
  //       this.questionsList = response;
  //       console.log(this.questionsList);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

    public getQuestionsByQuizId(quizId : any): void {
    this.questionService.getQuestionsByQuizId(quizId).subscribe(
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
      if(answer.correct){
      this.score+= 20;
      
      } else {

      }

    }

    
  

}

