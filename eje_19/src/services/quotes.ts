import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class QuoteService{
    //private http:any;
    public data:any;
    
    //private _email:string;


    constructor(private http:Http){
        //this.http=http
    }

    getFavoriteSports(){
        this.http.get("http://localhost:8080/user.json")
        .subscribe(
            res=>{
                console.log("Quote Service");
                this.data=res.json();
                console.log(this.data);
            },
            error=>{
                console.log(error);
            }
        );
    }


   /* getAlumnos(){
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
    }*/
}