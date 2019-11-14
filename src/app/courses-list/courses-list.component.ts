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
  orderByDate = (a: Course, b: Course) => (a.creationDate < b.creationDate ? -1 : (a.creationDate > b.creationDate ? 1 : 0));

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  logOnDelete(id: number) {
    console.log(id);
  }

}
