import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MenuController } from '@ionic/angular';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crudoperation',
  templateUrl: './crudoperation.page.html',
  styleUrls: ['./crudoperation.page.scss'],
})
export class CrudoperationPage implements OnInit {
  title: any;
  updateId: any = null;
  isUpdate: boolean = false;
  

  constructor(private  service:  AuthService, 
    private  router:  Router,public menu:MenuController,
    public alertService:AlertService) { }


    
  createEmployee(form){
    this.alertService.presentLoading()
    this.service.createEmployee(form.value).subscribe((res)=>{
      console.log(res);
      this.alertService.dismissLoading();
      this.menu.enable(true);
      this.router.navigate(['']);
      this.router.navigateByUrl('home');
    },(error)=>{
      this.alertService.dismissLoading();
    });
  }

  //////////////////////////
  posts: any;  
  

  
  ngOnInit() {  
    this.getPost(); 
  }  

  getPost() {
    this.alertService.presentLoading()
    this.service.getPosts()  
      .subscribe((response) => {  
        this.alertService.dismissLoading();
        this.posts = response;  
      }); 
  }
  
  
  createUpdatePost() {  
    let post = { title: this.title };    
    if (this.isUpdate) {
      this.updatePost();
    } else {
      this.service.createPost(post)  
      .subscribe(response => { 
        this.title = '';
        this.alertService.presentToast('Record inserted.'); 
        this.alertService.dismissLoading();
        post['id'] = response['id'];  
        this.posts.splice(0, 0, post);  
        console.log(response);  
      }); 
    }
     
  }  
  
  updateSelection (post) {
    this.updateId = post.id;
    this.title = post.title;
    this.isUpdate = true;
  }
  updatePost() {  
    this.alertService.presentLoading();
    this.service.updatePost({title:this.title,id:this.updateId})  
      .subscribe(response => { 
        this.alertService.presentToast('Record updated.'); 
        this.alertService.dismissLoading();
        this.title = '';
        this.updateId = null;
        this.isUpdate = false; 
        console.log(response);  
      });  
  }  

  clear() {
    this.title = '';
    this.updateId=null;
  }
  
  deletePost(post) {  
    this.alertService.presentLoading();
    this.service.deletePost(post.id)  
      .subscribe(response => {  
        this.alertService.presentToast('Record deleted.');
        this.alertService.dismissLoading();
        let index = this.posts.indexOf(post);  
        this.posts.splice(index, 1);  
      });  
  }  

}
