/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseItemComponent } from './course-item.component';
import { Course } from '../course.model';

const mockCourse: Course = {
  id: 53232,
  title: 'TITLE',
  creationDate: '01, October, 2019',
  duration: 'DUR',
  description: 'DESC',
  topRated: false,
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
  });

  it('should be created', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should emit course id when delete button clicked', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    // spy on event emitter
    spyOn(component.deleteClick, 'emit');

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.delete');
    button.dispatchEvent(new Event('click'));

    expect(component.deleteClick.emit).toHaveBeenCalledWith(mockCourse.id);
  });

  it('should render the title in upper case', () => {
    component.course = { ...mockCourse, title: 'mIxEd CaSe' };
    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('h3'));
    expect((title.nativeElement as HTMLElement).textContent).toBe('MIXED CASE');
  });
});
