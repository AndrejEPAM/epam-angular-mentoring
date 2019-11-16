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
    const index = this.courses.findIndex((c) => c && c.id === course.id);
    if (index < 0) {
      throw new Error('updateCourse error, course needs id');
    }
    this.courses[index] = { ...this.courses[index], ...course };
    return this.courses[index];
  }

  public removeCourse(id: number) {
    const index = this.courses.findIndex((course) => course && course.id === id);
    if (index < 0) {
      throw new Error(`cannot delete non-existing id ${id}`);
    }
    delete this.courses[index];
  }
}
