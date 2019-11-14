// tslint:disable:max-line-length
import { Course } from './course.model';

export const Courses: Course[] = [
  {
    id: 0,
    title: 'Video Course #01',
    creationDate: new Date('1, November, 2100'),
    duration: '1h 3 min',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
    topRated: true,
  },
  {
    id: 1,
    title: 'Video Course #02',
    creationDate: new Date('12, November, 2019'),
    duration: '45 min',
    description: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
    topRated: false,
  },
  {
    id: 2,
    title: 'Video Course #03',
    creationDate: new Date('01, October, 2019'),
    duration: '2h 30 min',
    description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.',
    topRated: false,
  }
];

export const mockCourse: Course = {
  id: 53232,
  title: 'TITLE',
  creationDate: new Date('01, October, 2019'),
  duration: 'DUR',
  description: 'DESC',
  topRated: false,
};
