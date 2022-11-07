import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mylist2 } from 'src/app/models/mylist2';
import { Persona } from 'src/app/models/persona';
import { SortEvent } from 'primeng/api';
import { GetsAllService } from 'src/app/services/getallservice.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaComponent implements OnInit {
  //@Input() items?: any[];
  @Input() myList2: any[] = [
    { id: 1, nombre: "Pepe", apellido: "Tellez", direccion: "Ciudad de mexico", telefono: "1545151" },
  ];
  //Escucah el evento 
  @Output() selected: any = new EventEmitter();
  activeItem: number = 0;
  
  @Input() model: any = Mylist2;
  
  //products: Product[];
  


/*   @Input() myList3: Mylist2[] = [

    { id: 1, nombre: "Pepe", apellido: "Tellez", direccion: "Ciudad de mexico", telefono: "1545151" },
    { id: 2, nombre: "Roberto", apellido: "Deniro", direccion: "united state", telefono: "5151115" },
    { id: 3, nombre: "Alpacino", apellido: "Corleone", direccion: "Italia", telefono: "555555" },
    { id: 4, nombre: "Carlito", apellido: "brigante", direccion: "Puerto Rico", telefono: "15151515155" },
    { id: 5, nombre: "Maria", apellido: "Cesina", direccion: "Iztacalco", telefono: "5841851881" }
  ]; */
  
  

  

  @Input() cols: any[] = [];

  constructor( ) { }

  ngOnInit(): void {

    this.cols = [
      { field: "id", header: "Id" },
    ];
  }

  

  
  

}
