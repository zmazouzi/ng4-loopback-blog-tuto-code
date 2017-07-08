import {Component, OnInit} from '@angular/core';
import {Post} from "../blog/post";
import {PostService} from "../post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
  providers: [PostService]
})
export class PostFormComponent implements OnInit {
  errorMessage = "";
  post: Post = new Post();

  constructor(private postService: PostService,
              private router: Router) {

  }

  ngOnInit() {

  }

  onSubmit() {
    this.postService.creatPost(this.post).subscribe(res => {
      console.log(res.id)

    }, err => {

      console.log(err)
      this.errorMessage = "error saving "
    })
  }


}
