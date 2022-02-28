import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "quizlist", component: QuizListComponent},
  {path:"quiz", component:QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
