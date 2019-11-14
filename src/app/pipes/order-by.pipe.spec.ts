import { OrderByPipe } from './order-by.pipe';
import { mockCourse } from '../courses-list/courses.helper';
import { Course } from '../courses-list/course.model';

describe('OrderByPipe', () => {
  it('should create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
  it('should sort an array', () => {
    const pipe = new OrderByPipe();
    expect(pipe.transform(['C', 'B', 'A'])).toEqual(['A', 'B', 'C']);
  });
  it('should sort courses by property value with compare function', () => {
    const pipe = new OrderByPipe();
    expect(pipe.transform([
      { ...mockCourse, title: 'C' },
      { ...mockCourse, title: 'B' },
      { ...mockCourse, title: 'A' },
    ], (a: Course, b: Course) => (a.title < b.title ? -1 : (a.title > b.title ? 1 : 0)))).toEqual([
      { ...mockCourse, title: 'A' },
      { ...mockCourse, title: 'B' },
      { ...mockCourse, title: 'C' },
    ]);
  });
});
