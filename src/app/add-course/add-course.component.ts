import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, switchMap } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { CoursesService } from '../courses-list/courses.service';
import { Course } from '../courses-list/course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit, OnDestroy {

  title = new FormControl();
  description = new FormControl();
  date = new FormControl();
  form = new FormGroup({
    title: this.title,
    description: this.description,
    date: this.date,
  });

  private componentDestroyed = new Subject();
  componentDestroyed$ = this.componentDestroyed.asObservable();

  constructor(private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap((params) => of(this.coursesService.getCourse(params.id))),
      takeUntil(this.componentDestroyed$)
    ).subscribe((course) => {
      if(course) {
        this.loadValues(course);
      }
    });
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
  }

  onSubmit() {
    console.log(this.form);
  }

  onCancel() {
    console.log('cancel');
  }

  loadValues(course: Course) {
    this.title.patchValue(course.title);
    this.description.patchValue(course.description);
    this.date.patchValue(course.creationDate);
  }
}
