import { Component, OnInit } from '@angular/core';
import {MydataService} from "../mydata.service";

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss']
})
export class Part2Component implements OnInit {
  public readonly stream$ = this.serv.stream$;

  name:string

  constructor(private serv:MydataService) { }

  ngOnInit(): void {
    this.serv.stream$.subscribe(data=>{
      this.name=data
    })
  }

  test() {

  }
}
