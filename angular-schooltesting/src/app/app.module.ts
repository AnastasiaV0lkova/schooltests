import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ClassesComponent } from './classes/classes.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { PageCreateUsersComponent } from './page-create-users/page-create-users.component';
import { WindowCreateUsersComponent } from './window-create-users/window-create-users.component';
import { WindowCreateTeachersComponent } from './window-create-teachers/window-create-teachers.component';
import { WindowCreateAdministratorsComponent } from './window-create-administrators/window-create-administrators.component';
import { WindowCreateClassesComponent } from './window-create-classes/window-create-classes.component';
import { WindowCreateSubjectsComponent } from './window-create-subjects/window-create-subjects.component';
import { TopNavigationComponent } from './shared/top-navigation/top-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    ClassesComponent,
    LoginPageComponent,
    TopNavigationComponent,
    PageCreateUsersComponent,
    WindowCreateUsersComponent,
    WindowCreateTeachersComponent,
    WindowCreateAdministratorsComponent,
    WindowCreateClassesComponent,
    WindowCreateSubjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
