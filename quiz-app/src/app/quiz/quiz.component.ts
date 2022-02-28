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
}
