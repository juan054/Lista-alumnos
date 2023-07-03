import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
usuarios: string[] = ['juan', 'giuliana','kalo','helena','franchesco','duna','adrian','emiliano'];



onSelectUsuario(usuario: string):void{
  alert(usuario);
}



}
