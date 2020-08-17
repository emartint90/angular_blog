import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { FormularioComponent } from './formulario/formulario.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrayPosts: Post[];
  arrayCategorias: string[];
  //formulario: FormularioComponent;

  constructor() {
    this.arrayPosts = [
      new Post(
        'El carbón ya es historia',
        'En Greenpeace celebramos el fin de la era del carbón en España. Descubre cómo han sido estos 30 años de lucha.',
        'José Luis García',
        'https://es.greenpeace.org/es/wp-content/uploads/sites/3/2020/07/29-11-2018-As-Pontes-A-Coru%C3%B1a-Galicia-Espa%C3%B1a-1200x902.jpg',
        new Date("2019-01-16"),
        'Noticias'
      ),
      new Post(
        'La ciencia del cambio climático tiene más siglos de lo que piensas y la comenzó una mujer',
        'La idea del efecto invernadero era ya conocida en la década de 1820, sin embargo, nadie había podido demostrar físicamente como ocurría o qué efectos tenía esa misma en el planeta. 36 años después, fue la investigadora y científica Eunice Foote, que además era activista por los derechos de la mujer; la primera en mostrar cómo podría funcionar realmente.',
        'Greenpeace España',
        'https://es.greenpeace.org/es/wp-content/uploads/sites/3/2020/07/Eunice-Foote-700x875real.jpg',
        new Date("2020-07-31"),
        'Ciencia'
      ),
      new Post(
        'Día Mundial del Sol: ha llegado la hora del autoconsumo',
        'Hoy, domingo 21 de Junio, con la radiación solar disparada, celebramos el Día Mundial del Sol. Y justo mañana empieza la semana europea de la Energía Sostenible.',
        'Maria Prado',
        'https://es.greenpeace.org/es/wp-content/uploads/sites/3/2020/06/GPES20030101AE05-1200x780.jpg',
        new Date("2020-06-21"),
        'Emergencia Climática'
      ),
    ];

    this.arrayCategorias = [
      'Noticias',
      'Ciencia',
      'Emergencia Climática',
      'Artículos'

    ];


  }

  // getAll(): Post[] {
  //   return this.arrayPosts;

  // };

  AgregarPost(pPost) {
    this.arrayPosts.push(pPost);
    console.log(pPost);
    //console.log(arrayPosts);
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrayPosts);
    });

  }

  getByCategoria(pCategoria): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrayPosts.filter(post => {
        return post.categoria === pCategoria;
      }));
    });
    console.log(this.arrayPosts.filter(post => {
      return post.categoria === pCategoria;
    }));

  }

  getAllCategorias(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrayCategorias);
    });
  }

}
