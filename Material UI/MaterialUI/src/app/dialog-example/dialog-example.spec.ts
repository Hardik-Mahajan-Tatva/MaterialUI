import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExample } from './dialog-example';

describe('DialogExample', () => {
  let component: DialogExample;
  let fixture: ComponentFixture<DialogExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
