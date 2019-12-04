import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });

  it('showModal() should return Observable<boolean>', () => {
    const service: ModalService = TestBed.get(ModalService);
    let returnValue: boolean | undefined;
    spyOn(window, 'confirm').and.returnValue(false);
    service.showModal('some text').subscribe((value: boolean) => { // executed in sync in the test
      returnValue = value;
    },
    () => {
      fail('should not get error');
    }).unsubscribe();
    expect(returnValue).not.toBeUndefined();
  });
});
