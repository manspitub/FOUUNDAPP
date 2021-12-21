import { Component, OnInit } from '@angular/core';
import { LostObjectService } from 'src/app/services/lost-object.service';

@Component({
  selector: 'app-lost-object-when',
  templateUrl: './lost-object-when.component.html',
  styleUrls: ['./lost-object-when.component.css']
})
export class LostObjectWhenComponent implements OnInit {

  constructor(private lostObjectService: LostObjectService) { }

  lostDate!: Date

  ngOnInit(): void {
  }


  objectLostDate(){
    this.lostObjectService.postLostObjectTime(this.lostDate)
  }



}

