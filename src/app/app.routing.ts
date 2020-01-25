import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesListComponent },
  { path: 'courses/new', component: AddCourseComponent },
  { path: 'courses/:id', component: AddCourseComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
