import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './modules/register/register.component';
import { SillasComponent } from './modules/sillas/sillas.component';
import { AdminComponent } from './modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { EditsillasComponent } from './editsillas/editsillas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SillasComponent,
    AdminComponent,
    EditsillasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'sillas', component: SillasComponent},
      {path: 'editsillas', component: EditsillasComponent},
      {path: 'admin', component: AdminComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
