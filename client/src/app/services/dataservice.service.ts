import { Injectable } from '@angular/core';
import { Http, JsonpModule, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class dataService {

    constructor(private _http:Http){

    }

    postdata(data:any){
        
        var json = JSON.stringify(data);

        console.log("POST DATA FUNCTION postdata>>>>>>",json)

        //var params = 'json='+json;
        var params = json;
        var headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('/api/register/freshercandidate',params,{headers:headers}).map(res=>res.json())
    }
}