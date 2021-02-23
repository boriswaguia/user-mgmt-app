import { Component, OnInit } from '@angular/core'
import { ColumnMode } from '@swimlane/ngx-datatable';
import { User } from '../domain/user.domain';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  rows: User[] = [];

  loadingIndicator = true;
  reorderable = true;

  columns = [{ prop: 'login'}, { prop: 'firstName' }, { prop: 'lastName' }, {prop: 'password', sortable: false}];

  ColumnMode = ColumnMode;

    constructor() {}

    ngOnInit(): void {
      this.rows = [
      ];
    }
}
