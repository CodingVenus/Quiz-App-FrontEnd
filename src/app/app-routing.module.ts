import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  // {path: '', redirectTo: "home", pathMatch: "full" },
  {
    path: "", component: HomeComponent,

    children: [
      { path: "category/:id/quizzes", component: QuizListComponent },
      {
        path: "quiz/:id/questions", component: QuizComponent,
   

      }
    ]
  }
  // {path: "category", component: CategoryComponent},


  // {path: "category/:id/quizzes", component: QuizListComponent},
  // {path: "quiz/:id/questions", component: QuizComponent,
  // children: [

  // {path: "results", component: ResultsComponent}

  // ]

  // {path:"quiz", component:QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
