import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    email = {
        Name: null,
        Email: null,
        Subject: null,
        Body: null
    }

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
    }

    sendEmail() {
        console.log(this.email);
        // let observable = this._httpService.sendEmail(this.email);
        // observable.subscribe(data => {
        //     console.log("Here");
        //     console.log(data);
        // });
    }

}
