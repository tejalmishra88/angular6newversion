import { Component } from '@angular/core';

function log(target, name, descriptor ){
  //console.log(target, name, descriptor)
  // store the original function in a variable
  const original = descriptor.value
  //do some manipulation with descriptor
  descriptor.value = function( ...args){
    console.log("Arguments", args, "were passed in this function")
    const result = original.apply(this,args)
    console.log("this result of function is", result)
    return result
  }
  //return the descriptor
  return descriptor

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
function a(){}
export class AppComponent {
  title = 'app';

  constructor(){
   console.log("this statement by constructor",this.simplemethod (5,2)) 
  }

  @log
  simplemethod(a,b){
    return a*b
  }
}
