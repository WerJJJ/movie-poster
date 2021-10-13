import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MainComponent} from "./main.component";
import { HomeComponent } from './home/home.component';
import { PostersComponent } from './posters/posters.component';
import { AuthComponent } from './auth/auth.component';
import {MainRoutingModule} from "./main-routing.module";
import { PosterComponent } from './poster/poster.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    PostersComponent,
    AuthComponent,
    PosterComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
