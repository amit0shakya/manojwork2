import { Injectable } from '@angular/core';
import { Http, JsonpModule, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class dataService {

    constructor(private _http:Http){

    }

    postdata(){

        console.log('post data method in dataservice');

        
        var json = JSON.stringify({user:'amit',lname:'shakya'});
        var params = 'json='+json;
        var headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('api/employerzone/register',params,{headers:headers}).map(res=>res.json())
    }
}