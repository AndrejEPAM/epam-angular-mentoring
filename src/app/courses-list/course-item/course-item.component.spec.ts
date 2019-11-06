/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { Course } from '../course.model';

const mockCourse: Course = {
  id: 53232,
  title: 'TITLE',
  creationDate: new Date('01, October, 2019'),
  duration: 6,
  description: 'DESC'
};


describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit course id when delete button clicked', () => {
    // spy on event emitter
    spyOn(component.deleteClick, 'emit');

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.delete');
    button.dispatchEvent(new Event('click'));

    expect(component.deleteClick.emit).toHaveBeenCalledWith(mockCourse.id);
  });
});
