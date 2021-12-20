import { Component, OnInit } from '@angular/core';
import { LostObjectDto } from 'src/app/dto/lost-object.dto';

@Component({
  selector: 'app-lost-object-registrate',
  templateUrl: './lost-object-registrate.component.html',
  styleUrls: ['./lost-object-registrate.component.css']
})
export class LostObjectRegistrateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categoria = ['Accesorios: (bolso/a, bufanda, pulsera, reloj, etc.)', 'ROPA Y CALZADO', 'EQUIPAJE DE MANO', 'GAFAS', 'MÓVIL', 'INFORMÁTICA', 'IMAGEN', 'SONIDO-AUDIO', 'JOYERÍA', 'DOCUMENTACIÓN', 'SALUD Y BELLEZA', 'MEDICINA', 'LLAVES', 'JUEGO Y DEPORTE', 'VEHICULOS', 'OTRO']

  submitted = false

  onSubmit(){ this.submitted = true}

  




}
