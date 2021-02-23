import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsersRoutingModule } from './users-routing.module'
import { UsersComponent } from './users/users.component'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { UserDialogComponent } from './user-dialog/user-dialog.component'
import { FormsModule } from '@angular/forms'

@NgModule({
    declarations: [UsersComponent, UserDialogComponent],
    imports: [CommonModule, UsersRoutingModule, NgxDatatableModule, FormsModule],
})
export class UsersModule {}
