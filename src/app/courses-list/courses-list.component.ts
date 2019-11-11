import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CoursesService } from './courses.service';
import * as moment from 'moment';
import { FilterPipe } from '../content/pipes/filter/filter.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterPipe]
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
