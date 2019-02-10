import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,   RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { RootSecureService } from './services/root-secure.service';
const routes:Routes = [{path:"welcome/:username",component:WelcomeComponent,canActivate:[RootSecureService]},
{path:"",component:LoginComponent},
{path:"login",component:LoginComponent},
{path:"todoList",component:ListTodosComponent,canActivate:[RootSecureService]},
{path:"logout",component:LogoutComponent,canActivate:[RootSecureService]},
{path:"**",component:ErrorComponent,canActivate:[RootSecureService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
