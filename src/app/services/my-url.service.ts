import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyUrlService {

  constructor() { }

  url='http://localhost:8080/';

  getUrl(){
    return this.url;
  }
}
