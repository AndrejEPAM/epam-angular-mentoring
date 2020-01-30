import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ BreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
  });
  
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render breadcrumbs'), () => {
    component.crumbs = [
      { title: 'Courses', path: '/courses' },
      { title: 'Item 1', path: '/courses/1' },
    ]
    fixture.detectChanges();
    const list = fixture.debugElement.queryAll(By.css('a'));
    expect(list.length).toEqual(2);
  }
});
