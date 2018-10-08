import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }

    sendEmail(email) {
        console.log(email);
        return this._http.post("/email", email);
    }
}
