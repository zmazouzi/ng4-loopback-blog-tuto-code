import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Post} from 'app/blog/post'
import "rxjs/add/operator/catch";
import {any} from "codelyzer/util/function";
import {Subject} from "rxjs/Subject";

@Injectable()
export class PostService {
  newPostCreated: Subject<Post> = new Subject();


  constructor(private http: Http) {

  }

  headers = new Headers({
    'Content-type': 'application/json',
  })


  // get all posts
  getPosts(): Observable<Post[]> {

    let url = 'http://localhost:3000/api/posts';

    return this.http.get(url, {headers: this.headers})
      .map((response) => response.json())
      .catch(err => {
        return Observable.throw(err);
      })

  }


// get one Post

  getPost(id: string): Observable<Post> {
    let url = 'http://localhost:3000/api/posts/' + id;
    return this.http.get(url, {headers: this.headers})
      .map(res => res.json() as Post)
      .catch(err => {
        return Observable.throw(err);
      })
  }

// creat a post
  creatPost(post: Post): Observable<any> {
    let url = 'http://localhost:3000/api/posts'
    return this.http.post(url, post, {headers: this.headers})
      .map(response => {
        const json = response.json();
        this.newPostCreated.next(json as Post);
        return json;
      })
      .catch(err => {
        return Observable.throw(err)
      })
  }
}



