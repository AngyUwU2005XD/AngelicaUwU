import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-componenteuwu1',
  templateUrl: './componenteuwu1.component.html',
  styleUrls: ['./componenteuwu1.component.css']
})
export class Componenteuwu1Component implements OnInit 
{

  constructor(private router: Router){}
  nombre: any;
  correo: any;
  contra: any;
  numero: any;
  confirmar:any;

 
  ngOnInit():void{
    this.contra;
    this.correo;
    this.nombre;
    this.numero;
    this.confirmar;
    //localStorage.clear()
    
  }



  register()
  {
    this.router.navigate(['web2'])
    localStorage.setItem('nombre', this.nombre);
    localStorage.setItem('correo', this.correo);
    localStorage.setItem('contra', this.contra);
    localStorage.setItem('confirmar', this.confirmar);
    localStorage.setItem('numero', this.numero);
  }

}
