import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogserviceService } from '../service/blogservice.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {
  constructor(private route: Router, private service: BlogserviceService) {

  }

  loginObj: any = {
    "userName": "",
    "userPassword": "",
  }



  login() {
    this.service.loginUser(this.loginObj).subscribe((res: any) => {
      if (res.result == true) {
        localStorage.setItem("loogedinusername", this.loginObj.userName);
        this.route.navigateByUrl("home");
      }
      else {
        alert(res.message);
      }
      // console.log(res);

    })

  }
}
