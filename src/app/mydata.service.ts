import { Injectable } from '@angular/core';
import {BehaviorSubject, fromEvent, interval, Observable, of} from "rxjs";
import {} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  stream$:Observable<string>



  constructor() { }

  getData():Observable<string>{
    this.stream$.subscribe(data=>console.log('GETData: ',data));
    return this.stream$
  }

  setData(str){
    this.stream$=new Observable<string>(param=>{
      setInterval(()=>{
        param.next(str)
      },1000)
    })
  }
}
