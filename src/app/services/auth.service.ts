import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token:any;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private env: EnvService,
  ) { }

  login(value) {
    return this.http.post(this.env.login_URL + 'api/login',
      {email: value.email, password: value.password}
    ).pipe(
      tap(token => {
        this.storage.set('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }

  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;

        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }

  staticLogout() {
    this.storage.remove("token");
    this.isLoggedIn = false;
    delete this.token;
  }


  ////////////////////////////////////////////////////////////
  private url = 'https://jsonplaceholder.typicode.com/posts';  
    
  
  getPosts() {  
    return this.http.get(this.url).pipe(
      tap(response => {
        return response;
      }),
    );
  }  
  
  createPost(post) {  
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      tap(response => {
        return response;
      }),
    );  
  }  
  
  updatePost(post){  
    return this.http.put(this.url + '/' + post.id, JSON.stringify({ isRead: true })).pipe(
      tap(response => {
        return response;
      }),
    ); 
  }  
  
  deletePost(id) {  
    return this.http.delete(this.url + '/' + id).pipe(
      tap(response => {
        return response;
      }),
    );;  
  } 
}