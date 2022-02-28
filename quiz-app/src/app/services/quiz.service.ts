import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Quiz} from '../entities/quiz'




@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  private apiUrl= environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.apiUrl}/quiz/all`);
  }

  getQuizzesByCategoryId(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.apiUrl}/category/{categoryId}/quizzes`);
  }

}
