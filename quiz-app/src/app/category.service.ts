import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './Category';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl= environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/category/all`);
  }
  public createCategory(): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/category/new`);
  }

}
