import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses-list/courses.service';
import { ActivatedRoute } from '@angular/router';

export type Crumb = {
  title: string,
  path: string,
}
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  crumbs: Crumb[] = [{
    title: 'Courses',
    path: '/courses'
  }];

  constructor(
    private courses: CoursesService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log('breadcrumbs created', this.activatedRoute,this.activatedRoute.parent, this.activatedRoute.firstChild);

    this.activatedRoute.firstChild && this.activatedRoute.firstChild.paramMap.subscribe((paramMap) => {
      console.log({params: paramMap}, paramMap.get('id'));
      const id = paramMap.get('id');
      if (id !== null) {
        const course = this.courses.getCourse(+id);
        if (course) {
          this.crumbs[1] = {
            title: course.title,
            path: ''
          };
        } else {
          delete this.crumbs[1];
        }
      }
    })
  }
}
