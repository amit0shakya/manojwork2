import { Component, OnInit, Input, Output } from '@angular/core';
/*
import { FresherregisterationComponent } from "./freshersform/fresherregisteration.component";
*/
import { ExperienceregistrationComponent } from "./professionalform/experienceregistration.component";
import { CaptchaService } from '../../services/captcha.service';

@Component({
  selector: 'app-clientregister',
  templateUrl: './clientregister.component.html',
  styleUrls: ['./clientregister.component.css'],
  providers:[CaptchaService]
})
export class ClientregisterComponent implements OnInit {

formoptions=true;
fresherform=false;
experienceform=false;

  reset(){
    this.formoptions=true;
    this.fresherform=false;
    this.experienceform=false;
  }

  callback(val){

  }

  constructor(private captcha:CaptchaService) {
    this.reset();
  } 

  ngOnInit() {
    console.log(this.captcha.get(),"<<<captcha")
  }
}
