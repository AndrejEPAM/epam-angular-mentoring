/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CoursesListComponent } from './courses-list.component';
import { CoursesService } from './courses.service';
import { Course } from './course.model';
import { mockCourse } from './courses.helper';

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

const mockData = [ mockCourse ];
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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should call coursesService and set courses', () => {
    const service = TestBed.get(CoursesService);
    const getCoursesSpy = spyOn(service, 'getCourses').and.returnValue(mockData);
    fixture.detectChanges();

    expect(getCoursesSpy).toHaveBeenCalled();
    expect(component.courses).toEqual(mockData);
  });

  it('should display courses', () => {
    const service = TestBed.get(CoursesService);
    spyOn(service, 'getCourses').and.returnValue(mockData);

    fixture.detectChanges();

    const courseItems = fixture.debugElement.queryAll(By.directive(CourseItemStubComponent));
    expect(courseItems.length).toBe(1);
  });

  it('should display message if no courses', () => {
    fixture.detectChanges();

    const divs = fixture.debugElement.queryAll(By.css('div'));
    const text = divs.map((debugElement: DebugElement) => (debugElement.nativeElement as HTMLElement).textContent).join(' ');
    console.log(text);
    expect(text).toContain('No data');
  });


});
