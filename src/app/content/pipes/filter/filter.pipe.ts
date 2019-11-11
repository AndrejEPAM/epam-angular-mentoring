import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/courses-list/course.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], term: string): any[] {
    // check if search term is undefined
    if (!term) { return courses; }

    // return updated courses array
    return courses.filter(course => {
      return course.title.toLowerCase().includes(term.toLowerCase());
    });
  }
}
