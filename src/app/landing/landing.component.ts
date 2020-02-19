import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather-service/weather.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  weather;
  constructor(weatherService:WeatherService, private http:HttpClient) {

  }

  ngOnInit(){
    const url = `${environment.apiUrl} + Nairobi + ${environment.apiKey}`;
    this.http.get(url).subscribe(response => {
      this.weather = response;
      console.log(response);
    });
  }

}
