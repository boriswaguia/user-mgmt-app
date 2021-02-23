import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogReactiveFormComponent } from './user-dialog-reactive-form.component';

describe('UserDialogReactiveFormComponent', () => {
  let component: UserDialogReactiveFormComponent;
  let fixture: ComponentFixture<UserDialogReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDialogReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDialogReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
