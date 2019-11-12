import { Directive, Input, HostBinding } from '@angular/core';
import { Course } from './course.model';

@Directive({
  selector: '[appCourseHighlight]',
})
export class CourseHighlightDirective {
  @Input('appCourseHighlight') course!: Course;

  constructor() { }

  @HostBinding('class.fresh') get isFresh() {
    const currentDate = new Date();
    const creationDate = new Date(this.course.creationDate);
    const pastDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 14);
    return creationDate <= currentDate
      && creationDate > pastDate;
  }

  @HostBinding('class.upcoming') get isUpcoming() {
    const currentDate = new Date();
    const creationDate = new Date(this.course.creationDate);
    return creationDate > currentDate;
  }

}
