import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    UsuariosComponent
  ],
  
  imports: [
    CommonModule,
    ComponentsModule
  ],exports: [
    UsuariosComponent
  ]
})
export class UsuariosModule { }
