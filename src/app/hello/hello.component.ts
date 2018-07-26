import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  myvariable="tejal"
  bitwiseOR= 2 | 5
i = 0

  constructor() { }
doSomeHeavyTask(){
  console.log(`called ${this.i++} times`)
}
  ngOnInit() {
    
  }

}
