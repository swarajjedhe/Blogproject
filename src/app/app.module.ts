import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { BlogtitleComponent } from './templates/blogtitle/blogtitle.component';
import { SingleblogComponent } from './templates/singleblog/singleblog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllblogComponent } from './templates/allblog/allblog.component';
import { RegisterbtnComponent } from './templates/registerbtn/registerbtn.component';
import { LoginuserComponent } from './templates/loginuser/loginuser.component';
import { FooterComponent } from './templates/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogtitleComponent,
    SingleblogComponent,
    AllblogComponent,
    RegisterbtnComponent,
    LoginuserComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
