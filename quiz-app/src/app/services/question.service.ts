import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../entities/question';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient){}

  // public getQuestions(): Observable<Question[]> {
  //   return this.http.get<Question[]>(`${this.apiUrl}/question/all`);
  // }

  public getQuestionsByQuizId(quizId : any): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/quiz/${quizId}/questions`);
  }

  // public addEmployee(question: Question): Observable<Question> {
  //   return this.http.post<Question>(`${this.apiServerUrl}/employee/add`, employee);
  // }

  // public deleteEmployee(employeeId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  // }
}
