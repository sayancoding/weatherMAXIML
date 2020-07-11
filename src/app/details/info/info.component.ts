import { Component, OnInit } from '@angular/core';
import { DocService } from 'src/app/service/doc.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  data: any;
  temp: Number;
  status: String;
  desc: string;
  feels_like;
  humidity;
  wind_speed;
  pressure: string;
  name: String;
  lat;
  lon;
  country: string;
  icon;
  lastUpdate;
  time;
  isValue = false;

  constructor(private _docService: DocService) {}
  citySearch = new FormGroup({
    city: new FormControl('', Validators.required),
  });
  onSubmit() {
    this.isValue = true;
    console.log(this.citySearch.value.city);
    this.getData(this.citySearch.value.city);
    setInterval(() => {
      this.getData(this.citySearch.value.city);
    }, 30000);
  }
  getData(city) {
    this._docService.getData(city).subscribe((data) => {
      this.data = data;
      this.lat = data.coord.lat;
      this.lon = data.coord.lon;
      this.name = data.name;
      this.temp = this.kelvinToCel(data.main.temp);
      this.feels_like = this.kelvinToCel(data.main.feels_like);
      this.humidity = data.main.humidity;
      this.pressure = data.main.pressure;
      this.wind_speed = data.wind.speed;
      this.status = data.weather[0].main;
      this.desc = data.weather[0].description;
      this.country = data.sys.country;
      this.icon = data.weather[0].icon;
      this.lastUpdate = new Date();
      this.time = new Date().getTime();
    });
  }
  kelvinToCel(temp) {
    return Math.round(temp - 273);
  }

  ngOnInit(): void {}
}
