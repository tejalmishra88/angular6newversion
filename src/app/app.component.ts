import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(){
   console.log("this statement by constructor",this.simplemethod (5,2)) 
  }

 
  simplemethod(a,b){
    return a*b
  }
}
