import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsersRoutingModule } from './users-routing.module'
import { UsersComponent } from './users/users.component'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { UserDialogComponent } from './user-dialog/user-dialog.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDialogReactiveFormComponent } from './user-dialog-reactive-form/user-dialog-reactive-form.component'

@NgModule({
    declarations: [UsersComponent, UserDialogComponent, UserDialogReactiveFormComponent],
    imports: [CommonModule, UsersRoutingModule, NgxDatatableModule, FormsModule, ReactiveFormsModule],
})
export class UsersModule {}
