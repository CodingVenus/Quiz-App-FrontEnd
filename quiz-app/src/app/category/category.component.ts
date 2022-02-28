import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../entities/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categoryList: Category[] | undefined;
  public category : any;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();



  }

  onSelect(category : any){
    this.router.navigate(['/category'], category.id) 
  }




  public getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response: Category[]) => {
        this.categoryList = response;
        console.log(this.categoryList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
