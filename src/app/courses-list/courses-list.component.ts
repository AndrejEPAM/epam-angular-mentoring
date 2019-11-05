import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { Courses } from './courses.helper';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [
    {
      id: 53232,
      title: 'Video Course #01',
      creationDate: '01, October, 2019',
      duration: '1h 3 min',
      description: ''
    }
  ];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

}
