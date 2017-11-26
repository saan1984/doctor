import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestServiceService } from '../services/rest-service.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css'],
  providers: [ RestServiceService ]
})
export class ViewDoctorComponent{
  doctorData: number;
  constructor(private route: ActivatedRoute, private rest: RestServiceService) {
    this.route.params.subscribe(params => {
       this.rest.getDoctors(params['id']).subscribe((data:any) => {
         this.doctorData = data.data;
       });
    });
  }

}
