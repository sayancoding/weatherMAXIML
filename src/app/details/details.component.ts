import { Component, OnInit } from '@angular/core';
import { DocService } from '../service/doc.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {



  constructor(private _docService:DocService) { }

  ngOnInit(): void {
    // this._docService.getData('ghatal').subscribe((data)=>{
    //   this.data = data;
    //   this.lat = data.coord.lat;
    //   this.lon = data.coord.lon;
    //   this.name = data.name;
    //   this.temp = this.kelvinToCel(data.main.temp);
    //   this.feels_like = this.kelvinToCel(data.main.feels_like);
    //   this.humidity = data.main.humidity;
    //   this.pressure = data.main.pressure;
    //   this.wind_speed = data.wind.speed;
    //   this.status = data.weather[0].main;
    //   this.desc = data.weather[0].description;
    //   // this._docService.getOnCallData(this.lon,this.lat).subscribe((doc)=>{
    //   //   console.log(doc)
    //   // })
    //   console.log(this.name,this.status,this.desc,this.humidity,this.temp,this.wind_speed,this.pressure,this.feels_like)
    // });
  }

}
