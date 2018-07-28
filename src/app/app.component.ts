import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  records = [
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



