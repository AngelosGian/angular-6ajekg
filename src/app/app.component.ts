import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Weather App';
  
  readonly ROOT_URL ='https://api.openweathermap.org/data/2.5/weather?q=';

  locations:any;
  
  lat:number;
  lon:number;
  country: string;
  // ApiService: any;
  appid: string;

  params = new HttpParams({
    country = this.country;
    appid = '&appid=9c8c7922e9fd5eb703a4d593c73decc1';
  })

    constructor(private http: HttpClient){}
    
    getLocations(){
      this.locations = this.http.get(this.ROOT_URL + { params} );
  
}
