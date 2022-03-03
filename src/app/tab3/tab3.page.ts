import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  formulario = this.formBuilder.group({ //inicializar en 0 
    nombrePelicula:'',
    anioEstreno:'',
    genero:'',
    cal:'',
    sinopsis:''
  });


  constructor(private peliculasService:PeliculasService , private formBuilder:FormBuilder) {}


  ngOnInit(): void {

    
  }

  Guardar(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pelicula agragada',
      showConfirmButton: false,
      timer: 1500
    })
    console.log(this.formulario.value)
    this.peliculasService.creatPelicula(this.formulario.value).subscribe((res:any) =>{
      console.log(res)
    })
    
  }
}
