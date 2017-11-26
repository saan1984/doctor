import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestServiceService {
  apiUrl:string = environment.apiUrl;
  
  constructor(private http: Http) { }

  register(data){
    return this.http.post(this.apiUrl+'register',data)
    .map((res:Response) => res.json());
  }

  getAllDoctors(){
     return this.http.get(this.apiUrl+'getDoctorList')
    .map((res:Response) => res.json());
  }
}
