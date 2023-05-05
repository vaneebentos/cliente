import { Component } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from '../cliente.model';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent {
  cliente!:Cliente;  /* de esta manera le decis que puede ser nulo por que es un componente */
  grupos!: Grupo[];  /* en mayususcula el modelo de la tabla grupo en nuestra base de datos*/

  constructor (private clientesService:ClientesService){} /* ES UNA FUNSION PORQUE TIENE {}*/

  ngOnInit():void{

    this.cliente = this.clientesService.resetDataCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(){
    this.clientesService.addCliente(this.cliente);
    this.cliente = this.clientesService.resetDataCliente();
  
  }
}
