import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blogtitle',
  templateUrl: './blogtitle.component.html',
  styleUrls: ['./blogtitle.component.css']
})
export class BlogtitleComponent {
  @Input() blogname: string = '';
  @Input() blogtitle: string = '';
}
