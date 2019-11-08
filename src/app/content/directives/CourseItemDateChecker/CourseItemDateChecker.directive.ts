import { ElementRef, Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appCourseItemDateChecker]'
})
export class CourseItemDateCheckerDirective {
  colorNewCourse = 'green';
  colorUpcomingCourse = 'blue';
  today = new Date();
  @Input() courseCreationDate;

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.borderColor = 'red';
  }

}
