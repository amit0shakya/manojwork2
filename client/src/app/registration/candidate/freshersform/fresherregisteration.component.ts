import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup,NgForm } from '@angular/forms';
import { candidateformInfo } from '../userform';
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

educationobj={class:'',univ:'',subjects:'',duration:'',marks:'',action:true}

educationobjdata=[
  {class:'10th',univ:'',subjects:'',duration:'',marks:'',action:false},
  {class:'12th',univ:'',subjects:'',duration:'',marks:'',action:false}
]

candidateinfo=new candidateformInfo();
educationaldata=[]

indianstates=[{"title":"Andhra Pradesh"},{"title":"Arunachal Pradesh"},{"title":"Assam"},{"title":"Bihar"},
{"title":"Chhattisgarh"},{"title":"Goa"},{"title":"Gujarat"},{"title":"Haryana"},{"title":"Himachal Pradesh"},
{"title":"Jammu & Kashmir"},{"title":"Jharkhand"},{"title":"Karnataka"},{"title":"Kerala"},{"title":"Madhya Pradesh"},
{"title":"Maharashtra"},{"title":"Manipur"},{"title":"Meghalaya"},{"title":"Mizoram"},{"title":"Nagaland"},
{"title":"Odisha"},{"title":"Punjab"},{"title":"Rajasthan"},{"title":"Sikkim"},{"title":"Tamil Nadu"},
{"title":"Telangana"},{"title":"Tripura"},{"title":"Uttarakhand"},{"title":"Uttar Pradesh"},{"title":"West Bengal"},
{"title":"Andaman and Nicobar Islands"},{"title":"Chandigarh"},{"title":"Delhi"}];

browsedfilename="Upload Resume";

  constructor(private captcha:CaptchaService) {}  

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
   // this.educationobjdata.push(this.educationobj);
    console.log("add tech qual");
  }

  removetechQual(index){
    /*
    if(this.techqualinfo.length>0){
      this.techqualinfo.splice(index,1);
    }*/
  }

  removeeducation(index){
      this.educationobjdata.splice(index,1)
  }

  removeEducationalQual(index){
    this.educationobjdata.splice(index,1)
  }

  addEducationalQual(){
    this.educationobjdata.push(this.educationobj)
    console.log("add qual")
  }

  removeQual(index){
    /*
    if(this.educationalinfo.length>0){
      this.educationalinfo.splice(index,1);
    }*/
  }

  submitdata(){
    
  }

  ngOnInit() {
    this.captchadata=this.captcha.get();
    //console.log(this.captcha.check(10),"<<<check captcha");
    //this.personalinfo=this.userData.personalinfo;
    //console.log(this.userData,"<<<user data")
    this.dataschemasetup();
  }

  dataschemasetup(){
    //this.educationaldata.push(this.educationdataschema)
    //{vala:{abc:""},valb:{}}

    console.log(this.candidateinfo.info)
    this.candidateinfo.info.educationalinfo.push(this.educationobjdata);

  }
}
