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
     return this.http.post(this.apiUrl+'getDoctorList', {page_no:0, per_page:10})
    .map((res:Response) => res.json());
  }
  getDoctors(id){
     return this.http.get(this.apiUrl+'getDoctorDetails/'+id)
    .map((res:Response) => res.json());
  }

  searchDoctors(searchKey) {
    return this.http.post(this.apiUrl+'search', {
      "searchParams" : searchKey
    }).map((res:Response) => res.json());
  }
}
