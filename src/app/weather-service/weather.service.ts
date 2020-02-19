import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getNairobiWeather(){
    const url = `${environment.apiUrl} + Nairobi + ${environment.apiKey}`;

    let promise = new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then(response=>{
        console.log(response);
        return response;
        resolve();
      }, error=>{
        reject(error);
      })
    })
    return promise;
  }

  getWeather(city){
    const url = `${environment.apiUrl} + ${city} + ${environment.apiKey}`;
    let promise = new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then(response=>{
        return response;
        resolve();
      }, error=>{
        reject(error);
      })
    })
    return promise;
  }
}
