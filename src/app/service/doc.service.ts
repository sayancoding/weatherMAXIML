import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DocService {
  constructor(private _http: HttpClient) {}
  getData(city) {
    return this._http.get<any>(
      `https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=439d4b804bc8187953eb36d2a8c26a02`
    );
  }
  // getData(city) {
  //   return this._http.get<any>(
  //     `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db5d3609c1a6fb9ef5d8be98fd723ca7`
  //   );
  // }
  getOneCallData(lat,lon){
    return this._http.get<any>(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current&appid=db5d3609c1a6fb9ef5d8be98fd723ca7`
    );
  }
}
