import {Component} from "@angular/core";

@Component({
    selector: 'app',
    templateUrl:'./app/app.component.html',
    styleUrls: ['./app/app.component.css']


})

export class AppComponent {
    username:String = 'String aus AppComponent:Götz Verdieck';

    selected(evt:Event){
        console.log('user selected',evt);
    }

    constructor(){

        console.log("App component");

    }




}

