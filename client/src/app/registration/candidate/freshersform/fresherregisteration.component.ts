import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, NgForm, FormArray, FormBuilder } from '@angular/forms';
import { CaptchaService } from '../../../services/captcha.service';
import { dataService } from '../../../services/dataservice.service';

@Component({
  selector: 'fresherregisteration',
  templateUrl: './fresherregisteration.component.html',
  styleUrls: ['./fresherregisteration.component.css'],
  providers:[CaptchaService, dataService]
})

export class FresherregisterationComponent implements OnInit {
  
captchadata={val1:0,val2:0,method:''};
captchadataanswer=null;

fresherform:FormGroup;
address:FormArray;
education:FormArray;
subjects:FormArray;
techqual:FormArray;

States=[{"title":"Andhra Pradesh"},{"title":"Arunachal Pradesh"},{"title":"Assam"},{"title":"Bihar"},
{"title":"Chhattisgarh"},{"title":"Goa"},{"title":"Gujarat"},{"title":"Haryana"},{"title":"Himachal Pradesh"},
{"title":"Jammu & Kashmir"},{"title":"Jharkhand"},{"title":"Karnataka"},{"title":"Kerala"},{"title":"Madhya Pradesh"},
{"title":"Maharashtra"},{"title":"Manipur"},{"title":"Meghalaya"},{"title":"Mizoram"},{"title":"Nagaland"},
{"title":"Odisha"},{"title":"Punjab"},{"title":"Rajasthan"},{"title":"Sikkim"},{"title":"Tamil Nadu"},
{"title":"Telangana"},{"title":"Tripura"},{"title":"Uttarakhand"},{"title":"Uttar Pradesh"},{"title":"West Bengal"},
{"title":"Andaman and Nicobar Islands"},{"title":"Chandigarh"},{"title":"Delhi"},{"title":"Other"}];

/*
educationobj={class:'',univ:'',subjects:'',duration:'',marks:'',action:true}
candidateinfo=new candidateformInfo();
educationaldata=[]
*/

browsedfilename="Upload Resume";

  constructor(private form:FormBuilder, private _dataservice:dataService, private captcha:CaptchaService) {
    this.formsetup();
  }  

/*
  submitform(){
    if(!this.captcha.check(this.captchadataanswer)){
        console.log("wrong captcha answer")
    }
  }*/

  getfile(filname:any){
    console.log(filname.target.value,"<<filname")

    if(filname.target.value==""){
      //Do nothing if user dosent choose any file;
    }else{
      this.browsedfilename = filname.target.value.replace("C:\\fakepath\\", "");
    }
  }

  ngOnInit(){
    //this.captchadata=this.captcha.get();
  }

  formsetup(){
    this.fresherform = this.form.group({
        personelinfo:this.form.group({
          name:'',
          lname:'',
          email:'',
          pass:'',
          mobile:'',
          address:this.addressfield()
        }),
        education:this.getEducationaldata(),
        techqual:this.getTechQualdata()
    });
  }

  getTechQualdata():FormArray{
    this.techqual = this.form.array([
      this.form.group({title:'',edu:'',from:''	,to:'', institute:'' 	})
    ])

    return this.techqual;
  }

  addTechQual(){
    this.techqual.push(this.form.group({title:'',edu:'',from:''	,to:'', institute:''}));
  }

  removeTechQual(index){
      this.techqual.controls.splice(index,1)
  }

  getEducationaldata():FormArray{
     this.education = this.form.array([
       this.form.group({ title:"10th", marks:'', univ:'', from:'', to:'', subjects:this.getsubjectsdata()}),
       this.form.group({ title:"12th", marks:'', univ:'', from:'', to:'', subjects:this.getsubjectsdata()}),
     ])
     return this.education;
  }

  removeEducation(index){
    if(this.education.controls.length>2){
      this.education.controls.splice(index,1)
    }
  }

  addEducation(){
    this.education.push(this.form.group({ title:'', marks:'', univ:'', from:'', to:'', subjects:this.getsubjectsdata()}));
  }

  getsubjectsdata():FormArray{
    this.subjects=this.form.array([
      this.form.group({title:'',marks:''}),
      this.form.group({title:'',marks:''}),
      this.form.group({title:'',marks:''}),
      this.form.group({title:'',marks:''}),
      this.form.group({title:'',marks:''})
    ])
    return this.subjects
  }

  addSubjects(parentArr){
    var subjectArr=parentArr.controls.subjects;
    subjectArr.push(this.form.group({title:'',marks:''}))

  }

  removeSubjects(index){
    this.subjects.controls.slice(index,1)
  }
  
  addressfield():FormArray{
    this.address= this.form.array([
      this.form.group({ state:'', city:'', zip:'', address:''})
    ]);
    return this.address;
  }

  addAddress(){
    const fg=this.form.group({ state:'', city:'', zip:'', address:''});
    this.address.push(fg);
  }

  removeAddress(index){
    if(this.address.controls.length>1){
      this.address.controls.splice(index,1)
    }  
  }

  formsubmit(formData){
    console.log(formData);

    console.log(this.captcha.get(),"<<<captcha data")
    this._dataservice.postdata();
  }

}