import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-user-dialog-reactive-form',
  templateUrl: './user-dialog-reactive-form.component.html',
  styleUrls: ['./user-dialog-reactive-form.component.scss']
})
export class UserDialogReactiveFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      login: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    this.userForm.controls.login.valueChanges.subscribe(login => {
      // call backend to check if the login exist
      // Update the form validation.
    })
    this.userForm.valueChanges.subscribe(changes => {
      console.log('changes', changes);
    })
  }

  dismissDialog(): void {}
  closeModal(): void {}

  saveForm(): void {
    const user = this.userForm.getRawValue();
    console.log('user', user);
  }
}
