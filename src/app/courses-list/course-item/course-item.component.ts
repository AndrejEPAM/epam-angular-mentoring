import { Component, OnInit, Input, Output } from '@angular/core';
import { Course } from '../course.model';
import { EventEmitter } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() public course!: Course;
  @Output() deleteClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(courseId: number) {
    this.deleteClick.emit(courseId);
  }
}
