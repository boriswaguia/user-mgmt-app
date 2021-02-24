import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime } from 'rxjs/operators';
import { User } from '../domain/user.domain';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dialog-reactive-form',
  templateUrl: './user-dialog-reactive-form.component.html',
  styleUrls: ['./user-dialog-reactive-form.component.scss']
})
export class UserDialogReactiveFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private activeModal: NgbActiveModal) {
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
    const user: User = this.userForm.getRawValue();
    this.userService.save(user).subscribe(result => {
      this.activeModal.close(result);
    });
    console.log('user', user);
  }
}
