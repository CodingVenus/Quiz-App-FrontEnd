import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';
import { Category } from './entities/category';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quiz-app';


  constructor() { }

  ngOnInit() {
  }



}
