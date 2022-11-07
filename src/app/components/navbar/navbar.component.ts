import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  @Input() items?: any[];
  @Output() selected:any = new EventEmitter();
  activeItem: number = 0;
  constructor() {
    
    }
  

  ngOnInit(): void {
    //inicializa en el i = 0 con la funcion at
      this.selected.emit(this.items?.at(0));
  }

  

  onSelect(item:string,index:number) {
    this.activeItem = index;
    this.selected.emit(item); 
  }

}
