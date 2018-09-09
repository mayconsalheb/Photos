import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Photo } from "./Photo";

const API = 'http://localhost:8080';

@Injectable({providedIn: 'root'})
export class PhotoService{


    constructor(private http: HttpClient){}

    listFromUser(userName){
        return this.http.get<Photo[]>(API+'/photos/'+userName);
    }
}