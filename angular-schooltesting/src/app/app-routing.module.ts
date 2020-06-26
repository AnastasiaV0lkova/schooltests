import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TestsComponent } from './tests/tests.component';
import { TopNavigationComponent } from './shared/top-navigation/top-navigation.component';
import { PageCreateUsersComponent } from './page-create-users/page-create-users.component';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'tests', component: TestsComponent },
  { path: 'main', component: TopNavigationComponent },
  { path: 'create-users', component: PageCreateUsersComponent },
  { path: 'classes', component: ClassesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
