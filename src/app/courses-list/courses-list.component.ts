import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CoursesService } from './courses.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];
  orderByDate = (a: Course, b: Course) => (a.creationDate < b.creationDate ? -1 : (a.creationDate > b.creationDate ? 1 : 0));

  constructor(private coursesService: CoursesService, private modalService: ModalService) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  onDelete(id: number) {
    this.modalService.showModal('Are you sure you want to delete?').subscribe((answer: boolean) => {
      if (answer === true) {
        this.coursesService.removeCourse(id);
      }
    });
  }

}
