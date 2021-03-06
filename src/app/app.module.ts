import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './courses-list/course-item/course-item.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule} from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseHighlightDirective } from './courses-list/course-highlight.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { AddCourseComponent } from './add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FakeLogoComponent,
    BreadcrumbComponent,
    CoursesListComponent,
    CourseItemComponent,
    LoginComponent,
    CourseHighlightDirective,
    OrderByPipe,
    AddCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
