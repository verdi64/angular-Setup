/**
 * Created by gotzverdieck on 14.04.17.
 */

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'user',
    styles:[`
        .hide{
            display:none;
        }
    .img {
        margin: 5px;
        border-style: solid;
        border-color: #0000ff;
    }
    button,input {
        
        margin: 5px;
        box-sizing: border-box;
        width:90%;
    }    
    
    `],

    template:`
    <section> 
    <header>{{username}}, {{getGesamtName(Vorname,Nachname)}}</header>
        <div>  
            <img [src]= "imageUrl" [style.margin.px]="margin" [style.float]="float" alt="">
           <img [src]= "imageUrl" class="img" [class.hide]="anzeigen" alt="">
            <div>{{getDesc()}}</div>
        </div>
      <button [attr.disabled]="disabled" (click)="onClick($event)" >Select</button>
      <input type="text" (keydown)="onKeyDown($event)">  
    </section>
    `


})

export class UserComponent{
    @Input()
    username:string;
    @Output()
    choice:EventEmitter<string> = new EventEmitter<string> ();




    Vorname     :   string = 'Amelie';
    Nachname    :   string = 'Verdieck';
    imageUrl    :   string = 'https://placekitten.com/g/64/64';
    margin      :   number = 10;
    float       :   string = 'left';
    anzeigen    :   boolean= true;
    disabled    :  any=null;

    onClick(evt:Event): void{
        this.disabled = true;
        console.log('clicked',evt);
        this.choice.emit(this.username);
    }
    onKeyDown(evt:Event): void{
        console.log('onKeyDown',evt);
    }



    getDesc():string{
        return 'Lorem ipsum dolor sit amet, consetetur s' +
            'adipscing elitr, sed diam nonumy eirmod tempor invidunt ut ' +
            'labore et dolore magna aliquyam erat, sed diam voluptua. ' +
            'At vero eos et accusam et justo duo dolores et ea rebum. Stet ' +
            'clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ' +
            'dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ' +
            'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
            'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita ' +
            'kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

    }



    getGesamtName( Vorname:String,Nachname:String): string{

        return Vorname+' '+ Nachname;

    }


}



