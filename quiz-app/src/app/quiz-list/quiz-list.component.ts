import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  public quizList: Quiz[] = [];
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }

   
  public getQuizzes(): void {
    this.quizService.getQuizzes().subscribe(
      (response: Quiz[]) => {
        this.quizList = response;
        console.log(this.quizList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
