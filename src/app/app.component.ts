import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'CRUD',
      url: '/crudoperation',
      icon: 'mail'
    }
  ];
  public labels = ['CRUD'];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService:  AuthService,
    private router:  Router,
    public alertService:AlertService,
    private menu: MenuController
  ) {
    this.menu.enable(true);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.getToken().then(() => {
        if(this.authService.isLoggedIn) {
          this.router.navigateByUrl('/crudoperation');
        } else {
          this.router.navigateByUrl('/login');
        }
      });
    });
  }

  logout(){
    this.authService.staticLogout();
    this.menu.enable(false);
    this.router.navigateByUrl('/login');
  }
}
