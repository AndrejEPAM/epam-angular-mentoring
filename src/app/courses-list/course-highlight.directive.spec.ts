import { CourseHighlightDirective } from './course-highlight.directive';
import { Course } from './course.model';

describe('CourseHighlightDirective', () => {
  const today = new Date('1970-01-20');
  let directive: CourseHighlightDirective;

  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(today));

    directive = new CourseHighlightDirective();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('isFresh', () => {
    it('should be true today', () => {
      directive.course = { creationDate: today } as Course;
      expect(directive.isFresh).toBe(true);
    });
    it('should be true for a course created 14 days ago', () => {
      directive.course = { creationDate: new Date('1970-01-06') } as Course;
      expect(directive.isFresh).toBe(true);
    });
    it('should be false for a course created 15 days ago', () => {
      directive.course = { creationDate: new Date('1970-01-05') } as Course;
      expect(directive.isFresh).toBe(false);
    });
    it('should be false tomorrow', () => {
      directive.course = { creationDate: new Date('1970-01-21') } as Course;
      expect(directive.isFresh).toBe(false);
    });
  });

  describe('isUpcoming()', () => {
    it('should be true tomorrow', () => {
      directive.course = { creationDate: new Date('1970-01-21') } as Course;
      expect(directive.isUpcoming).toBe(true);
    });
    it('should be false today', () => {
      directive.course = { creationDate: today } as Course;
      expect(directive.isUpcoming).toBe(false);
    });
  });
});
