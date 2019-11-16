import { CoursesService } from './courses.service';
import { Courses, mockCourse } from './courses.helper';
import { Course } from './course.model';

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

  it('updateCourse() should update a course with fields', () => {
    const service: CoursesService = new CoursesService();
    service.courses = [ {...mockCourse, id: 0}, {...mockCourse, id: 1, title: 'COURSE'}];
    const course: Partial<Course> = { id: 0, title: 'HAHA' };

    service.updateCourse(course);

    expect(service.courses[0].title).toBe('HAHA');
  });

  it('removeCourse() should delete a course, but keep the array', () => {
    const service: CoursesService = new CoursesService();
    service.courses = [ {...mockCourse, id: 8}, {...mockCourse, id: 2222, title: 'COURSE'}];
    expect(service.courses.filter((course) => course.id === 2222).length).toBe(1);
    const oldCourses = service.courses;

    service.removeCourse(2222);

    expect(service.courses.filter((course) => course.id === 2222).length).toBe(0);
    expect(service.courses).toBe(oldCourses);
  });

});
