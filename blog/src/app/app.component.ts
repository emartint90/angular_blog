import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from './posts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private navegacion: Router) {

  }


  onClick(pRuta) {
    this.navegacion.navigate([pRuta]);
    // console.log(this.PostService.getAll());

  }

}

