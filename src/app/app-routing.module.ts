import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllblogComponent } from './templates/allblog/allblog.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { SingleblogComponent } from './templates/singleblog/singleblog.component';
import { LoginuserComponent } from './templates/loginuser/loginuser.component';

const routes: Routes = [
  { path: "", component: AllblogComponent },
  { path: "home", component: AllblogComponent },
  { path: "login", component: LoginuserComponent },
  {
    path: "", component: NavbarComponent,
    children: [
      { path: "singleBlog/:id", component: SingleblogComponent },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
