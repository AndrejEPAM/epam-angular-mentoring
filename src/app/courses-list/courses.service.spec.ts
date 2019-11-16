import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { Courses, mockCourse } from './courses.helper';

const courseItem = Courses;

describe('Service: CoursesService', () => {
  it('should be created', () => {
    const service: CoursesService = new CoursesService();
    expect(service).toBeTruthy();
  });

  it('getCourses() should return an array of Courses', () => {
    const service: CoursesService = new CoursesService();
    expect(service.getCourses()).toBe(courseItem);
  });

  it('createCourse() should create a course and return its id', () => {
    const service: CoursesService = new CoursesService();
    service.courses = []; // reset courses
    const course = { ...mockCourse };

    const returnValue = service.createCourse(course);

    expect(service.courses.length).toBe(1);
    expect(returnValue).toBe(0);
  });

  it('getCourse() should get a course with a specific id', () => {
    const service: CoursesService = new CoursesService();
    service.courses = [ {...mockCourse, id: 0}, {...mockCourse, id: 1, title: 'COURSE'}];

    const course = service.getCourse(1);

    expect(course && course.title).toBe('COURSE');
  });


});
