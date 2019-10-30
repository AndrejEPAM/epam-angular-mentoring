import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { Courses } from './courses.helper';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = Courses;

  constructor() { }

  public getCourses(): Course[] {
    return this.courses;
  }
}
