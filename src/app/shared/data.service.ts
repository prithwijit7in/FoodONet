import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  formData;
  
  

  constructor() {this.formData={} }

 setFormData(data: Object){
  this.formData = data;
  console.log(JSON.stringify(data));
 }

 getFormData(){
  return this.formData;
 }


}
