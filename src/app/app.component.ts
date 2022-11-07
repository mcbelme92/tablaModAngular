import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'creutilizablec';
  items: string[] = ['one', 'two', 'tree',"four"];
  items2: string[] = ['one', 'two', 'tree', "four"];
  constructor(private primengConfig: PrimeNGConfig) { }
  
  ngOnInit() {
    this.primengConfig.ripple = true;
}

  
  myList2: any[]  = [
    { id: 1, nombre: "Pepon", apellido: "Tellez", direccion: "Ciudad de mexico",telefono:"1545151" },
    { id: 2, nombre: "Roberto", apellido: "Deniro", direccion: "united state", telefono: "5151115" },
    { id: 3, nombre: "Alpacino", apellido: "Corleone", direccion: "Italia", telefono: "555555" },
    { id: 4, nombre: "Carlito", apellido: "brigante", direccion: "Puerto Rico",telefono:"15151515155" },
    { id: 5, nombre: "Maria", apellido: "Cesina", direccion: "Iztacalco",telefono:"5841851881" }
  ];
  //este metodo es mejor ya que tal vez reciba un numero mietras se pone en espera
  selectedItem?: number;
  selectedItem2?: number;

  //metodo funcion espera escuchar un index de unm arreglo
  onSelectedItemPint(item:number) {
    this.selectedItem = item;
  }

  onSelectedItemPint2(item:number) {
    this.selectedItem2 = item;
  }
}
