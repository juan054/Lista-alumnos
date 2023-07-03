import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-seleccionable',
  templateUrl: './lista-seleccionable.component.html',
  styleUrls: ['./lista-seleccionable.component.css']
})
export class ListaSeleccionableComponent {
  @Input() items: string []=[];
  estaActivo = false;

}
