import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CoursesService } from './courses.service';
import * as moment from 'moment';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  logOnDelete(id) {
    console.log(id);
  }

}
