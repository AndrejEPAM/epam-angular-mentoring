import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { Courses, mockCourse } from './courses.helper';

const courseItem = Courses;

describe('Service: CoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });

  it('getCourses() should return an array of Courses', () => {
    const service = TestBed.get(CoursesService);
    expect(service.getCourses()).toBe(courseItem);
  });

  it('createCourse() should create a course and return its id', () => {
    const service = TestBed.get(CoursesService);
    service.courses = []; // reset courses
    const course = { ...mockCourse };

    const returnValue = service.createCourse(course);

    expect(service.courses.length).toBe(1);
    expect(returnValue).toBe(0);
  });


});
