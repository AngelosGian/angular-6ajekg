import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  
  lat:any;
  lon:any;
  ApiService: any;
  
    constructor(private http: HttpClient){}
    
    getLocations(){
      this.locations = this.http.get(this.ROOT_URL + 'London&apiid=9c8c7922e9fd5eb703a4d593c73decc1');
    //   if (navigator){

    //   navigator.geolocation.getCurrentPosition( pos => {
    //       this.lon = pos.coords.longitude;
    //       this.lat = pos.coords.latitude;
    //     });

        
    //   this.ApiService.getPosition().then(pos=>
    //       {
    //          console.log(`Positon: ${pos.lon} ${pos.lat}`);
    //       });
    //   }
     }
  
 
  // ngOnInit(){};
}
