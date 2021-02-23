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

    constructor(private modalService: NgbModal) {}

    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes', changes)
    }

    ngOnInit(): void {}

    openUserForm(): void {
        this.modalService.open(UserDialogComponent)
    }
}
