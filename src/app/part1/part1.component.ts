import { Component, OnInit } from '@angular/core';
import {MydataService} from "../mydata.service";

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit {

  name:string
  constructor(private serv:MydataService) { }

  ngOnInit(): void {
  }

  sendData() {
    this.serv.setData(this.name)
  }
}
