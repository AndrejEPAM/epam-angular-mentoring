import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { Courses } from './courses.helper';

const courseItem = Courses;

describe('Service: CoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });

  it('#getCourses should return an array of Courses', () => {
    const service = TestBed.get(CoursesService);
    expect(service.getCourses()).toBe(courseItem);
  });
});
