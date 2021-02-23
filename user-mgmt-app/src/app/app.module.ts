import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeRoutingModule } from './home/home-routing.module'
import { UsersModule } from './users/users.module'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HomeRoutingModule, UsersModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
