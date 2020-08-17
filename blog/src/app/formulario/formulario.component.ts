import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  arrayCategorias: string[];

  constructor(private postService: PostsService) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000)
      ]),
      autor: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      imagen: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      fecha: new FormControl('', [
        Validators.required,
      ]),
      categoria: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    // this.postService.getAllCategorias()
    //   .then(arrayCat => {
    //     this.arrayCategorias = arrayCat;
    //     console.log(arrayCat);

    //   }).catch(err => console.log(err));


    this.arrayCategorias = this.postService.arrayCategorias;
  }

  onSubmit() {
    // console.log(this.formulario.value);
    // console.log(this.formulario.value['autor']);
    this.postService.AgregarPost(new Post(
      this.formulario.value['titulo'],
      this.formulario.value['texto'],
      this.formulario.value['autor'],
      this.formulario.value['imagen'],
      this.formulario.value['fecha'],
      this.formulario.value['categoria']
    ));


    //console.log(this.formulario.value['titulo']);
  }

}
// Importar los validators arriba!