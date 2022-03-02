import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../entities/category';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public categoryList: Category[] | undefined;

  
  closeResult: string | undefined;

  constructor(private modalService: NgbModal, private categoryService : CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getCategories();
  }

  

  public onAddCategory(addForm: NgForm): void {
    this.categoryService.createCategory(addForm.value).subscribe(
    (response: Category) => {
    
      this.ngOnInit();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

  //BOOTSTRAP MODAL METHODS
  open(content: any) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  
//category methods

public getCategories(): void {
  this.categoryService.getCategories().subscribe(
 
      (data) => {
      this.categoryList = data;

    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
}