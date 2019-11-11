import { ElementRef, Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCourseItemDateChecker]'
})
export class CourseItemDateCheckerDirective implements OnInit {
  // elementRef;
  // today = new Date();
  // @Input() courseCreationDate;
  // dateDifference;

  // constructor(elementRef: ElementRef) {
  //   this.elementRef = elementRef.nativeElement.style.borderColor;
  //   this.dateDifference = this.calculateDifference(this.courseCreationDate, this.today);
  // }

  ngOnInit() {
    //   console.log(this.courseCreationDate);
    //   if (this.courseCreationDate < this.today && this.dateDifference <= 14) {
    //     this.elementRef = 'green';
    //   } else if (this.courseCreationDate > this.today) {
    //     this.elementRef = 'blue';
    //   } else {
    //     this.elementRef = 'transparent';
    //   }
  }

  // calculateDifference(creationDate, today): number {
  //   console.log('CreationDate: ', creationDate);
  //   console.log('Today: ', today);
  //   const differenceInTime = today.getTime() - creationDate.getTime();
  //   const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  //   return differenceInDays;
  // }
}
