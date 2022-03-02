 import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Question } from '../entities/question';
import { QuestionService } from '../services/question.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
public questionsList: Question[] = [];
public score: number = 0;
public thisQuestion: number = 0;
public clicked: boolean = false;
public lastQuestion: boolean = false;
public answersCorrect: number = 0;
public answersIncorrect: number = 0;

public quizId: any;

  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router : Router ) { }

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
      if (this.lastQuestion===true) {
        
      } else {

      this.thisQuestion++;
      }
    }

    previous() {
      this.thisQuestion--;
    }

    chooseRightAnswer(thisQuestion: number, answer: any ){

      if( (thisQuestion) === this.questionsList.length) {
        this.lastQuestion = true;
        this.next();
      }

      if(answer.correct){
      this.score+= 20;

      //create timeout delay so people can see color pop up on screen
      setTimeout(() => {
      this.answersCorrect ++;
      this.next();
        
      }, 1000)
      
      
      } else {

      this.answersIncorrect++;
      setTimeout(() => {
        this.next();
          
        }, 1000)
      }
    }

    reset() {
     
      this.score = 0;
      this.answersCorrect = 0;
      this.answersIncorrect = 0;
      this.thisQuestion = 0;
      
    }


  

}

