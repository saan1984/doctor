import { Component } from '@angular/core';
import { RestServiceService } from '../services/rest-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ RestServiceService ]
})
export class HomeComponent {
  doctorsList:any = [];

  constructor(private rest: RestServiceService) { 
    this.rest.getAllDoctors().subscribe((data:any) =>{
      this.doctorsList = data.data;
    });
  }

}
