import {PostService} from './post.service';
import {BlogComponent} from './blog/blog.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HttpModule} from '@angular/http';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostFormComponent} from './post-form/post-form.component'
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:id', component: PostDetailComponent},
  {path: 'blog/:id/edit', component: PostFormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'post-add', component: PostFormComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    PostDetailComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
