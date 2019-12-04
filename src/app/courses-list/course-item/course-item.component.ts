import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../course.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
  @Input() public course!: Course;
  @Output() deleteClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(courseId: number) {
    this.deleteClick.emit(courseId);
  }
}
