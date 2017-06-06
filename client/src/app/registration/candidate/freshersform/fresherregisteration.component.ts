import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup,NgForm } from '@angular/forms';
import { candidateData } from '../userform';
import { CaptchaService } from '../../../services/captcha.service';

@Component({
  selector: 'fresherregisteration',
  templateUrl: './fresherregisteration.component.html',
  styleUrls: ['./fresherregisteration.component.css'],
  providers:[CaptchaService]
})
export class FresherregisterationComponent implements OnInit {
  
captchadata={val1:0,val2:0,method:''};
captchadataanswer=null;


educationalfield={class:'',school:'',univ:'',duration:{from:'',to:''},marks:''};
educationalinfo=[]

techqualfield={qual:"",univ:"",degree:"",duration:{from:'',to:''},marks:''};
techqualinfo=[this.techqualfield];

/*

<th>Qualification</th>
                    <th>Discription</th>
                    <th>Degree</th>
                    <th>Duration</th>
                    <th>Marks%</th>
*/ 

userData= new candidateData('','','','','','','');

indianstates=[{"title":"Andhra Pradesh"},{"title":"Arunachal Pradesh"},{"title":"Assam"},{"title":"Bihar"},
{"title":"Chhattisgarh"},{"title":"Goa"},{"title":"Gujarat"},{"title":"Haryana"},{"title":"Himachal Pradesh"},
{"title":"Jammu & Kashmir"},{"title":"Jharkhand"},{"title":"Karnataka"},{"title":"Kerala"},{"title":"Madhya Pradesh"},
{"title":"Maharashtra"},{"title":"Manipur"},{"title":"Meghalaya"},{"title":"Mizoram"},{"title":"Nagaland"},
{"title":"Odisha"},{"title":"Punjab"},{"title":"Rajasthan"},{"title":"Sikkim"},{"title":"Tamil Nadu"},
{"title":"Telangana"},{"title":"Tripura"},{"title":"Uttarakhand"},{"title":"Uttar Pradesh"},{"title":"West Bengal"},
{"title":"Andaman and Nicobar Islands"},{"title":"Chandigarh"},{"title":"Delhi"}];

browsedfilename="Upload Resume";

  constructor(private captcha:CaptchaService) {
    
  }  

  submitform(){
    if(!this.captcha.check(this.captchadataanswer)){
        console.log("wrong captcha answer")
    }
  }

  getfile(filname:any){
    console.log(filname.target.value,"<<filname")

    if(filname.target.value==""){
      //Do nothing if user dosent choose any file;
    }else{
      this.browsedfilename = filname.target.value.replace("C:\\fakepath\\", "");
    }
  }

  addTechQual(){
    this.techqualinfo.push(this.techqualfield);
  }

  removetechQual(index){
    if(this.techqualinfo.length>0){
      this.techqualinfo.splice(index,1);
    }
  }

  addQual(){
    this.educationalinfo.push(this.educationalfield)
  }

  removeQual(index){
    if(this.educationalinfo.length>0){
      this.educationalinfo.splice(index,1);
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
