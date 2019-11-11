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
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DurationPipe } from './content/pipes/duration/duration.pipe';
import { CourseItemDateCheckerDirective } from './content/directives/CourseItemDateChecker/CourseItemDateChecker.directive';
import { FilterPipe } from './content/pipes/filter/filter.pipe';
import { OrderByPipe } from './content/pipes/orderBy/orderBy.pipe';

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
    DurationPipe,
    FilterPipe,
    CourseItemDateCheckerDirective,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
