import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { mockCourse } from './courses.helper';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [ mockCourse ];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  logOnDelete(id: number) {
    console.log(id);
  }

}
