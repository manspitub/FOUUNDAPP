import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoundObjectDto } from 'src/app/dto/found-object.dto';
import { LostObjectDto } from 'src/app/dto/lost-object.dto';
import { LostObjectService } from 'src/app/services/lost-object.service';

@Component({
  selector: 'app-found-object-registrate',
  templateUrl: './found-object-registrate.component.html',
  styleUrls: ['./found-object-registrate.component.css']
})
export class FoundObjectWhatComponent implements OnInit {

  constructor(private lostObjectService: LostObjectService,private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  categoria = ['Accesorios: (bolso/a, bufanda, pulsera, reloj, etc.)', 'ROPA Y CALZADO', 'EQUIPAJE DE MANO', 'GAFAS', 'MÓVIL', 'INFORMÁTICA', 'IMAGEN', 'SONIDO-AUDIO', 'JOYERÍA', 'DOCUMENTACIÓN', 'SALUD Y BELLEZA', 'MEDICINA', 'LLAVES', 'JUEGO Y DEPORTE', 'VEHICULOS', 'OTRO']

  newLostObject = new FoundObjectDto()



  submitted = false

  onSubmit(){ this.submitted = true}


  newObjectLost(){
    this.lostObjectService.postFoundObject(this.newLostObject)
  }





}
