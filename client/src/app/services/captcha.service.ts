import { Injectable } from '@angular/core';

@Injectable()

export class CaptchaService {

vals={val1:1,val2:2,method:'+'}
method=['+','x','+','x']
ans=0;

  constructor() {
    this.generatecaptcha();
    this.calculate();  
   }

  generatecaptcha(){
    this.vals.val1=Math.round(Math.random()*9);
    this.vals.val2=Math.round(Math.random()*9);
    this.vals.method=this.method[Math.round(Math.random()*3)];
  }

  calculate(){
    switch(this.vals.method){
      case '+':   this.ans=this.vals.val1+this.vals.val2;
                  break;

      case 'x':   this.ans=this.vals.val1+this.vals.val2;
                  break;                  
    }
  }

  get(){
    return this.vals;
  }

  check(params){
    var bool=false;
    if(params==this.ans){
      bool=true;
    }
    return bool;
  }

  reset(){
    this.generatecaptcha();
    this.calculate();
  }

}