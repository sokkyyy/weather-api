import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather-service/weather.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults;
  city:string;

  constructor(weatherService:WeatherService, private http:HttpClient) {}

  searchWeather(){
    const url = `${environment.apiUrl} + ${this.city} + ${environment.apiKey}`;
    this.http.get(url).subscribe(response => {
      this.searchResults = response;
      console.log(response);
    });
  }

  ngOnInit(): void {
  }

}
