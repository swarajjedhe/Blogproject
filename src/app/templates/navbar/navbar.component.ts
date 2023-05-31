import { Component } from '@angular/core';
import { BlogserviceService } from '../service/blogservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private service: BlogserviceService) {
    this.allBlogs();
    this.getUserLocalStorage();
    // this.allusers();
  }

  // logdInUser:boolean=false;
  local: any;

  blogArray: any[] = [];

  name: any;

  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "createdDate": "",
    "name": "",
    "position": "",
    "profileSummary": "",
    "facebookUrl": "",
    "linkdinUrl": "",
    "profilePhotoUrl": "",
    "city": ""
  }

  // userArray: any[] = [];
  allBlogs() {
    this.service.getAllBlog().subscribe((res: any) => {
      this.blogArray = res.data;
      // console.log(this.blogArray.blogTitle);
    })
  }

  createdUser() {
    this.service.createUsers(this.userObj).subscribe((res: any) => {
      alert(res.message);
      this.closeBtn();
      console.log(res);
    })
  }

  // allusers() {
  //   this.service.getAllUsers().subscribe((res: any) => {
  //     this.userArray = res.data;
  //     this.name = this.userArray.map(item => {
  //       return item.emailId
  //     })
  //     console.log(this.name);
      
  //   })
  // }

  // allusers(){
  //   this.service.getAllUsers().subscribe((res: any) => {
  //     this.userObj=res.data;
  //     console.log(this.userObj[0].emailId)
  //   })
  // }

  closeBtn() {
    this.userObj = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "createdDate": "",
      "name": "",
      "position": "",
      "profileSummary": "",
      "facebookUrl": "",
      "linkdinUrl": "",
      "profilePhotoUrl": "",
      "city": ""
    }
  }

  getUserLocalStorage() {
    this.local = localStorage.getItem('loogedinusername');
    console.log(this.local);
  }

  // get(name:any){
  //   console.log(name);
  // }


}
