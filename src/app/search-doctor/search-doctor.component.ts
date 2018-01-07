import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from "@angular/forms";
import {RestServiceService} from "../services/rest-service.service";

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['search-doctor.component.scss'],
  providers: [ RestServiceService ]
})
export class SearchDoctorComponent implements OnInit {

  @Output() onSearch = new EventEmitter<any>();
  searchKeyControl = new FormControl();
  doctorsList: any =[];

  constructor(private rest: RestServiceService) {}

  ngOnInit() {}

  search () {
    let searchKey = this.searchKeyControl.value;
    this.rest.searchDoctors(searchKey).subscribe((res:any) =>{
      this.doctorsList = res.data;
      this.onSearch.emit(this.doctorsList);
    });
  }

}
