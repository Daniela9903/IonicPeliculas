import { Component ,OnInit} from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit {
  mensajes: any[] = [];

  constructor(private pelicuasService:PeliculasService,) {}

  ngOnInit(): void {


    this.pelicuasService.getPeliculas()
    .subscribe((posts: any) =>{
    console.log(posts);
    this.mensajes = posts;
  })
}}
