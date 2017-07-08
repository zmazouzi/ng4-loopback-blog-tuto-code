import {Component, OnInit} from '@angular/core';
import {Post} from '../blog/post';
import {PostService} from "../post.service";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  title: string = 'blog';

  posts: Post[];

  constructor(private postService: PostService) {
    this.postService.newPostCreated.subscribe((p: Post) => {
      this.posts.push(p);
    });
  }

  ngOnInit() {
    // do request and get all blog lists ;
    this.postService.getPosts().subscribe(
      (res: Post[]) => {
        this.posts = res;
      },
      err => console.log(err)
    )
  }


}
