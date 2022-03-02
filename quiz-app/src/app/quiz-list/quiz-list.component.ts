import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../entities/category';
import { Quiz } from '../entities/quiz';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  public category : Category | undefined;

  public categoryId: any;

  public quizList: Quiz[] = [];


  constructor(private quizService: QuizService, private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.getQuizzesByCategoryId(this.categoryId);
  }


  public getQuizzes(): void {
    this.quizService.getQuizzes().subscribe(
      (response: Quiz[]) => {
        this.quizList = response;
        console.log(this.quizList);
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public getQuizzesByCategoryId(categoryId: any): void {
    this.quizService.getQuizzesByCategoryId(categoryId)

      .subscribe(
        (response: Quiz[]) => {
          this.quizList = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }
}
