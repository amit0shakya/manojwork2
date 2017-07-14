import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, NgForm, FormArray, FormBuilder } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CaptchaService } from '../../../services/captcha.service';
import { dataService } from '../../../services/dataservice.service';
import { HttpModule, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'fresherregisteration',
  templateUrl: './fresherregisteration.component.html',
  styleUrls: ['./fresherregisteration.component.css'],
  providers:[CaptchaService, dataService]
})

export class FresherregisterationComponent implements OnInit {

browsedfilename="Upload Resume";

addressArr=[{state:"",city:"",zip:"",address:""}]

educationalArr=[
  {class:"10",school:"",univ:"",marks:"",dateF:"",dateT:""},
  {class:"12",school:"",univ:"",marks:"",dateF:"",dateT:""}]

qualificationArr=[{qual:"",diploma:"",univ:"",dateF:"",dateT:""}]  

States=[{"title":"Andhra Pradesh"},{"title":"Arunachal Pradesh"},{"title":"Assam"},{"title":"Bihar"},
{"title":"Chhattisgarh"},{"title":"Goa"},{"title":"Gujarat"},{"title":"Haryana"},{"title":"Himachal Pradesh"},
{"title":"Jammu & Kashmir"},{"title":"Jharkhand"},{"title":"Karnataka"},{"title":"Kerala"},{"title":"Madhya Pradesh"},
{"title":"Maharashtra"},{"title":"Manipur"},{"title":"Meghalaya"},{"title":"Mizoram"},{"title":"Nagaland"},
{"title":"Odisha"},{"title":"Punjab"},{"title":"Rajasthan"},{"title":"Sikkim"},{"title":"Tamil Nadu"},
{"title":"Telangana"},{"title":"Tripura"},{"title":"Uttarakhand"},{"title":"Uttar Pradesh"},{"title":"West Bengal"},
{"title":"Andaman and Nicobar Islands"},{"title":"Chandigarh"},{"title":"Delhi"},{"title":"Other"}];

constructor (private http:Http, private webservice:dataService) {
  
}

addaddress(){
  this.addressArr.push({state:"",city:"",zip:"",address:""})
}

removeaddress(i){
  this.addressArr.splice(i,1)
}

addeducation(){
  this.educationalArr.push({class:"",school:"",univ:"",marks:"",dateF:"",dateT:""})
}

removeeducation(i){
  this.educationalArr.splice(i,1)
}

addtecheducation(){
  this.qualificationArr.push({qual:"",diploma:"",univ:"",dateF:"",dateT:""})
}

removetecheducation(i){
  this.qualificationArr.splice(i,1)
}

getfile(filname:any){
console.log(filname.target.value,"<<filname")

if(filname.target.value==""){
 //Do nothing if user dosent choose any file;
 }else{
    this.browsedfilename = filname.target.value.replace("C:\\fakepath\\", "");
    }
}

 submitform(data:JSON, isValid: boolean) {
        // check if model is valid
        // if valid, call API to save customer
        var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

        var options = new RequestOptions({ headers: headers });  
        
        /*
        this.http.post(this.heroesUrl, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
        */
        console.log("SUBMIT FORM postdata>>>>>>",data)

        this.webservice.postdata(data)
        .subscribe(
          error => console.log(error),
          () => console.log("success")
        )

        /*
        this.http.post('/regcandidate',body, options)
                .map((res: Response) => console.log(res.json()))
                .subscribe(
                  data => console.log(JSON.stringify(data)),
                  err => console.log(err),
                  () => console.log("success")
                  );
        */

  }

  extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  ngOnInit(){
    //this.captchadata=this.captcha.get();
  }

}