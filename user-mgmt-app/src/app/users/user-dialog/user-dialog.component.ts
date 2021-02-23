import { Component, OnInit } from '@angular/core'
import { User } from '../domain/user.domain'

@Component({
    selector: 'app-user-dialog',
    templateUrl: './user-dialog.component.html',
    styleUrls: ['./user-dialog.component.scss'],
})
export class UserDialogComponent implements OnInit {

    user: User = {
      firstName: '',
      lastName: '',
      login: '',
      password: ''
    };


    constructor() {}

    ngOnInit(): void {}

    saveForm(): void {
      console.log('first name', this.user);
    }

    dismissDialog(): void {}
    closeModal(): void {}
}
