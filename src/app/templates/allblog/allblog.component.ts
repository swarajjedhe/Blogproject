import { Component } from '@angular/core';
import { BlogserviceService } from '../service/blogservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allblog',
  templateUrl: './allblog.component.html',
  styleUrls: ['./allblog.component.css']
})
export class AllblogComponent {

  constructor(private service: BlogserviceService, private router: Router) {
    this.getBlogs();
    // this.getUsers();
  }

  blogsArray: any[] = [];

  getBlogs() {
    this.service.getAllBlog().subscribe((res: any) => {
      this.blogsArray = res.data;
    })
  }

  getBlogId(id: any) {
    // console.log(id);
    this.router.navigate(['/singleBlog', id]);

  }
  getUsers() {
    this.service.getAllUsers().subscribe((res: any) => {
      console.log(res);
    })
  }
}
