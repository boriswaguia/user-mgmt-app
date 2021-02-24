import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ColumnMode } from '@swimlane/ngx-datatable'
import { User } from '../domain/user.domain'
import { UserService } from '../services/user.service'
import { UserDialogReactiveFormComponent } from '../user-dialog-reactive-form/user-dialog-reactive-form.component'
import { UserDialogComponent } from '../user-dialog/user-dialog.component'

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnChanges {
    rows: User[] = []

    loadingIndicator = true
    reorderable = true

    columns = [
        { prop: 'login' },
        { prop: 'firstName' },
        { prop: 'lastName' },
        { prop: 'password', sortable: false },
    ]

    ColumnMode = ColumnMode

    constructor(private modalService: NgbModal, private userService: UserService) {}

    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes', changes)
    }

    ngOnInit(): void {
      console.log('UsersComponent ngOnInit', this.rows);
      this.userService.get().subscribe(users => {
        this.rows = [...users];
        console.log('UsersComponent ngOnInit', this.rows);
      })
    }

    openUserForm(): void {
      this.openUserFormReactive();
    }
    openUserFormTemplate(): void {
        this.modalService.open(UserDialogComponent)
    }
    openUserFormReactive(): void {
        this.modalService.open(UserDialogReactiveFormComponent)
    }

    execute(event: unknown): void {
      if(event) {
        console.log('event', event);
      }
    }
}
