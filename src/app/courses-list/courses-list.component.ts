import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { Courses } from './courses.helper';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];

  constructor() { }

  ngOnInit() {
    this.courses = Courses;
    console.log(this.courses);
  }

}
