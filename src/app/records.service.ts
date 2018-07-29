import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }
  getData(){
   return  [
      { 
      name: 'tejal',
      online:true
  },
    {
      name:'abc',
      online:false
    },
  {
    name:'work',
    online:true
  },
  { 
    name: 'tejal',
    online:true
  },
  {
    name:'abc',
    online:false
  },
  {
  name:'work',
  online:true
  }
  ]
  }
}
