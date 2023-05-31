import { Component } from '@angular/core';
import { BlogserviceService } from '../service/blogservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleblog',
  templateUrl: './singleblog.component.html',
  styleUrls: ['./singleblog.component.css']
})
export class SingleblogComponent {
  constructor(private service: BlogserviceService, private activeroute: ActivatedRoute) {
    this.activeroute.params.subscribe((res: any) => {
      // console.log(res);
      if (res.id) {
        this.service.getBlogById(res.id).subscribe((res: any) => {
          this.blogDeatils = res.data;

          this.service.commentByBlogId(this.blogDeatils.blogId).subscribe((res: any) => {
            this.commentArray = res.data;
            // console.log(res);
          })

          this.service.userDetailsById(this.blogDeatils.userId).subscribe((res: any) => {
            this.userObj = res.data;
            // console.log(res);
          })


        })

      }


    })

    this.getPost();

  }

  blogid: any;
  userid: any;

  id: any = "";
  blogDeatils: any = {
    "blogId": "",
    "blogTitle": "",
    "blogCategoryId": "",
    "bannerImage": "",
    "createdDate": "",
    "readingTime": "",
    "blogDescription": "",
    "blogTags": "",
    "attachmentUrl": "",
    "userId": ""
  }

  userObj: any = {
    "userId": "",
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

  commentObj: any = {
    "commentId": "",
    "comment": "",
    "blogId": "",
    "userId": "",
    "commentDate": ""
  }
  postArray:any[]=[];

  userArray: any[] = [];
  commentArray: any[] = [];

  // blogById(){
  //   this.service.getBlogById(this.blogDeatils.blogId).subscribe((res:any)=>{
  //     this.blogDeatils=res.data;
  //     // console.log(res);
  //   })
  // }

  allUsers() {
    this.service.getAllUsers().subscribe((res: any) => {
      this.userArray = res.data;
    })
  }

  getPost(){
    this.service.getAllBlog().subscribe((res:any)=>{
      this.postArray=res.data;
      // console.log(res);
    })
  }

  
}
