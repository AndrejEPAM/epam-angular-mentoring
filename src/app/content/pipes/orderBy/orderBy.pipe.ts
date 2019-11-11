import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/courses-list/course.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Course[], args?: any): any {
    const now: Date = new Date();

    if (!courses || courses === undefined || courses.length === 0) { return null; }

    courses.sort((a: Course, b: Course) => {
      if (a.creationDate < b.creationDate) {
        return -1;
      } else if (a.creationDate > b.creationDate) {
        return 1;
      } else {
        return 0;
      }
    });
    return courses;
  }
}
