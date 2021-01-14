import { Component, OnInit } from '@angular/core';
import { Sellrequests } from '../models/sellrequests.model';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-farmer-sellrequest',
  templateUrl: './farmer-sellrequest.component.html',
  styleUrls: ['./farmer-sellrequest.component.css']
})
export class FarmerSellrequestComponent implements OnInit {

  sellrequests : Sellrequests=new Sellrequests();

  // data:any = 
  // {"user_id":1,
  // "crop_type":"RABI",
  // "crop_name":"wheat",
  // "fertilizer_type":"natural",
  // "quntity":50,
  // "ph_certificate":"1_ph_certificate",
  // "msp":1000,
  // "status":"PENDING"}
  constructor(private farmerService: FarmerService) { }

  ngOnInit() {
  }

  placeRequest(){
    this.sellrequests.user_id=2;
    alert(JSON.stringify(this.sellrequests));
    this.farmerService.placeRequest(this.sellrequests).subscribe(response => {
    alert(JSON.stringify(response));
    })
  }

}