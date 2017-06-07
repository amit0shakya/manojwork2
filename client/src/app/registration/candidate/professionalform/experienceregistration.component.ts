import { Component, OnInit } from '@angular/core';
import { candidateformInfo } from '../userform';
import { CaptchaService } from '../../../services/captcha.service';

@Component({
  selector: 'experienceregistration',
  templateUrl: './experienceregistration.component.html',
  styleUrls: ['./experienceregistration.component.css'],
  providers:[CaptchaService]

})
export class ExperienceregistrationComponent implements OnInit {

captchadata={val1:0,val2:0,method:''};
captchadataanswer=null;
/*
userData= new candidateformInfo(
  {name:'',pass:'',email:'',phone:'',institute:'',specilization:'',location:''},
  [{
      title:'',
      marks:'',
      univ:'',
        duration:{
                  from:'',
                  to:''
                  },
                subjects:[{
                    name:'',
                    marks:''
  }]}],
  [{
            title:'',
            degree:'',
            duration:{
                from:'',
                to:''},
            institute:''
  }]);
*/
Indianstates=[{"title":"Andhra Pradesh"},{"title":"Arunachal Pradesh"},{"title":"Assam"},{"title":"Bihar"},
{"title":"Chhattisgarh"},{"title":"Goa"},{"title":"Gujarat"},{"title":"Haryana"},{"title":"Himachal Pradesh"},
{"title":"Jammu & Kashmir"},{"title":"Jharkhand"},{"title":"Karnataka"},{"title":"Kerala"},{"title":"Madhya Pradesh"},
{"title":"Maharashtra"},{"title":"Manipur"},{"title":"Meghalaya"},{"title":"Mizoram"},{"title":"Nagaland"},
{"title":"Odisha"},{"title":"Punjab"},{"title":"Rajasthan"},{"title":"Sikkim"},{"title":"Tamil Nadu"},
{"title":"Telangana"},{"title":"Tripura"},{"title":"Uttarakhand"},{"title":"Uttar Pradesh"},{"title":"West Bengal"},
{"title":"Andaman and Nicobar Islands"},{"title":"Chandigarh"},{"title":"Delhi"}];

browsedfilename="Upload Resume";

 constructor(private captcha:CaptchaService) {
    this.browsedfilename="Upload Resume";
   }

  getfile(filname:any){
    console.log(filname.target.value,"<<filname")

    if(filname.target.value==""){
      //Do nothing if user dosent choose any file;
    }else{
      this.browsedfilename = filname.target.value.replace("C:\\fakepath\\", "");
    }
  }

  submitform(){
    if(!this.captcha.check(this.captchadataanswer)){
        console.log("wrong captcha answer")
    }
  }

  submitdata(){
    
  }

  ngOnInit() {
    this.captchadata=this.captcha.get();
    console.log(this.captchadata,"<<<captcha in fresher");
    //console.log(this.captcha.check(10),"<<<check captcha");
  }

}