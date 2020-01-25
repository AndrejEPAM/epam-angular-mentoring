/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Directive, DebugElement, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

import { CoursesListComponent } from './courses-list.component';
import { CoursesService } from './courses.service';
import { Course } from './course.model';
import { mockCourse } from './courses.helper';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { CourseItemComponent } from './course-item/course-item.component';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-course-item',
  template: '',
  styleUrls: []
})
class CourseItemStubComponent {
  @Input() public course!: Partial<Course>;
  @Output() deleteClick = new EventEmitter<number>();
}

@Directive({
  selector: '[appCourseHighlight]',
})
class CourseHighlightStubDirective {
  @Input('appCourseHighlight') course!: Partial<Course>;
}

const mockData = [ mockCourse ];

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let mockCoursesService: jasmine.SpyObj<CoursesService>;
  let mockModalService: jasmine.SpyObj<ModalService>;

  beforeEach(async(() => {
    mockCoursesService = jasmine.createSpyObj<CoursesService>('CoursesService', ['getCourses', 'removeCourse']);
    mockModalService = jasmine.createSpyObj<ModalService>('ModalService', ['showModal']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        CoursesListComponent,
        CourseItemStubComponent,
        CourseHighlightStubDirective,
        OrderByPipe, // integration test for this pipe
      ],
      providers: [
        { provide: CoursesService, useValue: mockCoursesService },
        { provide: ModalService, useValue: mockModalService },
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
    const getCoursesSpy = service.getCourses.and.returnValue(mockData);
    fixture.detectChanges();

    expect(getCoursesSpy).toHaveBeenCalled();
    expect(component.courses).toEqual(mockData);
  });

  it('should display courses', () => {
    const service = TestBed.get(CoursesService);
    service.getCourses.and.returnValue(mockData);

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

  it('should sort courses by date', () => {
    const service = TestBed.get(CoursesService);
    const courses: Course[] = [
      { ...mockCourse, title: '2100', creationDate: new Date('2100') },
      { ...mockCourse, title: '1970', creationDate: new Date('1970') },
      { ...mockCourse, title: '2019', creationDate: new Date('2019') },
    ];
    service.getCourses.and.returnValue(courses);

    fixture.detectChanges();

    const courseItems = fixture.debugElement.queryAll(By.directive(CourseItemStubComponent));
    const titles = courseItems
      .map((debugElement: DebugElement) => (debugElement.componentInstance as CourseItemComponent).course.title);
    expect(titles).toEqual(['1970', '2019', '2100']);
  });

  it('should delete course through service when pressing "yes"', () => {
    const coursesService = TestBed.get(CoursesService);
    coursesService.getCourses.and.returnValue([{ ...mockCourse }]);
    const modalService = TestBed.get(ModalService);
    modalService.showModal.and.returnValue(of(true)); // preload mock with fixed "yes"
    fixture.detectChanges();
    const courseItem = fixture.debugElement.query(By.directive(CourseItemStubComponent));

    (courseItem.componentInstance as CourseItemComponent).deleteClick.emit(mockCourse.id);

    expect(coursesService.removeCourse).toHaveBeenCalledWith(mockCourse.id);
  });

  it('should NOT delete course through service when pressing "no"', () => {
    const coursesService = TestBed.get(CoursesService);
    coursesService.getCourses.and.returnValue([{ ...mockCourse }]);
    const modalService = TestBed.get(ModalService);
    modalService.showModal.and.returnValue(of(false)); // preload mock with fixed "no"
    fixture.detectChanges();
    const courseItem = fixture.debugElement.query(By.directive(CourseItemStubComponent));

    (courseItem.componentInstance as CourseItemComponent).deleteClick.emit(mockCourse.id);

    expect(coursesService.removeCourse).not.toHaveBeenCalled();
  });
});
