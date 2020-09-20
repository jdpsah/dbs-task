import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  login_URL = 'https://reqres.in/';
  crud_URL = 'http://dummy.restapiexample.com/api/v1/';
  constructor() { }
}
