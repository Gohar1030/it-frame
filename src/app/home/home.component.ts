import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: number = 40.189483;
  lng: number = 44.521691;
  zoom:number = 8;
  hours:number;
  isDevice:boolean;
  messageForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required)
  });
  constructor(public tr:TranslateService, deviceService: DeviceDetectorService,public translate:TranslateService) { 
    this.isDevice= deviceService.isMobile();

  }

  ngOnInit() {
    this.hours = Math.floor((new Date().getTime() - new Date(2018,7,18,7).getTime())/1000/60/60);
   
  }

  changeLang(lang){
    localStorage.setItem('lang',lang);
    this.translate.use(lang);
  }
  send(){
    console.log('send');
    this.messageForm.reset();
    this.tr.get('success').subscribe(text=> {

    })

  }

  overfl(div,me,me1){
   
    div.style.overflow='visible';
    div.style.height='100%';
    me.style.display="none";
    me1.style.display='block';
  }
  overfl1(div,me,me1){
   
    div.style.overflow='hidden';
    div.style.height='218px';
    me.style.display="none";
    me1.style.display='block';
  }

}
