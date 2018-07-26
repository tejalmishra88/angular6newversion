import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
myvariable = 'app';
mydisabledvalue = false
constructor(){
}
callmyfunction(){
  this.mydisabledvalue=!this.mydisabledvalue
  console.log("function called!")
}
}
