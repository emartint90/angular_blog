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

// Importante ver que se importa arriba, hemos creado el metodo onClick ya que en el html esta el evento en el botón. Private para poder utilizarlo en los métodos de las clase,sin ello: solo en el constructor, con Public en el html, también. Creamos el objeto navegacion que será lo que le pidamos a Angular para trabajar:ROUTER. 
// this.navegacion es la inyección de dependencia.
// .navigate es un método para navegar a un pág y recibe un [], recibe muchas partes de la rutaURL?.