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

  public getCourse(id: number): Course | undefined {
    return this.courses[id];
  }

  public createCourse(course: Course): number {
    course.id = this.courses.length;
    this.courses.push(course);
    return course.id;
  }

  public updateCourse(course: Partial<Course>): Course {
    if (course.id === undefined || !this.courses[course.id]) {
      throw new Error('updateCourse error, course needs id');
    }
    if (this.courses[course.id]) {
      this.courses[course.id] = { ...this.courses[course.id], ...course };
    }
    return this.courses[course.id];
  }

  public removeCourse(id: number) {
    if (this.courses[id]) {
      delete this.courses[id];
    }
  }
}
