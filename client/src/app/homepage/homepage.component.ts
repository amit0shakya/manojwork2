import { Component, OnInit } from '@angular/core';
import { WebheaderComponent } from "../webheader/webheader.component";
import { WebfooterComponent } from "../webfooter/webfooter.component";
import { JobsearchbarComponent } from"../jobsearchbar/jobsearchbar.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers:[WebheaderComponent,WebfooterComponent,JobsearchbarComponent]
})
export class HomepageComponent implements OnInit {

employeeslist = [
  {"image":"client1.jpg", "title":"beats"},
  {"image":"client2.jpg", "title":"facebook"},
  {"image":"client3.jpg", "title":"twitter"},
  {"image":"client4.jpg", "title":"instagram"},
  {"image":"client5.jpg", "title":"microsoft"},
  {"image":"client6.jpg", "title":"pitrest"}];

jobslist=[
{"image":"client1.jpg", "jobtitle":"FrontEnd Developer", 'experience' :"2+ Years experience", "name" :"ABC Company", "location":"Sec 15, Gurgaon"},
{"image":"client2.jpg", "jobtitle":"Content Writer", "experience" :"0 - 3yrs experience", "name" :"fizerv Company", "location":"Sec 15, Gurgaon"},
{"image":"client3.jpg", "jobtitle":"Graphic Designer", "experience" :"2+ Years experience", "name" :"ABC Company", "location":"Sec 15, Gurgaon"},
{"image":"client4.jpg", "jobtitle":"FrontEnd Developer", "experience" :"2+ Years experience", "name" :"ABC Company", "location":"Sec 15, Gurgaon"},
{"image":"client5.jpg", "jobtitle":"FrontEnd Developer", "experience" :"2+ Years experience", "name":"ABC Company", "location":"Sec 15, Gurgaon"},
{"image":"client6.jpg", "jobtitle":"FrontEnd Developer", "experience" :"2+ Years experience", "name":"ABC Company", "location":"Sec 15, Gurgaon"}
]
  constructor() { }

  ngOnInit() {
  }
}