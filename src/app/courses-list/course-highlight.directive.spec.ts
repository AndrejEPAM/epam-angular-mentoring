import { CourseHighlightDirective } from './course-highlight.directive';
import { Course } from './course.model';

describe('CourseHighlightDirective', () => {
  const today = '1970-01-20';

  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(today));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should create an instance', () => {
    const directive = new CourseHighlightDirective();
    expect(directive).toBeTruthy();
  });

  describe('isFresh()', () => {
    it('should be true today', () => {
      const directive = new CourseHighlightDirective();
      directive.course = { creationDate: today } as Course;
      expect(directive.isFresh).toBe(true);
    });
    it('should be true for a course created 14 days ago', () => {
      const directive = new CourseHighlightDirective();
      directive.course = { creationDate: '1970-01-06' } as Course;
      expect(directive.isFresh).toBe(true);
    });
    it('should be false for a course created 15 days ago', () => {
      const directive = new CourseHighlightDirective();
      directive.course = { creationDate: '1970-01-05' } as Course;
      expect(directive.isFresh).toBe(false);
    });
    it('should be false tomorrow', () => {
      const directive = new CourseHighlightDirective();
      directive.course = { creationDate: '1970-01-21' } as Course;
      expect(directive.isFresh).toBe(false);
    });
  });

  describe('isUpcoming()', () => {
    it('should be true tomorrow', () => {
      const directive = new CourseHighlightDirective();
      directive.course = { creationDate: '1970-01-21' } as Course;
      expect(directive.isUpcoming).toBe(true);
    });
    it('should be false today', () => {
      const directive = new CourseHighlightDirective();
      directive.course = { creationDate: today } as Course;
      expect(directive.isUpcoming).toBe(false);
    });
  });
});
