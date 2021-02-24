import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { User } from '../domain/user.domain';
import { UserService } from '../services/user.service';

import { UserDialogReactiveFormComponent } from './user-dialog-reactive-form.component';

describe('UserDialogReactiveFormComponent', () => {
  let component: UserDialogReactiveFormComponent;
  let fixture: ComponentFixture<UserDialogReactiveFormComponent>;

  // 1
  let mockUserService: jasmine.SpyObj<UserService> = jasmine.createSpyObj('UserService', ['save']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDialogReactiveFormComponent ],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        NgbActiveModal,
        {provide: UserService, useValue: mockUserService} // 2
      ]
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

  const fillData = (id: string, value: string) => {
    const input = fixture.debugElement.query(By.css(`#${id}`)).nativeElement
    input.value = value;
    input.dispatchEvent(new Event('input'));
  };

  const waitForChanges = () => {
    tick();
    fixture.detectChanges();
  };

  it('should save data', fakeAsync(() => {
    const expected: User = {
      firstName: 'My First Name',
      lastName: 'lastName',
      login: 'login',
      password: 'password'
    };

    fillData('firstNameInput', 'My First Name');
    fillData('lastNameInput', 'lastName');
    fillData('loginInput', 'login');
    fillData('passwordInput', 'password');

    waitForChanges();
    fixture.debugElement.query(By.css('.btn-save-form-test')).nativeElement.click();

    expect(mockUserService.save).toHaveBeenCalledWith(expected);
  }))
});
