import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule ,MatButtonModule, MatCheckboxModule ,MatSelectModule,MatOption } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';


const appRoutes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'search-doctor' , component : SearchDoctorComponent},
  {path : 'view-doctor/:id' , component : ViewDoctorComponent},
  {path : '**' , component : HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    // AddDoctorComponent,
    SearchDoctorComponent,
    LoginComponent,
    RegisterComponent,
    ViewDoctorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,MatCheckboxModule,MatIconModule,MatMenuModule,MatFormFieldModule,MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
