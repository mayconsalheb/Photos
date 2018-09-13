import { Component, OnInit } from "@angular/core";
import { PhotoService } from "../photo/Photo.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector    : "ap-photo-list",
    templateUrl : "./photo-list.component.html" 
})
export class PhotoListComponent implements OnInit{

    photos: Object[] = [];
    filter: string = '';
    
    constructor(
        private activatedRoute: ActivatedRoute
    ){}
    
    ngOnInit(): void {
        this.photos = this.activatedRoute.snapshot.data.photos; 
    }
}