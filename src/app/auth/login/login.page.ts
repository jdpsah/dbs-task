import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../../services/auth.service';
import { MenuController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private  authService:  AuthService, 
    private  router:  Router,public menu:MenuController,
    public alertService:AlertService) { }

  ngOnInit() {
  }

  login(form){
    this.alertService.presentLoading()
    this.authService.login(form.value).subscribe((res)=>{
      this.alertService.dismissLoading();
      this.menu.enable(true);
      // this.router.navigate(['']);
      this.router.navigateByUrl('crudoperation');
    });
  }

}