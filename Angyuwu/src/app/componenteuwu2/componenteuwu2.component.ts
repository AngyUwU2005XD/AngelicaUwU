import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenteuwu2',
  templateUrl: './componenteuwu2.component.html',
  styleUrls: ['./componenteuwu2.component.css']
})
export class Componenteuwu2Component implements OnInit {

  constructor() { }

  ngOnInit(): void 
  {
    constructor(){}
  nombre: any;
  correo: any;
  contra: any;
  numero: any;
  confirmar:any;
 
  ngOnInit():void{
    this.recuperar()
  }

  recuperar()
  {
    this.nombre = localStorage.getItem('nombre');
    this.correo = localStorage.getItem('correo');
    this.contra = localStorage.getItem('contra');
    this.confirmar = localStorage.getItem('confirmar');
    this.numero = localStorage.getItem('numero');
  }
  }


}
