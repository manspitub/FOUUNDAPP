import { Component, OnInit } from '@angular/core';
import { LostObjectService } from 'src/app/services/lost-object.service';

@Component({
  selector: 'app-found-object-when',
  templateUrl: './found-object-when.component.html',
  styleUrls: ['./found-object-when.component.css']
})
export class FoundObjectWhenComponent implements OnInit {

  constructor(private lostObjectService: LostObjectService) { }

  lostDate!: Date

  ngOnInit(): void {
  }


  objectLostDate(){
    this.lostObjectService.postFoundObjectTime(this.lostDate)
  }



}

