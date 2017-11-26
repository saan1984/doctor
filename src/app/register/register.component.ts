import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RestServiceService } from '../services/rest-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ RestServiceService ]
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  registerMessage:string;
  constructor(private fb: FormBuilder,private rest: RestServiceService) {
    this.registerMessage = '';
    this.myForm = fb.group({
      'firstname' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
      'lastname' : [null, Validators.compose([Validators.required])],
      'specialist' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
      'qualification' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
      'streetname' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
      'location' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
      'city' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
      'state' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
      'pincode' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
      'yearsofexperience' : [null, Validators.compose([Validators.required])],
      'mobilenumber' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
      'email' : [null, Validators.compose([Validators.email, Validators.minLength(3), Validators.maxLength(40)])],
    });
   }

  ngOnInit() { }

  addUser(param){
    this.rest.register(param).subscribe((data:any) => {
      this.registerMessage = data.message;
      if(data.message == 'Registered successfully'){
        this.myForm.reset();
      }
    });
  }

}
