import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LostObjectDto } from 'src/app/dto/lost-object.dto';
import { LostObjectService } from 'src/app/services/lost-object.service';

@Component({
  selector: 'app-lost-object-registrate',
  templateUrl: './lost-object-registrate.component.html',
  styleUrls: ['./lost-object-registrate.component.css']
})
export class LostObjectWhatComponent implements OnInit {

  constructor(private lostObjectService: LostObjectService,private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  categoria = ['Accesorios: (bolso/a, bufanda, pulsera, reloj, etc.)', 'ROPA Y CALZADO', 'EQUIPAJE DE MANO', 'GAFAS', 'MÓVIL', 'INFORMÁTICA', 'IMAGEN', 'SONIDO-AUDIO', 'JOYERÍA', 'DOCUMENTACIÓN', 'SALUD Y BELLEZA', 'MEDICINA', 'LLAVES', 'JUEGO Y DEPORTE', 'VEHICULOS', 'OTRO']

  newLostObject = new LostObjectDto()



  submitted = false

  onSubmit(){ this.submitted = true}


  newObjectLost(){
    this.lostObjectService.postLostObject(this.newLostObject)
  }





}
