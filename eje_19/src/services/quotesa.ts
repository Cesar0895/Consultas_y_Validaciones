import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class QuoteServices{
    //private http:any;
    public dataa:any;
    //private _email:string;


    constructor(private http:Http){
        //this.http=http
    }

    getAlumnos(){
        this.http.get("http://localhost:8080/alumnos.json")
        .subscribe(
            res=>{
                console.log("Quote Service");
                this.dataa=res.json();
                console.log(this.dataa);
            },
            error=>{
                console.log(error);
            }
        );
    }
}