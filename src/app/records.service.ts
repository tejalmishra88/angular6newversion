import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
interface myData {obj: Array<object>}

@Injectable()
export class RecordsService {

  constructor(private http: HttpClient ) { }
  getData(){
  return this.http.get<myData>('api/file.php')
  //.subscribe(data => {console.log("we got", data.obj)})
  }
}
