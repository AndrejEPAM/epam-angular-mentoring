/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoursesService } from './courses.service';

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
      declarations: [CoursesListComponent],
      providers: [
        { provide: CoursesService, useValue: mockCoursesService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('#ngOnInit should call coursesService and set courses', () => {
    const service = TestBed.get(CoursesService);
    const getCoursesSpy = spyOn(service, 'getCourses').and.returnValue(mockData);
    fixture.detectChanges();

    expect(getCoursesSpy).toHaveBeenCalled();
    expect(component.courses).toEqual(mockData);
  });
});
