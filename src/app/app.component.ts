import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public trans:TranslateService){
    this.trans.setDefaultLang('en');
    localStorage.getItem('lang')?  this.trans.use(localStorage.getItem('lang')):this.trans.use('en');
  }
}
