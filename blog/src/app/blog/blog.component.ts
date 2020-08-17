import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];
  //arrayPosts: Post[];
  arrayCategorias: string[];

  constructor(private postService: PostsService) {

  }

  ngOnInit(): void {
    this.postService.getAllPosts()
      .then(arrayPosts => {
        this.posts = arrayPosts;
      }).catch(err => console.log(err));

    this.arrayCategorias = this.postService.arrayCategorias;
  }

  async onChange($event) {
    try {
      const value = $event.target.value;
      console.log(value);
      let arrayPosts = this.posts;
      if (value === "sinFiltro") {
        arrayPosts = await this.postService.getAllPosts();
      } else {
        arrayPosts = await this.postService.getByCategoria(value);
      }
      this.posts = arrayPosts;
    }
    catch (err) {
      return console.log(err);
    };
  }
}
