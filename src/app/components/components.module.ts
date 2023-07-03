import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSeleccionableComponent } from './lista-seleccionable/lista-seleccionable.component';



@NgModule({
  declarations: [
    ListaSeleccionableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ListaSeleccionableComponent]
})
export class ComponentsModule { }
