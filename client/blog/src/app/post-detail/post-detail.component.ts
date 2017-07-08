import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostService} from "../post.service";
import {Post} from "../blog/post";
import "rxjs/add/operator/switchMap";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post = new Post();

  constructor(private route: ActivatedRoute,
              protected postService: PostService,
  private btitle: Title) {
  }

  ngOnInit() {
    this.btitle.setTitle('New Post');

    this.route.params.switchMap((p: Params) => {
      const id = p['id'];
      return this.postService.getPost(id);
    })
      .subscribe(response => {
        this.post = response;
      }, err => {
        console.log(err)
      });

  }

}

