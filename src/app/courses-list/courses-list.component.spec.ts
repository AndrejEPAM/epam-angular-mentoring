/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Directive } from '@angular/core';

import { CoursesListComponent } from './courses-list.component';
import { CoursesService } from './courses.service';
import { Course } from './course.model';

@Component({
  selector: 'app-course-item',
  template: '',
  styleUrls: []
})
class CourseItemStubComponent {
  @Input() public course!: Partial<Course>;
}

@Directive({
  selector: '[appCourseHighlight]',
})
class CourseHighlightStubDirective {
  @Input('appCourseHighlight') course!: Partial<Course>;
}

const mockData = [
  {
    id: 53232,
    title: 'TITLE',
    creationDate: '01, October, 2019',
    duration: 'DUR',
    description: 'DESC'
  }
];
const mockCoursesService: Partial<CoursesService> = {
  getCourses: () => []
};

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  // let mockCoursesService: jasmine.SpyObj<CoursesService>; // use spy Later

  beforeEach(async(() => {
    // mockCoursesService = jasmine.createSpyObj('CoursesService', ['getCourses']);
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        CourseItemStubComponent,
        CourseHighlightStubDirective,
      ],
      providers: [
        { provide: CoursesService, useValue: mockCoursesService }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should call coursesService and set courses', () => {
    const service = TestBed.get(CoursesService);
    const getCoursesSpy = spyOn(service, 'getCourses').and.returnValue(mockData);
    fixture.detectChanges();

    expect(getCoursesSpy).toHaveBeenCalled();
    expect(component.courses).toEqual(mockData);
  });
});
